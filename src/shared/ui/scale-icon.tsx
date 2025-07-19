import * as React from "react"

interface ScaleIconProps {
  className?: string
  size?: number
}

export function ScaleIcon({ className, size = 64 }: ScaleIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Scale base */}
      <rect x="8" y="48" width="48" height="8" rx="4" fill="currentColor"/>
      
      {/* Scale platform */}
      <rect x="16" y="40" width="32" height="4" rx="2" fill="currentColor"/>
      
      {/* Scale display */}
      <rect x="24" y="16" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <line x1="28" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="1"/>
      <line x1="28" y1="24" x2="36" y2="24" stroke="currentColor" strokeWidth="1"/>
      
      {/* Scale body */}
      <line x1="32" y1="28" x2="32" y2="40" stroke="currentColor" strokeWidth="2"/>
      
      {/* Scale feet */}
      <circle cx="16" cy="52" r="2" fill="currentColor"/>
      <circle cx="24" cy="52" r="2" fill="currentColor"/>
      <circle cx="40" cy="52" r="2" fill="currentColor"/>
      <circle cx="48" cy="52" r="2" fill="currentColor"/>
    </svg>
  )
} 