import * as React from "react"
import { cn } from "@/shared/lib/utils"

interface TrustFeatureItem {
  icon: string | React.ReactNode
  text: string
}

interface TrustFeaturesProps {
  features: TrustFeatureItem[]
  textColor?: "light" | "dark"
  className?: string
}

export function TrustFeatures({
  features,
  textColor = "light",
  className
}: TrustFeaturesProps) {
  const textColorClass = textColor === "light" ? "text-white" : "text-gray-900"
  const iconColorClass = textColor === "light" ? "text-white" : "text-gray-900"

  return (
    <div className={cn("space-y-4", className)}>
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-3">
          <div className={cn(
            "flex-shrink-0 mt-0.5",
            typeof feature.icon === 'string' ? "text-2xl" : iconColorClass
          )}>
            {typeof feature.icon === 'string' ? (
              <span>{feature.icon}</span>
            ) : typeof feature.icon === 'function' ? (
              React.createElement(feature.icon, { className: "w-6 h-6" })
            ) : (
              feature.icon
            )}
          </div>
          <p className={cn(
            "text-lg font-medium leading-relaxed",
            textColorClass
          )}>
            {feature.text}
          </p>
        </div>
      ))}
    </div>
  )
} 