import { GradientText } from "@/shared/ui/atoms";
import { CheckboxAssessment } from "@/widgets/checkbox-assessment";
import { FormType } from "@/shared/types/form-types";


export function HealthGoals() {
    return (
        <CheckboxAssessment
            title={<GradientText gradient="purple-blue">
                Medical Profile
            </GradientText>}
            question="Which of the following best describes why you are seeking service today?"
            description="If you’re unsure, pick the ones that feel closest to what you’re experiencing."
            options={[
                { id: '1', label: 'Persistent or excessive worry', value: 'persistent-or-excessive-worry' },
                { id: '2', label: 'Depressed mood or loss of interest in activities', value: 'depressed-mood-or-loss-of-interest-in-activities' },
                { id: '3', label: 'Panic attacks', value: 'panic-attacks' },
                { id: '4', label: 'Insomnia', value: 'insomnia' },
                { id: '5', label: 'Stress or burnout', value: 'stress-or-burnout' },
                { id: '6', label: 'Other', value: 'other-mental-health-condition' },
                { id: '7', label: "I'm not sure", value: 'not-sure' },
            ]}
            fieldName="health-goals"
            formType={FormType.OHL_INITIAL_INTAKE}
        />
    )
}