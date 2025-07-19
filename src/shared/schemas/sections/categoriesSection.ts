import { defineType } from 'sanity'

export const categoriesSectionSchema = defineType({
  name: 'categoriesSection',
  title: 'Categories Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'richText',
      description: 'Main title of the categories section',
      validation: (Rule) => Rule.required().error('Section title is required'),
    },
    {
      name: 'categories',
      title: 'Category Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'categoryCard',
          title: 'Category Card',
          fields: [
            {
              name: 'title',
              title: 'Category Title',
              type: 'string',
              validation: (Rule) => Rule.required().error('Category title is required'),
            },
            {
              name: 'image',
              title: 'Category Image',
              type: 'customImage',
              validation: (Rule) => Rule.required().error('Category image is required'),
            },
            {
              name: 'cta',
              title: 'Call to Action',
              type: 'cta',
              validation: (Rule) => Rule.required().error('CTA is required'),
            },
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image.asset',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('At least one category is required'),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}) 