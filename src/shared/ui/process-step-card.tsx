import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"

import { Heading, Text } from "./typography"

const processStepCardVariants = cva(
  "flex items-center gap-4 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        highlighted: "bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg",
      },
      layout: {
        horizontal: "flex-row",
        vertical: "flex-col text-center",
      },
    },
    defaultVariants: {
      variant: "default",
      layout: "horizontal",
    },
  }
)

// Default step icon SVG
const DefaultStepIcon = () => (
  <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M17.73 5.62L17.59 5.37C17.4094 5.06769 17.1547 4.81643 16.85 4.64L10.14 0.77C9.8362 0.59375 9.4913 0.50062 9.14 0.5H8.85C8.4987 0.50062 8.1538 0.59375 7.85 0.77L1.14 4.65C0.836969 4.82526 0.58526 5.07697 0.41 5.38L0.27 5.63C0.0937499 5.93384 0.00062 6.27874 0 6.63V14.38C0.00062 14.7313 0.0937499 15.0762 0.27 15.38L0.41 15.63C0.58979 15.9295 0.84049 16.1802 1.14 16.36L7.86 20.23C8.1623 20.4099 8.5082 20.5033 8.86 20.5H9.14C9.4913 20.4994 9.8362 20.4063 10.14 20.23L16.85 16.35C17.156 16.1787 17.4087 15.926 17.58 15.62L17.73 15.37C17.9041 15.0653 17.9971 14.721 18 14.37V6.62C17.9994 6.26874 17.9063 5.92384 17.73 5.62ZM8.85 2.5H9.14L15 5.88L9 9.34L3 5.88L8.85 2.5ZM10 18L15.85 14.62L16 14.37V7.61L10 11.08V18Z" fill="black"/>
  </svg>
)

export interface ProcessStepCardProps extends VariantProps<typeof processStepCardVariants> {
  icon?: React.ReactNode
  title: string
  description?: string 
  className?: string
}

function ProcessStepCard({
  icon,
  title,
  description,
  variant,
  layout,
  className,
  ...props
}: ProcessStepCardProps) {
  return (
    <div 
      className={cn(processStepCardVariants({ variant, layout }), className)}
      {...props}
    >
      {/* Step Icon */}
      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
        {icon || <DefaultStepIcon />}
      </div>

      {/* Content */}
      <div className="flex-1">
        <Heading 
          level="h3" 
          className="text-black font-medium text-[15px] sm:text-[18px] leading-normal"
        >
          {title}
        </Heading>
        
        {/* Only show description if provided */}
        {description && (
          <Text 
            variant="body" 
            className="text-gray-600 font-normal text-[13px] sm:text-[16px] leading-[150%] mt-1"
          >
            {description}
          </Text>
        )}
      </div>
    </div>
  )
}

export { ProcessStepCard, processStepCardVariants } 