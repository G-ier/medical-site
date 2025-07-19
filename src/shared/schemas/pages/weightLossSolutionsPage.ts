import { defineType } from 'sanity'

export const weightLossSolutionsPageSchema = defineType({
  name: 'weightLossSolutionsPage',
  title: 'Weight Loss Solutions Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Internal title for this weight loss solutions page document',
      validation: (Rule) => Rule.required().error('Page title is required'),
      initialValue: 'Weight Loss Solutions Page Content',
    },

    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'heroTitle',
          title: 'Hero Title',
          type: 'richText',
          description: 'Main hero title with potential line breaks',
          validation: (Rule) => Rule.required().error('Hero title is required'),
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          validation: (Rule) => Rule.required().error('Subtitle is required'),
        },
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'customImage',
          validation: (Rule) => Rule.required().error('Background image is required'),
        },
        {
          name: 'primaryCTA',
          title: 'Primary Call-to-Action',
          type: 'cta',
          validation: (Rule) => Rule.required().error('Primary CTA is required'),
        },
        {
          name: 'trustFeatures',
          title: 'Trust Features',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'trustFeature',
              title: 'Trust Feature',
              fields: [
                {
                  name: 'iconType',
                  title: 'Icon Type',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Science', value: 'science' },
                      { title: 'Pill', value: 'pill' },
                      { title: 'Shield Check', value: 'shieldCheck' },
                    ],
                  },
                  validation: (Rule) => Rule.required().error('Icon type is required'),
                },
                {
                  name: 'text',
                  title: 'Feature Text',
                  type: 'string',
                  validation: (Rule) => Rule.required().error('Feature text is required'),
                },
              ],
              preview: {
                select: {
                  title: 'text',
                  subtitle: 'iconType',
                },
              },
            },
          ],
          validation: (Rule) => Rule.required().min(1).max(5).error('1-5 trust features are required'),
        },
      ],
      validation: (Rule) => Rule.required().error('Hero section is required'),
    },

    {
      name: 'treatmentBenefitsSection',
      title: 'Treatment Benefits Section',
      type: 'treatmentBenefitsSection',
      description: 'Section showing key treatment benefits',
      validation: (Rule) => Rule.required().error('Treatment benefits section is required'),
    },

    {
      name: 'treatmentsSection',
      title: 'Treatments Section',
      type: 'treatmentsSection',
      description: 'Section showcasing treatment options with carousel',
      validation: (Rule) => Rule.required().error('Treatments section is required'),
    },

    {
      name: 'treatmentOptionsSection',
      title: 'Treatment Options Section',
      type: 'treatmentOptionsSection',
      description: 'Section showcasing medication options',
      validation: (Rule) => Rule.required().error('Treatment options section is required'),
    },

    {
      name: 'statisticsSection',
      title: 'Statistics Section',
      type: 'statisticsSection',
      description: 'Section with weight loss statistics and calculator',
      validation: (Rule) => Rule.required().error('Statistics section is required'),
    },

    {
      name: 'weightLossOverviewSection',
      title: 'Weight Loss Overview Section',
      type: 'weightLossOverviewSection',
      description: 'Complex section with statistics, health gains, and goals',
      validation: (Rule) => Rule.required().error('Weight loss overview section is required'),
    },

    {
      name: 'labTestedSection',
      title: 'Lab Tested Section',
      type: 'labTestedSection',
      description: 'Section showing lab testing results and product features',
      validation: (Rule) => Rule.required().error('Lab tested section is required'),
    },

    {
      name: 'gettingStartedSection',
      title: 'Getting Started Section',
      type: 'gettingStartedSection',
      description: 'Section explaining the process steps',
      validation: (Rule) => Rule.required().error('Getting started section is required'),
    },

    {
      name: 'ctaHeroSection',
      title: 'CTA Hero Section',
      type: 'heroSection',
      description: 'Final call-to-action hero section',
      validation: (Rule) => Rule.required().error('CTA hero section is required'),
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
      heroTitle: 'heroSection.heroTitle',
    },
    prepare(selection) {
      const { title, heroTitle } = selection
      return {
        title: title || 'Weight Loss Solutions Page',
        subtitle: heroTitle ? 'Content configured' : 'No content yet',
      }
    },
  },
}) 