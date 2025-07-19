import { defineType } from 'sanity'

export const whyChooseSectionSchema = defineType({
  name: 'whyChooseSection',
  title: 'Why Choose Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'richText',
      description: 'Main title of the why choose section',
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
      name: 'valuePropositions',
      title: 'Value Propositions',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'valueProposition',
          title: 'Value Proposition',
          fields: [
            {
              name: 'title',
              title: 'Proposition Title',
              type: 'string',
              validation: (Rule) => Rule.required().error('Proposition title is required'),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.required().error('Description is required'),
            },
            {
              name: 'image',
              title: 'Proposition Image',
              type: 'customImage',
              validation: (Rule) => Rule.required().error('Proposition image is required'),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              media: 'image.asset',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('At least one value proposition is required'),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
}) 