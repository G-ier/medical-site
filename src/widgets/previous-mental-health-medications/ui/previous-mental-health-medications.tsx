'use client';

import { useCallback, useState } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { QuestionList, QuestionOption } from '@/shared/ui/molecules/question-list';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { GradientText } from '@/shared/ui/atoms/gradient-text';

export interface PreviousMentalHealthMedicationsProps {
  className?: string;
}

export function PreviousMentalHealthMedications({ className }: PreviousMentalHealthMedicationsProps) {
    const {save, next } = useOnboarding();

    const [value] = useState<string>('');


    const options: QuestionOption[] = [
        { id: '1', label: 'Yes', value: 'yes' },
        { id: '2', label: 'No', value: 'no' },
    ];

    const handleOptionSelect = useCallback(async (value: string) => {
        console.log('previous-mental-health-medications selected:', value);
        
        try {
            await save({
                'previous-mental-health-medications': value
            });
            console.log('previous-mental-health-medications saved successfully');
            
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
        }, [next, save]);

    return (
        <QAPageTemplate
            title={<GradientText gradient="purple-blue">
                Medical Profile
            </GradientText>}
            titleClassName="font-[500] tracking-wide text-[24px]"
            question="Have you previously taken mental health medication(s)?"
            questionClassName="text-[40px] font-light text-black"
            className={className}
        >
            <div className="text-center mb-8">
                <p className="text-[18px] text-gray-600 max-w-2xl mx-auto">
                    This should not include mental health medications you are currently taking.
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