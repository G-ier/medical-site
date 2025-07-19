import * as React from "react"
import { cn } from "@/shared/lib/utils"
import { Text } from "./typography"
import { TestStatusBadge, type TestStatusBadgeProps } from "./test-status-badge"

export interface LabTestItemProps {
  // Test information
  testName: string
  status: TestStatusBadgeProps["status"]
  statusLabel: string
  
  // Layout options
  showDropdown?: boolean
  className?: string
}

function LabTestItem({
  testName,
  status = "passed",
  statusLabel,
  showDropdown = true,
  className,
  ...props
}: LabTestItemProps) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-start sm:items-center justify-between min-h-[80px] sm:h-[100px] px-3 sm:px-4 md:px-6 py-4 sm:py-0 border-b border-[#17171733] last:border-b-0 gap-3 sm:gap-0",
        className
      )}
      {...props}
    >
      {/* Test Name with optional dropdown icon */}
      <div className="flex items-center gap-2">
        <Text
          variant="body"
          className="font-medium text-gray-900 text-sm sm:text-base"
        >
          {testName}
        </Text>
        
        {showDropdown && (
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      {/* Status Badge */}
      <TestStatusBadge
        label={statusLabel}
        status={status}
        size="default"
      />
    </div>
  )
}

export { LabTestItem } 