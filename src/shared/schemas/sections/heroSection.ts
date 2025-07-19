import { defineType } from 'sanity'

export const heroSectionSchema = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'richText',
      description: 'Main headline of the hero section',
      validation: (Rule) => Rule.required().error('Hero title is required'),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Supporting text below the main headline',
      validation: (Rule) => Rule.required().error('Subtitle is required'),
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'customImage',
      description: 'Large background image for the hero section',
      validation: (Rule) => Rule.required().error('Background image is required'),
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
      title: 'heroTitle',
      subtitle: 'subtitle',
      media: 'backgroundImage.asset',
    },
  },
}) 