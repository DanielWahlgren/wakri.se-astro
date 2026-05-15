import {defineField, defineType} from 'sanity'

export const calendarItems = defineType({
  name: 'calendarItems',
  title: 'Kalenderhändelse',
  type: 'document',
  fields: [
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