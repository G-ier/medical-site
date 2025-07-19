import { useCallback } from "react";
import { useFormData } from "@/shared/hooks";
import { FormType } from "@/shared/types/form-types";

export const useBmiCalculation = () => {
  const { get: getFormData } = useFormData();

  const getBmi = useCallback(async (): Promise<number | null> => {
    try {
      const metrics = await getFormData(FormType.HEALTHIE_METRICS);
      const data =
        metrics?.data?.formData && typeof metrics.data.formData === "object"
          ? (metrics.data.formData as Record<string, any>)
          : {};
      
      // Expecting height in inches, weight in pounds
      let height = parseFloat(data?.height ?? 0);
      let weight = parseFloat(data?.weight ?? 0);
      
      if (!height || !weight) return null;
      
      // Convert height from inches to meters (1 inch = 0.0254 meters)
      height = height * 0.0254;
      // Convert weight from pounds to kg (1 pound = 0.453592 kg)
      weight = weight * 0.453592;
      
      return weight / (height * height);
    } catch (error) {
      console.error("Error calculating BMI:", error);
      return null;
    }
  }, [getFormData]);

  return { getBmi };
}; 