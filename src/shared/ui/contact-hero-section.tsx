import * as React from "react"
import { cn } from "@/shared/lib/utils"
import { Heading, Text } from "./typography"
import { type CTAButtonProps } from "./cta-buttons"
import { OptimizedImage } from "./image"

interface ContactHeroSectionProps extends React.ComponentProps<"section"> {
  heroTitle: string | React.ReactNode
  subtitle: string
  backgroundImage: {
    src: string
    alt: string
    priority?: boolean
  }
  primaryCTA: CTAButtonProps
  secondaryCTA?: CTAButtonProps
  contactInfo: {
    email: string
    phone: string
    office: {
      address: string
      city: string
    }
  }
  overlay?: boolean
  overlayOpacity?: "light" | "medium" | "dark"
  horizontalMargin?: "none" | "sm" | "md" | "lg" | "xl"
  borderRadius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
}

const ContactHeroSection = React.forwardRef<HTMLElement, ContactHeroSectionProps>(
  ({ 
    className,
    heroTitle,
    subtitle,
    backgroundImage,
    contactInfo,
    overlay = true,
    overlayOpacity = "medium",
    horizontalMargin = "md",
    borderRadius = "2xl",
    ...props 
  }, ref) => {
    const overlayClasses = {
      light: "bg-black bg-opacity-20",
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

    console.log('horizontalMargin', horizontalMargin);
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
              priority={backgroundImage.priority || true}
              className={cn("object-cover", radiusClasses[borderRadius])}
              sizes="100vw"
            />
            {overlay && (
              <div className={cn("absolute inset-0", overlayClasses[overlayOpacity], radiusClasses[borderRadius])} />
            )}
          </div>

          {/* Content - Two column layout */}
          <div className="relative z-10 w-full px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Column - Hero Content */}
              <div className="space-y-8">
                {/* Main Heading */}
                <Heading 
                  level="h1" 
                  color="white"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  {heroTitle}
                </Heading>

                {/* Subtitle */}
                <Text 
                  variant="hero"
                  className="text-lg md:text-xl max-w-2xl leading-relaxed text-white/90"
                >
                  {subtitle}
                </Text>

              </div>

              {/* Right Column - Contact Information */}
              <div className="space-y-6 lg:ml-auto lg:max-w-md">
                {/* Email */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white mb-1">Email</div>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-white hover:text-white/80 transition-colors duration-200 underline"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.653.349 2.227.913l1.119 1.119a3.75 3.75 0 010 5.303l-.119.119a11.26 11.26 0 002.411 3.05 11.26 11.26 0 003.05 2.411l.119-.119a3.75 3.75 0 015.303 0l1.119 1.119c.564.574.913 1.367.913 2.227V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white mb-1">Phone</div>
                    <a 
                      href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                      className="text-white hover:text-white/80 transition-colors duration-200 underline"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white mb-1">Office</div>
                    <div className="text-white">
                      <div>{contactInfo.office.address}</div>
                      <div>{contactInfo.office.city}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
)

ContactHeroSection.displayName = "ContactHeroSection"

export { ContactHeroSection, type ContactHeroSectionProps } 