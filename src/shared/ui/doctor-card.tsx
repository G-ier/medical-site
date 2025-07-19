import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"
import { OptimizedImage } from "./image"
import { Text } from "./typography"

const doctorCardVariants = cva(
  "bg-card-bg rounded-2xl transition-all duration-300 hover:shadow-lg border border-gray-100 flex flex-col items-center w-[300px] h-[540px]",
  {
    variants: {
      variant: {
        default: "p-8",
        compact: "p-6",
        large: "p-10",
      },
      size: {
        default: "w-[300px] h-[540px]",
        small: "max-w-xs",
        medium: "max-w-sm",
        large: "max-w-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface DoctorCardProps extends VariantProps<typeof doctorCardVariants> {
  // Doctor image
  image: {
    src: string
    alt: string
    width?: number
    height?: number
  }

  // Doctor information
  name: string
  title: string

  // Layout options
  className?: string
}

function DoctorCard({
  image,
  name,
  title,
  variant,
  size,
  className,
  ...props
}: DoctorCardProps) {
  return (
    <div
      className={cn(doctorCardVariants({ variant, size }), className, 'p-0 rounded-2xl h-auto sm:h-[540px]')}
      {...props}
    >
      {/* Doctor Image */}
      <div className="mb-2 sm:mb-6 flex items-center justify-center rounded-t-2xl bg-[#f0edf2] w-full" style={{ minHeight: 0 }}>
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          width={image.width || 300}
          height={image.height || 440}
          className="w-full h-[100px] sm:h-[440px] rounded-t-2xl object-cover max-[768px]:object-contain"
        />
      </div>

      {/* Doctor Information */}
      <div className="space-y-0 mt-0 sm:mt-auto p-2 sm:p-4 w-full text-left">
        {/* Doctor Name */}
        <Text
          variant="body"
          className="font-semibold text-gray-900 text-base sm:text-lg leading-tight block text-left"
        >
          {name}
        </Text>
        {/* Doctor Title */}
        <Text
          variant="caption"
          className="text-gray-600 text-xs sm:text-sm leading-relaxed block text-left"
        >
          {title}
        </Text>
      </div>
    </div>
  )
}

export { DoctorCard, doctorCardVariants } 