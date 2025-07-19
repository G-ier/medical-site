import { defineType } from 'sanity'

export const weightLossOverviewSectionSchema = defineType({
  name: 'weightLossOverviewSection',
  title: 'Weight Loss Overview Section',
  type: 'object',
  fields: [
    {
      name: 'firstStatistic',
      title: 'First Weight Loss Statistic',
      type: 'object',
      fields: [
        {
          name: 'preText',
          title: 'Pre Text',
          type: 'string',
          validation: (Rule) => Rule.required().error('Pre text is required'),
        },
        {
          name: 'mainText',
          title: 'Main Text',
          type: 'string',
          validation: (Rule) => Rule.required().error('Main text is required'),
        },
        {
          name: 'percentage',
          title: 'Percentage/Number',
          type: 'string',
          validation: (Rule) => Rule.required().error('Percentage is required'),
        },
        {
          name: 'timeframe',
          title: 'Timeframe',
          type: 'string',
          validation: (Rule) => Rule.required().error('Timeframe is required'),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (Rule) => Rule.required().error('Description is required'),
        },
      ],
      validation: (Rule) => Rule.required().error('First statistic is required'),
    },
    {
      name: 'secondStatistic',
      title: 'Second Weight Loss Statistic',
      type: 'object',
      fields: [
        {
          name: 'preText',
          title: 'Pre Text',
          type: 'string',
          validation: (Rule) => Rule.required().error('Pre text is required'),
        },
        {
          name: 'mainText',
          title: 'Main Text',
          type: 'string',
          validation: (Rule) => Rule.required().error('Main text is required'),
        },
        {
          name: 'percentage',
          title: 'Percentage/Number',
          type: 'string',
          validation: (Rule) => Rule.required().error('Percentage is required'),
        },
        {
          name: 'timeframe',
          title: 'Timeframe',
          type: 'string',
          validation: (Rule) => Rule.required().error('Timeframe is required'),
        },
        {
          name: 'titleAboveDescription',
          title: 'Title Above Description',
          type: 'string',
          description: 'Optional title shown above description',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (Rule) => Rule.required().error('Description is required'),
        },
      ],
      validation: (Rule) => Rule.required().error('Second statistic is required'),
    },
    {
      name: 'healthGainsCard',
      title: 'Health Gains Card',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Card Title',
          type: 'string',
          validation: (Rule) => Rule.required().error('Card title is required'),
        },
        {
          name: 'description',
          title: 'Card Description',
          type: 'text',
          validation: (Rule) => Rule.required().error('Card description is required'),
        },
        {
          name: 'image',
          title: 'Card Image',
          type: 'customImage',
          validation: (Rule) => Rule.required().error('Card image is required'),
        },
      ],
      validation: (Rule) => Rule.required().error('Health gains card is required'),
    },
    {
      name: 'overlappingImages',
      title: 'Overlapping Images',
      type: 'object',
      fields: [
        {
          name: 'primaryImage',
          title: 'Primary Image',
          type: 'customImage',
          validation: (Rule) => Rule.required().error('Primary image is required'),
        },
        {
          name: 'secondaryImage',
          title: 'Secondary Image',
          type: 'customImage',
          validation: (Rule) => Rule.required().error('Secondary image is required'),
        },
      ],
      validation: (Rule) => Rule.required().error('Overlapping images are required'),
    },
    {
      name: 'superchargeGoals',
      title: 'Supercharge Goals',
      type: 'object',
      fields: [
        {
          name: 'mainText',
          title: 'Main Text',
          type: 'string',
          validation: (Rule) => Rule.required().error('Main text is required'),
        },
        {
          name: 'highlightedText',
          title: 'Highlighted Text',
          type: 'string',
          validation: (Rule) => Rule.required().error('Highlighted text is required'),
        },
        {
          name: 'goals',
          title: 'Goals',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'goal',
              title: 'Goal',
              fields: [
                {
                  name: 'image',
                  title: 'Icon',
                  type: 'customImage',
                  description: 'Icon for the goal',
                  validation: (Rule) => Rule.required().error('Icon is required'),
                },
                {
                  name: 'title',
                  title: 'Goal Title',
                  type: 'string',
                  validation: (Rule) => Rule.required().error('Goal title is required'),
                },
                {
                  name: 'description',
                  title: 'Goal Description',
                  type: 'text',
                  validation: (Rule) => Rule.required().error('Goal description is required'),
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description',
                },
              },
            },
          ],
          validation: (Rule) => Rule.required().min(1).max(6).error('1-6 goals are required'),
        },
      ],
      validation: (Rule) => Rule.required().error('Supercharge goals are required'),
    },
  ],
  preview: {
    select: {
      firstStat: 'firstStatistic.percentage',
      secondStat: 'secondStatistic.percentage',
    },
    prepare(selection) {
      const { firstStat, secondStat } = selection
      return {
        title: 'Weight Loss Overview Section',
        subtitle: `Stats: ${firstStat || 'N/A'} | ${secondStat || 'N/A'}`,
      }
    },
  },
}) 