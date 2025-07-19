import * as React from "react"

interface TimerIconProps {
  className?: string
  size?: number
}

export function TimerIcon({ className, size = 64 }: TimerIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="32" cy="32" r="4" fill="currentColor"/>
      <line x1="32" y1="12" x2="32" y2="20" stroke="currentColor" strokeWidth="2"/>
      <line x1="32" y1="44" x2="32" y2="52" stroke="currentColor" strokeWidth="2"/>
      <line x1="52" y1="32" x2="44" y2="32" stroke="currentColor" strokeWidth="2"/>
      <line x1="20" y1="32" x2="12" y2="32" stroke="currentColor" strokeWidth="2"/>
      <line x1="32" y1="32" x2="42" y2="22" stroke="currentColor" strokeWidth="2"/>
      <line x1="32" y1="32" x2="32" y2="20" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
} 