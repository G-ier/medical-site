'use client';

import { GradientText } from '@/shared/ui/atoms/gradient-text';
import { QuestionAssessment } from '@/widgets/question-assessment';
import { FormType } from '@/shared/types/form-types';
import { QuestionOption } from '@/shared/ui/molecules/question-list';

export interface AlcoholConsumptionWidgetProps {
    className?: string;
}

export function AlcoholConsumptionWidget({ className }: AlcoholConsumptionWidgetProps) {
    const options: QuestionOption[] = [
        { id: '1', label: 'Never', value: 'never' },
        { id: '2', label: 'A few times a year', value: 'few-times-year' },
        { id: '3', label: 'Once a month', value: 'once-month' },
        { id: '4', label: 'Once a week', value: 'once-week' },
        { id: '5', label: 'Daily or almost daily', value: 'daily-almost-daily' },
    ];


    return (
        <QuestionAssessment
            title={<GradientText gradient="purple-blue">
                Medical Profile
            </GradientText>}
            question="How often do you consume 5 or more alcoholic drinks in one occasion?"
            options={options}
            fieldName="alcohol-consumption"
            formType={FormType.OHL_INITIAL_INTAKE}
            className={className}
        />
    )
}  