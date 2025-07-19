import { defineType } from 'sanity'

export const testimonialsSectionSchema = defineType({
  name: 'testimonialsSection',
  title: 'Testimonials Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Main title of the testimonials section',
      validation: (Rule) => Rule.required().error('Section title is required'),
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'testimonial',
          title: 'Testimonial',
          fields: [
            {
              name: 'companyLogo',
              title: 'Company Logo',
              type: 'customImage',
              description: 'Logo of the company or organization',
              validation: (Rule) => Rule.required().error('Company logo is required'),
            },
            {
              name: 'quote',
              title: 'Quote',
              type: 'text',
              description: 'The testimonial quote text',
              validation: (Rule) => Rule.required().error('Quote is required'),
            },
            {
              name: 'author',
              title: 'Author',
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Author Name',
                  type: 'string',
                  validation: (Rule) => Rule.required().error('Author name is required'),
                },
                {
                  name: 'position',
                  title: 'Position',
                  type: 'string',
                  validation: (Rule) => Rule.required().error('Position is required'),
                },
                {
                  name: 'company',
                  title: 'Company',
                  type: 'string',
                  validation: (Rule) => Rule.required().error('Company is required'),
                },
                {
                  name: 'avatar',
                  title: 'Avatar',
                  type: 'customImage',
                  description: 'Author profile picture',
                  validation: (Rule) => Rule.required().error('Avatar is required'),
                },
              ],
              validation: (Rule) => Rule.required().error('Author information is required'),
            },
          ],
          preview: {
            select: {
              title: 'author.name',
              subtitle: 'author.company',
              media: 'author.avatar.asset',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('At least one testimonial is required'),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}) 