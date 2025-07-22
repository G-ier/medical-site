import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'weightLossIntroSection',
  title: 'Weight Loss Intro Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100)
    }),
    defineField({
      name: 'subtitle', 
      title: 'Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(200)
    }),
    defineField({
      name: 'medications',
      title: 'Medications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Medication Name',
              type: 'string',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'price',
              title: 'Price Text',
              type: 'string',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'cta',
              title: 'Call to Action',
              type: 'cta'
            }),
            defineField({
              name: 'image',
              title: 'Medication Image',
              type: 'image',
              description: 'Image shown on the right side of the card'
            })
          ]
        }
      ],
      validation: (Rule) => Rule.required().min(1).max(4)
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle'
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Weight Loss Intro Section',
        subtitle: subtitle
      }
    }
  }
})