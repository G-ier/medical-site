'use client';

import { useCallback, useState } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { QuestionList, QuestionOption } from '@/shared/ui/molecules/question-list';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { GradientText } from '@/shared/ui/atoms/gradient-text';
import { FormType } from '@/shared/types/form-types';
import { useFormData } from '@/shared/hooks';

export interface CurrentHarmQuestionProps {
  className?: string;
}

export function CurrentHarmQuestion({ className }: CurrentHarmQuestionProps) {
    const { next } = useOnboarding();
    const { save: saveFormData } = useFormData();

    const [value] = useState<string>('');

    const options: QuestionOption[] = [
        { id: '1', label: 'No', value: 'no' },
        { id: '2', label: 'Yes', value: 'yes' },
    ];

    const handleOptionSelect = useCallback(async (value: string) => {
        console.log('current-harm-question selected:', value);
        
        try {
            // Save data to current step
            await saveFormData(FormType.OHL_INITIAL_INTAKE, { 'current-harm-question': value });
            console.log('current-harm-question saved successfully');
            
            // Automatically go to next step after selection (AFTER data is saved)
            setTimeout(async () => {
                console.log('Attempting to go to next step...');
                try {
                    await next();
                    console.log('Successfully navigated to next step');
                } catch (error) {
                    console.error('Error navigating to next step:', error);
                }
            }, 500);
        } catch (error) {
            console.error('Error in handleOptionSelect:', error);
        }
    }, [saveFormData, next]);

    return (
        <QAPageTemplate
            title={<GradientText gradient="purple-blue">
                our platform
            </GradientText>}
            titleClassName="font-[500] tracking-wide text-[24px]"
            question="Do you currently have any desire to harm yourself or others?"
            questionClassName="text-[40px] font-light text-black"
            className={className}
        >
            <div className="text-center mb-8">
                <p className="text-[18px] text-gray-600 max-w-2xl mx-auto">
                    We ask this question so your provider can have a complete picture of your current health and determine which treatment might be right for you.
                </p>
            </div>
            
            <QuestionList
                options={options}
                selectedValue={value}
                onSelect={handleOptionSelect}
                className="mt-8"
                showArrows={true}
            />
        </QAPageTemplate>
    )
}