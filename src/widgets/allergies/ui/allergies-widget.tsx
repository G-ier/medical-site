'use client';

import { QuestionOption } from '@/shared/ui/molecules/question-list';
import { GradientText } from '@/shared/ui/atoms/gradient-text';
import { FormType } from '@/shared/types/form-types';
import { QuestionAssessment } from '@/widgets/question-assessment';

export interface AllergiesWidgetProps {
    className?: string;
}

export function AllergiesWidget({ className }: AllergiesWidgetProps) {

    const options: QuestionOption[] = [
        { id: '1', label: 'No', value: 'no' },
        { id: '2', label: 'Yes', value: 'yes' },
    ];

    return (
        <QuestionAssessment
            title={<GradientText gradient="purple-blue">
                Medical Profile
            </GradientText>}
            question="Do you have any allergies?"
            options={options}
            fieldName="allergies"
            formType={FormType.OHL_INITIAL_INTAKE}
            className={className}
        />
    )
} 