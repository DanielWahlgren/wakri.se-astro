import { defineField, defineType } from 'sanity'

export const contact = defineType({
  name: 'contact',
  title: 'contact',
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
      name: 'contactText',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'memberBadge',
      type: 'string',
    }),
    defineField({
      name: 'memberTitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'memberText',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'membershipBadge',
      type: 'string',
    }),
    defineField({
      name: 'membershipTitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'membershipText',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'perkBadge',
      type: 'string',
    }),
    defineField({
      name: 'perkTitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'perkText',
      type: 'array',
      of: [{
        type: 'block', lists: [
          { title: 'Bullet', value: 'bullet' },
          { title: 'Numbered', value: 'number' }
        ] // yes please, both bullet and numbered
      }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactsTitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactsText',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contacts',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', type: 'string', title: 'Namn' },
          { name: 'position', type: 'string', title: 'Position' },
          { name: 'phone', type: 'array', title: 'Telefonnummer', of: [{ type: 'string' }] }
        ]
      }]
    }),
  ],
})