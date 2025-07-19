import { defineType } from 'sanity'

export const treatmentsSectionSchema = defineType({
  name: 'treatmentsSection',
  title: 'Treatments Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'richText',
      description: 'Main title of the treatments section (optional)',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Section subtitle (optional)',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Section description text (optional)',
    },
    {
      name: 'treatments',
      title: 'Treatment Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'treatmentCard',
          title: 'Treatment Card',
          fields: [
            {
              name: 'title',
              title: 'Treatment Title',
              type: 'string',
              validation: (Rule) => Rule.required().error('Treatment title is required'),
            },
            {
              name: 'description',
              title: 'Treatment Description',
              type: 'text',
              validation: (Rule) => Rule.required().error('Treatment description is required'),
            },
            {
              name: 'image',
              title: 'Treatment Image',
              type: 'customImage',
              validation: (Rule) => Rule.required().error('Treatment image is required'),
            },
            {
              name: 'category',
              title: 'Category',
              type: 'string',
              validation: (Rule) => Rule.required().error('Category is required'),
            },
            {
              name: 'ctaText',
              title: 'CTA Text',
              type: 'string',
              validation: (Rule) => Rule.required().error('CTA text is required'),
            },
            {
              name: 'ctaUrl',
              title: 'CTA URL',
              type: 'string',
              validation: (Rule) => Rule.required().error('CTA URL is required'),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'category',
              media: 'image.asset',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('At least one treatment is required'),
    },
    {
      name: 'viewAllText',
      title: 'View All Button Text',
      type: 'string',
      description: 'Text for the "View All" button (optional)',
    },
    {
      name: 'viewAllUrl',
      title: 'View All Button URL',
      type: 'string',
      description: 'URL for the "View All" button (optional)',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
}) 