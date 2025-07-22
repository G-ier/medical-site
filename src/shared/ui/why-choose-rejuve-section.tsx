import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"
import { Container, Section } from "./container"
import { Heading, Text } from "./typography"
import { ValueProposition, type ValuePropositionProps } from "./value-proposition"
import { renderStyledText } from "@/shared/ui/render-styled-text"

const whyChooseSectionVariants = cva(
  "",
  {
    variants: {
      background: {
        default: "bg-white",
        gray: "bg-gray-50",
        gradient: "bg-gradient-to-b from-white to-gray-50",
      },
    },
    defaultVariants: {
      background: "default",
    },
  }
)

export interface WhyChooseSectionProps extends 
  VariantProps<typeof whyChooseSectionVariants> {
  // Section content
  title: string
  subtitle: string
  
  // Value propositions
  valuePropositions: ValuePropositionProps[]
  
  // Additional props
  className?: string
}

function WhyChooseSection({
  title,
  subtitle,
  valuePropositions,
  background,
  className,
  ...props
}: WhyChooseSectionProps) {
  return (
    <Section 
      className={cn(whyChooseSectionVariants({ background }), 'py-0', className)}
      {...props}
    >
      <Container maxWidth="9xl" className="px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 2xl:gap-16">
          {/* Left Column - Title and Description */}
          <div className="flex flex-col h-[824px] lg:h-[1032px] xl:h-[1240px] 2xl:h-[1448px] lg:pr-4 xl:pr-6 2xl:pr-8 max-[768px]:text-center">
            <div className="space-y-4 mb-6 lg:mb-8">
              <Heading
                level="h2"
                color="primary"
                className="text-2xl lg:text-[40px] xl:text-[48px] 2xl:text-[56px] font-bold leading-[120%] tracking-[0%]"
              >
                {renderStyledText(title)}
              </Heading>
              
              <Text
                variant="body"
                className="text-gray-600 font-normal text-sm lg:text-base xl:text-lg leading-[150%]"
              >
                {subtitle}
              </Text>
            </div>

            {/* First value proposition (Safe, Clean, and Simple) - Card Style - Full Height */}
            {valuePropositions[0] && (
              <div className="flex-1">
                <div className="bg-card-bg rounded-xl h-full flex flex-col justify-center">
                  <ValueProposition
                    title={valuePropositions[0].title}
                    description={valuePropositions[0].description}
                    image={valuePropositions[0].image}
                    variant="fullscreen"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Value Propositions Grid */}
          <div className="flex flex-col space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
            {/* Top value proposition (Access to licensed providers) - Card Style */}
            {valuePropositions[1] && (
              <div className="bg-card-bg rounded-xl overflow-hidden h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
                <div className="p-4 lg:p-6 h-full">
                  <ValueProposition
                    title={valuePropositions[1].title}
                    description={valuePropositions[1].description}
                    image={valuePropositions[1].image}
                    variant="horizontal"
                  />
                </div>
              </div>
            )}

            {/* Bottom value proposition (Ongoing Support) - Card Style */}
            {valuePropositions[2] && (
              <div className="bg-card-bg rounded-xl overflow-hidden h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
                <div className="p-4 lg:p-6 h-full">
                  <ValueProposition
                    title={valuePropositions[2].title}
                    description={valuePropositions[2].description}
                    image={valuePropositions[2].image}
                    variant="horizontal"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export { WhyChooseSection, whyChooseSectionVariants }