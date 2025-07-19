"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"
import { renderStyledText } from "@/shared/ui/render-styled-text"
import useEmblaCarousel from 'embla-carousel-react'

import { Container, Section } from "./container"
import { Heading, Text } from "./typography"
import { Button } from "./button"
import { TreatmentCard, type TreatmentCardProps } from "./treatment-card"

const treatmentsSectionVariants = cva(
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

export interface TreatmentsSectionProps extends VariantProps<typeof treatmentsSectionVariants> {
  // Section content
  title?: React.ReactNode // Allow JSX for colored text
  subtitle?: string
  description?: string

  // Treatments data
  treatments: TreatmentCardProps[]

  // View All CTA
  viewAllText?: string
  viewAllUrl?: string

  // Layout options
  maxCards?: number
  columnsDesktop?: 2 | 3 | 4
  showViewAll?: boolean

  // Additional props
  className?: string
}

export function TreatmentsSection({
  title,
  subtitle,
  description,
  treatments = [],
  viewAllText,
  viewAllUrl,
  maxCards,
  showViewAll = true,
  background,
  className,
}: TreatmentsSectionProps) {
  // Limit treatments if maxCards is specified
  const displayedTreatments = maxCards
    ? treatments.slice(0, maxCards)
    : treatments

  // Embla Carousel setup with responsive slides per view
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 1 },
      '(min-width: 1024px)': { slidesToScroll: 1 },
    }
  })

  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  const scrollTo = React.useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onInit = React.useCallback((api: NonNullable<ReturnType<typeof useEmblaCarousel>[1]>) => {
    setScrollSnaps(api.scrollSnapList())
  }, [])

  const onSelect = React.useCallback((api: NonNullable<ReturnType<typeof useEmblaCarousel>[1]>) => {
    setSelectedIndex(api.selectedScrollSnap())
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('reInit', onInit)
      emblaApi.off('reInit', onSelect)
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onInit, onSelect])

  return (
    <Section
      spacing="none"
      className={cn(treatmentsSectionVariants({ background }), className)}
    >
      {/* Section Header with Container */}
      <Container maxWidth="8xl" padding="none">
        <div className="px-4 sm:px-6 lg:px-8  max-[768px]:text-center">
          {/* Subtitle */}
          {subtitle && (
            <Text
              variant="caption"
              className="text-gray-500 mb-4 text-center sm:text-left font-semibold text-[14px] sm:text-[18px] md:text-[20px] md:text-center"
            >
              {subtitle}
            </Text>
          )}

          {/* Main Title */}
          {title && (
            <Heading
              level="h2"
              color="primary"
              className="mb-6 text-center sm:text-left font-bold text-[28px] sm:text-[40px] md:text-[64px] leading-[120%] tracking-[0%]"
            >
              {typeof title === 'string' ? renderStyledText(title) : title}
            </Heading>
          )}

          {/* Description + View All Button Row */}
          {(description || (showViewAll && viewAllText && viewAllUrl)) && (
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
              {description && (
                <Text
                  variant="body"
                  className="text-gray-600 flex-1 font-normal text-[15px] sm:text-[18px] md:text-[24px] text-center sm:text-left"
                >
                  {description}
                </Text>
              )}

              {showViewAll && viewAllText && viewAllUrl && (
                <Button
                  variant="default"
                  size="default"
                  asChild
                  className="shrink-0 bg-black text-white hover:bg-gray-800 transition-all rounded-full px-6 py-2.5 font-medium text-sm mx-auto sm:mx-0"
                >
                  <a href={viewAllUrl}>
                    {viewAllText}
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>

      {/* Treatments Slider - Full Width with Right Overflow */}
      <div className="relative mb-12 md:mb-16">
        <Container maxWidth="8xl" className="!pr-0 !px-0">
          {/* Embla Slider Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 pl-0 sm:pl-4 md:pl-6 lg:pl-8">
              {displayedTreatments.map((treatment, index) => (
                <div key={`treatment-${index}`} className="flex-shrink-0 w-full max-w-[390px] max-[768px]:max-w-full">
                  <TreatmentCard
                    {...treatment}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation and Pagination - only show if there are slides to navigate */}
          {scrollSnaps.length > 1 && (
            <div className="flex items-center justify-between mt-8 px-4 sm:px-6 lg:px-8 pr-8 sm:pr-12">
              {/* Pagination Dots - Left */}
              <div className="flex gap-2">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={cn(
                      "w-11 h-11 rounded-full transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                      index === selectedIndex ? "bg-gray-800" : "bg-gray-300"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <span className={cn(
                      "w-2 h-2 rounded-full transition-colors",
                      index === selectedIndex ? "bg-white" : "bg-gray-600"
                    )} />
                  </button>
                ))}
              </div>

              {/* Navigation Buttons - Right */}
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-black bg-white hover:bg-gray-50 disabled:border-gray-300 disabled:opacity-50 transition-all duration-200"
                  aria-label="Previous treatments"
                >
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.707 12.293L7.293 13.707L0.586 6.99997L7.293 0.292969L8.707 1.70697L4.414 5.99997H14V7.99997H4.414L8.707 12.293Z" fill="black" />
                  </svg>
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-black bg-white hover:bg-gray-50 disabled:border-gray-300 disabled:opacity-50 transition-all duration-200"
                  aria-label="Next treatments"
                >
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.293 12.293L6.707 13.707L13.414 6.99997L6.707 0.292969L5.293 1.70697L9.586 5.99997H0V7.99997H9.586L5.293 12.293Z" fill="black" />
                  </svg>
                </Button>
              </div>
            </div>
          )}
        </Container>
      </div>
    </Section>
  )
}

export { treatmentsSectionVariants } 