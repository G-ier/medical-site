"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"

import { OptimizedImage } from "./image"
import { Text } from "./typography"

const testimonialCardVariants = cva(
  "bg-card-bg rounded-2xl p-8 transition-all duration-300 hover:shadow-lg border border-gray-100 h-[396px] flex flex-col",
  {
    variants: {
      variant: {
        default: "",
        featured: "bg-gradient-to-br from-white to-gray-50 border-primary-200",
      },
      size: {
        default: "p-8",
        compact: "p-6",
        large: "p-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface TestimonialCardProps extends VariantProps<typeof testimonialCardVariants> {
  // Company logo
  companyLogo: {
    src: string
    alt: string
    width?: number
    height?: number
  }

  // Testimonial content
  quote: string
  
  // Author information
  author: {
    name: string
    position: string
    company: string
    avatar?: {
      src: string
      alt: string
    }
  }

  // Layout options
  className?: string
}

function TestimonialCard({
  companyLogo,
  quote,
  author,
  variant,
  size,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(testimonialCardVariants({ variant, size }), className)}
      {...props}
    >
      {/* Company Logo */}
      <div className="mb-[42px] max-[768px]:mb-4">
        <OptimizedImage
          src={companyLogo.src}
          alt={companyLogo.alt}
          width={companyLogo.width || 128}
          height={companyLogo.height || 48}
          className="h-12 w-auto object-contain"
        />
      </div>

      {/* Quote */}
      <blockquote className="flex-1 mb-8">
        <Text
          variant="body"
          className="text-gray-700 leading-relaxed text-lg italic"
        >
          &ldquo;{quote}&rdquo;
        </Text>
      </blockquote>

      {/* Author Information */}
      <div className="flex items-center gap-4 mt-auto">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {author.avatar ? (
            <OptimizedImage
              src={author.avatar.src}
              alt={author.avatar.alt}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover bg-gray-200"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 font-medium text-sm">
                {author.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Author Info */}
        <div className="flex min-w-0 flex-col">
          <Text
            variant="body"
            className="font-semibold text-gray-900 text-base leading-tight"
          >
            {author.name}
          </Text>
          <Text
            variant="caption"
            className="text-gray-500 text-sm leading-tight"
          >
            {author.position}, {author.company}
          </Text>
        </div>
      </div>
    </div>
  )
}

export { TestimonialCard, testimonialCardVariants } 