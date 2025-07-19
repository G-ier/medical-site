import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"
import { LabTestItem, type LabTestItemProps } from "./lab-test-item"

const labTestCardVariants = cva(
  "bg-[#FFFFFF40] rounded-2xl shadow-sm border border-gray-100",
  {
    variants: {
      variant: {
        default: "",
        elevated: "shadow-lg",
        flat: "shadow-none border-gray-200",
      },
      size: {
        default: "p-4 sm:p-6 md:p-8",
        compact: "p-3 sm:p-4 md:p-6",
        large: "p-5 sm:p-8 md:p-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface LabTestCardProps extends VariantProps<typeof labTestCardVariants> {
  // Test data
  tests: LabTestItemProps[]
  
  // Layout options
  className?: string
}

function LabTestCard({
  tests,
  variant,
  size,
  className,
  ...props
}: LabTestCardProps) {
  return (
    <div
      className={cn(labTestCardVariants({ variant, size }), "w-full max-w-full sm:max-w-[500px]", className)}
      {...props}
    >
      {/* Test Items */}
      <div className="space-y-0">
        {tests.map((test, index) => (
          <LabTestItem
            key={`test-${index}`}
            testName={test.testName}
            status={test.status}
            statusLabel={test.statusLabel}
            showDropdown={test.showDropdown}
          />
        ))}
      </div>
    </div>
  )
}

export { LabTestCard, labTestCardVariants } 