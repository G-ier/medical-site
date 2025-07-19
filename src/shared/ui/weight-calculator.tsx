'use client'

import { useState, useCallback, useMemo } from "react"
import { cn } from "@/shared/lib/utils"
import { TextInput } from "./text-input"
import { Slider } from "./slider"

interface WeightCalculatorProps {
  title?: string;
  minWeight?: number;
  maxWeight?: number;
  defaultWeight?: number;
  weightLossPercentage?: number;
  resultText?: string;
  unit?: string;
  className?: string;
}

export function WeightCalculator({
  title = "Choose your starting weight",
  minWeight = 100,
  maxWeight = 500,
  defaultWeight = 280,
  weightLossPercentage = 0.149, // 14.9%
  resultText = "You can loose up to",
  unit = "lbs",
  className
}: WeightCalculatorProps) {
  const [weight, setWeight] = useState<number | string>(defaultWeight)

  const potentialWeightLoss = useMemo(() => {
    const weightValue = typeof weight === 'string' ? parseFloat(weight) || 0 : weight
    return Math.round(weightValue * weightLossPercentage)
  }, [weight, weightLossPercentage])

  const handleWeightChange = useCallback((value: number) => {
    const clampedValue = Math.max(minWeight, Math.min(maxWeight, value))
    setWeight(clampedValue)
  }, [minWeight, maxWeight])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === '' || !isNaN(Number(value))) {
      setWeight(value === '' ? '' : Number(value))
    }
  }, [])

  const handleInputBlur = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (!isNaN(value)) {
      handleWeightChange(value)
    } else {
      setWeight(minWeight)
    }
  }, [handleWeightChange, minWeight])

  return (
    <div className={cn(
      "bg-white/40 backdrop-blur-md rounded-2xl relative",
      "border border-white/30 shadow-xl",
      "w-full max-w-[350px] h-auto px-4 py-6",
      "sm:max-w-[400px] sm:px-6 sm:py-10",
      "md:max-w-[500px] md:px-8 md:py-12",
      "lg:w-[605px] lg:h-[580px] lg:px-[42px] lg:py-[64px]",
      className
    )}>
      {/* Title and Input Row */}
      <div className="flex flex-row justify-between items-center gap-3">
        <h3 className="text-white font-light text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-tight flex-1 min-w-0">
          {title}
        </h3>
        {/* Weight Input - Compact */}
        <div className="flex-shrink-0">
          <TextInput
            type="number"
            value={weight}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            min={minWeight}
            max={maxWeight}
            variant="custom"
            textAlign="center"
            className="w-[80px] h-[40px] text-[16px] font-bold bg-white rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-purple-500 sm:w-[100px] sm:h-[48px] sm:text-[20px] md:w-[140px] md:h-[56px] md:text-[24px] lg:w-[170px] lg:h-[70px] lg:text-[28px] text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
            aria-label={`Weight in ${unit}`}
          />
        </div>
      </div>

      {/* Slider + Result Container - Responsive position */}
      <div className="mt-8 sm:mt-12 md:mt-16 lg:absolute lg:bottom-[64px] lg:left-[42px] lg:right-[42px]">
        {/* Slider */}
        <div className="mb-6 sm:mb-8">
          <Slider
            value={typeof weight === 'string' ? parseFloat(weight) || minWeight : weight}
            min={minWeight}
            max={maxWeight}
            step={1}
            onChange={handleWeightChange}
            aria-label="Adjust weight"
          />
        </div>
        {/* Result */}
        <div className="text-center">
          <p className="text-white mb-2 text-[18px] sm:text-[22px] md:text-[28px]">
            {resultText}
          </p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-white drop-shadow-sm font-bold text-[48px] sm:text-[72px] md:text-[96px] lg:text-[132px]">
              {potentialWeightLoss}
            </span>
            <span className="text-white/80 font-medium text-[24px] sm:text-[32px] md:text-[40px] lg:text-[56px]">
              {unit}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
} 