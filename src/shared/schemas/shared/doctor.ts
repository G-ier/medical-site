import { defineType } from 'sanity'

export const doctorSchema = defineType({
  name: 'doctor',
  title: 'Doctor',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Doctor Name',
      type: 'string',
      description: 'Full name of the doctor (e.g., "Dr. John Smith")',
      validation: (Rule) => Rule.required().error('Doctor name is required'),
    },
    {
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      description: 'Professional title or position (e.g., "VP of Pharmacy Operations")',
      validation: (Rule) => Rule.required().error('Professional title is required'),
    },
    {
      name: 'image',
      title: 'Doctor Photo',
      type: 'customImage',
      description: 'Professional headshot of the doctor',
      validation: (Rule) => Rule.required().error('Doctor photo is required'),
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
      description: 'Optional detailed biography of the doctor',
      rows: 4,
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which doctor appears on the page (1, 2, 3, etc.)',
      validation: (Rule) => Rule.min(1).integer(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'image.asset',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{ field: 'displayOrder', direction: 'asc' }],
    },
    {
      title: 'Name',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
}) 