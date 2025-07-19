'use client'

import { cn } from "@/shared/lib/utils"
import { useCallback } from "react"

interface SliderProps {
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  className?: string;
  disabled?: boolean;
  'aria-label'?: string;
}

export function Slider({ 
  value, 
  min, 
  max, 
  step = 1, 
  onChange, 
  className,
  disabled = false,
  'aria-label': ariaLabel
}: SliderProps) {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value))
  }, [onChange])


  return (
    <div className={cn("relative w-full", className)}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        aria-label={ariaLabel}
        className={cn(
          "w-full appearance-none cursor-pointer h-[18px]",
          "bg-gradient-to-r from-violet-300 to-slate-500 rounded-[122.58px]",
          "shadow-[7.429168224334717px_2.476389169692993px_4.952778339385986px_0px_rgba(0,0,0,0.25)]",
          "focus:outline-none",
          // Custom thumb styling (centered)
          "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[3.7145841121673584px_1.2381945848464966px_4.952778339385986px_0px_rgba(0,0,0,0.25)] [&::-webkit-slider-thumb]:border-[6.19px] [&::-webkit-slider-thumb]:border-violet-300",
          // Firefox
          "[&::-moz-range-thumb]:w-8 [&::-moz-range-thumb]:h-8 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:shadow-[3.7145841121673584px_1.2381945848464966px_4.952778339385986px_0px_rgba(0,0,0,0.25)] [&::-moz-range-thumb]:border-[6.19px] [&::-moz-range-thumb]:border-violet-300",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      />
    </div>
  )
} 