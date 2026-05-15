import { defineField, defineType, MetaInfo } from 'sanity'

export const contacts = defineType({
  name: 'contacts',
  title: 'Kontakter',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Namn',
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title:'Telefonnummer',
      name: 'phone',
      type: 'array',
      of: [{ type: 'string' }]
    }),
  ],
})