import { defineType } from 'sanity'

export const globalFooterSchema = defineType({
  name: 'globalFooter',
  title: 'Footer Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Settings Title',
      type: 'string',
      description: 'Internal title for this footer settings document',
      validation: (Rule) => Rule.required().error('Settings title is required'),
      initialValue: 'Global Footer Settings',
    },

    // Contact Information Section
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          description: 'Contact phone number (e.g., "(302) 204-2197")',
          validation: (Rule) => Rule.required().error('Phone number is required'),
        },
        {
          name: 'email',
          title: 'Email Address',
          type: 'string',
          description: 'Contact email address',
          validation: (Rule) => Rule.required().email().error('Valid email address is required'),
        },
        {
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string',
          description: 'Text for the call-to-action button',
          validation: (Rule) => Rule.required().error('CTA text is required'),
        },
        {
          name: 'ctaHref',
          title: 'CTA Button Link',
          type: 'string',
          description: 'URL for the call-to-action button',
          validation: (Rule) => Rule.required().error('CTA link is required'),
        },
      ],
      validation: (Rule) => Rule.required().error('Contact information is required'),
    },

    // Navigation Columns
    {
      name: 'columns',
      title: 'Navigation Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'footerColumn',
          title: 'Footer Column',
          fields: [
            {
              name: 'title',
              title: 'Column Title',
              type: 'string',
              validation: (Rule) => Rule.required().error('Column title is required'),
            },
            {
              name: 'links',
              title: 'Column Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'footerLink',
                  title: 'Footer Link',
                  fields: [
                    {
                      name: 'label',
                      title: 'Link Text',
                      type: 'string',
                      validation: (Rule) => Rule.required().error('Link text is required'),
                    },
                    {
                      name: 'href',
                      title: 'Link URL',
                      type: 'string',
                      validation: (Rule) => Rule.required().error('Link URL is required'),
                    },
                    {
                      name: 'isExternal',
                      title: 'External Link',
                      type: 'boolean',
                      description: 'Check if this link opens in a new tab',
                      initialValue: false,
                    },
                  ],
                  preview: {
                    select: {
                      title: 'label',
                      subtitle: 'href',
                      isExternal: 'isExternal',
                    },
                    prepare(selection) {
                      const { title, subtitle, isExternal } = selection
                      return {
                        title: title,
                        subtitle: `${subtitle}${isExternal ? ' (External)' : ''}`,
                      }
                    },
                  },
                },
              ],
              validation: (Rule) => Rule.required().min(1).error('At least one link is required'),
            },
          ],
          preview: {
            select: {
              title: 'title',
              linksCount: 'links',
            },
            prepare(selection) {
              const { title, linksCount } = selection
              const count = Array.isArray(linksCount) ? linksCount.length : 0
              return {
                title: title,
                subtitle: `${count} link${count !== 1 ? 's' : ''}`,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('At least one navigation column is required'),
    },

    // Social Media Links
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          title: 'Social Link',
          fields: [
            {
              name: 'platform',
              title: 'Social Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'TikTok', value: 'tiktok' },
                  { title: 'LinkedIn', value: 'linkedin' },
                ],
              },
              validation: (Rule) => Rule.required().error('Social platform is required'),
            },
            {
              name: 'href',
              title: 'Social Media URL',
              type: 'string',
              validation: (Rule) => Rule.required().uri().error('Valid URL is required'),
            },
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'href',
            },
            prepare(selection) {
              const { title, subtitle } = selection
              return {
                title: title ? title.charAt(0).toUpperCase() + title.slice(1) : 'Social Link',
                subtitle: subtitle,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('At least one social media link is required'),
    },

    // Middle Section Links
    {
      name: 'middleLinks',
      title: 'Middle Section Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'middleLink',
          title: 'Middle Link',
          fields: [
            {
              name: 'label',
              title: 'Link Text',
              type: 'string',
              validation: (Rule) => Rule.required().error('Link text is required'),
            },
            {
              name: 'href',
              title: 'Link URL',
              type: 'string',
              validation: (Rule) => Rule.required().error('Link URL is required'),
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('At least one middle section link is required'),
    },

    // Legal Information
    {
      name: 'legalDisclaimer',
      title: 'Legal Disclaimer',
      type: 'text',
      description: 'Legal disclaimer text displayed in the footer',
      validation: (Rule) => Rule.required().error('Legal disclaimer is required'),
      rows: 4,
    },

    // Legal Links
    {
      name: 'legalLinks',
      title: 'Legal Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'legalLink',
          title: 'Legal Link',
          fields: [
            {
              name: 'label',
              title: 'Link Text',
              type: 'string',
              validation: (Rule) => Rule.required().error('Link text is required'),
            },
            {
              name: 'href',
              title: 'Link URL',
              type: 'string',
              validation: (Rule) => Rule.required().error('Link URL is required'),
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('At least one legal link is required'),
    },

    // Copyright Information
    {
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
      description: 'Copyright notice text',
      validation: (Rule) => Rule.required().error('Copyright text is required'),
    },
  ],
  preview: {
    select: {
      title: 'title',
      phone: 'contact.phone',
      email: 'contact.email',
    },
    prepare(selection) {
      const { title, phone, email } = selection
      return {
        title: title || 'Global Footer Settings',
        subtitle: phone && email ? `${phone} • ${email}` : 'Footer Configuration',
      }
    },
  },
}) 