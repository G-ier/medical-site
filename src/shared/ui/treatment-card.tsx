import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"

import { OptimizedImage } from "./image"
import { Text, Heading } from "./typography"
import { Button } from "./button"

const treatmentCardVariants = cva(
  "group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-xl overflow-hidden flex flex-col",
  {
    variants: {
      variant: {
        default: "bg-transparent border-0 shadow-none",
        featured: "bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200",
        white: "bg-white",
      },
      size: {
        default: "w-full min-h-[450px] sm:min-h-[500px] max-h-[600px]",
        compact: "w-full min-h-[400px] max-h-[500px]",
        wide: "w-full min-h-[500px] max-h-[650px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface TreatmentCardProps extends VariantProps<typeof treatmentCardVariants> {
  // Image properties
  image: {
    src: string
    alt: string
  }
  
  // Content properties  
  title: string
  description: string
  category: string
  
  // Badge properties (optional)
  badge?: {
    text: string
    variant?: "new" | "category" | "default"
  }
  
  // CTA properties
  ctaText: string
  ctaUrl: string
  
  // Additional props
  className?: string
  onClick?: () => void
}

function TreatmentCard({
  image,
  title,
  description,
  category,
  ctaText,
  ctaUrl,
  variant,
  size,
  className,
  onClick,
  ...props
}: TreatmentCardProps) {
  return (
    <div 
      className={cn(treatmentCardVariants({ variant, size }), className)}
      onClick={onClick}
      {...props}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden h-[200px] sm:h-[250px] md:h-[300px]">
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          fill
          className="w-full h-full object-cover bg-white transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 390px"
        />
      </div>

      {/* Content Section */}
      <div 
        className="flex-1 px-3 sm:px-4 pt-3 sm:pt-4 flex flex-col justify-between"
        style={{ backgroundColor: '#FAF8F2A3' }}
      >
        {/* Category */}
        <div 
          className="inline-block rounded-full px-2 sm:px-3 py-1 mb-3 sm:mb-4 w-fit"
          style={{ backgroundColor: '#EEEEEE' }}
        >
          <Text 
            variant="caption" 
            className="text-black font-semibold text-[12px] sm:text-[14px]"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            {category}
          </Text>
        </div>
        
        {/* Title */}
        <Heading 
          level="h3" 
          className="mb-2 text-black font-bold text-[16px] sm:text-[18px] md:text-[22px] leading-tight"
        >
          {title}
        </Heading>
        
        <div className="flex-1 mb-4 sm:mb-6">
          {/* Description */}
          <Text 
            variant="body" 
            className="text-black font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[150%] tracking-[0%] mb-4 sm:mb-6"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            {description}
          </Text>
        </div>
        
         {/* CTA Button */}
        <div className="flex justify-start pb-4 sm:pb-6">
          <Button 
            variant="ghost"
            size="sm"
            className="px-0 text-left bg-transparent text-black hover:bg-black hover:text-white transition-all inline-flex items-center gap-2 border-0 p-0 h-auto text-[13px] sm:text-[15px] md:text-[16px]"
            asChild
          >
            <a href={ctaUrl}>
              {ctaText}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export { TreatmentCard, treatmentCardVariants } 