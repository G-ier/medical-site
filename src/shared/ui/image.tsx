"use client"

import * as React from "react"
import Image from "next/image"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"

const imageVariants = cva(
  "",
  {
    variants: {
      aspectRatio: {
        square: "aspect-square",
        video: "aspect-video",
        portrait: "aspect-[3/4]",
        landscape: "aspect-[4/3]",
        hero: "aspect-[16/9] md:aspect-[20/9]",
        auto: "aspect-auto",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      customObjectFit: {
        cover: "object-cover",
        contain: "object-contain",
        fill: "object-fill",
        none: "object-none",
        "scale-down": "object-scale-down",
      },
      customObjectPosition: {
        center: "object-center",
        top: "object-top",
        right: "object-right",
        bottom: "object-bottom",
        left: "object-left",
      },
    },
    defaultVariants: {
      aspectRatio: "auto",
      rounded: "none",
      customObjectFit: "cover",
      customObjectPosition: "center",
    },
  }
)

interface OptimizedImageProps extends 
  Omit<React.ComponentProps<typeof Image>, "alt">,
  Omit<VariantProps<typeof imageVariants>, 'customObjectFit' | 'customObjectPosition'> {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  loading?: "lazy" | "eager"
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  fallback?: string
  sizes?: string
  customObjectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  customObjectPosition?: "center" | "top" | "right" | "bottom" | "left"
}

const OptimizedImage = React.forwardRef<
  React.ElementRef<typeof Image>,
  OptimizedImageProps
>(
  ({ 
    className,
    aspectRatio,
    rounded,
    customObjectFit = "cover",
    customObjectPosition = "center",
    src,
    alt,
    width = 800,
    height = 600,
    fill = false,
    priority = false,
    loading = "lazy",
    placeholder = "empty",
    blurDataURL,
    sizes,
    ...props 
  }, ref) => {
    const [error, setError] = React.useState(false)

    // Validate src URL
    const isValidSrc = React.useMemo(() => {
      if (!src || typeof src !== 'string' || src.trim() === '') {
        console.log('❌ Invalid src provided to OptimizedImage:', src)
        return false
      }
      
      // Allow relative paths and valid URLs
      if (src.startsWith('/')) {
        return true
      }
      
      try {
        new URL(src)
        return true
      } catch {
        console.log('❌ Invalid URL provided to OptimizedImage:', src)
        return false
      }
    }, [src])

    if (!isValidSrc || error) {
      return (
        <div className={cn(
          imageVariants({ aspectRatio, rounded, customObjectFit, customObjectPosition }),
          "bg-gray-100 flex items-center justify-center text-gray-400",
          className
        )}>
          <span className="text-sm">Image not available</span>
        </div>
      )
    }

    const imageProps = fill 
      ? {
          fill: true,
          sizes: sizes || "100vw",
        }
      : {
          width,
          height,
        }

    // Priority and loading='lazy' are mutually exclusive
    const loadingProps = priority 
      ? { priority: true }
      : { loading }

    // Check if the image is from Sanity CDN
    const isSanityImage = src.includes('cdn.sanity.io');

    return (
      <Image
        ref={ref}
        src={src}
        alt={alt}
        {...imageProps}
        {...loadingProps}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onError={(e) => {
          console.error('Image error:', e);
          setError(true);
        }}
        unoptimized={isSanityImage} // Skip Next.js image optimization for Sanity images
        className={cn(
          imageVariants({ aspectRatio, rounded, customObjectFit, customObjectPosition }),
          className
        )}
        {...props}
      />
    )
  }
)
OptimizedImage.displayName = "OptimizedImage"

export { OptimizedImage, imageVariants } 