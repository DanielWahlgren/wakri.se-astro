import { defineField, defineType } from 'sanity'

export const error404 = defineType({
  name: 'error404',
  title: 'error404',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Länkar',
      name: 'buttons',
      type: 'object',
      fieldsets: [
        {
          name: 'mainButton',
          title: 'Huvudlänk (Tillbaka)',
          options: {
            collapsible: false, // Makes the whole fieldset collapsible
            collapsed: false, // Defines if the fieldset should be collapsed by default or not
            columns: 2, // Defines a grid for the fields and how many columns it should have
            //modal: { type: 'popover' } //Makes the modal type a popover          },
          }
        },
        {
          name: 'secondaryButton',
          title: 'Sekundär länk',
          options: {
            collapsible: false, // Makes the whole fieldset collapsible
            collapsed: false, // Defines if the fieldset should be collapsed by default or not
            columns: 2, // Defines a grid for the fields and how many columns it should have
            //modal: { type: 'popover' } //Makes the modal type a popover          },
          }
        }
      ],
      fields: [
        {
          title: 'Text',
          name: 'mainText',
          type: 'string',
          validation: (rule) => rule.required(),
          fieldset: 'mainButton'
        },
        {
          title: 'URL',
          name: 'mainUrl',
          type: 'url',
          validation: (rule) => rule.required().uri({
            allowRelative: true,
            relativeOnly: true,
          }),
          fieldset: 'mainButton'
        },
        {
          title: 'Text',
          name: 'secondaryText',
          type: 'string',
          validation: (rule) => rule.required(),
          fieldset: 'secondaryButton'
        },
        {
          title: 'URL',
          name: 'secondaryUrl',
          type: 'url',
          validation: (rule) => rule.required().uri({
            allowRelative: true,
            relativeOnly: true,
          }),
          fieldset: 'secondaryButton'
        },
      ]
    }),
  ],
})