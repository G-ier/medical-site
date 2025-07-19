'use client';

import { cn } from '@/shared/lib/utils';
import { GradientText } from '../../atoms/gradient-text';

export interface ResultCardProps {
    title: string;
    score: string;
    titleColor?: string;
    scoreColor?: string;
    symptoms: string[];
    symptomsTitle: string;
    className?: string;
}

export function ResultCard({
    title,
    score,
    titleColor = 'text-pink-300',
    scoreColor = 'text-pink-300',
    symptoms,
    symptomsTitle,
    className
}: ResultCardProps) {
    return (
        <div className={cn('w-full flex flex-col md:flex-row items-center gap-8 py-8 justify-between', className)}>
            {/* Left side - Title and Score */}
            <div className="flex flex-col items-center">
                <GradientText
                    gradient="pink-yellow"
                    className={cn('text-[36px] font-bold', titleColor)}
                >
                    {title}
                </GradientText>
                <div className={cn('text-[36px] font-bold', scoreColor)}>
                    {score}
                </div>
            </div>

            {/* Right side - Symptoms */}
            <div className='min-w-[300px]'>
                <h4 className="text-[24px] font-bold text-black mb-3">
                    {symptomsTitle}
                </h4>
                <ul className="space-y-1">
                    {symptoms.map((symptom, index) => (
                        <li key={index} className="text-gray-700">
                            {symptom}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
} 