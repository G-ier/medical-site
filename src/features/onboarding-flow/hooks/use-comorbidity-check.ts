import { useCallback } from "react";
import { useFormData } from "@/shared/hooks";
import { FormType } from "@/shared/types/form-types";

export const useComorbidityCheck = () => {
  const { get: getFormData } = useFormData();

  const hasComorbidity = useCallback(async (): Promise<boolean> => {
    try {
      // Check if any comorbidity is selected in q3_medical_history_questions
      const form = await getFormData(FormType.OHL_INITIAL_INTAKE);
      const formData =
        form?.data?.formData && typeof form.data.formData === "object"
          ? (form.data.formData as Record<string, any>)
          : {};
      const q3 = Array.isArray(formData?.q3_medical_history_questions)
        ? formData.q3_medical_history_questions
        : [];
      
      // List of comorbidities (update as needed)
      const comorbidities = [
        "Hypertension (high blood pressure)",
        "Sleep apnea",
        "Prediabetes",
        "Type 2 diabetes (not on insulin)",
        "High cholesterol or triglycerides",
        "Acid reflux",
        "Asthma/reactive airway disease",
        "Urinary stress incontinence",
        "Polycystic ovarian syndrome (PCOS)",
        "Clinically proven low testosterone (male hypogonadism)",
        "Osteoporosis",
        "Coronary artery disease or heart attack/stroke in last 2 years",
        "Congestive heart failure",
        "Liver disease, including fatty liver",
      ];
      
      return q3.some((v: string) => comorbidities.includes(v));
    } catch (error) {
      console.error("Error checking comorbidity:", error);
      return false;
    }
  }, [getFormData]);

  return { hasComorbidity };
}; 