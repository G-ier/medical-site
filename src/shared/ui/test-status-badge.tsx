import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"
import { Text } from "./typography"

const testStatusBadgeVariants = cva(
  "inline-flex items-center gap-1 sm:gap-2 rounded-full",
  {
    variants: {
      status: {
        passed: "bg-black text-white",
        failed: "bg-red-600 text-white",
        pending: "bg-yellow-500 text-white",
      },
      size: {
        default: "px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm",
        small: "px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs",
        large: "px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base",
      },
    },
    defaultVariants: {
      status: "passed",
      size: "default",
    },
  }
)

export interface TestStatusBadgeProps extends VariantProps<typeof testStatusBadgeVariants> {
  // Status content
  label: string
  
  // Layout options
  className?: string
}

function TestStatusBadge({
  label,
  status,
  size,
  className,
  ...props
}: TestStatusBadgeProps) {
  // Icon based on status
  const getIcon = () => {
    switch (status) {
      case "passed":
        return (
          <svg width="12" height="12" className="sm:w-[14px] sm:h-[14px]" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.6666 3.5L5.24996 9.91667L2.33329 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case "failed":
        return (
          <svg width="12" height="12" className="sm:w-[14px] sm:h-[14px]" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div
      className={cn(testStatusBadgeVariants({ status, size }), className)}
      {...props}
    >
      {getIcon()}
      <Text
        variant="caption"
        className="font-medium text-current text-xs sm:text-sm"
      >
        {label}
      </Text>
    </div>
  )
}

export { TestStatusBadge, testStatusBadgeVariants } 