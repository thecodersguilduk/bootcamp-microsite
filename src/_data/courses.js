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

const query = `*[_type == "course" && !(_id in path("drafts.**"))] {
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
    return data
}
