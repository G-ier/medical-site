'use client';

import { FormType } from "@/shared/types/form-types";
import { GradientText } from "@/shared/ui/atoms";
import { CheckboxAssessment } from "@/widgets/checkbox-assessment";

export interface EatingDisorderDiagnosesProps {
  className?: string;
}

export function EatingDisorderDiagnoses({ className }: EatingDisorderDiagnosesProps) {
    return (
        <CheckboxAssessment
            title={<GradientText gradient="purple-blue">
                Rejevu
            </GradientText>}
            question="Have you been diagnosed with any of the following conditions?"
            description="This helps your provider better understand your current health so they can recommend the best treatment for you."
            options={[
                { id: '1', label: 'Anorexia', value: 'anorexia' },
                { id: '2', label: 'Bulimia', value: 'bulimia' },
                { id: '3', label: 'Binge eating disorder', value: 'binge-eating-disorder' },
                { id: '4', label: 'No i haven\'t been diagnosed any of these', value: 'no-diagnoses' },
            ]}
            fieldName="eating-disorder-diagnoses"
            formType={FormType.OHL_INITIAL_INTAKE}
            className={className}
        />
    )
}