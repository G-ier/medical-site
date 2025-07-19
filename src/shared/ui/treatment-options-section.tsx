import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"

import { Container } from "./container"
import { Heading, Text } from "./typography"
import { MedicationCard, type MedicationCardProps } from "./medication-card"
import { renderStyledText } from '@/shared/ui/render-styled-text'

const treatmentOptionsSectionVariants = cva(
  "py-12 sm:py-16 lg:py-24",
  {
    variants: {
      background: {
        white: "bg-white",
        gray: "bg-gray-50",
        transparent: "bg-transparent",
      },
    },
    defaultVariants: {
      background: "white",
    },
  }
)

export interface TreatmentOptionsSectionProps extends VariantProps<typeof treatmentOptionsSectionVariants> {
  // Section content
  title: React.ReactNode
  subtitle?: string
  
  // Medication cards data
  medications: MedicationCardProps[]
  
  // Layout options
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | "full" | "screen"
  className?: string
}

function TreatmentOptionsSection({
  title,
  subtitle,
  medications,
  background,
  maxWidth = "7xl",
  className,
  ...props
}: TreatmentOptionsSectionProps) {
  return (
    <section 
      className={cn(treatmentOptionsSectionVariants({ background }), className)}
      {...props}
    >
      <Container 
        maxWidth={maxWidth}
        className="px-4"
      >
        {/* Section Header */}
        <div className="text-left mb-8 sm:mb-12 lg:mb-16">
          <Heading 
            level="h2" 
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-3 sm:mb-4 break-words"
          >
            {typeof title === 'string' ? renderStyledText(title) : title}
          </Heading>
          
          {subtitle && (
            <Text 
              variant="body" 
              className="text-base sm:text-lg text-gray-600 max-w-2xl break-words"
            >
              {subtitle}
            </Text>
          )}
        </div>

        {/* Medication Cards Grid - Improved for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-8 lg:gap-12">
          {medications.map((medication, index) => (
            <div 
              key={index}
              className="w-full flex justify-center px-0 sm:px-2"
            >
              <MedicationCard 
                {...medication}
                className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-full"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { TreatmentOptionsSection, treatmentOptionsSectionVariants } 