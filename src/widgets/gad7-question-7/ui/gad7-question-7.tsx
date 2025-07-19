'use client';

import { GradientText } from "@/shared/ui/atoms";
import { QuestionAssessment } from "@/widgets/question-assessment";
import { FormType } from "@/shared/types/form-types";

export interface Gad7Question7Props {
  className?: string;
}

export function Gad7Question7({ className }: Gad7Question7Props) {
    return (
        <QuestionAssessment
            title={<GradientText gradient="purple-blue">
                Anxiety & Depression Symptoms
            </GradientText>}
            question="Over the last 2 weeks, how often have you been bothered by feeling afraid as if something awful might happen?"
            options={[
                { id: '1', label: 'Not at all', value: 'not-at-all' },
                { id: '2', label: 'Several days', value: 'several-days' },
                { id: '3', label: 'More than half the days', value: 'more-than-half' },
                { id: '4', label: 'Nearly every day', value: 'nearly-every-day' },
            ]}
            fieldName="gad7-question-7"
            formType={FormType.OHL_INITIAL_INTAKE}
            className={className}
        />
    )
}