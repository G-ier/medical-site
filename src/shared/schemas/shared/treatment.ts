import { defineType } from 'sanity'

export const treatmentSchema = defineType({
  name: 'treatment',
  title: 'Treatment',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Treatment Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Treatment name is required'),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Slug is required for SEO'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().error('Description is required'),
    },
    {
      name: 'image',
      title: 'Treatment Image',
      type: 'customImage',
      validation: (Rule) => Rule.required().error('Image is required'),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Medical Weight Loss', value: 'medical-weight-loss' },
          { title: 'Skincare', value: 'skincare' },
          { title: 'Wellness', value: 'wellness' },
          { title: 'Anti-Aging', value: 'anti-aging' },
        ],
      },
      validation: (Rule) => Rule.required().error('Category is required'),
    },
    {
      name: 'badge',
      title: 'Badge',
      type: 'badge',
      description: 'Optional badge for highlighting special treatments',
    },
    {
      name: 'featured',
      title: 'Featured Treatment',
      type: 'boolean',
      description: 'Show this treatment in featured sections',
      initialValue: false,
    },
    {
      name: 'price',
      title: 'Starting Price',
      type: 'number',
      description: 'Starting price in USD (optional)',
    },
    {
      name: 'ctaText',
      title: 'Call-to-Action Text',
      type: 'string',
      initialValue: 'Get Started',
    },
    {
      name: 'ctaUrl',
      title: 'Call-to-Action URL',
      type: 'string',
      description: 'URL for the CTA button',
    },
    {
      name: 'detailedDescription',
      title: 'Detailed Description',
      type: 'richText',
      description: 'Full description for treatment detail pages',
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of treatment benefits',
    },
    {
      name: 'howItWorks',
      title: 'How It Works',
      type: 'richText',
      description: 'Explanation of how the treatment works',
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Title for search engines (optional)',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      description: 'Description for search engines (optional)',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image.asset',
    },
  },
}) 