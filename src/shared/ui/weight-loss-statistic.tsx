import React from 'react';
import { cn } from '@/shared/lib/utils';

export interface WeightLossStatisticProps {
    preText: string;
    mainText: string;
    percentage: string;
    timeframe: string;
    titleAboveDescription?: string;
    description: string;
    variant?: 'default' | 'centered' | 'large';
    className?: string;
}

export const WeightLossStatistic: React.FC<WeightLossStatisticProps> = ({
    preText,
    mainText,
    percentage,
    timeframe,
    titleAboveDescription,
    description,
    variant = 'centered',
    className
}) => {
    const containerClasses = cn(
        'py-0 px-8',
        {
            'text-center': variant === 'centered',
            'text-left': variant === 'default',
            'py-24': variant === 'large',
        },
        className
    );

    return (
        <div className={containerClasses}>
            {/* Pre-text */}
            <p className="text-[#171717CC] text-[17px] mb-0 font-light">
                {preText}
            </p>

            {/* Main headline with percentage */}
            <div className="space-y-1">
                <h2 className="text-2xl sm:text-[40px] font-light text-[#171717] leading-tight">
                    {mainText}
                </h2>

                <div className="flex items-center justify-center gap-4 flex-wrap">
                    <span className="text-5xl sm:text-[96px] font-light bg-gradient-to-r from-[#CAB8FF] to-[#6F69AC] bg-clip-text text-transparent">
                        {percentage}
                    </span>
                    <div className="max-w-full sm:max-w-[100px]">
                    <span className="text-lg sm:text-[35px] md:text-3xl lg:text-4xl font-light text-[#6F69AC] bg-gradient-to-r from-[#CAB8FF] to-[#6F69AC] bg-clip-text text-transparent">
                        {timeframe}
                    </span>
                    </div>
                   
                </div>
            </div>

            {/* Title above description (optional) */}
            {titleAboveDescription && (
                <h3 className="text-[28px]  mb-2 font-light text-[#171717]">
                    {titleAboveDescription}
                </h3>
            )}

            {/* Bottom description */}
            <div className="max-w-full sm:max-w-[320px] mx-auto">
                <p className="text-[#171717CC] text-[16px] leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}; 