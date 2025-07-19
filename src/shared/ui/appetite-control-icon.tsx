import * as React from "react"
import { cn } from "@/shared/lib/utils"

interface AppetiteControlIconProps {
  size?: number
  className?: string
}

export function AppetiteControlIcon({ size = 72, className }: AppetiteControlIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 73 72" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("flex-shrink-0", className)}
    >
      {/* Main thermometer body */}
      <path 
        d="M43.3633 40.3874H50.5616C50.7699 40.3891 50.9762 40.3461 51.1666 40.2617C51.357 40.1771 51.5271 40.0527 51.6656 39.8971C51.8041 39.7415 51.9076 39.5581 51.9696 39.3591C52.0314 39.1602 52.05 38.9503 52.0242 38.7437C51.2344 32.5046 47.0137 16.9874 43.3633 16.9874V56.475" 
        stroke="currentColor" 
        strokeWidth="2.1" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Left thermometer line */}
      <path 
        d="M28.7383 16.9874V56.475" 
        stroke="currentColor" 
        strokeWidth="2.1" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Outer circle */}
      <path 
        d="M2.41406 36.0001C2.41406 40.4174 3.28412 44.7915 4.97456 48.8726C6.665 52.9537 9.14273 56.6618 12.2662 59.7854C15.3898 62.9088 19.098 65.3866 23.179 67.0771C27.2601 68.7675 31.6342 69.6375 36.0516 69.6375C40.4689 69.6376 44.843 68.7675 48.9241 67.0771C53.0052 65.3866 56.7133 62.9088 59.8369 59.7854C62.9604 56.6618 65.4381 52.9537 67.1286 48.8726C68.819 44.7915 69.6891 40.4174 69.689 36.0001C69.6891 31.5827 68.819 27.2086 67.1286 23.1275C65.4381 19.0464 62.9604 15.3383 59.8369 12.2147C56.7133 9.09121 53.0052 6.61349 48.9241 4.92305C44.843 3.23261 40.4689 2.36255 36.0516 2.36255C31.6342 2.36255 27.2601 3.23261 23.179 4.92305C19.098 6.61349 15.3898 9.09121 12.2662 12.2147C9.14273 15.3383 6.665 19.0464 4.97456 23.1275C3.28412 27.2086 2.41406 31.5827 2.41406 36.0001Z" 
        stroke="currentColor" 
        strokeWidth="2.1" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Thermometer bulb */}
      <path 
        d="M22.8887 16.9873V31.6124C22.8888 33.1639 23.5051 34.6519 24.6022 35.7489C25.6992 36.846 27.1872 37.4624 28.7387 37.4624C30.2903 37.4624 31.7783 36.846 32.8753 35.7489C33.9724 34.6519 34.5887 33.1639 34.5887 31.6124V16.9873" 
        stroke="currentColor" 
        strokeWidth="2.1" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Left measurement mark */}
      <path 
        d="M23.6877 50.6924L13.4414 60.9064" 
        stroke="currentColor" 
        strokeWidth="2.1" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Right measurement mark */}
      <path 
        d="M61.0333 13.4805L53.7207 20.7666" 
        stroke="currentColor" 
        strokeWidth="2.1" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

export type { AppetiteControlIconProps } 