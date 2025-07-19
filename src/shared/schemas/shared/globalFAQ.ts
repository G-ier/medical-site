import { defineType } from 'sanity'

export const globalFAQSchema = defineType({
  name: 'globalFAQ',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'FAQ Section Title',
      type: 'string',
      description: 'Main title of the FAQ section',
      validation: (Rule) => Rule.required().error('FAQ title is required'),
      initialValue: 'Frequently Asked Questions',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Supporting text below the title',
      initialValue: 'Still have questions?',
    },
    {
      name: 'subtitleLinkText',
      title: 'Subtitle Link Text',
      type: 'string',
      description: 'Text for the link in subtitle',
      initialValue: 'Send us a message.',
    },
    {
      name: 'subtitleLinkUrl',
      title: 'Subtitle Link URL',
      type: 'string',
      description: 'URL for the subtitle link',
      initialValue: '/contact',
    },
    {
      name: 'faqs',
      title: 'FAQ Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          title: 'FAQ Item',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required().error('Question is required'),
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
              validation: (Rule) => Rule.required().error('Answer is required'),
            },
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'answer',
            },
            prepare(selection) {
              const { title, subtitle } = selection
              return {
                title: title,
                subtitle: subtitle?.length > 60 ? `${subtitle.substring(0, 60)}...` : subtitle,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('At least one FAQ is required'),
    },
    {
      name: 'contactTitle',
      title: 'Contact Section Title',
      type: 'string',
      description: 'Title for the contact section at the bottom',
      initialValue: 'Still have questions?',
    },
    {
      name: 'contactDescription',
      title: 'Contact Description',
      type: 'string',
      description: 'Description for the contact section',
      initialValue: 'We would love to talk!',
    },
    {
      name: 'contactButtonText',
      title: 'Contact Button Text',
      type: 'string',
      description: 'Text for the contact button',
      initialValue: 'Contact',
    },
    {
      name: 'contactButtonUrl',
      title: 'Contact Button URL',
      type: 'string',
      description: 'URL for the contact button',
      initialValue: '/contact',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'faqs.0.question',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title || 'Global FAQ',
        subtitle: subtitle ? `First FAQ: ${subtitle}` : 'No FAQs yet',
      }
    },
  },
}) 