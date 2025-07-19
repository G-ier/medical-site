import { Container } from "./container"
import { Heading, Text } from "./typography"
import { Button } from "./button"
import { FAQItem } from "./faq-item"
import { cn } from "@/shared/lib/utils"
import { getGlobalFAQ } from "@/shared/lib/globalData"

// Individual FAQ Item Interface
export interface FAQItemData {
  id: string
  question: string
  answer: string
  isOpenByDefault?: boolean
}

// FAQ Section Props Interface - all props now optional for internal data loading
export interface FAQSectionProps {
  title?: string
  subtitle?: string
  subtitleLinkText?: string
  subtitleLinkUrl?: string
  faqs?: FAQItemData[]
  contactTitle?: string
  contactDescription?: string
  contactButtonText?: string
  contactButtonUrl?: string
  className?: string
}

// FAQ Section Component (Organism) - now with internal data loading
export async function FAQSection({
  title,
  subtitle,
  subtitleLinkText,
  subtitleLinkUrl,
  faqs,
  contactTitle,
  contactDescription,
  contactButtonText,
  contactButtonUrl,
  className
}: FAQSectionProps) {
  // Load global FAQ data internally if no props provided
  let faqData = {
    title: title || "FAQs",
    subtitle: subtitle || "Still have questions?",
    subtitleLinkText: subtitleLinkText || "Send us a message.",
    subtitleLinkUrl: subtitleLinkUrl || "/contact",
    faqs: faqs || [],
    contactTitle: contactTitle || "Still have questions?",
    contactDescription: contactDescription || "We would love to talk!",
    contactButtonText: contactButtonText || "Contact",
    contactButtonUrl: contactButtonUrl || "/contact"
  }

  // If no FAQ data provided via props, load from global data
  if (!faqs) {
    try {
      const globalFAQ = await getGlobalFAQ()
      if (globalFAQ) {
        faqData = {
          title: globalFAQ.title,
          subtitle: globalFAQ.subtitle,
          subtitleLinkText: globalFAQ.subtitleLinkText,
          subtitleLinkUrl: globalFAQ.subtitleLinkUrl,
          faqs: globalFAQ.faqs.map((faq, index) => ({
            id: `faq-${index}`,
            ...faq,
          })),
          contactTitle: globalFAQ.contactTitle,
          contactDescription: globalFAQ.contactDescription,
          contactButtonText: globalFAQ.contactButtonText,
          contactButtonUrl: globalFAQ.contactButtonUrl
        }
      }
    } catch (error) {
      console.error('Error loading global FAQ data:', error)
      // Fallback to default values already set above
    }
  }

  return (
    <section className={cn("py-16 bg-white", className)}>
      <Container maxWidth="7xl">
        {/* Section Header */}
        <div className="mb-12">
          <Heading 
            level="h2" 
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            {faqData.title}
          </Heading>
          
          {faqData.subtitle && (
            <Text className="text-lg text-gray-600">
              {faqData.subtitle}{" "}
              {faqData.subtitleLinkText && faqData.subtitleLinkUrl && (
                <a 
                  href={faqData.subtitleLinkUrl}
                  className="text-gray-600 hover:text-gray-800 underline font-medium"
                >
                  {faqData.subtitleLinkText}
                </a>
              )}
            </Text>
          )}
        </div>

        {/* FAQ Items */}
        <div className="mb-16">
          <div className="divide-y divide-gray-200">
            {faqData.faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpenByDefault={faq.isOpenByDefault}
              />
            ))}
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="flex flex-col  max-w-[300px]">
          <Heading 
            level="h3" 
            className="text-2xl font-bold text-gray-900 mb-2"
          >
            {faqData.contactTitle}
          </Heading>
          
          <Text className="text-gray-600 mb-6">
            {faqData.contactDescription}
          </Text>
          
          <Button 
            variant="default"
            href={faqData.contactButtonUrl}
            className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full font-medium w-[128px] inline-flex"
          >
            {faqData.contactButtonText}
          </Button>
        </div>
      </Container>
    </section>
  )
}

// FAQ Section Variants
export const faqSectionVariants = {
  default: "py-16 bg-white",
  compact: "py-12 bg-white",
  spacious: "py-24 bg-white",
  gray: "py-16 bg-gray-50"
} 