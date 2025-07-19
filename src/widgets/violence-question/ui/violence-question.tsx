'use client';

import { GradientText } from "@/shared/ui/atoms";
import { QuestionAssessment } from "@/widgets/question-assessment";
import { FormType } from "@/shared/types/form-types";

export interface ViolenceQuestionProps {
  className?: string;
}

export function ViolenceQuestion({ className }: ViolenceQuestionProps) {
    return (
        <QuestionAssessment
            title={<GradientText gradient="purple-blue">
                Medical Profile
            </GradientText>}
            question="Over the last 2 weeks, how often have you experienced thoughts of engaging in physical violence towards others?"
            options={[
                { id: '1', label: 'Not at all', value: 'not-at-all' },
                { id: '2', label: 'Several days', value: 'several-days' },
                { id: '3', label: 'More than half the days', value: 'more-than-half' },
                { id: '4', label: 'Nearly every day', value: 'nearly-every-day' },
            ]}
            fieldName="violence-question"
            formType={FormType.OHL_INITIAL_INTAKE}
            className={className}
        />
    )
}