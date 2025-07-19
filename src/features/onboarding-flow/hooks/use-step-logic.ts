import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useOnboarding } from "./use-onboarding";
import { useFormData } from "@/shared/hooks";
import { FormType } from "@/shared/types/form-types";
import { useBmiCalculation } from "./use-bmi-calculation";
import { useComorbidityCheck } from "./use-comorbidity-check";

export const useStepLogic = () => {
  const router = useRouter();
  const { goTo } = useOnboarding();
  const { get: getFormData } = useFormData();
  const { getBmi } = useBmiCalculation();
  const { hasComorbidity } = useComorbidityCheck();

  const handleMedicalHistoryQuestions = useCallback(async (selectedValues: string[]) => {
    try {
      if (!selectedValues.includes("PATIENT SELECTED NONE OF THE ABOVE")) {
        router.push("/refused");
        return;
      }
      
      const response = await getFormData(FormType.UPDATE_PATIENT);
      const gender = (response.data as { formData: { gender: string } }).formData.gender || "";
      
      if (gender === "Female" && selectedValues.includes("PATIENT SELECTED NONE OF THE ABOVE")) {
        await goTo("medical-history-questions-alert");
        return;
      }
      
      // This logic would need to be extracted from step configuration
      // For now, maintaining the original functionality
      await goTo("medical-history-questions-4"); // Default next step
    } catch (error) {
      console.error("Error handling medical history questions:", error);
      router.push("/error?message=Error processing medical history");
    }
  }, [router, goTo, getFormData]);

  const handleMedicalHistoryQuestions4 = useCallback(async (value: string) => {
    try {
      const bmi = await getBmi();
      
      if (
        value === "Yes, I currently take a GLP-1 medication for weight loss" ||
        value === "Yes, I currently take another (non-GLP-1) medication for weight loss"
      ) {
        if (!bmi || bmi < 22) {
          router.push("/refused");
          return;
        }
        await goTo("medical-history-questions-4a");
      } else if (
        value === "Yes, I have recently (within the last 12 months) taken a GLP-1 medication for weight loss"
      ) {
        await goTo("medical-history-questions-4c-i");
      } else if (
        value === "Yes, I have recently (within the last 12 months) taken another (non-GLP-1) medication for weight loss"
      ) {
        await goTo("medical-history-questions-4d-i");
      } else if (
        value === "No, I have taken medication(s) for weight loss before but it was over 12 months ago"
      ) {
        if (!bmi) {
          router.push("/refused");
          return;
        }
        const comorb = await hasComorbidity();
        if ((bmi < 25 && !comorb) || bmi < 27) {
          router.push("/refused");
          return;
        }
        await goTo("medical-history-questions-4a");
      } else if (value === "No") {
        if (!bmi) {
          router.push("/refused");
          return;
        }
        const comorb = await hasComorbidity();
        if ((bmi < 25 && !comorb) || bmi < 27) {
          router.push("/refused");
          return;
        }
        await goTo("medical-history-questions-5");
      }
    } catch (error) {
      console.error("Error handling medical history questions 4:", error);
      router.push("/error?message=Error processing medical history");
    }
  }, [getBmi, hasComorbidity, router, goTo]);

  const handleMedicalHistoryQuestions4a = useCallback(async () => {
    try {
      const response = await getFormData(FormType.OHL_INITIAL_INTAKE);
      const formData =
        response?.data?.formData && typeof response.data.formData === "object"
          ? (response.data.formData as Record<string, any>)
          : {};
      const q4 = formData?.q4_medical_history_questions;
      
      if (
        q4.includes("No, I have taken medication(s) for weight loss before but it was over 12 months ago")
      ) {
        await goTo("medical-history-questions-5");
      } else {
        await goTo("medical-history-questions-4b");
      }
    } catch (error) {
      console.error("Error handling medical history questions 4a:", error);
      router.push("/error?message=Error processing medical history");
    }
  }, [getFormData, goTo, router]);

  const handleMedicalHistoryQuestions4cI = useCallback(async (value: string) => {
    try {
      const bmi = await getBmi();
      
      if (value === "Yes") {
        if (!bmi || bmi < 22) {
          router.push("/refused");
          return;
        }
        await goTo("medical-history-questions-4a");
      } else {
        const comorb = await hasComorbidity();
        if ((bmi < 25 && !comorb) || bmi < 27) {
          router.push("/refused");
          return;
        }
        await goTo("medical-history-questions-4a");
      }
    } catch (error) {
      console.error("Error handling medical history questions 4c-i:", error);
      router.push("/error?message=Error processing medical history");
    }
  }, [getBmi, router, goTo, hasComorbidity]);

  const handleMedicalHistoryQuestions4dI = useCallback(async (value: string) => {
    try {
      const bmi = await getBmi();
      
      if (value === "Yes") {
        if (!bmi || bmi < 22) {
          router.push("/refused");
          return;
        }
        await goTo("medical-history-questions-4a");
      } else {
        router.push("/refused");
      }
    } catch (error) {
      console.error("Error handling medical history questions 4d-i:", error);
      router.push("/error?message=Error processing medical history");
    }
  }, [getBmi, router, goTo]);

  const handleMedicalHistoryQuestions4d = useCallback(async (value: string) => {
    try {
      if (value === "No") {
        router.push("/refused");
        return;
      }
      
      const response = await getFormData(FormType.OHL_INITIAL_INTAKE);
      const formData =
        response?.data?.formData && typeof response.data.formData === "object"
          ? (response.data.formData as Record<string, any>)
          : {};
      const q4 = formData?.q4_medical_history_questions;
      
      if (
        q4.includes("Yes, I have recently (within the last 12 months) taken a GLP-1 medication for weight loss") ||
        q4.includes("Yes, I have recently (within the last 12 months) taken another (non-GLP-1) medication for weight loss")
      ) {
        await goTo("medical-history-questions-5");
      } else {
        await goTo("medical-history-questions-4e");
      }
    } catch (error) {
      console.error("Error handling medical history questions 4d:", error);
      router.push("/error?message=Error processing medical history");
    }
  }, [router, getFormData, goTo]);

  const handleMedicalHistoryQuestions4e = useCallback(async (value: string) => {
    try {
      if (
        ["0-5 days", "6-10 days", "11-14 days", "More than 2 weeks ago but within the last 4 weeks"].includes(value)
      ) {
        await goTo("medical-history-questions-4f");
      } else if (value === "More than 4 weeks ago") {
        await goTo("medical-history-questions-4g");
      } else {
        await goTo("medical-history-questions-5");
      }
    } catch (error) {
      console.error("Error handling medical history questions 4e:", error);
      router.push("/error?message=Error processing medical history");
    }
  }, [goTo, router]);

  const handleMedicalHistoryQuestions6 = useCallback(async (value: string) => {
    try {
      if (value === "Yes") {
        await goTo("medical-history-questions-6a");
      } else {
        await goTo("medical-history-questions-7");
      }
    } catch (error) {
      console.error("Error handling medical history questions 6:", error);
      router.push("/error?message=Error processing medical history");
    }
  }, [goTo, router]);

  const handleMedicalHistoryQuestions7 = useCallback(async (selectedValues: string[]) => {
    try {
      if (
        selectedValues.includes(
          "I have attempted to lose weight in a weight management program before, such as through caloric restriction, exercise, or behavior modification."
        )
      ) {
        await goTo("medical-history-questions-7i");
      } else {
        await goTo("medical-history-questions-8");
      }
    } catch (error) {
      console.error("Error handling medical history questions 7:", error);
      router.push("/error?message=Error processing medical history");
    }
  }, [goTo, router]);

  return {
    handleMedicalHistoryQuestions,
    handleMedicalHistoryQuestions4,
    handleMedicalHistoryQuestions4a,
    handleMedicalHistoryQuestions4cI,
    handleMedicalHistoryQuestions4dI,
    handleMedicalHistoryQuestions4d,
    handleMedicalHistoryQuestions4e,
    handleMedicalHistoryQuestions6,
    handleMedicalHistoryQuestions7,
  };
}; 