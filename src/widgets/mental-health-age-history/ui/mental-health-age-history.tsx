'use client';

import { GradientText } from "@/shared/ui/atoms";
import { QuestionAssessment } from "@/widgets/question-assessment";
import { FormType } from "@/shared/types/form-types";

export interface MentalHealthAgeHistoryProps {
  className?: string;
}

export function MentalHealthAgeHistory({ className }: MentalHealthAgeHistoryProps) {
    return (
        <QuestionAssessment
            title={<GradientText gradient="purple-blue">
                Medical Profile
            </GradientText>}
            question="How old were you when you first experienced symptoms of an anxiety or depressive disorder?"
            options={[
                { id: '1', label: 'Younger than 6', value: 'younger-than-6' },
                { id: '2', label: '6 to 10', value: '6-to-10' },
                { id: '3', label: '11 to 15', value: '11-to-15' },
                { id: '4', label: '16 to 20', value: '16-to-20' },
                { id: '5', label: 'Older than 20', value: 'older-than-20' },
                { id: '6', label: "I don't remember", value: 'dont-remember' },
            ]}
            fieldName="mental-health-age-history"
            formType={FormType.OHL_INITIAL_INTAKE}
            className={className}
        />
    )
}