export const revalidate = 60
import {
  PageTemplate,
  WeightLossHeroSection,
  TreatmentBenefitsSection,
  TreatmentOptionsSection,
  WeightLossOverviewSection,
  LabTestedSection,
  GettingStartedSection,
  FAQSection,
  HeroSection,
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
  TreatmentsSection,
  StatisticsSection,
} from "@/shared/ui";
import { client, WEIGHT_LOSS_SOLUTIONS_QUERY } from "@/shared/lib/sanity";
import { transformWeightLossSolutionsData } from "@/shared/lib/transforms";
import { generateSEOMetadata, generateViewport, validateSEOData } from "@/shared/lib/seo-utils";
import type { WeightLossSolutionsPage } from "@/shared/types/sanity";
import type { Metadata } from "next";

// Icon mapping for the weight loss page
const weightLossIcons = {
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
};

// Generate viewport configuration
export const viewport = generateViewport()

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  try {
    const sanityData = await client.fetch<WeightLossSolutionsPage>(
      WEIGHT_LOSS_SOLUTIONS_QUERY
    );

    // Validate SEO data and log warnings in development
    if (process.env.NODE_ENV === "development" && sanityData?.seo) {
      const warnings = validateSEOData(sanityData.seo);
      if (warnings.length > 0) {
        console.warn("SEO warnings for weight loss solutions page:", warnings);
      }
    }

    return generateSEOMetadata({
      title: sanityData?.seo?.metaTitle,
      description: sanityData?.seo?.metaDescription,
      path: "/weight-loss-solutions",
    });
  } catch (error) {
    console.error("Error generating metadata:", error);
    // Return default metadata on error
    return generateSEOMetadata({
      title: "Weight Loss Solutions",
      path: "/weight-loss-solutions",
    });
  }
}

// Function to get Weight Loss Solutions data from Sanity (no fallback)
async function getWeightLossSolutionsData() {
  try {
    const sanityData = await client.fetch<WeightLossSolutionsPage>(
      WEIGHT_LOSS_SOLUTIONS_QUERY
    );

    if (!sanityData) {
      console.error("No Weight Loss Solutions data found in Sanity CMS");
      return null;
    }

    console.log(
      "✅ Weight Loss Solutions data fetched successfully from Sanity"
    );
    return sanityData;
  } catch (error) {
    console.error(
      "Error fetching Weight Loss Solutions data from Sanity:",
      error
    );
    return null;
  }
}

export default async function WeightLossSolutionsPage() {
  // Fetch data from Sanity (no fallback)
  const sanityData = await getWeightLossSolutionsData();

  // Transform Sanity data - will throw error if no data
  if (!sanityData) {
    throw new Error(
      "Weight Loss Solutions page content not found in Sanity CMS"
    );
  }

  const pageData = transformWeightLossSolutionsData(
    sanityData,
    weightLossIcons
  );

  if (!pageData) {
    throw new Error("Failed to transform Weight Loss Solutions data");
  }

  return (
    <PageTemplate
      main={{
        paddingTop: "none",
        maxWidth: "default",
        padding: "none",
        background: "transparent",
      }}
    >
      {/* Hero Section - Weight Loss Solutions */}
      <WeightLossHeroSection
        heroTitle={pageData.heroContent.heroTitle || ""}
        subtitle={pageData.heroContent.subtitle || ""}
        backgroundImage={pageData.heroContent.backgroundImage}
        primaryCTA={pageData.heroContent.primaryCTA || {}}
        trustFeatures={pageData.heroContent.trustFeatures || []}
        overlay={true}
        overlayOpacity="medium"
        horizontalMargin="md"
        borderRadius="2xl"
      />

      {/* Treatment Benefits Section - Reset your metabolism */}
      <div className="px-4">
        <TreatmentBenefitsSection
          benefits={pageData.treatmentBenefitsData.benefits || []}
        />
      </div>

      {/* Treatment Options Section - Clinically backed weight loss treatments */}
      <TreatmentOptionsSection
        {...pageData.treatmentOptionsData}
        background="transparent"
      />

      {/* Treatments Section - Similar to homepage */}
      <div className="px-4 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      {/* Statistics Section */}
      <div className="mb-[64px]">
        <StatisticsSection
          statisticPreText={pageData.statisticsSection.statisticPreText}
          statisticTimeframe={pageData.statisticsSection.statisticTimeframe}
          statisticPostText={pageData.statisticsSection.statisticPostText}
          calculatorTitle={pageData.statisticsSection.calculatorTitle}
          calculatorDefaultWeight={pageData.statisticsSection.calculatorDefaultWeight}
          calculatorMinWeight={pageData.statisticsSection.calculatorMinWeight}
          calculatorMaxWeight={pageData.statisticsSection.calculatorMaxWeight}
          calculatorWeightLossPercentage={pageData.statisticsSection.calculatorWeightLossPercentage}
          calculatorResultText={pageData.statisticsSection.calculatorResultText}
          calculatorUnit={pageData.statisticsSection.calculatorUnit}
          backgroundImage={pageData.statisticsSection.backgroundImage}
          padding="xl"
        />
      </div>
      {/* Weight Loss Overview Section - Combined layout from screenshot */}
      <div className="px-4">
        <WeightLossOverviewSection {...pageData.weightLossOverviewData} />
      </div>

      {/* Lab Tested Section */}
      <div className="mb-16 px-4">
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
        />
      </div>

      {/* Getting Started Section - How It Works */}
      <div className="px-4 mb-[64px]">
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

      {/* FAQ Section */}
      <div className="px-4 mb-[64px]">
        <FAQSection />
      </div>

      {/* CTA Hero Section */}
      <div className="mb-[64px]">
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
          horizontalMargin="md"
        />
      </div>
    </PageTemplate>
  );
}
