import type { Metadata, Viewport } from "next"

// Default SEO values
export const seoConfig = {
  siteName: "Health Platform",
  siteUrl: "https://localhost:3004",
  defaultTitle: "Health Platform - Feel Better. Look Better. Live Better.",
  defaultDescription: "Personalized treatments for weight loss, skincare, and wellness delivered discreetly to your door.",
  twitterHandle: "@healthplatform",
} as const

// Generate complete metadata with fallbacks
export function generateSEOMetadata({
  title,
  description,
  path = "",
  image,
  type = "website",
}: {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: string
}): Metadata {
  const fullTitle = title || seoConfig.defaultTitle
  const fullDescription = description || seoConfig.defaultDescription
  const fullUrl = `${seoConfig.siteUrl}${path}`
  const defaultImage = `${seoConfig.siteUrl}/og-image.jpg`
  const imageUrl = image || defaultImage
  
  return {
    title: fullTitle,
    description: fullDescription,
    keywords: ["weight loss", "skincare", "wellness", "telemedicine", "personalized treatments", "medical consultation"],
    authors: [{ name: seoConfig.siteName }],
    creator: seoConfig.siteName,
    publisher: seoConfig.siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      type: type as any,
      url: fullUrl,
      siteName: seoConfig.siteName,
      locale: "en_US",
      images: [{
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: fullTitle,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      site: seoConfig.twitterHandle,
      creator: seoConfig.twitterHandle,
      images: [{
        url: imageUrl,
        alt: fullTitle,
      }],
    },
    alternates: {
      canonical: fullUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-site-verification-code",
    },
  }
}

// Generate viewport configuration
export function generateViewport(): Viewport {
  return {
    width: "device-width",
    initialScale: 1,
  }
}

// Validate SEO data
export function validateSEOData(seo?: { metaTitle?: string; metaDescription?: string }) {
  const warnings: string[] = []
  
  if (seo?.metaTitle) {
    if (seo.metaTitle.length > 60) {
      warnings.push(`Meta title is ${seo.metaTitle.length} characters (recommended: 50-60)`)
    }
    if (seo.metaTitle.length < 30) {
      warnings.push(`Meta title is ${seo.metaTitle.length} characters (recommended: 30-60)`)
    }
  }
  
  if (seo?.metaDescription) {
    if (seo.metaDescription.length > 160) {
      warnings.push(`Meta description is ${seo.metaDescription.length} characters (recommended: 150-160)`)
    }
    if (seo.metaDescription.length < 120) {
      warnings.push(`Meta description is ${seo.metaDescription.length} characters (recommended: 120-160)`)
    }
  }
  
  return warnings
} 