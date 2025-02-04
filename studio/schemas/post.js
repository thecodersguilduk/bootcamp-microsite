export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Bootcamper Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'course',
      title: 'Course Studied',
      type: 'array',
      of: [{type: 'reference', to: {type: 'course'}}],
    },
    {
      name: 'linkedIn',
      title: 'LinkedIn profile link',
      type: 'string',
      description: 'The Whole Link'
    },
    {
      name: 'twitter',
      title: 'Twitter profile link',
      type: 'string',
      description: 'The Whole Link'
    },
    {
      name: 'github',
      title: 'Github profile link',
      type: 'string',
      description: 'The Whole Link'
    },
    {
      name: 'codepen',
      title: 'Codepen profile link',
      type: 'string',
      description: 'The Whole Link'
    },
    {
      name: 'website',
      title: 'Website portfolio link',
      type: 'string',
      description: 'The Whole Link'
    },
    {
      name: 'video',
      title: 'Video link - for Youtube this should be the embed src link',
      type: 'string',
      description: 'The src section of the embed link'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      course: 'course.title',
      media: 'mainImage',
    },
    prepare(selection) {
      const {course} = selection
      return Object.assign({}, selection, {
        subtitle: course && `by ${course}`,
      })
    },
  },
}
