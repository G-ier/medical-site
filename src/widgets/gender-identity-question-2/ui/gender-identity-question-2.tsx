'use client';

import { useCallback, useState } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { QuestionList, QuestionOption } from '@/shared/ui/molecules/question-list';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { GradientText } from '@/shared/ui/atoms/gradient-text';
import { useFormData } from '@/shared/hooks';
import { FormType } from '@/shared/types/form-types';

export interface GenderIdentityQuestion2Props {
  className?: string;
}

export function GenderIdentityQuestion2({ className }: GenderIdentityQuestion2Props) {
    const { next } = useOnboarding();
    const { save: saveFormData } = useFormData();

    const [value] = useState<string>('');

    const options: QuestionOption[] = [
        { id: '1', label: 'Man', value: 'man' },
        { id: '2', label: 'Woman', value: 'woman' },
        { id: '3', label: 'Genderqueer', value: 'genderqueer' },
        { id: '4', label: 'Non-binary', value: 'non-binary' },
        { id: '5', label: 'Agender', value: 'agender' },
        { id: '6', label: 'Questioning', value: 'questioning' },
        { id: '7', label: 'Other', value: 'other' },
    ];

    const handleOptionSelect = useCallback(async (value: string) => {
        console.log('gender-identity-question-2 selected:', value);
        
        try {
            await saveFormData(FormType.OHL_INITIAL_INTAKE, { 'gender-identity-question-2': value });
            console.log('gender-identity-question-2 saved successfully');
            
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
                Medical Profile
            </GradientText>}
            titleClassName="font-[500] tracking-wide text-[24px]"
            question="What gender do you most identify with?"
            questionClassName="text-[40px] font-light text-black"
            className={className}
        >
            <div className="text-center mb-8">
                <p className="text-[18px] text-gray-600 max-w-2xl mx-auto">
                    We ask so we can provide you with the best care for you. Your gender will not disqualify you from quality, confidential treatment.
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