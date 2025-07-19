import * as React from "react"
import { cn } from "@/shared/lib/utils"
import { Heading } from "./typography"
import { Button } from "./button"
import { OptimizedImage } from "./image"
import { TrustFeatures } from "./trust-features"

interface TrustFeatureItem {
  icon: string | React.ReactNode
  text: string
}

interface WeightLossHeroSectionProps {
  heroTitle: string | React.ReactNode
  subtitle: string
  backgroundImage: {
    src: string
    alt: string
    priority?: boolean
  }
  primaryCTA:  any
  trustFeatures: TrustFeatureItem[]
  overlay?: boolean
  overlayOpacity?: "light" | "medium" | "dark"
  horizontalMargin?: "none" | "sm" | "md" | "lg" | "xl"
  borderRadius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
  className?: string
}

const WeightLossHeroSection = React.forwardRef<HTMLElement, WeightLossHeroSectionProps>(
  ({ 
    className,
    heroTitle,
    backgroundImage,
    primaryCTA,
    trustFeatures,
    overlay = true,
    overlayOpacity = "medium",
    horizontalMargin = "lg",
    borderRadius = "2xl",
    ...props 
  }, ref) => {
    const overlayClasses = {
      light: "bg-black bg-opacity-30",
      medium: "bg-black bg-opacity-40", 
      dark: "bg-black bg-opacity-60",
    }

    const marginClasses = {
      none: "",
      sm: "mx-2",
      md: "mx-4", 
      lg: "mx-6",
      xl: "mx-8",
    }

    const radiusClasses = {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
    }

    return (
      <div className="max-w-[1860px] mx-auto">
        <section
          className={cn(
            "relative min-h-screen flex items-center",
            marginClasses[horizontalMargin],
            radiusClasses[borderRadius],
            className
          )}
          ref={ref}
          {...props}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <OptimizedImage
              src={backgroundImage.src}
              alt={backgroundImage.alt}
              fill
              priority={backgroundImage.priority ?? true}
              className={cn("object-cover", radiusClasses[borderRadius])}
              sizes="100vw"
            />
            {overlay && (
              <div className={cn("absolute inset-0", overlayClasses[overlayOpacity], radiusClasses[borderRadius])} />
            )}
          </div>

          {/* Content positioned at left side */}
          <div className="relative z-10 w-full px-8 lg:px-16">
            <div className="max-w-[600px] space-y-8">
              {/* Main Heading */}
              <Heading 
                level="h1" 
                color="white"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                {heroTitle}
              </Heading>

              {/* Trust Features */}
              <TrustFeatures
                features={trustFeatures}
                textColor="light"
                className="my-8"
              />

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
                >
                  <a href={primaryCTA.href}>
                    {primaryCTA.text}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
)
WeightLossHeroSection.displayName = "WeightLossHeroSection"

export { WeightLossHeroSection, type WeightLossHeroSectionProps, type TrustFeatureItem } 