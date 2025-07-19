import { defineType } from 'sanity'

export const globalInfoBarSchema = defineType({
  name: 'globalInfoBar',
  title: 'Info Bar',
  type: 'document',
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
              description: 'Whether this indicator should be styled as a title',
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
                subtitle: subtitle.length > 0 ? subtitle.join(', ') : 'Normal',
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
      title: 'trustIndicators.0.text',
      count: 'trustIndicators',
    },
    prepare(selection) {
      const { title, count } = selection
      const indicatorCount = count ? count.length : 0
      
      return {
        title: 'Global Info Bar',
        subtitle: `${indicatorCount} trust indicator${indicatorCount !== 1 ? 's' : ''} - First: ${title || 'None'}`,
      }
    },
  },
}) 