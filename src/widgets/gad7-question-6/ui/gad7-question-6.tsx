'use client';

import { FormType } from "@/shared/types/form-types";
import { GradientText } from "@/shared/ui/atoms";
import { QuestionAssessment } from "@/widgets/question-assessment";

export interface Gad7Question6Props {
  className?: string;
}

export function Gad7Question6({ className }: Gad7Question6Props) {
    return (
        <QuestionAssessment
            title={<GradientText gradient="purple-blue">
                Anxiety & Depression Symptoms
            </GradientText>}
            question="Over the last 2 weeks, how often have you been bothered by becoming easily annoyed or irritable?"
            options={[
                { id: '1', label: 'Not at all', value: 'not-at-all' },
                { id: '2', label: 'Several days', value: 'several-days' },
                { id: '3', label: 'More than half the days', value: 'more-than-half' },
                { id: '4', label: 'Nearly every day', value: 'nearly-every-day' },
            ]}
            fieldName="gad7-question-6"
            formType={FormType.OHL_INITIAL_INTAKE}
            className={className}
        />
    )
}