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
