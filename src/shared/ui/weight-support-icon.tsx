import * as React from "react"
import { cn } from "@/shared/lib/utils"

interface WeightSupportIconProps {
  size?: number
  className?: string
}

export function WeightSupportIcon({ size = 72, className }: WeightSupportIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 73 72" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("flex-shrink-0", className)}
    >
      {/* Main scale body */}
      <path 
        d="M8.18421 67.0339C8.3479 68.5227 9.67003 69.6511 11.2314 69.6511H60.9558C62.5298 69.6511 63.8393 68.5227 64.003 67.0339L69.6819 15.6149C69.7952 14.6184 69.3671 13.6461 68.5486 13.0217C59.3441 6.0226 47.8857 2.25291 36.0999 2.34896C24.3141 2.25291 12.8558 6.0226 3.65122 13.0217C2.83276 13.6461 2.40464 14.6184 2.51797 15.6149L8.19681 67.0339H8.18421Z" 
        stroke="currentColor" 
        strokeWidth="2.1" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Scale platform/display */}
      <path 
        d="M60.0756 18.1067C60.4787 18.3584 60.7289 18.7957 60.7289 19.2595V26.5349C60.7289 27.3035 60.0756 27.9131 59.2834 27.9131H12.9162C12.1101 27.9131 11.4707 27.2902 11.4707 26.5349V19.2595C11.4707 18.7957 11.7209 18.3584 12.124 18.1067C22.5483 11.6662 35.3354 9.71819 47.3441 12.7264C51.8613 13.8528 56.17 15.6683 60.0756 18.1067Z" 
        stroke="currentColor" 
        strokeWidth="2.1" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Scale indicator/needle */}
      <path 
        d="M33.1953 27.9134L36.1003 19.6177L39.0051 27.9134H33.2092H33.1953Z" 
        stroke="currentColor" 
        strokeWidth="2.1" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Center measurement line */}
      <path 
        d="M36.1016 15.4834V11.3356" 
        stroke="currentColor" 
        strokeWidth="2.1" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Right measurement marks */}
      <path 
        d="M43.3418 16.1182L44.1478 12.0498" 
        stroke="currentColor" 
        strokeWidth="2.1" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      <path 
        d="M50.3301 18.0406L51.9146 14.1843" 
        stroke="currentColor" 
        strokeWidth="2.1" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Left measurement marks */}
      <path 
        d="M28.8589 16.1182L28.0527 12.0498" 
        stroke="currentColor" 
        strokeWidth="2.1" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      <path 
        d="M21.8657 18.0409L20.2812 14.1846" 
        stroke="currentColor" 
        strokeWidth="2.1" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

export type { WeightSupportIconProps } 