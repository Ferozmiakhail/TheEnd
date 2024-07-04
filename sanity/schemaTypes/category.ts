// import {defineField, defineType} from 'sanity'

// export default defineType({
//   name: 'category',
//   title: 'Category',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//     }),
//     defineField({
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//     }),
//   ],
// })

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    { 
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    { 
      name: 'type',
      title: 'Type',
      type: 'string',
    },
    { 
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
  ]
}
