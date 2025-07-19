'use client';

import { useCallback } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { GradientText, ContinueButton } from '@/shared/ui/atoms';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';

export interface MentalHealthAwarenessProps {
    className?: string;
}

/**
 * Mental Health Awareness Component
 * Educational page showing mental health statistics and encouraging users
 */
export function MentalHealthAwareness({ className }: MentalHealthAwarenessProps) {
    const { next } = useOnboarding();

    const handleContinue = useCallback(async () => {
        try {
            console.log('Mental health awareness - continuing to next step');
            await next();
            console.log('Successfully navigated to next step');
        } catch (error) {
            console.error('Error navigating to next step:', error);
        }
    }, [next]);



    return (
        <QAPageTemplate
            title={
                <GradientText gradient="pink-yellow">
                    Getting started
                </GradientText>
            }
            titleClassName="block w-auto text-[24px] font-semibold"
            question="You're in the right place"
            questionClassName="text-[40px] font-medium text-black mb-8"
            className={className}
        >
            <div className="text-center mb-8">
                <p className="text-[24px] font-light text-black">
                    Nearly 40% of adults say they&apos;re paying more attention to their mental health and wellbeing compared to a year ago.
                </p>
                <p className="text-[14px] font-light text-black">
                    source: Mintel
                </p>
            </div>
            
            <div className="flex justify-center">
                <ContinueButton onClick={handleContinue} />
            </div>
        </QAPageTemplate>
    );
} 