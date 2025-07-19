import { QuestionAssessment } from "@/widgets/question-assessment";
import { GradientText } from "@/shared/ui/atoms";
import { FormType } from "@/shared/types/form-types";

export function GLP1MedicationHistory() {
    return <QuestionAssessment
        title={<GradientText gradient="purple-blue">
            Medical Profile
        </GradientText>}
        question="Have you ever been prescribed a GLP-1 medication?"
        options={[
            { id: '1', label: 'I am currently taking GLP-1 medication', value: 'I am currently taking GLP-1 medication' },
            { id: '2', label: 'I have taken GLP-1 medication in the past, but I am not currently taking.', value: 'I have taken GLP-1 medication in the past, but I am not currently taking.' },
            { id: '3', label: 'I have never taken GLP-1 medication', value: 'I have never taken GLP-1 medication' },
        ]}
        fieldName="glp1-medication-history"
        formType={FormType.OHL_INITIAL_INTAKE}
    />
}