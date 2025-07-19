'use client';

import { useCallback, useState } from 'react';
import { QAPageTemplate } from '@/shared/ui/templates';
import { GradientText, ContinueButton } from '@/shared/ui/atoms';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { useFormData } from '@/shared/hooks';
import { FormType } from '@/shared/types/form-types';
import { TextInput } from '@/shared/ui';

export interface InputAnswerWidgetProps {
    className?: string;
    title: string;
    question: string;
    fieldName: string;
    formType: FormType;
    as: 'input' | 'textarea';
    canSkip?: boolean;
    placeholder?: string;
    navigateTo?: (value: string) => Promise<void>;
}

/**
 * Input Answer Widget Component
 * Page for collecting user's input answer
 */
export function InputAnswerWidget({ canSkip, as, className, title, question, fieldName, formType, placeholder = "Please provide your answer.", navigateTo }: InputAnswerWidgetProps) {
    const { next } = useOnboarding();
    const { save: saveFormData } = useFormData();
    const [inputAnswer, setInputAnswer] = useState('');
    const [error, setError] = useState<string>('');

    const handleContinue = useCallback(async () => {
        try {
            await saveFormData(formType, { [fieldName]: inputAnswer });
            if (navigateTo) {
                await navigateTo(inputAnswer);
            } else {
                await next();
            }
            console.log('Successfully navigated to next step');
        } catch (error) {
            console.error('Error navigating to next step:', error);
        }
    }, [next, saveFormData, inputAnswer, navigateTo, formType, fieldName]);


    return (
        <QAPageTemplate
            title={
                <GradientText gradient="purple-blue">
                    {title}
                </GradientText>
            }
            titleClassName="block w-auto text-[24px] font-semibold"
            question={question}
            questionClassName="text-[24px] font-light text-black"
            actions={
                <ContinueButton onClick={handleContinue} disabled={!canSkip && !inputAnswer} />
            }
            className={className}
            maxWidth="md"
        >
            <div className="space-y-1">
                <TextInput
                    type="number"
                    as={as}
                    value={inputAnswer}
                    onChange={(e) => {
                        setInputAnswer(e.target.value);
                        if (error) setError('');
                    }}
                    placeholder={placeholder}
                    variant="white"
                    height="64px"
                    fontSize="20px"
                    textAlign="center"
                    borderRadius="8px"
                />
                {error && (
                    <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
                )}
            </div>
        </QAPageTemplate>
    );
}

