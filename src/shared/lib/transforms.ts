import type { 
  Homepage, 
  SanityImage, 
  HeroSection as SanityHeroSection,
  TreatmentsSection as SanityTreatmentsSection,
  CategoriesSection as SanityCategoriesSection,
  StatisticsSection as SanityStatisticsSection,
  GettingStartedSection as SanityGettingStartedSection,
  WhyChooseSection as SanityWhyChooseSection,
  TestimonialsSection as SanityTestimonialsSection,
  FAQSection as SanityFAQSection,
  InfoBarSection as SanityInfoBarSection,
  AboutUsPage,
  MedicalExpertsSection as SanityMedicalExpertsSection,
  LabTestedSection as SanityLabTestedSection,
  Feature,
  LabTest,
  WeightLossSolutionsPage,
  WeightLossHeroSection as SanityWeightLossHeroSection,
  TreatmentBenefitsSection as SanityTreatmentBenefitsSection,
  TreatmentOptionsSection as SanityTreatmentOptionsSection,
  WeightLossOverviewSection as SanityWeightLossOverviewSection,
  TrustFeature,
  ContactPage,
  ContactHeroSection as SanityContactHeroSection,
} from '@/shared/types/sanity'
import type { 
  DoctorCardProps,
  LabTestItemProps,
  FeatureItem,
} from '@/shared/ui'
import { getSanityImageUrl } from './sanity'

// Transform Sanity image to component image format
export function transformImage(sanityImage: SanityImage | null) {
  
  if (!sanityImage) {
    console.log('❌ No sanityImage provided')
    return {
      src: '/placeholder-image.png', // Fallback image
      alt: 'Placeholder image',
      width: 400,
      height: 300,
    }
  }
  
  if (!sanityImage.asset) {
    console.log('❌ No asset in sanityImage')
    return {
      src: '/placeholder-image.png', // Fallback image
      alt: 'Placeholder image',
      width: 400,
      height: 300,
    }
  }
  
  try {
    // Get direct image URL from Sanity
    const imageUrl = getSanityImageUrl(sanityImage);
    
    if (!imageUrl || typeof imageUrl !== 'string' || imageUrl.trim() === '') {
      console.log('❌ Failed to generate URL for Sanity image')
      return {
        src: '/placeholder-image.png',
        alt: 'Placeholder image',
        width: 400,
        height: 300,
      }
    }

    console.log('✅ Generated direct Sanity image URL:', imageUrl)
    
    return {
      src: imageUrl,
      alt: sanityImage.alt || 'Image',
      width: sanityImage.width || 400,
      height: sanityImage.height || 300,
    }
  } catch (error) {
    console.log('❌ Error generating image URL:', error)
    return {
      src: '/placeholder-image.png',
      alt: 'Placeholder image',
      width: 400,
      height: 300,
    }
  }
}

// Transform rich text to JSX (simplified version)
export function transformRichText(richText: any[]) {
  // For now, return simple text - can be enhanced later for full rich text support
  return richText
    ?.map(block => block.children?.map((child: any) => child.text).join(''))
    .join('\n') || ''
}

// Transform hero section
export function transformHeroSection(sanityData: SanityHeroSection) {
  return {
    heroTitle: transformRichText(sanityData.heroTitle),
    subtitle: sanityData.subtitle,
    backgroundImage: transformImage(sanityData.backgroundImage),
    primaryCTA: sanityData.primaryCTA,
    secondaryCTA: sanityData.secondaryCTA,
  }
}

// Transform treatments section
export function transformTreatmentsSection(sanityData: SanityTreatmentsSection) {
  return {
    title: transformRichText(sanityData.title),
    subtitle: sanityData.subtitle,
    description: sanityData.description,
    treatments: sanityData.treatments.map(treatment => ({
      ...treatment,
      image: transformImage(treatment.image),
    })),
    viewAllText: sanityData.viewAllText,
    viewAllUrl: sanityData.viewAllUrl,
  }
}

// Transform categories section
export function transformCategoriesSection(sanityData: SanityCategoriesSection) {
  return {
    title: transformRichText(sanityData.title),
    categories: sanityData.categories.map(category => ({
      ...category,
      image: transformImage(category.image),
    })),
  }
}

// Transform statistics section
export function transformStatisticsSection(sanityData: SanityStatisticsSection) {
  return {
    ...sanityData,
    backgroundImage: transformImage(sanityData.backgroundImage),
  }
}

// Transform getting started section
export function transformGettingStartedSection(sanityData: SanityGettingStartedSection) {
  return {
    ...sanityData,
    image: transformImage(sanityData.image),
  }
}

// Transform why choose section
export function transformWhyChooseSection(sanityData: SanityWhyChooseSection) {
  return {
    title: transformRichText(sanityData.title),
    subtitle: sanityData.subtitle,
    valuePropositions: sanityData.valuePropositions.map(prop => ({
      ...prop,
      image: transformImage(prop.image),
    })),
  }
}

// Transform testimonials section
export function transformTestimonialsSection(sanityData: SanityTestimonialsSection) {
  return {
    title: sanityData.title,
    testimonials: sanityData.testimonials.map(testimonial => ({
      ...testimonial,
      companyLogo: transformImage(testimonial.companyLogo),
      author: {
        ...testimonial.author,
        avatar: transformImage(testimonial.author.avatar),
      },
    })),
  }
}

// Transform FAQ section
export function transformFAQSection(sanityData: SanityFAQSection) {
  return {
    ...sanityData,
    faqs: sanityData.faqs.map((faq, index) => ({
      id: `faq-${index}`,
      ...faq,
    })),
  }
}

// Transform info bar section
export function transformInfoBarSection(sanityData: SanityInfoBarSection | null) {
  if (!sanityData || !sanityData.trustIndicators) {
    return {
      trustIndicators: []
    }
  }
  
  return {
    trustIndicators: sanityData.trustIndicators.map((indicator, index) => ({
      id: `indicator-${index}`,
      text: indicator.text,
      icon: indicator.icon,
      highlighted: indicator.highlighted,
      isTitle: indicator.isTitle
    })),
  }
}



// Main transform function for entire homepage
export function transformHomepageData(sanityData: Homepage | null) {
  if (!sanityData) {
    return null
  }
  
  return {
    weightLossIntroSection: sanityData.weightLossIntroSection || null,
    heroSection: transformHeroSection(sanityData.heroSection),
    treatmentsSection: transformTreatmentsSection(sanityData.treatmentsSection),
    categoriesSection: transformCategoriesSection(sanityData.categoriesSection),
    statisticsSection: transformStatisticsSection(sanityData.statisticsSection),
    gettingStartedSection: transformGettingStartedSection(sanityData.gettingStartedSection),
    whyChooseSection: transformWhyChooseSection(sanityData.whyChooseSection),
    testimonialsSection: transformTestimonialsSection(sanityData.testimonialsSection),
    ctaHeroSection: transformHeroSection(sanityData.ctaHeroSection),
  }
}


// Transform doctor data from Sanity to component props
function transformDoctor(doctor: any): DoctorCardProps {
  return {
    image: transformImage(doctor.image) || { src: '/doctor.png', alt: doctor.name },
    name: doctor.name,
    title: doctor.title,
  }
}

// Transform lab test data from Sanity to component props
function transformLabTest(test: LabTest): LabTestItemProps {
  return {
    testName: test.testName,
    status: 'passed', // Hardcoded since UI only supports passed/failed
    statusLabel: test.statusLabel,
    showDropdown: Boolean(test.details), // Show dropdown if details exist
  }
}

// Transform feature data from Sanity to component props
function transformFeature(feature: Feature, icons: any): FeatureItem {
  // Map feature label to icon component
  const getIconForLabel = (label: string) => {
    if (label.toLowerCase().includes('cruelty')) {
      console.log('Found cruelty label, icon exists:', !!icons.crueltyFree);
      return icons.crueltyFree;
    }
    if (label.toLowerCase().includes('eco')) {
      console.log('Found eco label, icon exists:', !!icons.ecoFriendly);
      return icons.ecoFriendly;
    }
    if (label.toLowerCase().includes('paraben')) {
      console.log('Found paraben label, icon exists:', !!icons.parabenFree);
      return icons.parabenFree;
    }
    if (label.toLowerCase().includes('silicone')) {
      console.log('Found silicone label, icon exists:', !!icons.siliconeFree);
      return icons.siliconeFree;
    }
    if (label.toLowerCase().includes('sulfate')) {
      console.log('Found sulfate label, icon exists:', !!icons.sulfateFree);
      return icons.sulfateFree;
    }
    if (label.toLowerCase().includes('gluten')) {
      console.log('Found gluten label, icon exists:', !!icons.glutenFree);
      return icons.glutenFree;
    }
    console.log('No matching label, using default icon');
    return icons.science || icons.crueltyFree; // Default fallback
  }

  const icon = getIconForLabel(feature.label);
  console.log(`Feature "${feature.label}" mapped to icon:`, icon ? 'Icon found' : 'Icon missing');

  return {
    icon: icon,
    label: feature.label.replace(' ', '\n'), // Add line break for display
  }
}

// Transform Medical Experts Section from Sanity to component props
export function transformMedicalExpertsSection(
  section: SanityMedicalExpertsSection
) {
  // Sort doctors by display order
  const sortedDoctors = [...section.doctors].sort((a, b) => 
    (a.displayOrder || 999) - (b.displayOrder || 999)
  )

  return {
    title: transformRichText(section.title),
    doctors: sortedDoctors.map(transformDoctor),
  }
}

// Transform Lab Tested Section from Sanity to component props
export function transformLabTestedSection(
  section: SanityLabTestedSection,
  featureIcons: any
) {
  const backgroundImg = transformImage(section.backgroundImage);
  
  return {
    title: transformRichText(section.title),
    description: section.description,
    additionalDescription: section.additionalDescription,
    tests: section.tests.map(transformLabTest),
    backgroundImage: backgroundImg || {
      src: '/lab-testing-hand.png',
      alt: 'Lab testing quality assurance',
      width: 600,
      height: 400,
    },
    featuresTitle: section.featuresTitle,
    featuresDescription: section.featuresDescription,
    features: section.features? section.features.map(feature => transformFeature(feature, featureIcons)) : [],
  }
}

// Transform About Us page data from Sanity
export function transformAboutUsData(data: AboutUsPage, featureIcons: any) {

  return {
    heroContent: {
      heroTitle: transformRichText(data.heroSection.heroTitle),
      subtitle: data.heroSection.subtitle,
      backgroundImage: transformImage(data.heroSection.backgroundImage) || {
        src: '/hero-woman-drinking.png',
        alt: 'Woman drinking water - healthy lifestyle',
        priority: true,
      },
      primaryCTA: data.heroSection.primaryCTA,
      secondaryCTA: data.heroSection.secondaryCTA,
    },
    medicalExpertsData: transformMedicalExpertsSection(data.medicalExpertsSection),
    labTestedData: transformLabTestedSection(data.labTestedSection, featureIcons),
    treatmentsData: {
      title: transformRichText(data.treatmentsSection.title),
      subtitle: data.treatmentsSection.subtitle,
      description: data.treatmentsSection.description,
      treatments: data.treatmentsSection.treatments.map(treatment => ({
        ...treatment,
        image: transformImage(treatment.image) || { src: '/treatment-default.png', alt: treatment.title },
      })),
      viewAllText: data.treatmentsSection.viewAllText,
      viewAllUrl: data.treatmentsSection.viewAllUrl,
    },
    categoriesData: {
      title: transformRichText(data.categoriesSection.title),
      categories: data.categoriesSection.categories.map(category => ({
        ...category,
        image: transformImage(category.image) || { src: '/category-default.png', alt: category.title },
      })),
    },
    gettingStartedData: {
      ...data.gettingStartedSection,
      image: transformImage(data.gettingStartedSection.image) || { src: '/getting-started-default.png', alt: 'Getting started' },
    },
    testimonialsData: {
      title: data.testimonialsSection.title,
      testimonials: data.testimonialsSection.testimonials.map(testimonial => ({
        ...testimonial,
        companyLogo: transformImage(testimonial.companyLogo) || { 
          src: '/company-logo-default.png', 
          alt: testimonial.author.company || 'Company logo',
          width: 120,
          height: 40
        },
        author: {
          ...testimonial.author,
          avatar: transformImage(testimonial.author.avatar) || {
            src: '/avatar-default.png',
            alt: testimonial.author.name,
            width: 60,
            height: 60
          }
        }
      })),
    },
    seo: data.seo,
  }
}

// Icon mapping for weight loss specific components
export function getIconForType(iconType: string, icons: any) {
  const iconMap = {
    metabolism: icons.MetabolismIcon,
    appetiteControl: icons.AppetiteControlIcon,
    weightSupport: icons.WeightSupportIcon,
    science: icons.ScienceIcon,
    pill: icons.PillIcon,
    shieldCheck: icons.ShieldCheckIcon,
  }
  
  return iconMap[iconType as keyof typeof iconMap] || icons.ScienceIcon
}

// Transform Weight Loss Hero Section
function transformWeightLossHeroSection(sanityData: SanityWeightLossHeroSection, icons: any) {
  return {
    heroTitle: transformRichText(sanityData.heroTitle),
    subtitle: sanityData.subtitle,
    backgroundImage: transformImage(sanityData.backgroundImage) || {
      src: '/hero-weight-loss.jpg',
      alt: 'Weight loss transformation',
      priority: true,
    },
    primaryCTA: sanityData.primaryCTA,
    trustFeatures: sanityData.trustFeatures.map((feature: TrustFeature) => ({
      icon: getIconForType(feature.iconType, icons),
      text: feature.text,
    })),
  }
}

// Transform Treatment Benefits Section
function transformTreatmentBenefitsSection(sanityData: SanityTreatmentBenefitsSection, icons: any) {
  return {
    benefits: sanityData.benefits.map(benefit => ({
      icon: getIconForType(benefit.iconType, icons),
      title: benefit.title,
      description: benefit.description || '',
    })),
  }
}

// Transform Treatment Options Section
function transformTreatmentOptionsSection(sanityData: SanityTreatmentOptionsSection) {
  return {
    title: transformRichText(sanityData.title),
    medications: sanityData.medications.map(medication => ({
      image: transformImage(medication.image) || {
        src: '/hand.png',
        alt: medication.title,
        width: 400,
        height: 300,
      },
      title: medication.title,
      subtitle: medication.subtitle,
      price: medication.price,
      planDuration: medication.planDuration,
      primaryCTA: medication.primaryCTA,
      secondaryCTA: medication.secondaryCTA,
      safetyInfo: medication.safetyInfo,
    })),
  }
}

// Transform Weight Loss Overview Section
function transformWeightLossOverviewSection(sanityData: SanityWeightLossOverviewSection) {
  return {
    firstStatistic: {
      preText: sanityData.firstStatistic.preText,
      mainText: sanityData.firstStatistic.mainText,
      percentage: sanityData.firstStatistic.percentage,
      timeframe: sanityData.firstStatistic.timeframe,
      description: sanityData.firstStatistic.description,
      variant: 'centered' as const,
    },
    secondStatistic: {
      preText: sanityData.secondStatistic.preText,
      mainText: sanityData.secondStatistic.mainText,
      percentage: sanityData.secondStatistic.percentage,
      timeframe: sanityData.secondStatistic.timeframe,
      titleAboveDescription: sanityData.secondStatistic.titleAboveDescription,
      description: sanityData.secondStatistic.description,
      variant: 'centered' as const,
    },
    healthGainsCard: {
      title: sanityData.healthGainsCard.title,
      description: sanityData.healthGainsCard.description,
      image: transformImage(sanityData.healthGainsCard.image) || {
        src: '/health-gains-woman.jpg',
        alt: 'Health transformation',
      },
      variant: 'default' as const,
    },
    overlappingImages: {
      primaryImage: transformImage(sanityData.overlappingImages.primaryImage) || {
        src: '/overlapping-image-1.png',
        alt: 'Primary transformation image',
        width: 340,
        height: 430,
      },
      secondaryImage: transformImage(sanityData.overlappingImages.secondaryImage) || {
        src: '/overlapping-image-2.png',
        alt: 'Secondary transformation image',
        width: 340,
        height: 430,
      },
      layout: 'default' as const,
      overlap: 'medium' as const,
      borderRadius: 'xl' as const,
    },
    superchargeGoals: {
      title: {
        mainText: sanityData.superchargeGoals.mainText,
        highlightedText: sanityData.superchargeGoals.highlightedText,
      },
      goals: sanityData.superchargeGoals.goals.map(goal => ({
        image: goal.image,
        title: goal.title,
        description: goal.description,
      })),
      variant: 'default' as const,
    },
  }
}

// Main transform function for Weight Loss Solutions page
export function transformWeightLossSolutionsData(sanityData: WeightLossSolutionsPage, icons: any) {
  if (!sanityData) {
    return null
  }
  
  return {
    heroContent: transformWeightLossHeroSection(sanityData.heroSection, icons),
    treatmentBenefitsData: transformTreatmentBenefitsSection(sanityData.treatmentBenefitsSection, icons),
    treatmentsData: transformTreatmentsSection(sanityData.treatmentsSection),
    treatmentOptionsData: transformTreatmentOptionsSection(sanityData.treatmentOptionsSection),
    statisticsSection: transformStatisticsSection(sanityData.statisticsSection),
    weightLossOverviewData: transformWeightLossOverviewSection(sanityData.weightLossOverviewSection),
    labTestedData: transformLabTestedSection(sanityData.labTestedSection, icons),
    gettingStartedData: {
      ...sanityData.gettingStartedSection,
      image: transformImage(sanityData.gettingStartedSection.image) || { 
        src: '/slider.png', 
        alt: 'Getting started process' 
      },
    },
    ctaHeroContent: transformHeroSection(sanityData.ctaHeroSection),
    seo: sanityData.seo,
  }
}

// Contact Page Transform Function
export function transformContactData(data: ContactPage) {
  if (!data?.contactHeroSection) {
    throw new Error('Contact page data is missing required contactHeroSection')
  }

  const transformedContactHero = transformContactHeroSection(data.contactHeroSection)

  return {
    contactHeroData: transformedContactHero,
    seo: data.seo || {},
  }
}

// Contact Hero Section Transform
function transformContactHeroSection(section: SanityContactHeroSection) {
  return {
    heroTitle: section.heroTitle,
    subtitle: section.subtitle,
    backgroundImage: transformImage(section.backgroundImage),
    primaryCTA: section.primaryCTA,
    secondaryCTA: section.secondaryCTA,
    contactInfo: {
      phone: section.contactInfo.phone,
      email: section.contactInfo.email,
      office: {
        address: section.contactInfo.office.address,
        city: section.contactInfo.office.city,
      },
    },
  }
} 