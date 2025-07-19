'use client';

import { FormType } from '@/shared/types/form-types';
import { QuestionAssessment } from '@/widgets/question-assessment/ui/question-assessment';
import { GradientText } from '@/shared/ui/atoms/gradient-text';
import { QuestionOption } from '@/shared/ui/molecules/question-list';

export interface MedicalConditionsProps {
    className?: string;
}

export function MedicalConditions({ className }: MedicalConditionsProps) {
    const options: QuestionOption[] = [
        { id: '1', label: 'No', value: 'no' },
        { id: '2', label: 'Yes', value: 'yes' },
    ];

    return (
        <QuestionAssessment
            title={<GradientText gradient="purple-blue">
                Medical Profile
            </GradientText>}
            question="Do you have any medical conditions or chronic diseases?"
            options={options}
            fieldName="medical-conditions"
            formType={FormType.OHL_INITIAL_INTAKE}
            className={className}
        />
    )
}