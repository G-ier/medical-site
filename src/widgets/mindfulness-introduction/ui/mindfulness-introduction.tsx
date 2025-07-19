'use client';

import { useCallback } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { GradientText, ContinueButton } from '@/shared/ui/atoms';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';

export interface MindfulnessIntroductionProps {
    className?: string;
}

/**
 * Mindfulness Introduction Component
 * Educational page explaining the importance of self-awareness and mindfulness
 */
export function MindfulnessIntroduction({ className }: MindfulnessIntroductionProps) {
    const { next } = useOnboarding();

    const handleContinue = useCallback(async () => {
        try {
            console.log('Mindfulness introduction - continuing to next step');
            ;
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
            question="Believe it or not, checking in with yourself is one of the first steps to mindfulness- an important aspect of mental health."
            questionClassName="text-[40px] font-medium text-black "
            actions={
                <ContinueButton onClick={handleContinue} />
            }
            className={className}
        />
    );
} 