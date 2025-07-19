import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"

const textVariants = cva(
  "font-sans",
  {
    variants: {
      variant: {
        hero: "text-lg md:text-xl text-neutral-600",
        body: "text-base text-neutral-700",
        caption: "text-sm text-neutral-600",
        stat: "text-2xl font-bold text-primary-600",
        trust: "text-xs text-neutral-700",
        logo: "text-lg font-semibold text-primary-600",
      },
      weight: {
        light: "font-light", // 300
        regular: "font-normal", // 400
        medium: "font-medium", // 500
        semibold: "font-semibold", // 600
        bold: "font-bold", // 700
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
    },
    defaultVariants: {
      variant: "body",
      weight: "regular",
      align: "left",
    },
  }
)

const headingVariants = cva(
  "font-sans",
  {
    variants: {
      level: {
            h1: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight", // Hero headings
    h2: "text-3xl md:text-4xl font-bold leading-tight", // Section headings
    h3: "text-xl font-semibold leading-snug", // Card headings
        h4: "text-lg font-medium leading-normal", // Process steps
      },
      color: {
        primary: "text-primary-900",
        secondary: "text-neutral-700",
        muted: "text-neutral-500",
        white: "text-white",
      },
    },
    defaultVariants: {
      level: "h2",
      color: "primary",
    },
  }
)

interface TextProps extends 
  React.ComponentProps<"span">,
  VariantProps<typeof textVariants> {
  asChild?: boolean
}

interface HeadingProps extends 
  Omit<React.ComponentProps<"h1">, "color">,
  VariantProps<typeof headingVariants> {
  asChild?: boolean
}

const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ className, variant, weight, align, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "span"
    
    return (
      <Comp
        className={cn(textVariants({ variant, weight, align, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Text.displayName = "Text"

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, color, asChild = false, ...props }, ref) => {
    const Component = level || "h2"
    
    if (asChild) {
      return React.createElement(
        Component,
        {
          className: cn(headingVariants({ level, color, className })),
          ref,
          ...props
        }
      )
    }

    return React.createElement(
      Component,
      {
        className: cn(headingVariants({ level, color, className })),
        ref,
        ...props
      }
    )
  }
)
Heading.displayName = "Heading"

export { Text, textVariants, Heading, headingVariants } 