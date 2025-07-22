// Shared/Reusable Components
import { imageSchema } from './shared/image'
import { ctaSchema } from './shared/cta'
import { richTextSchema } from './shared/richText'
import { badgeSchema } from './shared/badge'
import { treatmentSchema } from './shared/treatment'
import { globalFAQSchema } from './shared/globalFAQ'
import { globalInfoBarSchema } from './shared/globalInfoBar'
import { globalFooterSchema } from './shared/globalFooter'
import { doctorSchema } from './shared/doctor'

// Page Sections
import { heroSectionSchema } from './sections/heroSection'
import { treatmentsSectionSchema } from './sections/treatmentsSection'
import { categoriesSectionSchema } from './sections/categoriesSection'
import { statisticsSectionSchema } from './sections/statisticsSection'
import { gettingStartedSectionSchema } from './sections/gettingStartedSection'
import { whyChooseSectionSchema } from './sections/whyChooseSection'
import { testimonialsSectionSchema } from './sections/testimonialsSection'
import { faqSectionSchema } from './sections/faqSection'
import { infoBarSectionSchema } from './sections/infoBarSection'
import { medicalExpertsSectionSchema } from './sections/medicalExpertsSection'
import { labTestedSectionSchema } from './sections/labTestedSection'
import { treatmentBenefitsSectionSchema } from './sections/treatmentBenefitsSection'
import { treatmentOptionsSectionSchema } from './sections/treatmentOptionsSection'
import { weightLossOverviewSectionSchema } from './sections/weightLossOverviewSection'
import { contactHeroSectionSchema } from './sections/contactHeroSection'
import weightLossIntroSectionSchema from './sections/weightLossIntroSection'

// Pages
import { homepageSchema } from './pages/homepage'
import { aboutUsPageSchema } from './pages/aboutUsPage'
import { weightLossSolutionsPageSchema } from './pages/weightLossSolutionsPage'
import { contactPageSchema } from './pages/contactPage'
import { legalPageSchema } from './pages/legalPage'

// Re-export all schemas
export {
  imageSchema,
  ctaSchema,
  richTextSchema,
  badgeSchema,
  treatmentSchema,
  globalFAQSchema,
  globalInfoBarSchema,
  globalFooterSchema,
  doctorSchema,
  heroSectionSchema,
  treatmentsSectionSchema,
  categoriesSectionSchema,
  statisticsSectionSchema,
  gettingStartedSectionSchema,
  whyChooseSectionSchema,
  testimonialsSectionSchema,
  faqSectionSchema,
  infoBarSectionSchema,
  medicalExpertsSectionSchema,
  labTestedSectionSchema,
  treatmentBenefitsSectionSchema,
  treatmentOptionsSectionSchema,
  weightLossOverviewSectionSchema,
  contactHeroSectionSchema,
  weightLossIntroSectionSchema,
  homepageSchema,
  aboutUsPageSchema,
  weightLossSolutionsPageSchema,
  contactPageSchema,
  legalPageSchema,
}

// Schema Types Array for Sanity Studio
export const schemaTypes = [
  // Shared components (must be defined first as they are referenced by sections)
  imageSchema,
  ctaSchema,
  richTextSchema,
  badgeSchema,
  
  // Global components (singletons)
  globalFAQSchema,
  globalInfoBarSchema,
  globalFooterSchema,
  
  // Document types
  treatmentSchema,
  doctorSchema,
  
  // Page sections
  heroSectionSchema,
  treatmentsSectionSchema,
  categoriesSectionSchema,
  statisticsSectionSchema,
  gettingStartedSectionSchema,
  whyChooseSectionSchema,
  testimonialsSectionSchema,
  faqSectionSchema,
  infoBarSectionSchema,
  medicalExpertsSectionSchema,
  labTestedSectionSchema,
  treatmentBenefitsSectionSchema,
  treatmentOptionsSectionSchema,
  weightLossOverviewSectionSchema,
  contactHeroSectionSchema,
  weightLossIntroSectionSchema,
  
  // Pages (must be defined last as they reference sections)
  homepageSchema,
  aboutUsPageSchema,
  weightLossSolutionsPageSchema,
  contactPageSchema,
  legalPageSchema,
] 