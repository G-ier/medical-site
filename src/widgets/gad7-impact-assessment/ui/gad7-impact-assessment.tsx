'use client';

import { GradientText } from "@/shared/ui/atoms";
import { QuestionAssessment } from "@/widgets/question-assessment";
import { FormType } from "@/shared/types/form-types";

export interface Gad7ImpactAssessmentProps {
  className?: string;
}

export function Gad7ImpactAssessment({ className }: Gad7ImpactAssessmentProps) {
    return (
        <QuestionAssessment
            title={<GradientText gradient="purple-blue">
                Anxiety & Depression Symptoms
            </GradientText>}
            question="If you checked any problems, how difficult have they made it for you to do your work, take care of things at home, or get along with other people?"
            options={[
                { id: '1', label: 'Not at all', value: 'not-at-all' },
                { id: '2', label: 'Several days', value: 'several-days' },
                { id: '3', label: 'More than half the days', value: 'more-than-half' },
                { id: '4', label: 'Nearly every day', value: 'nearly-every-day' },
            ]}
            fieldName="gad7-impact-assessment"
            formType={FormType.OHL_INITIAL_INTAKE}
            className={className}
        />
    )
}