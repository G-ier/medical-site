'use client';

import { cn } from '@/shared/lib/utils';
import { ArrowDown } from 'lucide-react';

export interface GoalCardProps {
    goalWeight: string;
    currentBMI: number;
    goodBMI: number;
    description?: string;
    className?: string;
}

export function GoalCard({
    goalWeight,
    currentBMI,
    goodBMI,
    description = "BMI is a key data point that doctors use to assess your overall health as well as any health risks",
    className
}: GoalCardProps) {
    return (
        <div className={cn(
            'font-infer w-full max-w-[875px] bg-[#F5F1E8] relative overflow-hidden py-6 px-4 sm:py-[57px] sm:px-[72px] rounded-3xl sm:rounded-[50px]',
            className
        )}>
            {/* Header */}
            <div className="mb-12">
                <h3 className="text-black text-lg sm:text-[24px] font-bold mb-4">Your Goal</h3>

                {/* Goal Weight with Arrow */}
                <div className="flex flex-col items-center sm:flex-row sm:items-start mb-8 sm:mb-12 gap-2 sm:gap-4">
                    <div className='bg-[#333239] rounded-2xl sm:rounded-[24px] p-2 mt-4'>
                        <ArrowDown className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-5xl sm:text-[128px] font-normal text-black">{goalWeight}</div>
                </div>

                {/* BMI Comparison Cards - numbers and labels on the same baseline */}
                <div className="flex flex-row justify-center items-end gap-4 mb-8 sm:mb-0">
                    {/* Current BMI Card */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center justify-center h-20 w-20 sm:h-[180px] sm:w-[120px] bg-[#333239] rounded-2xl sm:rounded-[24px] px-4 sm:px-8 py-4 sm:py-6 text-center">
                            <div className="text-white text-lg sm:text-[32px] font-normal mb-2">{currentBMI}</div>
                        </div>
                        <div className="text-black text-xs sm:text-[16px] font-normal mt-2">Current BMI</div>
                    </div>

                    {/* Good BMI Card */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center justify-center h-14 w-14 sm:h-[120px] sm:w-[80px] bg-[#6E6E70] rounded-2xl sm:rounded-[24px] px-2 sm:px-8 py-2 sm:py-6 text-center">
                            <div className="text-white text-base sm:text-[20px] font-normal mb-2">{goodBMI}</div>
                        </div>
                        <div className="text-black text-xs sm:text-[16px] font-normal mt-2">Good BMI</div>
                    </div>
                </div>
            </div>

            {/* Why BMI Matters Section */}
            <div className="mt-8 sm:mt-16">
                <h4 className="text-black text-lg sm:text-[24px] font-bold mb-6">Why BMI matters</h4>
                <p className="text-black text-base sm:text-[20px] font-normal leading-relaxed max-w-full sm:max-w-[600px]">
                    {description}
                </p>
            </div>
        </div>
    );
} 