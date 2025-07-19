'use client';

import { QuestionOption } from '@/shared/ui/molecules/question-list';
import { GradientText } from '@/shared/ui/atoms/gradient-text';
import { FormType } from '@/shared/types/form-types';
import { QuestionAssessment } from '@/widgets/question-assessment';

export interface BreastfeedingQuestionProps {
    className?: string;
}

export function BreastfeedingQuestion({ className }: BreastfeedingQuestionProps) {
    const options: QuestionOption[] = [
        { id: '1', label: 'No', value: 'no' },
        { id: '2', label: 'Yes', value: 'yes' },
    ];


    return (
        <QuestionAssessment
            title={<GradientText gradient="purple-blue">
                Medical Profile
            </GradientText>}
            question="Are you currently breastfeeding?"
            options={options}
            className={className}
            formType={FormType.OHL_INITIAL_INTAKE}
            fieldName="breastfeeding-question"
        />

    )
}