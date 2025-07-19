import * as React from "react"
import { cn } from "@/shared/lib/utils"
import { Container } from "./container"
import { Heading } from "./typography"

interface TreatmentBenefit {
  icon: React.ReactNode
  title: string
  description: string
}

interface TreatmentBenefitsSectionProps {
  benefits: TreatmentBenefit[]
  className?: string
}

export function TreatmentBenefitsSection({
  benefits,
  className
}: TreatmentBenefitsSectionProps) {
  return (
    <section className={cn("py-12 sm:py-16 lg:py-24", className)}>
      <Container maxWidth="7xl" className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center mx-auto w-full max-w-[300px]">
              {/* Icon */}
              <div className="mb-3">
                <div className="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] flex items-center justify-center text-gray-700">
                  {typeof benefit.icon === 'function' 
                    ? React.createElement(benefit.icon, { className: "w-[60px] h-[60px] sm:w-[72px] sm:h-[72px]" })
                    : benefit.icon
                  }
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center w-full">
                {/* Title */}
                <Heading 
                  level="h3" 
                  className="text-[18px] sm:text-[20px] font-light text-gray-900 mb-2 leading-tight break-words"
                >
                  {benefit.title}
                </Heading>
                
                {/* Description - only show if available */}
                {benefit.description && (
                  <p className="text-sm sm:text-base text-gray-600 break-words">
                    {benefit.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export type { TreatmentBenefit, TreatmentBenefitsSectionProps } 