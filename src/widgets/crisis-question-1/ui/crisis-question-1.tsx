'use client';

import { FormType } from "@/shared/types/form-types";
import { GradientText } from "@/shared/ui/atoms";
import { QuestionAssessment } from "@/widgets/question-assessment";

export interface CrisisQuestion1Props {
  className?: string;
}

export function CrisisQuestion1({ className }: CrisisQuestion1Props) {
    return (
        <QuestionAssessment
            title={<GradientText gradient="purple-blue">
                Medical Profile
            </GradientText>}
            question="Over the last 2 weeks, how often have you experienced thoughts that you would be better off dead, or thoughts of hurting yourself in some way?"
            options={[
                { id: '1', label: 'Not at all', value: 'not-at-all' },
                { id: '2', label: 'Several days', value: 'several-days' },
                { id: '3', label: 'More than half the days', value: 'more-than-half' },
                { id: '4', label: 'Nearly every day', value: 'nearly-every-day' },
            ]}
            fieldName="crisis-question-1"
            formType={FormType.OHL_INITIAL_INTAKE}
            className={className}
        />
    )
}