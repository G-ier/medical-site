import {
  OLHFormData,
  OLHSubmissionRequest,
  getOLHFieldName,
  HEALTHIE_TO_OLH_FIELD_MAPPING,
  getOLHFormType,
  validateOLHFormData
} from './olh-types';
import { FormAnswer } from './form-types';

// Convert old GraphQL-style form submission to OLH format  
export interface GraphQLStyleFormData {
  custom_module_form_id: string;
  user_id: string;
  form_answers: FormAnswer[];
  finished: boolean;
}

export function convertGraphQLToOLH(graphqlData: GraphQLStyleFormData): OLHSubmissionRequest {
  const formId = parseInt(graphqlData.custom_module_form_id);
  
  // Initialize OLH form data with required fields
  const olhFormData: OLHFormData = {
    patient_id: graphqlData.user_id,
    formReferenceId: formId,
    mwl_modality: 'async_visit', // Default value
  };
  
  // Convert form answers to OLH field format
  graphqlData.form_answers.forEach(answer => {
    const olhFieldName = getOLHFieldName(answer.custom_module_id);
    
    if (olhFieldName) {
      // Find the mapping to determine field type
      const mapping = HEALTHIE_TO_OLH_FIELD_MAPPING.find(
        m => m.healthie_module_id === answer.custom_module_id
      );
      
      if (mapping) {
        switch (mapping.field_type) {
          case 'string':
            olhFormData[olhFieldName] = String(answer.answer);
            break;
          case 'string_array':
            olhFormData[olhFieldName] = Array.isArray(answer.answer) 
              ? answer.answer.map(String)
              : [String(answer.answer)];
            break;
          case 'number':
            olhFormData[olhFieldName] = typeof answer.answer === 'number' 
              ? answer.answer 
              : parseInt(String(answer.answer), 10);
            break;
          case 'boolean':
            olhFormData[olhFieldName] = Boolean(answer.answer);
            break;
          default:
            olhFormData[olhFieldName] = answer.answer;
        }
      }
    } else {
      // Handle unmapped fields - try to guess the format
      console.warn(`[OLHConverter] Unknown field mapping for module ID: ${answer.custom_module_id}`);
      
      // Store with a generic name for debugging
      olhFormData[`unmapped_${answer.custom_module_id}`] = answer.answer;
    }
  });
  
  return {
    data: olhFormData
  };
}

// Convert simple key-value pairs to OLH format
export interface SimpleFormData {
  patient_id: string;
  form_id: number;
  [key: string]: any;
}

export function convertSimpleToOLH(simpleData: SimpleFormData): OLHSubmissionRequest {
  const olhFormData: OLHFormData = {
    patient_id: simpleData.patient_id,
    formReferenceId: simpleData.form_id,
    mwl_modality: simpleData.mwl_modality || 'async_visit',
    ...simpleData // Spread remaining fields
  };
  
  // Remove fields that shouldn't be in the final data
  delete (olhFormData as any).form_id;
  
  return {
    data: olhFormData
  };
}

// Create sample form data for testing
export function createSampleOLHFormData(formId: number, patientId: string): OLHSubmissionRequest {
  const formType = getOLHFormType(String(formId));
  
  const baseData: OLHFormData = {
    patient_id: patientId,
    formReferenceId: formId,
    mwl_modality: 'async_visit',
    shipping_address_line_1: '8030 Warren Dr',
    shipping_city: 'Nolensville',
    shipping_state: 'TN',
    shipping_zip: '37135',
    q1_patient_blood_pressure_range: ['120-129/<80 (Elevated)'],
    q5_weight_loss_attempt_history: ['PATIENT DOES NOT HAVE DOCUMENTED ATTEMPTS TO LOSE WEIGHT'],
    q2_patient_comorbidities_part_a: [
      'PATIENT SELECTED NONE OF THE ABOVE - Acid reflux/gastroesophageal reflux disease (GERD), Asthma reactive airway disease, Urinary stress incontinence, Polycystic ovarian syndrome (PCOS), Clinically proven low testosterone (male hypogonadism), Osteoarthritis'
    ],
    q2_patient_comorbidities_part_b: [
      'PATIENT SELECTED NONE OF THE ABOVE - Acid reflux/gastroesophageal reflux disease (GERD), Asthma reactive airway disease, Urinary stress incontinence, Polycystic ovarian syndrome (PCOS), Clinically proven low testosterone (male hypogonadism), Osteoarthritis'
    ],
    q1_patient_dq_information_part_a: [
      'PATIENT SELECTED NONE OF THE ABOVE FOR THESE - Cancer (active diagnosis or treatment) Currently or possibly pregnant, or actively trying to become pregnant Breastfeeding or bottle-feeding with breastmilk, End-stage kidney disease (on or about to be on dialysis), End-stage liver disease (cirrhosis), Taking or plan to consume opiate based drugs within the last 3 months'
    ],
    q1_patient_dq_information_part_b: [
      'PATIENT SELECTED NONE OF THE ABOVE - Type 2 diabetes (on insulin), Type 1 diabetes, Diabetic retinopathy (eye condition related to diabetes), History of or current pancreatitis, Current suicidal thoughts and/or prior suicidal attempt, Current or prior eating disorder (anorexia/bulimia)'
    ],
    q4_patient_comorbidities_white_a: [
      'PATIENT SELECTED NONE OF THE ABOVE - Gallbladder disease, Alcohol substance use disorder, Seizures, Glaucoma, Gout, Depression'
    ],
    q4_patient_comorbidities_white_part_b: [
      'PATIENT SELECTED NONE OF THE ABOVE - Head injury, Tumor/infection in brain/spinal cord, Low sodium, Elevated resting heart rate (tachycardia), Hospitalization within the last 1 year, Human immunodeficiency virus (HIV)'
    ],
    q4_patient_comorbidities_white_part_c: [
      'PATIENT SELECTED NONE OF THE ABOVE - Head injury, Tumor/infection in brain/spinal cord, Low sodium, Elevated resting heart rate (tachycardia), Hospitalization within the last 1 year, Human immunodeficiency virus (HIV).'
    ],
    q8_patient_weight_fluctuation_over_last_12_months: ['A little']
  };
  
  // Add refill-specific field
  if (formType === 'refill') {
    baseData.number_of_injections = 4;
  }
  
  return {
    data: baseData
  };
}

// Validate and clean OLH form data
export function validateAndCleanOLHData(request: OLHSubmissionRequest): {
  isValid: boolean;
  errors: string[];
  cleanedData?: OLHSubmissionRequest;
} {
  const errors = validateOLHFormData(request.data);
  
  if (errors.length > 0) {
    return { isValid: false, errors };
  }
  
  // Clean the data - remove undefined/null values
  const cleanedFormData: any = {};
  
  Object.entries(request.data).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      // Convert empty arrays to undefined
      if (Array.isArray(value) && value.length === 0) {
        // Skip empty arrays
        return;
      }
      cleanedFormData[key] = value;
    }
  });
  
  return {
    isValid: true,
    errors: [],
    cleanedData: { data: cleanedFormData }
  };
}

// Helper to create minimal form data for testing
export function createMinimalOLHFormData(formId: number, patientId: string): OLHSubmissionRequest {
  return {
    data: {
      patient_id: patientId,
      formReferenceId: formId,
      mwl_modality: 'async_visit',
      shipping_address_line_1: '123 Test Street',
      shipping_city: 'Test City',
      shipping_state: 'NY',
      shipping_zip: '10001'
    }
  };
} 