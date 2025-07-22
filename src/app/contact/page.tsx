export const revalidate = 60
import {
  PageTemplate,
  ContactHeroSection,
  FAQSection
} from "@/shared/ui"
import { client, CONTACT_QUERY } from "@/shared/lib/sanity"
import { transformContactData } from "@/shared/lib/transforms"
import { generateSEOMetadata, generateViewport, validateSEOData } from "@/shared/lib/seo-utils"
import type { ContactPage } from "@/shared/types/sanity"
import type { Metadata } from "next"

// Hardcoded contact data as fallback
const fallbackContactHeroData = {
  heroTitle: "Contact Us",
  subtitle: "Get in touch with our team for support, questions, or to learn more about our personalized healthcare solutions.",
  backgroundImage: {
    src: "/images/contact-hero-bg.jpg",
    alt: "Contact Us - Customer Support",
    width: 1920,
    height: 1080
  },
  primaryCTA: {
    text: "Send Message",
    href: "mailto:info@healthplatform.com"
  },
  secondaryCTA: {
    text: "Call Us",
    href: "tel:+13022042197"
  },
  contactInfo: {
    phone: "(302) 204-2197",
    email: "info@healthplatform.com",
    office: {
      address: "110 16th St, Ste 1431",
      city: "Los Angeles, CA 80202"
    }
  }
}

// Generate viewport configuration
export const viewport = generateViewport()

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await client.fetch<ContactPage>(CONTACT_QUERY)
    
    if (!data) {
      console.warn('No contact page data found in Sanity, using fallback SEO')
      return {
        title: 'Contact Us - Health Platform',
        description: 'Get in touch with Health Platform for personalized weight loss solutions and medical consultations.',
      }
    }

    const seoData = {
      title: data.seo?.metaTitle || 'Contact Us - Health Platform',
      description: data.seo?.metaDescription || 'Get in touch with Health Platform for personalized weight loss solutions and medical consultations.',
    }

    // Validate SEO data (this returns warnings array, not transformed data)
    const warnings = validateSEOData(data.seo)
    if (warnings.length > 0) {
      console.warn('SEO warnings for contact page:', warnings)
    }

    return generateSEOMetadata(seoData)
  } catch (error) {
    console.error('Error generating contact page metadata:', error)
    return {
      title: 'Contact Us - Health Platform',
      description: 'Get in touch with Health Platform for personalized weight loss solutions and medical consultations.',
    }
  }
}

export default async function ContactPage() {
  try {
    // Fetch contact page data
    const contactData = await client.fetch<ContactPage>(CONTACT_QUERY)

    // Use Sanity data if available, otherwise fall back to hardcoded data
    let pageData
    if (contactData) {
      pageData = transformContactData(contactData)
    } else {
      console.warn('No contact page data found in Sanity, using hardcoded fallback')
      pageData = {
        contactHeroData: fallbackContactHeroData,
        seo: {},
      }
    }

    return (
      <PageTemplate
        main={{
          paddingTop: "none",
          maxWidth: "default",
          padding: "none",
          background: "white"
        }}
      >
        {/* Hero Section - Contact Us */}
        <ContactHeroSection
          heroTitle={pageData.contactHeroData.heroTitle}
          subtitle={pageData.contactHeroData.subtitle}
          backgroundImage={pageData.contactHeroData.backgroundImage}
          primaryCTA={pageData.contactHeroData.primaryCTA}
          secondaryCTA={pageData.contactHeroData.secondaryCTA}
          contactInfo={pageData.contactHeroData.contactInfo}
          overlay={true}
          overlayOpacity="light"
          horizontalMargin="md"
          borderRadius="2xl"
        />

        {/* FAQ Section - Uses internal data loading */}
        <div className="px-8 pt-16 mb-[128px]">
          <FAQSection />
        </div>
      </PageTemplate>
    )
  } catch (error) {
    console.error('Error loading contact page:', error)
    
    // Fallback to hardcoded data in case of error
    return (
      <PageTemplate>
        <ContactHeroSection
          heroTitle={fallbackContactHeroData.heroTitle}
          subtitle={fallbackContactHeroData.subtitle}
          backgroundImage={fallbackContactHeroData.backgroundImage}
          primaryCTA={fallbackContactHeroData.primaryCTA}
          secondaryCTA={fallbackContactHeroData.secondaryCTA}
          contactInfo={fallbackContactHeroData.contactInfo}
        />

        <div className="px-4 mb-[128px]">
          <FAQSection />
        </div>
      </PageTemplate>
    )
  }
} 