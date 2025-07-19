'use client';

import { useCallback } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { ContinueButton } from '@/shared/ui/atoms';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';

export interface MedicalHistoryIntroductionProps {
    className?: string;
}

/**
 * Medical History Introduction Component
 * Page for introducing medical history assessment with background image
 */
export function MedicalHistoryIntroduction({ className }: MedicalHistoryIntroductionProps) {
    const { next } = useOnboarding();

    const handleContinue = useCallback(async () => {
        try {
            console.log('Medical history introduction - continuing to next step');
            ;
            await next();
            console.log('Successfully navigated to next step');
        } catch (error) {
            console.error('Error navigating to next step:', error);
        }
    }, [next]);



    return (
        <QAPageTemplate
            title="01/05"
            titleClassName="text-white text-[32px] font-light mb-6"
            question="The bigger picture"
            questionClassName="text-[40px] font-medium text-white"
            backgroundImage="/onboarding-2.jpg"
            backgroundImageAlt="Person with curly hair looking thoughtful"
            backgroundOverlay={true}
            backgroundOverlayClassName="bg-black/40"
            actions={
                <ContinueButton
                    onClick={handleContinue}
                    className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
                />
            }
            className={className}
        >
            <div className="flex justify-center">
                <p className="text-[24px] font-light text-white text-center">
                    A few questions about your medical history and health to help your provider determine the best treatment plan
                    <br />
                    You&apos;ll see your results in just a few seconds
                </p>
            </div>
        </QAPageTemplate>
    );
} 