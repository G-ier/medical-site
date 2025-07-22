import { defineType } from 'sanity'

export const homepageSchema = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Internal title for this homepage document',
      validation: (Rule) => Rule.required().error('Page title is required'),
      initialValue: 'Homepage Content',
    },

    {
      name: 'weightLossIntroSection',
      title: 'Weight Loss Intro Section',
      type: 'weightLossIntroSection',
      description: 'Weight loss introduction section before the hero',
    },
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'heroSection',
      description: 'Main hero section at the top of the page',
      validation: (Rule) => Rule.required().error('Hero section is required'),
    },
    {
      name: 'treatmentsSection',
      title: 'Treatments Section',
      type: 'treatmentsSection',
      description: 'Section showcasing available treatments',
      validation: (Rule) => Rule.required().error('Treatments section is required'),
    },
    {
      name: 'categoriesSection',
      title: 'Categories Section',
      type: 'categoriesSection',
      description: 'Section showing treatment categories',
      validation: (Rule) => Rule.required().error('Categories section is required'),
    },
    {
      name: 'statisticsSection',
      title: 'Statistics Section',
      type: 'statisticsSection',
      description: 'Section with weight loss statistics and calculator',
      validation: (Rule) => Rule.required().error('Statistics section is required'),
    },
    {
      name: 'gettingStartedSection',
      title: 'Getting Started Section',
      type: 'gettingStartedSection',
      description: 'Section explaining the process steps',
      validation: (Rule) => Rule.required().error('Getting started section is required'),
    },
    {
      name: 'whyChooseSection',
      title: 'Why Choose Section',
      type: 'whyChooseSection',
      description: 'Section explaining why choose Rejuve',
      validation: (Rule) => Rule.required().error('Why choose section is required'),
    },
    {
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'testimonialsSection',
      description: 'Section with customer testimonials',
      validation: (Rule) => Rule.required().error('Testimonials section is required'),
    },

    {
      name: 'ctaHeroSection',
      title: 'CTA Hero Section',
      type: 'heroSection',
      description: 'Final call-to-action hero section at the bottom',
      validation: (Rule) => Rule.required().error('CTA hero section is required'),
    },

    // SEO and Meta fields (content only)
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      description: 'Search engine optimization settings',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Title for search engines (recommended: 50-60 characters)',
          validation: (Rule) => Rule.max(60).warning('Meta title should be under 60 characters'),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          description: 'Description for search engines (recommended: 150-160 characters)',
          rows: 3,
          validation: (Rule) => Rule.max(160).warning('Meta description should be under 160 characters'),
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
      heroTitle: 'heroSection.heroTitle',
      seoTitle: 'seo.metaTitle',
    },
    prepare(selection) {
      const { title, heroTitle, seoTitle } = selection
      return {
        title: title,
        subtitle: seoTitle || (heroTitle ? 'Homepage configured' : 'Setup required'),
      }
    },
  },
}) 