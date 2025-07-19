import { defineType } from 'sanity'

export const faqSectionSchema = defineType({
  name: 'faqSection',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Main title of the FAQ section',
      validation: (Rule) => Rule.required().error('Section title is required'),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Subtitle text',
      validation: (Rule) => Rule.required().error('Subtitle is required'),
    },
    {
      name: 'subtitleLinkText',
      title: 'Subtitle Link Text',
      type: 'string',
      description: 'Text for the link in subtitle',
      validation: (Rule) => Rule.required().error('Subtitle link text is required'),
    },
    {
      name: 'subtitleLinkUrl',
      title: 'Subtitle Link URL',
      type: 'string',
      description: 'URL for the subtitle link',
      validation: (Rule) => Rule.required().error('Subtitle link URL is required'),
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
                subtitle: subtitle ? `${subtitle.slice(0, 50)}...` : '',
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('At least one FAQ is required'),
    },
    {
      name: 'contactTitle',
      title: 'Contact Title',
      type: 'string',
      description: 'Title for the contact section',
      validation: (Rule) => Rule.required().error('Contact title is required'),
    },
    {
      name: 'contactDescription',
      title: 'Contact Description',
      type: 'string',
      description: 'Description text for contact section',
      validation: (Rule) => Rule.required().error('Contact description is required'),
    },
    {
      name: 'contactButtonText',
      title: 'Contact Button Text',
      type: 'string',
      description: 'Text for the contact button',
      validation: (Rule) => Rule.required().error('Contact button text is required'),
    },
    {
      name: 'contactButtonUrl',
      title: 'Contact Button URL',
      type: 'string',
      description: 'URL for the contact button',
      validation: (Rule) => Rule.required().error('Contact button URL is required'),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
}) 