import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"

const containerVariants = cva(
  "w-full",
  {
    variants: {
      maxWidth: {
        sm: "max-w-sm mx-auto",
        md: "max-w-md mx-auto", 
        lg: "max-w-lg mx-auto",
        xl: "max-w-xl mx-auto",
        "2xl": "max-w-2xl mx-auto",
        "3xl": "max-w-3xl mx-auto",
        "4xl": "max-w-4xl mx-auto",
        "5xl": "max-w-5xl mx-auto",
        "6xl": "max-w-6xl mx-auto",
        "7xl": "max-w-7xl mx-auto",
        "8xl": "max-w-[1640px] mx-auto",
        "9xl": "max-w-[1860px] mx-auto",
         // 1600px max width for the whole page 
        full: "max-w-full",
        screen: "max-w-screen-2xl mx-auto", // For header - 1920px
      },
      padding: {
        none: "px-0",
        sm: "px-4",
        md: "px-6",
        lg: "px-8",
        xl: "px-12",
      },
    },
    defaultVariants: {
      maxWidth: "7xl",
      padding: "none",
    },
  }
)

const sectionVariants = cva(
  "w-full",
  {
    variants: {
      spacing: {
        none: "py-0",
        sm: "py-8",
        md: "py-12",
        lg: "py-16",
        xl: "py-20",
        "2xl": "py-24",
      },
      background: {
        none: "",
        white: "bg-white",
        gray: "bg-gray-50",
        primary: "bg-primary-50",
      },
    },
    defaultVariants: {
      spacing: "none",
      background: "none",
    },
  }
)

interface ContainerProps extends 
  React.ComponentProps<"div">,
  VariantProps<typeof containerVariants> {}

interface SectionProps extends 
  React.ComponentProps<"section">,
  VariantProps<typeof sectionVariants> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, maxWidth, padding, ...props }, ref) => {
    return (
      <div
        className={cn(containerVariants({ maxWidth, padding, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing, background, ...props }, ref) => {
    return (
      <section
        className={cn(sectionVariants({ spacing, background, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Section.displayName = "Section"

export { Container, containerVariants, Section, sectionVariants } 