import React from 'react'
import { OptimizedImage } from './image'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import { buttonVariants } from './button'

export interface CategoryCardProps {
  /** Category title displayed on the card */
  title: string
  /** Background image for the category */
  image: {
    src: string
    alt: string
  }
  /** Call-to-action button configuration */
  cta: {    
    text: string
    href: string
  }
  /** Optional CSS class name */
  className?: string
  /** Card variant for different styling */
  variant?: 'default' | 'featured'
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  image,
  cta,
  className,
}) => {
  return (
    <div 
      className={cn(
        "relative group overflow-hidden rounded-2xl w-full transition-all duration-300 hover:scale-[1.02]",
        "shadow-lg hover:shadow-xl",
        // Default responsive height, but allow override via className
        !className?.includes('h-[') && "aspect-[3/4] sm:aspect-[2/3] md:aspect-[3/4] min-h-[400px] max-h-[600px]",
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 400px"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-4 sm:p-6">
        {/* Title */}
        <div className="flex-1">
          <h3 className="text-white text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-normal leading-tight">
            {title}
          </h3>
        </div>

        {/* CTA Button */}
        <div className="mt-auto">
          <Link
            href={cta.href}
            className={cn(
              buttonVariants({ variant: 'cta-primary' }),
              "text-[14px] sm:text-[16px] md:text-[18px] w-full bg-gray-900 text-white hover:bg-white hover:text-black border-0 font-medium transition-colors duration-200 py-2 sm:py-3"
            )}
          >
            {cta.text === 'Learn more' ? `Explore ${title}` : cta.text}
          </Link>
        </div>
      </div>
    </div>
  )
} 