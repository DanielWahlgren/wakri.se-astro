import {defineField, defineType} from 'sanity'

export const landingPage = defineType({
  name: 'landingPage',
  title: 'landingPage',
  type: 'document',
  fields: [
    defineField({
      name: 'heroBadge',
      type: 'string',
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroText',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
defineField({
  name: 'heroImg',
  type: 'image',
  // 👇 Enables crop and hotspot tools
  options: {
    hotspot: true
  },
  // 👇 Optionally append additional fields to the image object
  fields: [
    defineField({
      name: 'caption',
      type: 'string',
    }),
    defineField({
      name: 'attribution',
      type: 'string',
    })
  ]
})  ],
})