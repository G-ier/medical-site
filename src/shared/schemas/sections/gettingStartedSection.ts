import { defineType } from 'sanity'

export const gettingStartedSectionSchema = defineType({
  name: 'gettingStartedSection',
  title: 'Getting Started Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Main title of the getting started section',
      validation: (Rule) => Rule.required().error('Section title is required'),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Supporting text below the title',
      validation: (Rule) => Rule.required().error('Subtitle is required'),
    },
    {
      name: 'image',
      title: 'Section Image',
      type: 'customImage',
      description: 'Image for the getting started section',
      validation: (Rule) => Rule.required().error('Section image is required'),
    },
    {
      name: 'steps',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'step',
          title: 'Step',
          fields: [
            {
              name: 'title',
              title: 'Step Title',
              type: 'string',
              validation: (Rule) => Rule.required().error('Step title is required'),
            },
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('At least one step is required'),
    },
    {
      name: 'primaryCTA',
      title: 'Primary Call to Action',
      type: 'cta',
      description: 'Main action button',
      validation: (Rule) => Rule.required().error('Primary CTA is required'),
    },
    {
      name: 'secondaryCTA',
      title: 'Secondary Call to Action',
      type: 'cta',
      description: 'Secondary action button (optional)',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image.asset',
    },
  },
}) 