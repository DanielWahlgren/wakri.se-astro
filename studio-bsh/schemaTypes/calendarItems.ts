import { defineField, defineType, MetaInfo } from 'sanity'

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
    defineField({
      name: 'calendarType',
      type: 'string',
      options: {
        list: [
          { title: 'Aktivitet/Marknad', value: 'calendar-heart' },
          { title: 'Kurs', value: 'graduation-cap' },
          { title: 'Möte', value: 'western' },
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    }),
    defineField({
      title: 'OSA senast',
      name: 'calendarRSVP',
      type: 'date',
    }),
    defineField({
      name: 'calendarStartDate',
      type: 'date',
    }),
    defineField({
      name: 'calendarEndDate',
      type: 'date',
    }),
    defineField({
      name: 'calendarPrice',
      type: 'string',
    }),
    defineField({
      name: 'calendarOrder',
      type: 'number',
      description: 'Används om två aktiviteter startar samma datum och man vill tvinga dem till en speciell ordning.',
      validation: (rule) => rule.integer().positive(),
    }),
  ],
})