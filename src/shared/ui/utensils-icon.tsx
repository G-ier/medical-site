import * as React from "react"

interface UtensilsIconProps {
  className?: string
  size?: number
}

export function UtensilsIcon({ className, size = 64 }: UtensilsIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Fork */}
      <line x1="20" y1="8" x2="20" y2="56" stroke="currentColor" strokeWidth="2"/>
      <line x1="16" y1="8" x2="16" y2="24" stroke="currentColor" strokeWidth="2"/>
      <line x1="24" y1="8" x2="24" y2="24" stroke="currentColor" strokeWidth="2"/>
      <line x1="18" y1="8" x2="18" y2="20" stroke="currentColor" strokeWidth="1"/>
      <line x1="22" y1="8" x2="22" y2="20" stroke="currentColor" strokeWidth="1"/>
      
      {/* Knife */}
      <line x1="44" y1="8" x2="44" y2="56" stroke="currentColor" strokeWidth="2"/>
      <path d="M40 8 L48 8 L44 16 Z" fill="currentColor"/>
    </svg>
  )
} 