import { defineType } from 'sanity'

export const medicalExpertsSectionSchema = defineType({
  name: 'medicalExpertsSection',
  title: 'Medical Experts Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'richText',
      description: 'Main title of the medical experts section (supports rich text formatting)',
      validation: (Rule) => Rule.required().error('Section title is required'),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Optional subtitle below the main title',
    },
    {
      name: 'description',
      title: 'Section Description',
      type: 'text',
      description: 'Optional description text for the section',
      rows: 3,
    },
    {
      name: 'doctors',
      title: 'Medical Experts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'doctor' }],
        },
      ],
      description: 'Select doctors to display in this section',
      validation: (Rule) => Rule.required().min(1).error('At least one medical expert is required'),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      doctorCount: 'doctors.length',
    },
    prepare(selection) {
      const { title, subtitle, doctorCount } = selection
      return {
        title: title || 'Medical Experts Section',
        subtitle: subtitle || `${doctorCount || 0} doctors selected`,
      }
    },
  },
})