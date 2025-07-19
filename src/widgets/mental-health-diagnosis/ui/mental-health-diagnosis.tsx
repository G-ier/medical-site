'use client';

import { useCallback, useState } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { QuestionList, QuestionOption } from '@/shared/ui/molecules/question-list';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { GradientText } from '@/shared/ui/atoms/gradient-text';
import { useFormData } from '@/shared/hooks';
import { FormType } from '@/shared/types/form-types';

export interface MentalHealthDiagnosisProps {
  className?: string;
}

export function MentalHealthDiagnosis({ className }: MentalHealthDiagnosisProps) {
    const { next } = useOnboarding();
    const { save: saveFormData } = useFormData();

    const [value] = useState<string>('');

    const options: QuestionOption[] = [
        { id: '1', label: 'No', value: 'no' },
        { id: '2', label: 'Yes', value: 'yes' },
    ];

    const handleOptionSelect = useCallback(async (value: string) => {
        console.log('mental-health-diagnosis selected:', value);
        
        try {
            await saveFormData(FormType.OHL_INITIAL_INTAKE, { 'mental-health-diagnosis': value });
            console.log('mental-health-diagnosis saved successfully');
            
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
            question="Have you been diagnosed with a mental health condition?"
            questionClassName="text-[40px] font-light text-black"
            className={className}
        >
            <div className="text-center mb-8">
                <p className="text-[18px] text-gray-600 max-w-2xl mx-auto">
                    We ask this so your provider can have a complete understanding of your medical history so they can decide what is the best treatment for you.
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