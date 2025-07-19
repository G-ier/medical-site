import { defineType } from 'sanity'

export const labTestedSectionSchema = defineType({
  name: 'labTestedSection',
  title: 'Lab Tested Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'richText',
      description: 'Main title of the lab tested section (supports rich text formatting)',
      validation: (Rule) => Rule.required().error('Section title is required'),
    },
    {
      name: 'description',
      title: 'Main Description',
      type: 'text',
      description: 'Primary description text for the section',
      validation: (Rule) => Rule.required().error('Main description is required'),
      rows: 3,
    },
    {
      name: 'additionalDescription',
      title: 'Additional Description',
      type: 'text',
      description: 'Extended description text with more details',
      rows: 4,
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'customImage',
      description: 'Background image for the section (e.g., lab testing image)',
      validation: (Rule) => Rule.required().error('Background image is required'),
    },
    {
      name: 'tests',
      title: 'Laboratory Tests',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'labTest',
          title: 'Lab Test',
          fields: [
            {
              name: 'testName',
              title: 'Test Name',
              type: 'string',
              description: 'Name of the laboratory test (e.g., "Potency Test")',
              validation: (Rule) => Rule.required().error('Test name is required'),
            },
            {
              name: 'statusLabel',
              title: 'Status Display Label',
              type: 'string',
              description: 'Label to display for the status (e.g., "Passed", "Verified")',
              validation: (Rule) => Rule.required().error('Status label is required'),
              initialValue: 'Passed',
            },
            {
              name: 'details',
              title: 'Test Details',
              type: 'text',
              description: 'Detailed information about the test (shown in dropdown)',
              rows: 3,
            },
          ],
          preview: {
            select: {
              title: 'testName',
              subtitle: 'statusLabel',
            },
          },
        },
      ],
      description: 'List of laboratory tests and their results',
      validation: (Rule) => Rule.required().min(1).error('At least one lab test is required'),
    },
    {
      name: 'featuresTitle',
      title: 'Features Title',
      type: 'string',
      description: 'Title for the features section (e.g., "Clean, simple, and effective")',
    },
    {
      name: 'featuresDescription',
      title: 'Features Description',
      type: 'text',
      description: 'Description text for the features section',
      rows: 3,
    },
    {
      name: 'features',
      title: 'Product Features',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'feature',
          title: 'Feature',
          fields: [
            {
              name: 'label',
              title: 'Feature Label',
              type: 'string',
              description: 'Display label for the feature (e.g., "Cruelty Free")',
              validation: (Rule) => Rule.required().error('Feature label is required'),
            },
            {
              name: 'description',
              title: 'Feature Description',
              type: 'text',
              description: 'Optional detailed description of the feature',
              rows: 2,
            },
          ],
          preview: {
            select: {
              title: 'label',
            },
          },
        },
      ],
      description: 'List of product features',
    },
  ],
  preview: {
    select: {
      title: 'title',
      testsCount: 'tests.length',
      featuresCount: 'features.length',
      media: 'backgroundImage.asset',
    },
    prepare(selection) {
      const { testsCount, featuresCount, media } = selection
      return {
        title: 'Lab Tested Section',
        subtitle: `${testsCount || 0} tests, ${featuresCount || 0} features`,
        media: media,
      }
    },
  },
}) 