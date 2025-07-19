import { defineType } from 'sanity'

export const contactHeroSectionSchema = defineType({
  name: 'contactHeroSection',
  title: 'Contact Hero Section',
  type: 'object',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main title for the contact hero section',
      validation: (Rule) => Rule.required().error('Hero title is required'),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Supporting text below the main title',
      validation: (Rule) => Rule.required().error('Subtitle is required'),
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'customImage',
      description: 'Background image for the contact hero section',
      validation: (Rule) => Rule.required().error('Background image is required'),
    },
    {
      name: 'primaryCTA',
      title: 'Primary Call to Action',
      type: 'cta',
      description: 'Primary action button (e.g., Send Message)',
      validation: (Rule) => Rule.required().error('Primary CTA is required'),
    },
    {
      name: 'secondaryCTA',
      title: 'Secondary Call to Action',
      type: 'cta',
      description: 'Secondary action button (e.g., Call Us)',
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          description: 'Display phone number (e.g., (302) 204-2197)',
          validation: (Rule) => Rule.required().error('Phone number is required'),
        },
        {
          name: 'email',
          title: 'Email Address',
          type: 'string',
          description: 'Contact email address',
          validation: (Rule) => Rule.required().email().error('Valid email address is required'),
        },
        {
          name: 'office',
          title: 'Office Information',
          type: 'object',
          fields: [
            {
              name: 'address',
              title: 'Street Address',
              type: 'string',
              validation: (Rule) => Rule.required().error('Street address is required'),
            },
            {
              name: 'city',
              title: 'City and State',
              type: 'string',
              validation: (Rule) => Rule.required().error('City and state are required'),
            },
          ],
          validation: (Rule) => Rule.required().error('Office information is required'),
        },
      ],
      validation: (Rule) => Rule.required().error('Contact information is required'),
    },
  ],
  preview: {
    select: {
      title: 'heroTitle',
      subtitle: 'subtitle',
      media: 'backgroundImage.asset',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title || 'Contact Hero Section',
        subtitle: subtitle || 'No subtitle set',
      }
    },
  },
}) 