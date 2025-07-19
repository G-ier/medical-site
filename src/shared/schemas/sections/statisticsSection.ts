import { defineType } from 'sanity'

export const statisticsSectionSchema = defineType({
  name: 'statisticsSection',
  title: 'Statistics Section',
  type: 'object',
  fields: [
    {
      name: 'statisticPreText',
      title: 'Pre-text',
      type: 'string',
      description: 'Text before the percentage',
      validation: (Rule) => Rule.required().error('Pre-text is required'),
    },
    {
      name: 'statisticTimeframe',
      title: 'Timeframe',
      type: 'string',
      description: 'Time period for the statistic',
      validation: (Rule) => Rule.required().error('Timeframe is required'),
    },
    {
      name: 'statisticPostText',
      title: 'Post-text',
      type: 'string',
      description: 'Text after the timeframe',
      validation: (Rule) => Rule.required().error('Post-text is required'),
    },
    {
      name: 'calculatorTitle',
      title: 'Calculator Title',
      type: 'string',
      description: 'Title for the weight calculator',
      validation: (Rule) => Rule.required().error('Calculator title is required'),
    },
    {
      name: 'calculatorDefaultWeight',
      title: 'Default Weight',
      type: 'number',
      description: 'Default weight value for calculator',
      validation: (Rule) => Rule.required().min(50).max(1000).error('Default weight must be between 50 and 1000'),
    },
    {
      name: 'calculatorMinWeight',
      title: 'Minimum Weight',
      type: 'number',
      description: 'Minimum weight value for calculator',
      validation: (Rule) => Rule.required().min(50).error('Minimum weight must be at least 50'),
    },
    {
      name: 'calculatorMaxWeight',
      title: 'Maximum Weight',
      type: 'number',
      description: 'Maximum weight value for calculator',
      validation: (Rule) => Rule.required().max(1000).error('Maximum weight must be at most 1000'),
    },
    {
      name: 'calculatorWeightLossPercentage',
      title: 'Weight Loss Percentage',
      type: 'number',
      description: 'Percentage for weight loss calculation (e.g., 0.149 for 14.9%)',
      validation: (Rule) => Rule.required().min(0).max(1).error('Weight loss percentage must be between 0 and 1'),
    },
    {
      name: 'calculatorResultText',
      title: 'Result Text',
      type: 'string',
      description: 'Text shown with calculation result',
      validation: (Rule) => Rule.required().error('Result text is required'),
    },
    {
      name: 'calculatorUnit',
      title: 'Weight Unit',
      type: 'string',
      description: 'Unit of measurement (e.g., lbs, kg)',
      validation: (Rule) => Rule.required().error('Weight unit is required'),
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'customImage',
      description: 'Background image for the statistics section',
      validation: (Rule) => Rule.required().error('Background image is required'),
    },
  ],
  preview: {
    select: {
      title: 'calculatorTitle',
      subtitle: 'statisticTimeframe',
      media: 'backgroundImage.asset',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title,
        subtitle: subtitle || 'Statistics Section',
      }
    },
  },
}) 