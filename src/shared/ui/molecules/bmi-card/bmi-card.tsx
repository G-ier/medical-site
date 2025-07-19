'use client';

import { cn } from '@/shared/lib/utils';
import Image from 'next/image';

export interface BMICardProps {
    bmi: number;
    weight: string;
    height: string;
    currentBMI?: number;
    goalBMI?: number;
    medicationZoneStart?: number;
    medicationZoneEnd?: number;
    description?: string;
    className?: string;
}

export function BMICard({
    bmi,
    weight,
    height,
    currentBMI = bmi,
    goalBMI,
    medicationZoneStart = 25,
    medicationZoneEnd = 40,
    description = "This falls within the range where doctors may prescribe medication to get back to a healthy weight.",
    className
}: BMICardProps) {
    // Calculate dynamic scale range based on current BMI and goal BMI
    const scaleMin = 18.5;
    // Make scale max dynamic - at least 40, but extend if any BMI value is higher
    const maxBMI = Math.max(currentBMI, goalBMI || 0);
    const scaleMax = Math.max(40, Math.ceil(maxBMI / 10) * 10);
    
    const bmiPosition = ((currentBMI - scaleMin) / (scaleMax - scaleMin)) * 100;
    const medicationStart = ((medicationZoneStart - scaleMin) / (scaleMax - scaleMin)) * 100;
    const medicationEnd = ((medicationZoneEnd - scaleMin) / (scaleMax - scaleMin)) * 100;

    // Generate scale numbers dynamically
    const generateScaleNumbers = () => {
        const numbers = [18.5, 25, 30];
        
        // Always include 40 if it's within our range
        if (scaleMax >= 40) {
            numbers.push(40);
        }
        
        // Add the max value if it's different from 40
        if (scaleMax > 40) {
            numbers.push(scaleMax);
        }
        
        return numbers;
    };

    const scaleNumbers = generateScaleNumbers();

    return (
        <div className={cn(
            'font-infer w-full max-w-[875px] bg-gradient-to-br from-[#BAABDA] via-[#D6E5FA] to-[#D6E5FA] text-white relative overflow-hidden py-6 px-4 sm:py-[57px] sm:px-[72px] rounded-3xl sm:rounded-[50px]',
            className
        )}>
            {/* Header */}
            <div className="mb-4">
                <h3 className="text-white text-lg sm:text-[24px] font-bold">Your BMI</h3>
                <div className="text-5xl sm:text-[128px] font-normal text-black mb-4">{bmi}</div>

                {/* Weight and Height Tags */}
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    <span className="bg-white/50 backdrop-blur-sm rounded-full px-3 py-1 text-base sm:px-4 sm:py-2 sm:text-[20px] font-normal text-black">
                        {weight}
                    </span>
                    <span className="bg-white/50 backdrop-blur-sm rounded-full px-3 py-1 text-base sm:px-4 sm:py-2 sm:text-[20px] font-normal text-black">
                        {height}
                    </span>
                </div>
            </div>

            {/* Current BMI Indicator */}
            <div className="mb-4 relative h-16">
                <div 
                    className="absolute text-black text-base sm:text-[20px] font-bold whitespace-nowrap"
                    style={{ 
                        left: `${Math.min(Math.max(bmiPosition, 0), 100)}%`,
                        transform: 'translateX(-50%)',
                        top: '0px'
                    }}
                >
                    Current BMI
                </div>
                <div 
                    className="absolute text-black text-lg sm:text-[24px] font-bold"
                    style={{ 
                        left: `${Math.min(Math.max(bmiPosition, 0), 100)}%`,
                        transform: 'translateX(-50%)',
                        top: '28px'
                    }}
                >
                    ▼
                </div>
            </div>

            {/* BMI Scale */}
            <div className="relative mb-6">
                {/* Scale Background */}
                <div className="h-12 bg-white/50 backdrop-blur-sm rounded-full relative overflow-hidden">
                    {/* Medication Zone - only show if it fits within scale */}
                    {medicationZoneEnd <= scaleMax && (
                        <div
                            className="absolute top-0 h-full bg-[#1A1A1CDB] backdrop-blur-sm rounded-full flex items-center justify-center"
                            style={{
                                left: `${medicationStart}%`,
                                width: `${medicationEnd - medicationStart}%`
                            }}
                        >
                            <span className="text-white text-base sm:text-[20px] font-normal">Medication Zone</span>
                        </div>
                    )}

                    {/* Current BMI Indicator */}
                    <div
                        className="absolute top-0 w-1 h-full bg-[#1A1A1CDB]"
                        style={{ left: `${Math.min(Math.max(bmiPosition, 0), 100)}%` }}
                    />
                </div>

                {/* Scale Numbers */}
                <div className="flex justify-between mt-2 text-xs sm:text-sm text-black font-medium">
                    {scaleNumbers.map((number, index) => (
                        <span key={index}>{number}</span>
                    ))}
                </div>
            </div>

            {/* Bottom Message */}
            <div className="mt-8 sm:mt-12 bg-white/50 backdrop-blur-sm rounded-2xl sm:rounded-[36px] px-4 py-4 sm:px-[40px] sm:py-[28px]">
                <div className="flex flex-col items-start gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Image src="/icons/check.svg" alt="Check" width={32} height={32} />
                    </div>
                    <p className="text-black text-base sm:text-[20px] font-normal leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
} 