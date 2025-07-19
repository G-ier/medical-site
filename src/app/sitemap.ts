import { MetadataRoute } from 'next'
import { client } from '@/shared/lib/sanity'

const baseUrl = 'https://rejuvemeds.com'

// Static pages
const staticPages = [
  {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1,
  },
  {
    url: `${baseUrl}/onboarding`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/treatments`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: `${baseUrl}/about`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: `${baseUrl}/contact`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  },
  {
    url: `${baseUrl}/weight-loss-solutions`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
]

// Query to get dynamic pages from Sanity
const DYNAMIC_PAGES_QUERY = `
  *[_type in ["treatment", "category", "page"] && defined(slug.current)] {
    _type,
    "slug": slug.current,
    _updatedAt
  }
`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Get dynamic pages from Sanity
    const dynamicPages = await client.fetch(DYNAMIC_PAGES_QUERY)
    
    // Generate dynamic sitemap entries
    const dynamicSitemapEntries = dynamicPages.map((page: any) => ({
      url: `${baseUrl}/${page._type === 'treatment' ? 'treatments' : page._type === 'category' ? 'categories' : ''}/${page.slug}`,
      lastModified: new Date(page._updatedAt),
      changeFrequency: page._type === 'treatment' ? 'weekly' : 'monthly' as const,
      priority: page._type === 'treatment' ? 0.7 : 0.5,
    }))

    return [
      ...staticPages,
      ...dynamicSitemapEntries,
    ]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    // Return static pages only if Sanity fails
    return staticPages
  }
}