import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"

import { OptimizedImage } from "./image"
import { Text, Heading } from "./typography"
import { Button } from "./button"

const medicationCardVariants = cva(
  "group relative overflow-hidden rounded-2xl bg-card-bg transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
  {
    variants: {
      variant: {
        default: "",
        featured: "border-2 border-blue-500 shadow-lg",
      },
      size: {
        default: "w-full max-w-[500px]",
        compact: "max-w-[400px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface MedicationCardProps extends VariantProps<typeof medicationCardVariants> {
  // Image properties
  image: {
    src: string
    alt: string
    width?: number
    height?: number
  }

  // Content properties
  title: string
  subtitle: string
  price: string
  planDuration?: string

  // CTA properties
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA: {
    text: string
    href: string
  }

  // Disclaimer
  safetyInfo?: {
    text: string
    href: string
  }

  // Additional props
  className?: string
}

function MedicationCard({
  image,
  title,
  subtitle,
  price,
  planDuration,
  primaryCTA,
  secondaryCTA,
  safetyInfo,
  variant,
  size,
  className,
  ...props
}: MedicationCardProps) {
  return (
    <div className="relative w-full mx-auto flex flex-col items-center">
      <div
        className={cn(medicationCardVariants({ variant, size }), "w-full flex flex-col", className)}
        style={{ aspectRatio: "5/6" }}
        {...props}
      >
        {/* Text Content - Top */}
        <div className="p-4 sm:p-6 pb-2 sm:pb-4">
          {/* Title */}
          <div className="border-b border-gray-200 mb-2 sm:mb-4">
            <Heading
              level="h3"
              className="text-xl sm:text-2xl md:text-[30px] font-light text-[#171717] mb-2 break-words"
            >
              {title}
            </Heading>
          </div>

          <div className="flex flex-col gap-1">
            {/* Subtitle */}
            <Text
              variant="body"
              className="text-lg sm:text-xl md:text-[24px] font-light text-[#171717] break-words"
            >
              {subtitle}
            </Text>

            {/* Price */}
            <Text
              variant="body"
              className="text-base sm:text-[17px] font-bold text-[#171717]"
            >
              {price}
            </Text>
          </div>
        </div>

        {/* Image Section - Takes remaining space with overlays */}
        <div className="relative flex-1 overflow-hidden">
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* CTA Buttons - Overlay on image */}
          <div className="absolute inset-x-2 sm:inset-x-4 md:inset-x-6 bottom-4 sm:bottom-8 md:bottom-16">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button
                variant="default"
                size="lg"
                className="flex-1 bg-black text-white hover:bg-gray-800 rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base"
                asChild
              >
                <a href={primaryCTA.href}>
                  {primaryCTA.text}
                </a>
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="flex-1 text-gray-600 hover:text-gray-900 bg-white/50 backdrop-blur-[20px] hover:bg-white rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base"
                asChild
              >
                <a href={secondaryCTA.href}>
                  {secondaryCTA.text}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer and Safety Info - Below card with responsive spacing */}
      {(planDuration || safetyInfo) && (
        <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-full mt-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs sm:text-sm px-2 sm:px-4 md:px-6">
            {planDuration && (
              <Text
                variant="caption"
                className="text-gray-500 break-words"
              >
                *{planDuration}
              </Text>
            )}
            {safetyInfo && (
              <a
                href={safetyInfo.href}
                className="text-gray-500 underline hover:text-gray-700 transition-colors break-words"
              >
                {safetyInfo.text}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export { MedicationCard, medicationCardVariants } 