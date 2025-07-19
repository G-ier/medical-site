import { defineType } from 'sanity'

export const ctaSchema = defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Button Text',
      type: 'string',
      validation: (Rule) => Rule.required().error('Button text is required'),
    },
    {
      name: 'href',
      title: 'Link URL',
      type: 'string',
      description: 'The URL or path where the button should link to',
      validation: (Rule) => Rule.required().error('Link URL is required'),
    },
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'href',
    },
  },
}) 