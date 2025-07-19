'use client';

import { useCallback, useState } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { QuestionList, QuestionOption } from '@/shared/ui/molecules/question-list';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { GradientText } from '@/shared/ui/atoms/gradient-text';
import { useFormData } from '@/shared/hooks';
import { FormType } from '@/shared/types/form-types';

export interface HeartRateAssessmentWidgetProps {
  className?: string;
}

export function HeartRateAssessmentWidget({ className }: HeartRateAssessmentWidgetProps) {
    const { next } = useOnboarding();
    const { save: saveFormData } = useFormData();

    const [value] = useState<string>('');

    const options: QuestionOption[] = [
        { id: '1', label: "I don't know", value: 'dont-know' },
        { id: '2', label: '<70 beats per minute', value: 'under-70' },
        { id: '3', label: '70-79 beats per minute', value: '70-79' },
        { id: '4', label: '80-99 beats per minute', value: '80-99' },
        { id: '5', label: '100 or more beats per minute', value: '100-plus' },
    ];

    const handleOptionSelect = useCallback(async (value: string) => {
        console.log('heart-rate-assessment selected:', value);
        
        try {
            await saveFormData(FormType.OHL_INITIAL_INTAKE, { 'heart-rate-assessment': value });
            console.log('heart-rate-assessment saved successfully');
            
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
                Rejuve
            </GradientText>}
            titleClassName="font-[500] tracking-wide text-[24px]"
            question="What is your average resting heart rate?"
            questionClassName="text-[40px] font-light text-black"
            className={className}
        >
            <div className="text-center mb-8">
                <p className="text-[18px] text-gray-600 max-w-2xl mx-auto">
                    You can find your average resting heart rate if you own a wearable like an Apple Watch or Oura Ring.
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