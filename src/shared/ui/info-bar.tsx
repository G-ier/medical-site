"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"
import { TrustIndicators, type TrustIndicatorItem } from "./trust-indicators"
import { Text } from "./typography"

const infoBarVariants = cva(
  "w-full bg-header-bg border-b border-gray-200",
  {
    variants: {
      shadow: {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
      },
    },
    defaultVariants: {
      shadow: "sm",
    },
  }
)

interface InfoBarProps extends 
  React.ComponentProps<"div">,
  VariantProps<typeof infoBarVariants> {
  // Trust Indicators
  trustIndicators: TrustIndicatorItem[]
}

const InfoBar = React.forwardRef<HTMLDivElement, InfoBarProps>(
  ({ 
    className, 
    shadow,
    trustIndicators,
    ...props 
  }, ref) => {
    return (
      <div
        className={cn(infoBarVariants({ shadow, className }), "h-[30px]")}
        ref={ref}
        {...props}
      >
        <div className="w-full h-full px-4 mx-auto max-w-[1860px]">
          <div className="flex items-center justify-center h-full gap-4 py-[9px]">
            {/* Trust Indicators - Center */}
            <div className="flex-1 flex justify-between min-w-0 items-center">
              <div className="mr-2 pr-2 border-r border-gray-200">
                <Text
                  variant="trust"
                  weight="semibold"
                  className="whitespace-nowrap text-neutral-800 font-semibold"
                >
                  Why Rejuve?
                </Text>
              </div>
              
                              <TrustIndicators 
                  items={trustIndicators}
                  layout="compact"
                  separator="none"
                  className="max-[1140px]:hidden"
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
)
InfoBar.displayName = "InfoBar"

export { InfoBar, infoBarVariants }
export type { InfoBarProps } 