import * as React from "react"
import Image from "next/image"

// Cruelty Free Icon - References external SVG file
export const CrueltyFreeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Image 
    src="/icons/cruelty-free.svg"
    alt="Cruelty Free"
    width={293}
    height={206}
    className={`w-full h-full object-contain ${className || ''}`}
  />
)

// Eco Friendly Icon - References external SVG file
export const EcoFriendlyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Image 
    src="/icons/eco-friendly.svg"
    alt="Eco Friendly"
    width={76}
    height={89}
    className={`w-full h-full object-contain ${className || ''}`}
  />
)

// Paraben Free Icon - References external SVG file
export const ParabenFreeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Image 
    src="/icons/paraben-free.svg"
    alt="Paraben Free"
    width={75}
    height={89}
    className={`w-full h-full object-contain ${className || ''}`}
  />
)

// Silicone Free Icon - References external SVG file
export const SiliconeFreeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Image 
    src="/icons/silicone-free.svg"
    alt="Silicone Free"
    width={75}
    height={89}
    className={`w-full h-full object-contain ${className || ''}`}
  />
)

// Sulfate Free Icon - References external SVG file
export const SulfateFreeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Image 
    src="/icons/sulfate-free.svg"
    alt="Sulfate Free"
    width={75}
    height={89}
    className={`w-full h-full object-contain ${className || ''}`}
  />
)

// Gluten Free Icon - References external SVG file
export const GlutenFreeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Image 
    src="/icons/gluten-free.svg"
    alt="Gluten Free"
    width={293}
    height={206}
    className={`w-full h-full object-contain ${className || ''}`}
  />
) 