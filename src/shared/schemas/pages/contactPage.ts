import { defineType } from 'sanity'

export const contactPageSchema = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Internal title for this contact page document',
      validation: (Rule) => Rule.required().error('Page title is required'),
      initialValue: 'Contact Page Content',
    },

    {
      name: 'contactHeroSection',
      title: 'Contact Hero Section',
      type: 'contactHeroSection',
      description: 'Main hero section with contact information and background',
      validation: (Rule) => Rule.required().error('Contact hero section is required'),
    },

    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Title tag for search engines (50-60 characters)',
          validation: (Rule) => Rule.max(60).warning('Keep meta title under 60 characters for best SEO'),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          description: 'Description for search engines (150-160 characters)',
          validation: (Rule) => Rule.max(160).warning('Keep meta description under 160 characters for best SEO'),
        },
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
      heroTitle: 'contactHeroSection.heroTitle',
    },
    prepare(selection) {
      const { title, heroTitle } = selection
      return {
        title: title || 'Contact Page',
        subtitle: heroTitle ? 'Content configured' : 'No content yet',
      }
    },
  },
}) 