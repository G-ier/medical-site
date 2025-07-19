"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"
import useEmblaCarousel from 'embla-carousel-react'

import { Container, Section } from "./container"
import { Heading, Text } from "./typography"
import { Button } from "./button"
import { TestimonialCard, type TestimonialCardProps } from "./testimonial-card"

const testimonialsSectionVariants = cva(
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

export interface TestimonialsSectionProps extends VariantProps<typeof testimonialsSectionVariants> {
  // Section content
  title: React.ReactNode // Allow JSX for colored text
  subtitle?: string
  description?: string

  // Testimonials data
  testimonials: TestimonialCardProps[]

  // Layout options
  maxCards?: number
  columnsDesktop?: 2 | 3 | 4
  
  // Additional props
  className?: string
}

export function TestimonialsSection({
  title = "Real Results from Real People",
  subtitle,
  description,
  testimonials = [],
  maxCards,
  background,
  className,
}: TestimonialsSectionProps) {
  // Limit testimonials if maxCards is specified
  const displayedTestimonials = maxCards
    ? testimonials.slice(0, maxCards)
    : testimonials

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
      className={cn(testimonialsSectionVariants({ background }), className)}
    >
      {/* Section Header with Container */}
      <Container maxWidth="9xl" padding="none">
        <div className="">
          {/* Subtitle */}
          {subtitle && (
            <Text
              variant="caption"
              className="text-gray-500 mb-4 text-left font-semibold text-[20px]"
            >
              {subtitle}
            </Text>
          )}

          {/* Main Title */}
          <Heading
            level="h2"
            color="primary"
            className="mb-6 text-center sm:text-left font-bold text-[24px] sm:text-[32px] md:text-[64px] leading-[120%] tracking-[0%]"
          >
            {title}
          </Heading>

          {/* Description */}
          {description && (
            <div className="mb-12">
              <Text
                variant="body"
                className="text-gray-600 font-normal text-[24px]"
              >
                {description}
              </Text>
            </div>
          )}
        </div>
      </Container>

      {/* Testimonials Slider - Full Width with Right Overflow */}
      <div className="relative mb-12 md:mb-16">
        <Container maxWidth="9xl" className="!pr-0 !px-0">
          {/* Embla Slider Container */}
          <div className="overflow-hidden ml-auto" ref={emblaRef}>
            <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 pl-0 sm:pl-4 md:pl-6 lg:pl-8">
              {displayedTestimonials.map((testimonial, index) => (
                <div key={`testimonial-${index}`} className="flex-shrink-0 w-full max-w-[390px]  max-[768px]:max-w-full">
                  <TestimonialCard
                    {...testimonial}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation and Pagination - only show if there are slides to navigate */}
          {scrollSnaps.length > 1 && (
            <div className="flex items-center justify-between mt-8 pr-12">
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
                    aria-label={`Go to testimonial ${index + 1}`}
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
                  className="w-14 h-14 rounded-full border-2 border-black bg-white hover:bg-gray-50 disabled:border-gray-300 disabled:opacity-50 transition-all duration-200"
                  aria-label="Previous testimonials"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.707 12.293L7.293 13.707L0.586 6.99997L7.293 0.292969L8.707 1.70697L4.414 5.99997H14V7.99997H4.414L8.707 12.293Z" fill="black" />
                  </svg>
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  className="w-14 h-14 rounded-full border-2 border-black bg-white hover:bg-gray-50 disabled:border-gray-300 disabled:opacity-50 transition-all duration-200"
                  aria-label="Next testimonials"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export {  testimonialsSectionVariants } 