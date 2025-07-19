import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"
import { Heading, Text } from "./typography"
import { OptimizedImage } from "./image"
import { renderStyledText } from "@/shared/ui/render-styled-text"

const valuePropositionVariants = cva(
  "space-y-4",
  {
    variants: {
      variant: {
        default: "",
        compact: "space-y-2",
        detailed: "space-y-6",
        horizontal: "flex flex-col lg:flex-row lg:items-stretch lg:gap-0 lg:space-y-0 lg:relative lg:h-full",
        fullscreen: "flex flex-col h-full",
      },
      highlight: {
        true: "relative",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      highlight: false,
    },
  }
)

interface ValuePropositionProps extends 
  React.ComponentProps<"div">,
  VariantProps<typeof valuePropositionVariants> {
  title: string
  description: string
  image?: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  icon?: React.ReactNode
}

const ValueProposition = React.forwardRef<HTMLDivElement, ValuePropositionProps>(
  ({ 
    className, 
    variant, 
    highlight,
    title, 
    description, 
    image,
    icon,
    ...props 
  }, ref) => {
    return (
      <div
        className={cn(valuePropositionVariants({ variant, highlight, className }))}
        ref={ref}
        {...props}
      >
        {/* Icon (alternative to image) */}
        {icon && !image && (
          <div className="flex justify-center mb-6">
            {icon}
          </div>
        )}

        {/* Special layout for fullscreen variant */}
        {variant === "fullscreen" ? (
          <>
            {/* Content at top */}
            <div className="space-y-2 lg:space-y-3 flex-shrink-0 p-6">
              <Heading
                level="h3"
                color="primary"
                className="text-xl lg:text-2xl xl:text-[40px] 2xl:text-[48px] font-medium leading-[120%] tracking-[0%]"
              >
                {typeof title === 'string' ? renderStyledText(title) : title}
              </Heading>
              
              <Text
                variant="body"
                className="text-gray-600 font-normal text-sm lg:text-base xl:text-lg 2xl:text-[24px] leading-[150%]"
              >
                {description}
              </Text>
            </div>

            {/* Image at bottom */}
            {image && (
              <div className="flex-1 flex items-end justify-center mt-4">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  width={image.width || 300}
                  height={image.height || 200}
                  className="w-full max-h-full object-contain object-bottom"
                />
              </div>
            )}
          </>
        ) : (
          <>
            {/* Content for other variants */}
            <div className={cn(
              "space-y-2 lg:space-y-3",
              variant === "horizontal" && "flex-1 lg:max-w-[55%] lg:pr-4 xl:pr-6 2xl:pr-8 lg:py-4 xl:py-6 2xl:py-8"
            )}>
              <Heading
                level="h3"
                color="primary"
                className="text-xl lg:text-2xl xl:text-[40px] 2xl:text-[48px] font-medium leading-[120%] tracking-[0%]"
              >
                {title}
              </Heading>
              
              <Text
                variant="body"
                className="text-gray-600 font-normal text-sm lg:text-base xl:text-lg 2xl:text-[24px] leading-[150%]"
              >
                {description}
              </Text>
            </div>

            {/* Image for other variants */}
            {image && (
              <div className={cn(
                "flex justify-center",
                variant === "horizontal" 
                  ? "lg:absolute lg:right-0 lg:top-[22px] lg:bottom-0 lg:w-[45%] lg:h-full lg:overflow-hidden lg:rounded-r-xl lg:flex lg:items-end" 
                  : "mt-4 lg:mt-6"
              )}>
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  width={image.width || 300}
                  height={image.height || 200}
                  className={cn(
                    "object-cover",
                    variant === "horizontal" && "lg:w-full lg:h-full lg:object-cover lg:object-bottom"
                  )}
                />
              </div>
            )}
          </>
        )}
      </div>
    )
  }
)
ValueProposition.displayName = "ValueProposition"

export { ValueProposition, valuePropositionVariants }
export type { ValuePropositionProps } 