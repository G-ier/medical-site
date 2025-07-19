import { defineType } from 'sanity'

export const infoBarSectionSchema = defineType({
  name: 'infoBarSection',
  title: 'Info Bar Section',
  type: 'object',
  fields: [
    {
      name: 'trustIndicators',
      title: 'Trust Indicators',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'trustIndicator',
          title: 'Trust Indicator',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'string',
              validation: (Rule) => Rule.required().error('Text is required'),
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Heart', value: 'heart' },
                  { title: 'Shipping', value: 'shipping' },
                  { title: 'Shield', value: 'shield' },
                  { title: 'Phone', value: 'phone' },
                  { title: 'Box', value: 'box' },
                ],
              },
              validation: (Rule) => Rule.optional(),
            },
            {
              name: 'isTitle',
              title: 'Is Title',
              type: 'boolean',
              description: 'Whether this indicator is a title',
              initialValue: false,
            },
            {
              name: 'highlighted',
              title: 'Highlighted',
              type: 'boolean',
              description: 'Whether this indicator should be highlighted',
              initialValue: false,
            },
          ],
          preview: {
            select: {
              title: 'text',
              icon: 'icon',
              isTitle: 'isTitle',
              highlighted: 'highlighted',
            },
            prepare(selection) {
              const { title, icon, isTitle, highlighted } = selection
              const subtitle = []
              if (icon) subtitle.push(`Icon: ${icon}`)
              if (isTitle) subtitle.push('Title')
              if (highlighted) subtitle.push('Highlighted')
              return {
                title: title,
                subtitle: subtitle.length > 0 ? subtitle.join(', ') : 'Regular indicator',
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('At least one trust indicator is required'),
    },
  ],
  preview: {
    select: {
      indicators: 'trustIndicators',
    },
    prepare(selection) {
      const { indicators } = selection
      const count = indicators ? indicators.length : 0
      return {
        title: 'Info Bar',
        subtitle: `${count} trust indicator${count !== 1 ? 's' : ''}`,
      }
    },
  },
}) 