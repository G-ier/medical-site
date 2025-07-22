// Base Types
export interface SanityImage {
  asset: {
    _id: string
    url: string
    metadata?: any
  }
  alt: string
  width?: number
  height?: number
}

export interface CTA {
  text: string
  href: string
}

export interface Badge {
  text: string
  variant: 'new' | 'popular' | 'category' | 'featured'
}

export interface TrustIndicator {
  text: string
  icon?: "heart" | "shipping" | "shield" | "phone" | "box"
  isTitle: boolean
  highlighted: boolean
}

// Section Types
export interface HeroSection {
  heroTitle: any[] // Rich text blocks
  subtitle: string
  backgroundImage: SanityImage
  primaryCTA: CTA
  secondaryCTA?: CTA
}

export interface TreatmentCard {
  title: string
  description: string
  image: SanityImage
  category: string
  ctaText: string
  ctaUrl: string
}

export interface TreatmentsSection {
  title?: any[] // Rich text blocks
  subtitle?: string
  description?: string
  treatments: TreatmentCard[]
  viewAllText?: string
  viewAllUrl?: string
}

export interface CategoryCard {
  title: string
  image: SanityImage
  cta: CTA
}

export interface CategoriesSection {
  title: any[] // Rich text blocks
  categories: CategoryCard[]
}

export interface StatisticsSection {
  statisticPreText: string
  statisticTimeframe: string
  statisticPostText: string
  calculatorTitle: string
  calculatorDefaultWeight: number
  calculatorMinWeight: number
  calculatorMaxWeight: number
  calculatorWeightLossPercentage: number
  calculatorResultText: string
  calculatorUnit: string
  backgroundImage: SanityImage
}

export interface ProcessStep {
  title: string
}

export interface GettingStartedSection {
  title: string
  subtitle: string
  image: SanityImage
  steps: ProcessStep[]
  primaryCTA: CTA
  secondaryCTA?: CTA
}

export interface ValueProposition {
  title: string
  description: string
  image: SanityImage
}

export interface WhyChooseSection {
  title: any[] // Rich text blocks
  subtitle: string
  valuePropositions: ValueProposition[]
}

export interface TestimonialAuthor {
  name: string
  position: string
  company: string
  avatar: SanityImage
}

export interface Testimonial {
  companyLogo: SanityImage
  quote: string
  author: TestimonialAuthor
}

export interface TestimonialsSection {
  title: string
  testimonials: Testimonial[]
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQSection {
  title: string
  subtitle: string
  subtitleLinkText: string
  subtitleLinkUrl: string
  faqs: FAQItem[]
  contactTitle: string
  contactDescription: string
  contactButtonText: string
  contactButtonUrl: string
}

export interface InfoBarSection {
  trustIndicators: TrustIndicator[]
}

export interface WeightLossIntroSection {
  title: string
  subtitle: string
  medications: {
    title: string
    price: string
    cta: CTA
    image?: SanityImage
  }[]
}

// About Us Page Types (Content Only)
export interface Doctor {
  _id: string
  name: string
  title: string
  image: SanityImage
  bio?: string
  displayOrder?: number
}

export interface LabTest {
  testName: string
  statusLabel: string
  details?: string
}

export interface Feature {
  label: string
  description?: string
}

export interface MedicalExpertsSection {
  title: any[] // Rich text blocks
  subtitle?: string
  description?: string
  doctors: Doctor[]
}

export interface LabTestedSection {
  title: any[] // Rich text blocks
  description: string
  additionalDescription?: string
  backgroundImage: SanityImage
  tests: LabTest[]
  featuresTitle: string
  featuresDescription: string
  features: Feature[]
}

// Homepage Type (Content Only)
export interface Homepage {
  _id: string
  title: string
  weightLossIntroSection?: WeightLossIntroSection
  heroSection: HeroSection
  treatmentsSection: TreatmentsSection
  categoriesSection: CategoriesSection
  statisticsSection: StatisticsSection
  gettingStartedSection: GettingStartedSection
  whyChooseSection: WhyChooseSection
  testimonialsSection: TestimonialsSection
  ctaHeroSection: HeroSection
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

// About Us Page Type (Content Only)
export interface AboutUsPage {
  _id: string
  title: string
  heroSection: HeroSection
  medicalExpertsSection: MedicalExpertsSection
  labTestedSection: LabTestedSection
  treatmentsSection: TreatmentsSection
  categoriesSection: CategoriesSection
  gettingStartedSection: GettingStartedSection
  testimonialsSection: TestimonialsSection
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

// Weight Loss Solutions Page Types
export interface TrustFeature {
  iconType: string
  text: string
}

export interface WeightLossHeroSection {
  heroTitle: any[] // Rich text blocks
  subtitle: string
  backgroundImage: SanityImage
  primaryCTA: CTA
  trustFeatures: TrustFeature[]
}

export interface TreatmentBenefit {
  title: string
  description?: string
  iconType: string
}

export interface TreatmentBenefitsSection {
  benefits: TreatmentBenefit[]
}

export interface MedicationOption {
  image: SanityImage
  title: string
  subtitle: string
  price: string
  planDuration: string
  primaryCTA: CTA
  secondaryCTA: CTA
  safetyInfo?: CTA
}

export interface TreatmentOptionsSection {
  title: any[] // Rich text blocks
  medications: MedicationOption[]
}

export interface WeightLossStatistic {
  preText: string
  mainText: string
  percentage: string
  timeframe: string
  titleAboveDescription?: string
  description: string
}

export interface HealthGainsCard {
  title: string
  description: string
  image: SanityImage
}

export interface OverlappingImages {
  primaryImage: SanityImage
  secondaryImage: SanityImage
}

export interface SuperchargeGoal {
  image: SanityImage
  title: string
  description: string
}

export interface SuperchargeGoals {
  mainText: string
  highlightedText: string
  goals: SuperchargeGoal[]
}

export interface WeightLossOverviewSection {
  firstStatistic: WeightLossStatistic
  secondStatistic: WeightLossStatistic
  healthGainsCard: HealthGainsCard
  overlappingImages: OverlappingImages
  superchargeGoals: SuperchargeGoals
}

// Weight Loss Solutions Page Type (Content Only)
export interface WeightLossSolutionsPage {
  _id: string
  title: string
  heroSection: WeightLossHeroSection
  treatmentBenefitsSection: TreatmentBenefitsSection
  treatmentsSection: TreatmentsSection
  treatmentOptionsSection: TreatmentOptionsSection
  statisticsSection: StatisticsSection
  weightLossOverviewSection: WeightLossOverviewSection
  labTestedSection: LabTestedSection
  gettingStartedSection: GettingStartedSection
  ctaHeroSection: HeroSection
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

// Contact Page Types
export interface ContactInfo {
  phone: string
  email: string
  office: {
    address: string
    city: string
  }
}

export interface ContactHeroSection {
  heroTitle: string
  subtitle: string
  backgroundImage: SanityImage
  primaryCTA: CTA
  secondaryCTA?: CTA
  contactInfo: ContactInfo
}

export interface ContactPage {
  _id: string
  title: string
  contactHeroSection: ContactHeroSection
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
} 