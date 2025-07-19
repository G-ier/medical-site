"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"
import { Button } from "./button"

const ctaButtonsVariants = cva(
  "flex items-center",
  {
    variants: {
      layout: {
        horizontal: "flex-row gap-4",
        vertical: "flex-col gap-3",
        stacked: "flex-col sm:flex-row gap-3 sm:gap-4",
      },
      alignment: {
        left: "justify-start",
        center: "justify-center",
        right: "justify-end",
      },
      size: {
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-6",
      },
    },
    defaultVariants: {
      layout: "stacked",
      alignment: "center",
      size: "md",
    },
  }
)

interface CTAButtonProps {
  text: string
  href?: string
  onClick?: () => void
  variant?: "default" | "destructive" | "outline" | "outline-light" | "cta-primary" | "cta-secondary" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  disabled?: boolean
}

interface CTAButtonsProps extends 
  React.ComponentProps<"div">,
  VariantProps<typeof ctaButtonsVariants> {
  primaryCTA: CTAButtonProps
  secondaryCTA?: CTAButtonProps
}

const CTAButtons = React.forwardRef<HTMLDivElement, CTAButtonsProps>(
  ({ 
    className,
    layout,
    alignment,
    size,
    primaryCTA,
    secondaryCTA,
    ...props 
  }, ref) => {
    const handlePrimaryClick = () => {
      if (primaryCTA.onClick) {
        primaryCTA.onClick()
      } else if (primaryCTA.href) {
        window.location.href = primaryCTA.href
      }
    }

    const handleSecondaryClick = () => {
      if (secondaryCTA?.onClick) {
        secondaryCTA.onClick()
      } else if (secondaryCTA?.href) {
        window.location.href = secondaryCTA.href
      }
    }

    return (
      <div
        className={cn(ctaButtonsVariants({ layout, alignment, size, className }))}
        ref={ref}
        {...props}
      >
        <Button
          variant={primaryCTA.variant || "cta-primary"}
          size={primaryCTA.size || "lg"}
          onClick={handlePrimaryClick}
          disabled={primaryCTA.disabled}
          className="min-w-[200px] !h-12 text-base flex items-center justify-center box-border  font-normal"
        >
          {primaryCTA.text}
        </Button>
        
        {secondaryCTA && (
          <Button
            variant={secondaryCTA.variant || "cta-secondary"}
            size={secondaryCTA.size || "lg"}
            onClick={handleSecondaryClick}
            disabled={secondaryCTA.disabled}
            className="min-w-[200px] !h-12 text-base flex items-center justify-center box-border font-normal"
          >
            {secondaryCTA.text}
          </Button>
        )}
      </div>
    )
  }
)
CTAButtons.displayName = "CTAButtons"

export { CTAButtons, ctaButtonsVariants }
export type { CTAButtonProps } 