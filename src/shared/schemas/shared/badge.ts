import { defineType } from 'sanity'

export const badgeSchema = defineType({
  name: 'badge',
  title: 'Badge',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Badge Text',
      type: 'string',
      validation: (Rule) => Rule.required().error('Badge text is required'),
    },
    {
      name: 'variant',
      title: 'Badge Variant',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Popular', value: 'popular' },
          { title: 'Category', value: 'category' },
          { title: 'Featured', value: 'featured' },
        ],
      },
      validation: (Rule) => Rule.required().error('Badge variant is required'),
    },
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'variant',
    },
  },
}) 