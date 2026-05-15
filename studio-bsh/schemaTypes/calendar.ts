import {defineField, defineType} from 'sanity'

export const calendar = defineType({
  name: 'calendar',
  title: 'Post',
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
      name: 'calendarText',
      type: 'array',
      of: [{ type: 'block' }]
    }),
  ],
})