import { defineType } from 'sanity'

export const treatmentBenefitsSectionSchema = defineType({
  name: 'treatmentBenefitsSection',
  title: 'Treatment Benefits Section',
  type: 'object',
  fields: [
    {
      name: 'benefits',
      title: 'Treatment Benefits',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'treatmentBenefit',
          title: 'Treatment Benefit',
          fields: [
            {
              name: 'title',
              title: 'Benefit Title',
              type: 'string',
              validation: (Rule) => Rule.required().error('Benefit title is required'),
            },
            {
              name: 'description',
              title: 'Benefit Description',
              type: 'text',
              description: 'Optional description for the benefit',
            },
            {
              name: 'iconType',
              title: 'Icon Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Metabolism', value: 'metabolism' },
                  { title: 'Appetite Control', value: 'appetiteControl' },
                  { title: 'Weight Support', value: 'weightSupport' },
                  { title: 'Science', value: 'science' },
                  { title: 'Pill', value: 'pill' },
                  { title: 'Shield Check', value: 'shieldCheck' },
                ],
              },
              validation: (Rule) => Rule.required().error('Icon type is required'),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'iconType',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(6).error('1-6 benefits are required'),
    },
  ],
  preview: {
    select: {
      benefits: 'benefits',
    },
    prepare(selection) {
      const { benefits } = selection
      return {
        title: 'Treatment Benefits Section',
        subtitle: `${benefits?.length || 0} benefits`,
      }
    },
  },
}) 