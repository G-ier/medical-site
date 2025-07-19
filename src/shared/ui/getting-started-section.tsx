"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"

import { Container, Section } from "./container"
import { Heading, Text } from "./typography"
import { Button } from "./button"
import { OptimizedImage } from "./image"
import { ProcessStepCard, type ProcessStepCardProps } from "./process-step-card"

const gettingStartedSectionVariants = cva(
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

export interface GettingStartedSectionProps extends VariantProps<typeof gettingStartedSectionVariants> {
  // Section content
  eyebrow?: string
  title: React.ReactNode
  subtitle: string
  
  // Process steps
  steps: ProcessStepCardProps[]
  
  // Image
  image: {
    src: string
    alt: string
  }
  
  // CTA buttons
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }

  // Additional props
  className?: string
}

function GettingStartedSection({
  eyebrow = "How It Works",
  title,
  subtitle,
  steps,
  image,
  primaryCTA,
  secondaryCTA,
  background,
  className,
  ...props
}: GettingStartedSectionProps) {
  return (
    <Section
      spacing="none"
      className={cn(gettingStartedSectionVariants({ background }), className)}
      {...props}
    >
      <Container maxWidth="9xl" padding="none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div 
              className="rounded-2xl overflow-hidden aspect-square flex items-center justify-center"
              style={{ backgroundColor: '#C4A7FF' }}
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              {eyebrow && (
                <Text
                  variant="caption"
                  className="text-gray-500 font-semibold text-[13px] sm:text-[16px] text-center sm:text-left"
                >
                  {eyebrow}
                </Text>
              )}
              
              <Heading
                level="h2"
                color="primary"
                className="font-bold text-[24px] sm:text-[32px] md:text-[48px] lg:text-[56px] leading-[120%] tracking-[0%] text-center sm:text-left"
              >
                {title}
              </Heading>
              
              <Text
                variant="body"
                className="max-[768px]:hidden text-gray-600 font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[150%] text-center sm:text-left"
              >
                {subtitle}
              </Text>
            </div>

            {/* Process Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <ProcessStepCard
                  key={`step-${index}`}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  variant={step.variant}
                  layout={step.layout}
                />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="default"
                asChild
                className="bg-black text-white hover:bg-gray-800 transition-all rounded-full px-8 py-3 font-medium text-[16px]"
              >
                <a href={primaryCTA.href}>
                  {primaryCTA.text}
                </a>
              </Button>

              {secondaryCTA && (
                <Button
                  variant="ghost"
                  size="default"
                  asChild
                  className="bg-transparent text-black hover:bg-gray-100 transition-all rounded-full px-8 py-3 font-medium text-[16px] inline-flex items-center gap-2"
                >
                  <a href={secondaryCTA.href}>
                    {secondaryCTA.text}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export { GettingStartedSection, gettingStartedSectionVariants } 