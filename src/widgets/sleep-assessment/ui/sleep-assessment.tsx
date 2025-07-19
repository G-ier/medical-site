'use client';

import { FormType } from "@/shared/types/form-types";
import { GradientText } from "@/shared/ui/atoms";
import { QuestionAssessment } from "@/widgets/question-assessment";

export interface SleepAssessmentProps {
  className?: string;
}

export function SleepAssessment({ className }: SleepAssessmentProps) {
    return (
        <QuestionAssessment
            title={<GradientText gradient="purple-blue">
                Anxiety & Depression Symptoms
            </GradientText>}
            question="Which of the following have you experienced?"
            options={[
                { id: '1', label: 'Trouble falling asleep', value: 'trouble-falling-asleep' },
                { id: '2', label: 'Sleeping too much', value: 'sleeping-too-much' },
                { id: '3', label: 'Both', value: 'both' },
            ]}
            fieldName="sleep-assessment"
            formType={FormType.OHL_INITIAL_INTAKE}
            className={className}
        />
    )
}