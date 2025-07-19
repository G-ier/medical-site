import { defineType } from 'sanity'

export const treatmentOptionsSectionSchema = defineType({
  name: 'treatmentOptionsSection',
  title: 'Treatment Options Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'richText',
      description: 'Main title of the treatment options section',
      validation: (Rule) => Rule.required().error('Section title is required'),
    },
    {
      name: 'medications',
      title: 'Medication Options',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'medicationOption',
          title: 'Medication Option',
          fields: [
            {
              name: 'image',
              title: 'Medication Image',
              type: 'customImage',
              validation: (Rule) => Rule.required().error('Medication image is required'),
            },
            {
              name: 'title',
              title: 'Medication Title',
              type: 'string',
              validation: (Rule) => Rule.required().error('Medication title is required'),
            },
            {
              name: 'subtitle',
              title: 'Medication Subtitle',
              type: 'string',
              validation: (Rule) => Rule.required().error('Medication subtitle is required'),
            },
            {
              name: 'price',
              title: 'Price Text',
              type: 'string',
              validation: (Rule) => Rule.required().error('Price text is required'),
            },
            {
              name: 'planDuration',
              title: 'Plan Duration',
              type: 'string',
              validation: (Rule) => Rule.required().error('Plan duration is required'),
            },
            {
              name: 'primaryCTA',
              title: 'Primary Call-to-Action',
              type: 'cta',
              validation: (Rule) => Rule.required().error('Primary CTA is required'),
            },
            {
              name: 'secondaryCTA',
              title: 'Secondary Call-to-Action',
              type: 'cta',
              validation: (Rule) => Rule.required().error('Secondary CTA is required'),
            },
            {
              name: 'safetyInfo',
              title: 'Safety Information Link',
              type: 'cta',
              description: 'Link to safety information page',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'price',
              media: 'image.asset',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(4).error('1-4 medication options are required'),
    },
  ],
  preview: {
    select: {
      title: 'title',
      medications: 'medications',
    },
    prepare(selection) {
      const { medications } = selection
      return {
        title: 'Treatment Options Section',
        subtitle: `${medications?.length || 0} medication options`,
      }
    },
  },
}) 