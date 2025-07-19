'use client';

import { GradientText } from "@/shared/ui/atoms";
import { QuestionAssessment } from "@/widgets/question-assessment";
import { FormType } from "@/shared/types/form-types";

export interface GenderIdentityQuestion1Props {
  className?: string;
}

export function GenderIdentityQuestion1({ className }: GenderIdentityQuestion1Props) {
    return (
        <QuestionAssessment
            title={<GradientText gradient="purple-blue">
                Medical Profile
            </GradientText>}
            question="Do you identify as a man?"
            options={[
                { id: '1', label: 'No', value: 'no' },
                { id: '2', label: 'Yes', value: 'yes' },
            ]}
            fieldName="gender-identity-question-1"
            formType={FormType.OHL_INITIAL_INTAKE}
            className={className}
        />
    )
}