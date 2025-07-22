export const revalidate = 60

import {
  HeroSection,
  WeightLossIntroSection,
  PageTemplate,
} from "@/shared/ui"
import { client, HOMEPAGE_QUERY } from "@/shared/lib/sanity"
import { transformHomepageData } from "@/shared/lib/transforms"
import { generateSEOMetadata, generateViewport, validateSEOData } from "@/shared/lib/seo-utils"
import type { Homepage } from "@/shared/types/sanity"
import type { Metadata } from "next"
import Script from "next/script"
import dynamic from "next/dynamic"

// Lazy load non-critical sections
const TreatmentsSection = dynamic(() => import("@/shared/ui").then(mod => ({ default: mod.TreatmentsSection })), {
  loading: () => <div className="h-32 animate-pulse bg-gray-200 rounded" />
})
const CategoriesSection = dynamic(() => import("@/shared/ui").then(mod => ({ default: mod.CategoriesSection })), {
  loading: () => <div className="h-32 animate-pulse bg-gray-200 rounded" />
})
const StatisticsSection = dynamic(() => import("@/shared/ui").then(mod => ({ default: mod.StatisticsSection })), {
  loading: () => <div className="h-32 animate-pulse bg-gray-200 rounded" />
})
const GettingStartedSection = dynamic(() => import("@/shared/ui").then(mod => ({ default: mod.GettingStartedSection })), {
  loading: () => <div className="h-32 animate-pulse bg-gray-200 rounded" />
})
const WhyChooseSection = dynamic(() => import("@/shared/ui").then(mod => ({ default: mod.WhyChooseSection })), {
  loading: () => <div className="h-32 animate-pulse bg-gray-200 rounded" />
})
const TestimonialsSection = dynamic(() => import("@/shared/ui").then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="h-32 animate-pulse bg-gray-200 rounded" />
})
const FAQSection = dynamic(() => import("@/shared/ui").then(mod => ({ default: mod.FAQSection })), {
  loading: () => <div className="h-32 animate-pulse bg-gray-200 rounded" />
})


// Generate viewport configuration
export const viewport = generateViewport()

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  try {
    const sanityData = await client.fetch<Homepage>(HOMEPAGE_QUERY)

    // Validate SEO data and log warnings in development
    if (process.env.NODE_ENV === 'development' && sanityData?.seo) {
      const warnings = validateSEOData(sanityData.seo)
      if (warnings.length > 0) {
        console.warn('SEO warnings for homepage:', warnings)
      }
    }

    return generateSEOMetadata({
      title: sanityData?.seo?.metaTitle,
      description: sanityData?.seo?.metaDescription,
      path: "",
      image: sanityData?.heroSection?.backgroundImage?.asset?.url,
    })
  } catch (error) {
    console.error('Error generating metadata:', error)
    // Return default metadata on error
    return generateSEOMetadata({})
  }
}

// Function to get homepage data from Sanity with fallbacks
async function getHomepageData() {
  try {
    // Fetch homepage data only
    const sanityData = await client.fetch<Homepage>(HOMEPAGE_QUERY)

    if (!sanityData) {
      console.warn('No homepage data found in Sanity CMS, using fallback data')
      return getDefaultHomepageData()
    }

    // Transform Sanity data to component format
    const transformedData = transformHomepageData(sanityData)

    if (!transformedData) {
      console.warn('Failed to transform homepage data, using fallback data')
      return getDefaultHomepageData()
    }

    return {
      weightLossIntroData: transformedData.weightLossIntroSection,
      heroContent: transformedData.heroSection,
      treatmentsData: transformedData.treatmentsSection,
      categoriesData: transformedData.categoriesSection,
      statisticsData: transformedData.statisticsSection,
      gettingStartedData: transformedData.gettingStartedSection,
      whyChooseData: transformedData.whyChooseSection,
      testimonialsData: transformedData.testimonialsSection,
      ctaHeroContent: transformedData.ctaHeroSection
    }
  } catch (error) {
    console.error('Error fetching homepage data from Sanity:', error)
    console.warn('Using fallback data due to Sanity error')
    return getDefaultHomepageData()
  }
}

// Fallback data when Sanity CMS is empty or unavailable
function getDefaultHomepageData() {
  return {
    weightLossIntroData: null, // Make this optional
    heroContent: {
      heroTitle: "Feel Better. Look Better. Live Better.",
      subtitle: "Personalized treatments for weight loss, skincare, and wellness delivered discreetly to your door.",
      backgroundImage: { src: "/hero-1.png", alt: "Hero Background" },
      primaryCTA: { text: "Get Started", href: "/onboarding" },
      secondaryCTA: { text: "Learn More", href: "/about-us" }
    },
    treatmentsData: {
      title: "Our Treatments",
      subtitle: "Personalized Care for Your Wellness Journey",
      description: "Choose from our range of medically-supervised treatments",
      treatments: [],
      viewAllText: "View All Treatments",
      viewAllUrl: "/treatments"
    },
    categoriesData: {
      title: "Treatment Categories",
      categories: []
    },
    statisticsData: {
      statisticPreText: "Patients see an average of",
      statisticTimeframe: "12 weeks",
      statisticPostText: "weight loss",
      calculatorTitle: "Calculate Your Potential",
      calculatorDefaultWeight: 180,
      calculatorMinWeight: 100,
      calculatorMaxWeight: 400,
      calculatorWeightLossPercentage: 15,
      calculatorResultText: "potential weight loss",
      calculatorUnit: "lbs",
      backgroundImage: { src: "/image-5.jpg", alt: "Statistics Background" }
    },
    gettingStartedData: {
      title: "Getting Started is Easy",
      subtitle: "Begin your wellness journey in three simple steps",
      steps: [
        { title: "Complete Assessment" },
        { title: "Consult with Doctor" },
        { title: "Receive Treatment" }
      ],
      image: { src: "/onboarding-1.jpg", alt: "Getting Started" },
      primaryCTA: { text: "Start Assessment", href: "/onboarding" },
      secondaryCTA: { text: "Learn More", href: "/about-us" }
    },
    whyChooseData: {
      title: "Why Choose Us",
      subtitle: "Experience the difference with our personalized approach",
      valuePropositions: []
    },
    testimonialsData: {
      title: "What Our Patients Say",
      testimonials: []
    },
    ctaHeroContent: {
      heroTitle: "Ready to Start Your Journey?",
      subtitle: "Join thousands who have transformed their lives",
      backgroundImage: { src: "/image-7.jpg", alt: "CTA Hero Background" },
      primaryCTA: { text: "Get Started Today", href: "/onboarding" },
      secondaryCTA: { text: "Contact Us", href: "/contact" }
    }
  }
}

// Generate structured data for SEO
function generateStructuredData(pageData: any) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Health Platform",
    "description": "Personalized treatments for weight loss, skincare, and wellness delivered discreetly to your door.",
    "url": "https://localhost:3004",
    "logo": "https://localhost:3004/logo.png",
    "sameAs": [
      "https://twitter.com/healthplatform"
    ],
    "serviceType": "Telemedicine",
    "medicalSpecialty": ["Weight Loss", "Skincare", "Wellness"],
    "areaServed": "United States",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medical Treatments",
      "itemListElement": pageData.treatmentsData.treatments.map((treatment: any) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": treatment.title,
          "description": treatment.description
        }
      }))
    }
  }

  return structuredData
}

export default async function HomePage() {
  const pageData = await getHomepageData()
  const structuredData = generateStructuredData(pageData)

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      <PageTemplate
        main={{
          paddingTop: "none",
          maxWidth: "default",
          padding: "none",
          background: "transparent"
        }}
      >
      {/* Weight Loss Intro Section */}
      {pageData.weightLossIntroData && (
        <WeightLossIntroSection
          title={pageData.weightLossIntroData.title}
          subtitle={pageData.weightLossIntroData.subtitle}
          medications={pageData.weightLossIntroData.medications}
        />
      )}

      <HeroSection
        heroTitle={pageData.heroContent.heroTitle}
        subtitle={pageData.heroContent.subtitle}
        backgroundImage={pageData.heroContent.backgroundImage}
        primaryCTA={pageData.heroContent.primaryCTA}
        secondaryCTA={pageData.heroContent.secondaryCTA}
        variant="image"
        textColor="light"
        alignment="center"
        overlay={true}
        overlayOpacity="light"
        horizontalMargin="md"
      />

      {/* Treatments Section */}
      <div className="pt-8 pb-8 px-4">
        <TreatmentsSection
          title={pageData.treatmentsData.title}
          subtitle={pageData.treatmentsData.subtitle}
          description={pageData.treatmentsData.description}
          treatments={pageData.treatmentsData.treatments}
          viewAllText={pageData.treatmentsData.viewAllText}
          viewAllUrl={pageData.treatmentsData.viewAllUrl}
          columnsDesktop={4}
          background="default"
        />
      </div>

      {/* Categories Section */}
      <div className="mb-[128px]">
        <CategoriesSection
          title={pageData.categoriesData.title}
          categories={pageData.categoriesData.categories}
          background="default"
        />
      </div>

      {/* Statistics Section */}
      <div className="max-[768px]:px-0 mb-[128px]">
        <StatisticsSection
          statisticPreText={pageData.statisticsData.statisticPreText}
          statisticTimeframe={pageData.statisticsData.statisticTimeframe}
          statisticPostText={pageData.statisticsData.statisticPostText}
          calculatorTitle={pageData.statisticsData.calculatorTitle}
          calculatorDefaultWeight={pageData.statisticsData.calculatorDefaultWeight}
          calculatorMinWeight={pageData.statisticsData.calculatorMinWeight}
          calculatorMaxWeight={pageData.statisticsData.calculatorMaxWeight}
          calculatorWeightLossPercentage={pageData.statisticsData.calculatorWeightLossPercentage}
          calculatorResultText={pageData.statisticsData.calculatorResultText}
          calculatorUnit={pageData.statisticsData.calculatorUnit}
          backgroundImage={pageData.statisticsData.backgroundImage}
          padding="py-[60px] px-[140px]"
        />
      </div>

      {/* Getting Started Section */}
      <div className="px-4 mb-[128px]">
        <GettingStartedSection
          title={pageData.gettingStartedData.title}
          subtitle={pageData.gettingStartedData.subtitle}
          steps={pageData.gettingStartedData.steps}
          image={pageData.gettingStartedData.image}
          primaryCTA={pageData.gettingStartedData.primaryCTA}
          secondaryCTA={pageData.gettingStartedData.secondaryCTA}
          background="default"
        />
      </div>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24">
        <WhyChooseSection
          title={pageData.whyChooseData.title}
          subtitle={pageData.whyChooseData.subtitle}
          valuePropositions={pageData.whyChooseData.valuePropositions}
          background="default"
        />
      </section>

      {/* Testimonials Section */}
      <div className="px-4 mb-[128px]">
        <TestimonialsSection
          title={pageData.testimonialsData.title}
          testimonials={pageData.testimonialsData.testimonials}
          columnsDesktop={4}
          background="default"
        />
      </div>

      {/* FAQ Section */}
      <div className="px-4 mb-[128px]">
        <FAQSection />
      </div>

      {/* CTA Hero Section */}
      <div className="mb-[128px]">
        <HeroSection
          heroTitle={pageData.ctaHeroContent.heroTitle}
          subtitle={pageData.ctaHeroContent.subtitle}
          backgroundImage={pageData.ctaHeroContent.backgroundImage}
          primaryCTA={pageData.ctaHeroContent.primaryCTA}
          secondaryCTA={pageData.ctaHeroContent.secondaryCTA}
          variant="image"
          textColor="light"
          alignment="center"
          overlay={true}
          overlayOpacity="light"
          horizontalMargin="lg"
        />
      </div>
    </PageTemplate>
    </>
  )
}
