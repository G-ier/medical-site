'use client';

import { useCallback, useState } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { QuestionList, QuestionOption } from '@/shared/ui/molecules/question-list';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { GradientText } from '@/shared/ui/atoms/gradient-text';
import { useFormData } from '@/shared/hooks';
import { FormType } from '@/shared/types/form-types';

export interface PregnancyScreeningProps {
  className?: string;
}

export function PregnancyScreening({ className }: PregnancyScreeningProps) {
    const { next } = useOnboarding();
    const { save: saveFormData } = useFormData();

    const [value] = useState<string>('');

    const options: QuestionOption[] = [
        { id: '1', label: 'No', value: 'no' },
        { id: '2', label: 'Yes, I\'m currently pregnant', value: 'currently-pregnant' },
        { id: '3', label: 'Yes, I\'m currently trying to get pregnant and have sex without birth control', value: 'trying-to-get-pregnant' },
    ];

    const handleOptionSelect = useCallback(async (value: string) => {
        console.log('pregnancy-screening selected:', value);
        
        try {
            await saveFormData(FormType.OHL_INITIAL_INTAKE, { 'pregnancy-screening': value });
            console.log('pregnancy-screening saved successfully');
            
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
            question="Are you currently pregnant or trying to become pregnant?"
            questionClassName="text-[40px] font-light text-black"
            className={className}
        >
            <div className="text-center mb-8">
                <p className="text-[18px] text-gray-600 max-w-2xl mx-auto">
                    For your safety, if you become pregnant, please stop taking all weight loss medications immediately and notify your Care Team through the app.
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