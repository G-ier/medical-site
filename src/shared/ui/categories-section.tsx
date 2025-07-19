"use client"

import * as React from "react"
import { CategoryCard, type CategoryCardProps } from './category-card'
import { Container } from './container'
import { cn } from '@/shared/lib/utils'
import useEmblaCarousel from 'embla-carousel-react'
import { renderStyledText } from '@/shared/ui/render-styled-text'

export interface CategoriesSectionProps {
  /** Section title - can include JSX for styling */
  title: string
  /** Optional subtitle */
  subtitle?: string
  /** Array of category cards to display */
  categories: CategoryCardProps[]
  /** Section background */
  background?: 'default' | 'gray' | 'transparent'
  /** Optional CSS class name */
  className?: string
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  title,
  subtitle,
  categories,
  background = 'default',
  className
}) => {
  // Embla Carousel setup with proper infinite looping
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true, // Enable true infinite loop
    skipSnaps: false,
    slidesToScroll: 1,
    dragFree: false,
  })

  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true)

  // Custom autoplay with proper infinite scrolling
  React.useEffect(() => {
    if (!emblaApi || !isAutoPlaying) return

    const autoPlay = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext()
      } else {
        // If reached the end, go to the beginning
        emblaApi.scrollTo(0)
      }
    }

    const interval = setInterval(autoPlay, 3000)
    return () => clearInterval(interval)
  }, [emblaApi, isAutoPlaying])

  // Stop autoplay on mouse enter, resume on mouse leave
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const backgroundClasses = {
    default: 'bg-white',
    gray: 'bg-gray-50',
    transparent: 'bg-transparent'
  }

  return (
    <section 
      className={cn(
        backgroundClasses[background],
        className
      )}
    >
      <Container maxWidth="8xl" className="!px-0">
        {/* Section Header */}
        <div className="mb-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] sm:text-4xl md:text-[64px] font-bold text-gray-900 mb-4 text-center sm:text-left">
            {renderStyledText(title)}
          </h2>
          {subtitle && (
            <p className="text-[14px] sm:text-lg text-gray-600 max-w-2xl text-center sm:text-left sm:mx-0 mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </Container>

      {/* Mobile: Stacked Cards */}
      <div className="block sm:hidden">
        <Container maxWidth="8xl" className="px-4">
          <div className="space-y-6">
            {categories.map((category, index) => (
              <div key={`category-mobile-${index}`} className="w-full">
                <CategoryCard 
                  {...category}
                  className="w-full max-w-md mx-auto h-[240px]"
                />
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Desktop/Tablet: Carousel */}
      <div 
        className="hidden sm:block relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Container maxWidth="8xl" className="!pr-0 !px-0">
          {/* Embla Slider Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-3 sm:gap-4 md:gap-6 pl-4 sm:pl-6 lg:pl-8">
              {categories.map((category, index) => (
                <div key={`category-${index}`} className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[400px] max-w-[400px]">
                  <CategoryCard 
                    {...category}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
} 