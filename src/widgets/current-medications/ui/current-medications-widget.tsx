'use client';

import { QuestionOption } from '@/shared/ui/molecules/question-list';
import { GradientText } from '@/shared/ui/atoms/gradient-text';
import { QuestionAssessment } from '@/widgets/question-assessment';
import { FormType } from '@/shared/types/form-types';

export interface CurrentMedicationsWidgetProps {
    className?: string;
}

export function CurrentMedicationsWidget({ className }: CurrentMedicationsWidgetProps) {

    const options: QuestionOption[] = [
        { id: '1', label: 'No', value: 'no' },
        { id: '2', label: 'Yes', value: 'yes' },
    ];

    return (
        <QuestionAssessment
            title={<GradientText gradient="purple-blue">
                Medical Profile
            </GradientText>}
            question="Are you currently taking any medications?"
            options={options}
            fieldName="current-medications"
            formType={FormType.OHL_INITIAL_INTAKE}
            className={className}
        />
    )
} 