import React from 'react';
import { cn } from "@/shared/lib/utils"
import { WeightCalculator } from "./weight-calculator"
import { Container } from "./container"
import { OptimizedImage } from "./image"

interface StatisticsSectionProps {
    // Statistics content
    statisticPreText: string;
    statisticTimeframe: string;
    statisticPostText: string;

    // Calculator content
    calculatorTitle?: string;
    calculatorMinWeight?: number;
    calculatorMaxWeight?: number;
    calculatorDefaultWeight?: number;
    calculatorWeightLossPercentage?: number;
    calculatorResultText?: string;
    calculatorUnit?: string;

    // Section styling
    backgroundImage?: {
        src: string;
        alt: string;
    };
    padding?: string;
    className?: string;
}

export function StatisticsSection({
    // Statistics props
    statisticPreText,
    statisticTimeframe,
    statisticPostText,

    // Calculator props
    calculatorTitle = "Choose your starting weight",
    calculatorMinWeight = 100,
    calculatorMaxWeight = 500,
    calculatorDefaultWeight = 280,
    calculatorWeightLossPercentage = 0.149,
    calculatorResultText = "You can loose up to",
    calculatorUnit = "lbs",

    // Section styling
    backgroundImage = {
        src: "/calculator.png",
        alt: "Weight loss transformation - woman in fitness attire"
    },
    className
}: StatisticsSectionProps) {
    return (
        <section className={cn(
            "relative overflow-hidden max-w-[1860px] mx-auto rounded-[20px] max-[768px]:rounded-[0px] h-auto min-h-[500px] sm:min-h-[700px] lg:min-h-[886px]",
            // Responsive padding
            "px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-[140px] lg:py-[60px]",
            className
        )}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <OptimizedImage
                    src={backgroundImage.src}
                    alt={backgroundImage.alt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content */}
            <Container className="relative z-10 h-full px-0" maxWidth="8xl">
                <div className="h-full flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Statistics - Mobile: Centered, Desktop: Left */}
                    <div className="flex justify-center items-center lg:justify-start lg:items-start lg:pt-6 text-center lg:text-left">
                        <div className="space-y-2 sm:space-y-4 text-white">
                            <p className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-normal leading-tight">
                                {statisticPreText}
                            </p>

                            <p className="text-[48px] sm:text-[56px] md:text-[68px] lg:text-[86px] font-normal leading-tight">
                                {statisticTimeframe}
                            </p>
                            
                            <p className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-normal leading-tight">
                                {statisticPostText}
                            </p>
                        </div>
                    </div>

                    {/* Weight Calculator - Mobile: Centered, Desktop: Right */}
                    <div className="flex justify-center items-center lg:justify-end h-full">
                        <WeightCalculator
                            title={calculatorTitle}
                            minWeight={calculatorMinWeight}
                            maxWeight={calculatorMaxWeight}
                            defaultWeight={calculatorDefaultWeight}
                            weightLossPercentage={calculatorWeightLossPercentage}
                            resultText={calculatorResultText}
                            unit={calculatorUnit}
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
} 