'use client';

import { QuestionOption } from '@/shared/ui/molecules/question-list';
import { GradientText } from '@/shared/ui/atoms/gradient-text';
import { FormType } from '@/shared/types/form-types';
import { QuestionAssessment } from '@/widgets/question-assessment';

export interface NicotineUseWidgetProps {
    className?: string;
}

export function NicotineUseWidget({ className }: NicotineUseWidgetProps) {

    const options: QuestionOption[] = [
        { id: '1', label: 'Yes', value: 'yes' },
        { id: '2', label: 'No', value: 'no' },
    ];

    return (
        <QuestionAssessment
            title={<GradientText gradient="purple-blue">
                Medical Profile
            </GradientText>}
            question="Are you currently using any nicotine replacement products to help you stop smoking?"
            options={options}
            fieldName="nicotine-use"
            formType={FormType.OHL_INITIAL_INTAKE}
            className={className}
        />
    )
} 