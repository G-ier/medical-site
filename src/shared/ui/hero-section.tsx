import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"
import { Heading, Text } from "./typography"
import { CTAButtons, type CTAButtonProps } from "./cta-buttons"
import { OptimizedImage } from "./image"

const heroSectionVariants = cva(
  "relative min-h-screen flex items-end",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-gray-50 to-white",
        image: "",
        gradient: "bg-gradient-to-br from-primary-50 to-secondary-50",
        overlay: "relative",
      },
      textColor: {
        dark: "text-gray-900",
        light: "text-white",
        primary: "text-primary-900",
      },
      alignment: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
    },
    defaultVariants: {
      variant: "default",
      textColor: "dark",
      alignment: "center",
    },
  }
)

interface HeroSectionProps extends 
  React.ComponentProps<"section">,
  VariantProps<typeof heroSectionVariants> {
  heroTitle: string | React.ReactNode
  subtitle: string
  backgroundImage?: {
    src: string
    alt: string
    priority?: boolean
  }
  primaryCTA: CTAButtonProps
  secondaryCTA?: CTAButtonProps
  overlay?: boolean
  overlayOpacity?: "light" | "medium" | "dark"
  horizontalMargin?: "none" | "sm" | "md" | "lg" | "xl"
}

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  ({ 
    className,
    variant,
    textColor,
    alignment,
    heroTitle,
    subtitle,
    backgroundImage,
    primaryCTA,
    secondaryCTA,
    overlay = false,
    overlayOpacity = "medium",
    horizontalMargin = "none",
    ...props 
  }, ref) => {
    const overlayClasses = {
      light: "bg-black/20",
      medium: "bg-black/40",
      dark: "bg-black/60",
    }

    const marginClasses = {
      none: "",
      sm: "mx-2",
      md: "mx-4", 
      lg: "mx-6",
      xl: "mx-8",
    }


    return (
      <div className="max-w-[1860px] mx-auto ">
        <section
          className={cn(
            heroSectionVariants({ variant, textColor, alignment, className }),
            marginClasses[horizontalMargin],
            'rounded-[38px] ',
          )}
          ref={ref}
          {...props}
        >
        {/* Background Image */}
        {backgroundImage && (
          <div className="absolute inset-0 z-0">
            <OptimizedImage
              src={backgroundImage.src}
              alt={backgroundImage.alt}
              fill
              priority={backgroundImage.priority || true}
              className={cn("object-cover", 'rounded-[38px]')}
              sizes="100vw"
            />
            {overlay && (
              <div className={cn("absolute inset-0", overlayClasses[overlayOpacity], 'rounded-[38px]')} />
            )}
          </div>
        )}

        {/* Content positioned at bottom */}
        <div className="relative z-10 w-full px-6 pb-[100px] ">
          <div className="max-w-[700px] mx-auto space-y-2">
            {/* Main Heading */}
            <Heading 
              level="h1" 
              color={textColor === "light" ? "white" : "primary"}
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
                alignment === "center" && "text-center",
                alignment === "left" && "text-left",
                alignment === "right" && "text-right"
              )}
            >
              {heroTitle}
            </Heading>

            {/* Subtitle */}
            <Text 
              variant="hero"
              className={cn(
                "block text-lg md:text-xl max-w-2xl leading-relaxed mb-8",
                textColor === "light" ? "text-white/90" : "text-neutral-600",
                alignment === "center" && "text-center mx-auto",
                alignment === "left" && "text-left mx-0",
                alignment === "right" && "text-right ml-auto mr-0"
              )}
            >
              {subtitle}
            </Text>

            {/* CTA Buttons with spacing */}
            <div className={cn(
              "flex ",
              alignment === "center" && "justify-center",
              alignment === "left" && "justify-start",
              alignment === "right" && "justify-end"
            )}>
              <CTAButtons
                primaryCTA={primaryCTA}
                secondaryCTA={secondaryCTA}
                layout="stacked"
                alignment={alignment}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    )
  }
)
HeroSection.displayName = "HeroSection"

export { HeroSection, heroSectionVariants } 