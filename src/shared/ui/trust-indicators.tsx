import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"
import { Text } from "./typography"
import { TrustIcon } from "./trust-icon"

const trustIndicatorsVariants = cva(
  "flex items-center w-full",
  {
    variants: {
      layout: {
        horizontal: "flex-row justify-between gap-4 md:gap-6 lg:gap-8",
        compact: "flex-row gap-2 md:gap-3",
        stacked: "flex-col gap-1",
        spaced: "flex-row items-center gap-8",
      },
      separator: {
        dot: "[&>*:not(:last-child)]:after:content-['•'] [&>*:not(:last-child)]:after:mx-2 [&>*:not(:last-child)]:after:text-neutral-400",
        line: "[&>*:not(:last-child)]:after:content-['|'] [&>*:not(:last-child)]:after:mx-2 [&>*:not(:last-child)]:after:text-neutral-300",
        none: "",
      },
    },
    defaultVariants: {
      layout: "spaced",
      separator: "none",
    },
  }
)

interface TrustIndicatorItem {
  id: string
  text: string
  icon?: "heart" | "shipping" | "shield" | "phone" | "box"
  highlighted?: boolean
  isTitle?: boolean // For titles like "Why Rejuve?"
}

interface TrustIndicatorsProps extends
  React.ComponentProps<"div">,
  VariantProps<typeof trustIndicatorsVariants> {
  items: TrustIndicatorItem[]
}

const TrustIndicators = React.forwardRef<HTMLDivElement, TrustIndicatorsProps>(
  ({
    className,
    layout,
    separator,
    items,
    ...props
  }, ref) => {
    return (
      <div
        className={cn(trustIndicatorsVariants({ layout, separator, className }))}
        ref={ref}
        {...props}
      >

        {/* Title separately */}
        {items.find(item => item.isTitle) && (
          <div className="flex items-center gap-1.5">
            <Text
              variant="trust"
              weight="semibold"
              className="whitespace-nowrap text-neutral-800 font-semibold"
            >
              {items.find(item => item.isTitle)?.text}
            </Text>
          </div>
        )}

        {/* Other elements with justify-between */}
        <div className="flex items-center justify-between flex-1 gap-4">
          {items.filter(item => !item.isTitle).map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              {item.icon ? (
                <TrustIcon type={item.icon} className="flex-shrink-0" />
              ) : (
                <div className="w-4 h-4 rounded-sm flex-shrink-0" />
              )}
              <Text
                variant="trust"
                weight={item.highlighted ? "medium" : "regular"}
                className={cn(
                  "whitespace-nowrap",
                  item.highlighted
                    ? "text-neutral-700"
                    : "text-neutral-600"
                )}
              >
                {item.text}
              </Text>
            </div>
          ))}
        </div>
      </div>
    )
  }
)
TrustIndicators.displayName = "TrustIndicators"

export { TrustIndicators, trustIndicatorsVariants }
export type { TrustIndicatorItem } 