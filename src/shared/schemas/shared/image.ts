import { defineType } from 'sanity'

export const imageSchema = defineType({
  name: 'customImage',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  validation: (Rule) => Rule.required().error('Image is required'),
  fields: [
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Alternative text for accessibility and SEO',
      validation: (Rule) => Rule.required().error('Alt text is required for accessibility'),
    },
    {
      name: 'width',
      title: 'Width',
      type: 'number',
      description: 'Image width in pixels (optional)',
    },
    {
      name: 'height',
      title: 'Height', 
      type: 'number',
      description: 'Image height in pixels (optional)',
    },
  ],
}) 