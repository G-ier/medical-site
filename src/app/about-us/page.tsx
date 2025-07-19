export const revalidate = 60
import {
  HeroSection,
  PageTemplate,
  MedicalExpertsSection,
  LabTestedSection,
  CategoriesSection,
  TreatmentsSection,
  GettingStartedSection,
  TestimonialsSection,
  ScienceIcon,
  PillIcon,
  ShieldCheckIcon,
  MetabolismIcon,
  AppetiteControlIcon,
  WeightSupportIcon,
  CrueltyFreeIcon,
  EcoFriendlyIcon,
  ParabenFreeIcon,
  SiliconeFreeIcon,
  SulfateFreeIcon,
  GlutenFreeIcon,

} from "@/shared/ui"
import { client, ABOUT_US_QUERY } from "@/shared/lib/sanity"
import { transformAboutUsData } from "@/shared/lib/transforms"
import { generateSEOMetadata, generateViewport, validateSEOData } from "@/shared/lib/seo-utils"
import type { AboutUsPage } from "@/shared/types/sanity"
import type { Metadata } from "next"

// Feature Icons mapping for the lab tested section
const featureIcons = {
  science: ScienceIcon,
  pill: PillIcon,
  shield: ShieldCheckIcon,
  metabolism: MetabolismIcon,
  appetite: AppetiteControlIcon,
  weight: WeightSupportIcon,
  crueltyFree: CrueltyFreeIcon,
  ecoFriendly: EcoFriendlyIcon,
  parabenFree: ParabenFreeIcon,
  siliconeFree: SiliconeFreeIcon,
  sulfateFree: SulfateFreeIcon,
  glutenFree: GlutenFreeIcon
}

// Log available icons for debugging
console.log('Available featureIcons:', Object.keys(featureIcons).join(', '));

// Generate viewport configuration
export const viewport = generateViewport()

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  try {
    const sanityData = await client.fetch<AboutUsPage>(ABOUT_US_QUERY)
    
    // Validate SEO data and log warnings in development
    if (process.env.NODE_ENV === 'development' && sanityData?.seo) {
      const warnings = validateSEOData(sanityData.seo)
      if (warnings.length > 0) {
        console.warn('SEO warnings for about us page:', warnings)
      }
    }
    
    return generateSEOMetadata({
      title: sanityData?.seo?.metaTitle,
      description: sanityData?.seo?.metaDescription,
      path: "/about-us",
    })
  } catch (error) {
    console.error('Error generating metadata:', error)
    // Return default metadata on error
    return generateSEOMetadata({
      title: "About Us",
      path: "/about-us",
    })
  }
}

// Function to get About Us data from Sanity (no fallback)
async function getAboutUsData() {
  try {
    const sanityData = await client.fetch<AboutUsPage>(ABOUT_US_QUERY)
    
    if (!sanityData) {
      console.error('No About Us data found in Sanity CMS')
      return null
    }
    
    console.log('✅ About Us data fetched successfully from Sanity')
    return sanityData
  } catch (error) {
    console.error('Error fetching About Us data from Sanity:', error)
    return null
  }
}

export default async function AboutUsPage() {
  // Fetch data from Sanity (no fallback)
  const sanityData = await getAboutUsData()
  
  // Transform Sanity data - will throw error if no data
  if (!sanityData) {
    throw new Error('About Us page content not found in Sanity CMS')
  }
  
  console.log('transformAboutUsData featureIcons', featureIcons)
  const pageData = transformAboutUsData(sanityData, featureIcons)


  console.log('pageData', pageData.labTestedData.features)
  return (
    <PageTemplate
      main={{
        paddingTop: "none",
        maxWidth: "default",
        padding: "none",
        background: "transparent"
      }}
    >
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

      {/* Medical Experts Section */}
      <div className="px-8">
        <MedicalExpertsSection
          title={pageData.medicalExpertsData.title}
          doctors={pageData.medicalExpertsData.doctors}
          columnsDesktop={4}
          spacing="lg"
          background="default"
        />
      </div>

      {/* Lab Tested Section */}
      <div className="mb-16 px-8">
        <LabTestedSection
          title={pageData.labTestedData.title}
          description={pageData.labTestedData.description}
          additionalDescription={pageData.labTestedData.additionalDescription}
          tests={pageData.labTestedData.tests}
          backgroundImage={pageData.labTestedData.backgroundImage}
          featuresTitle={pageData.labTestedData.featuresTitle}
          featuresDescription={pageData.labTestedData.featuresDescription}
          features={pageData.labTestedData.features}
          background="transparent"
          spacing="lg"
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

      {/* Treatments Section */}
      <div className="pt-16 pb-8 px-4">
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

      {/* Getting Started Section - How It Works */}
      <div className="mb-[128px] px-4">
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

      {/* Testimonials Section - Our members love us */}
      <div className="mb-[128px] px-4">
        <TestimonialsSection
          title={pageData.testimonialsData.title}
          testimonials={pageData.testimonialsData.testimonials}
          columnsDesktop={4}
          background="default"
        />
      </div>
    </PageTemplate>
  )
} 