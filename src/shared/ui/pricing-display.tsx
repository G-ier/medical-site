import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"
import { Text } from "./typography"

const pricingDisplayVariants = cva(
  "inline-flex items-center gap-2",
  {
    variants: {
      variant: {
        default: "text-sm",
        compact: "text-xs",
        highlighted: "text-sm font-medium",
      },
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col gap-1",
      },
    },
    defaultVariants: {
      variant: "default",
      orientation: "horizontal",
    },
  }
)

interface PricingDisplayProps extends 
  React.ComponentProps<"div">,
  VariantProps<typeof pricingDisplayVariants> {
  leftPrice: string    // "1920"
  rightPrice: string   // "48 Hug" 
  separator?: string   // "•" by default
  leftLabel?: string   // Optional label for left price
  rightLabel?: string  // Optional label for right price
}

const PricingDisplay = React.forwardRef<HTMLDivElement, PricingDisplayProps>(
  ({ 
    className, 
    variant, 
    orientation,
    leftPrice, 
    rightPrice, 
    separator = "•",
    leftLabel,
    rightLabel,
    ...props 
  }, ref) => {
    return (
      <div
        className={cn(pricingDisplayVariants({ variant, orientation, className }))}
        ref={ref}
        {...props}
      >
        <div className="flex items-center gap-1">
          {leftLabel && (
            <Text variant="caption" className="text-neutral-500">
              {leftLabel}
            </Text>
          )}
          <Text 
            variant={variant === "highlighted" ? "body" : "caption"} 
            weight={variant === "highlighted" ? "medium" : "regular"}
            className="text-neutral-700"
          >
            {leftPrice}
          </Text>
        </div>
        
        {orientation === "horizontal" && (
          <Text variant="caption" className="text-neutral-400">
            {separator}
          </Text>
        )}
        
        <div className="flex items-center gap-1">
          {rightLabel && (
            <Text variant="caption" className="text-neutral-500">
              {rightLabel}
            </Text>
          )}
          <Text 
            variant={variant === "highlighted" ? "body" : "caption"} 
            weight={variant === "highlighted" ? "medium" : "regular"}
            className="text-neutral-700"
          >
            {rightPrice}
          </Text>
        </div>
      </div>
    )
  }
)
PricingDisplay.displayName = "PricingDisplay"

export { PricingDisplay, pricingDisplayVariants } 