const blocksToHtml = require('@sanity/block-content-to-html')
const h = blocksToHtml.h
require('dotenv').config();
const imageUrlBuilder = require('@sanity/image-url');
const sanityClient = require('@sanity/client');
const client = sanityClient({
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATASET,
    apiVersion: '2022-11-15',
    token: '',
    useCdn: true
})

const query = `*[_type == "post" && !(_id in path("drafts.**"))] {
    "courseName": course[]->{title},
    ...
} | order(publishedAt desc)`

module.exports = async function() {
    //const client = sanityClient(config)
    const data = await client.fetch(query)

    // Modifies the data to fit our needs
    const preppedData = data.map(prepPost)

    // returns this to the 11ty data cascade
    return preppedData
}

function prepPost(data){
    data.body = blocksToHtml({
        blocks: data.body,
        serializers: serializers
      });
    data.mainImage = urlFor(data.mainImage).width(650).url();
    data.courseName = data.courseName[0].title;
    console.log(data);
    return data
}

function urlFor(source) {
    const imageBuilder = imageUrlBuilder(client);
    return imageBuilder.image(source);
}

const serializers = {
     code: node => (
    h('pre', { className: node.node.language },
      h('code', node.node.code)
    )
  )
}