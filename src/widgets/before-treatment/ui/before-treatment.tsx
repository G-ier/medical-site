'use client';

import { useCallback } from 'react';
import { ContinueButton, GradientText } from "@/shared/ui/atoms";
import { QAPageTemplate } from "@/shared/ui/templates";
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';

export function BeforeTreatment() {
    const { next } = useOnboarding();

    const handleContinue = useCallback(async () => {
        try {
            console.log('Before treatment - continuing to next step');
            ;
            await next();
            console.log('Successfully navigated to next step');
        } catch (error) {
            console.error('Error navigating to next step:', error);
        }
    }, [next]);



    return <QAPageTemplate
        title=""
        actions={<ContinueButton onClick={handleContinue} />}
    >
        <div className="max-w-[875px] mx-auto space-y-12">
            <p className="text-[60px] font-light text-black text-center">
                Before we get your treatment options, let’s talk about <GradientText gradient="purple-blue">what you can expect</GradientText> with our platform.
            </p>
        </div>
    </QAPageTemplate>
}