'use client';

import { FormType } from "@/shared/types/form-types";
import { GradientText } from "@/shared/ui/atoms";
import { QuestionAssessment } from "@/widgets/question-assessment";

export interface Phq9Question2Props {
  className?: string;
}

export function Phq9Question2({ className }: Phq9Question2Props) {
    return (
        <QuestionAssessment
            title={<GradientText gradient="purple-blue">
                Anxiety & Depression Symptoms
            </GradientText>}
            question="Over the last 2 weeks, how often have you been bothered by feeling down, depressed, or hopeless?"
            options={[
                { id: '1', label: 'Not at all', value: 'not-at-all' },
                { id: '2', label: 'Several days', value: 'several-days' },
                { id: '3', label: 'More than half the days', value: 'more-than-half' },
                { id: '4', label: 'Nearly every day', value: 'nearly-every-day' },
            ]}
            fieldName="phq9-question-2"
            className={className}
            formType={FormType.OHL_INITIAL_INTAKE}
        />
    )
}