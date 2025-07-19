// OLH API Types - Based on real API documentation
// Uses 'data' wrapper and specific field names, not GraphQL structure

export interface OLHFormData {
  patient_id: string;
  formReferenceId: number;
  mwl_modality: 'async_visit' | 'sync_visit';
  
  // Shipping information (common to both forms)
  shipping_address_line_1?: string;
  shipping_address_line_2?: string;
  shipping_city?: string;
  shipping_state?: string;
  shipping_zip?: string;
  
  // Number of injections (only for refill form 1172922)
  number_of_injections?: number;
  
  // Clinical questions (dynamic fields)
  q1_patient_blood_pressure_range?: string[];
  q1_patient_blood_pressure_range_2?: string[];
  q2_patient_comorbidities_part_a?: string[];
  q2_patient_comorbidities_part_b?: string[];
  q1_patient_dq_information_part_a?: string[];
  q1_patient_dq_information_part_b?: string[];
  q4_patient_comorbidities_white_a?: string[];
  q4_patient_comorbidities_white_part_b?: string[];
  q4_patient_comorbidities_white_part_c?: string[];
  q5_weight_loss_attempt_history?: string[];
  q8_patient_weight_fluctuation_over_last_12_months?: string[];
  
  // Allow for additional dynamic fields
  [key: string]: any;
}

export interface OLHSubmissionRequest {
  data: OLHFormData;
}

export interface OLHSubmissionResponse {
  success?: boolean;
  message?: string;
  id?: string;
  error?: string;
  status?: string; // OLH API returns 'SUCCESS' or 'FAILURE'
  // OLH API response structure may vary
  [key: string]: any;
}

// Form type detection
export type OLHFormType = 'initial' | 'refill' | 'unknown';

export const OLH_FORM_TYPE_MAP: Record<number, OLHFormType> = {
  1172921: 'initial',   // MWL Initial (staging)
  1172922: 'refill',    // MWL Refill (staging)
  1975412: 'initial',   // MWL Initial (production)
  1975413: 'refill',    // MWL Refill (production)
};

export const getOLHFormType = (formId: string): OLHFormType => {
  return OLH_FORM_TYPE_MAP[+formId] || 'unknown';
};

// Field mapping from Healthie custom modules to OLH field names
export interface HealthieToOLHFieldMapping {
  healthie_module_id: string;
  healthie_label: string;
  olh_field_name: string;
  field_type: 'string' | 'string_array' | 'number' | 'boolean';
  required_for_forms: ('initial' | 'refill')[];
}

// Based on the forms structure we discovered earlier
export const HEALTHIE_TO_OLH_FIELD_MAPPING: HealthieToOLHFieldMapping[] = [
  {
    healthie_module_id: '10107724',
    healthie_label: 'MWL_Modality',
    olh_field_name: 'mwl_modality',
    field_type: 'string',
    required_for_forms: ['initial', 'refill']
  },
  {
    healthie_module_id: '18572291',
    healthie_label: 'Service Type',
    olh_field_name: 'service_type',
    field_type: 'string',
    required_for_forms: ['initial', 'refill']
  },
  {
    healthie_module_id: '10107725',
    healthie_label: 'Patient Intake',
    olh_field_name: 'patient_intake_notes',
    field_type: 'string',
    required_for_forms: ['initial', 'refill']
  },
  {
    healthie_module_id: '10107730',
    healthie_label: 'Shipping - Address Line 1',
    olh_field_name: 'shipping_address_line_1',
    field_type: 'string',
    required_for_forms: ['initial', 'refill']
  },
  {
    healthie_module_id: '10107731',
    healthie_label: 'Shipping - Address Line 2',
    olh_field_name: 'shipping_address_line_2',
    field_type: 'string',
    required_for_forms: ['initial', 'refill']
  },
  {
    healthie_module_id: '10107729',
    healthie_label: 'Shipping - City',
    olh_field_name: 'shipping_city',
    field_type: 'string',
    required_for_forms: ['initial', 'refill']
  },
  {
    healthie_module_id: '10107728',
    healthie_label: 'Shipping - State',
    olh_field_name: 'shipping_state',
    field_type: 'string',
    required_for_forms: ['initial', 'refill']
  },
  {
    healthie_module_id: '10107727',
    healthie_label: 'Shipping - Zip',
    olh_field_name: 'shipping_zip',
    field_type: 'string',
    required_for_forms: ['initial', 'refill']
  },
  {
    healthie_module_id: '10107726', // This would be the number of injections field
    healthie_label: 'Number of Injections',
    olh_field_name: 'number_of_injections',
    field_type: 'number',
    required_for_forms: ['refill']
  }
];

// Helper functions
export const getOLHFieldName = (healthieModuleId: string): string | null => {
  const mapping = HEALTHIE_TO_OLH_FIELD_MAPPING.find(m => m.healthie_module_id === healthieModuleId);
  return mapping ? mapping.olh_field_name : null;
};

export const isValidOLHFormId = (formId: number): boolean => {
  return Object.keys(OLH_FORM_TYPE_MAP).includes(formId.toString());
};

export const getOLHFormName = (formId: string): string => {
  switch (+formId) {
    case 1172921: return 'Auto-Generated - MWL Initial (Staging)';
    case 1172922: return 'Auto-Generated - MWL Refill (Staging)';
    case 1975412: return 'Auto-Generated - MWL Initial (Production)';
    case 1975413: return 'Auto-Generated - MWL Refill (Production)';
    default: return 'Unknown OLH Form';
  }
};

// Validation helpers
export const validateOLHFormData = (data: OLHFormData): string[] => {
  const errors: string[] = [];
  
  if (!data.patient_id) {
    errors.push('patient_id is required');
  }
  
  if (!data.formReferenceId) {
    errors.push('formReferenceId is required');
  } else if (!isValidOLHFormId(data.formReferenceId)) {
    errors.push(`Invalid formReferenceId: ${data.formReferenceId}`);
  }
  
  if (!data.mwl_modality) {
    errors.push('mwl_modality is required');
  } else if (!['async_visit', 'sync_visit'].includes(data.mwl_modality)) {
    errors.push('mwl_modality must be either "async_visit" or "sync_visit"');
  }
  
  // Validate refill-specific fields
  if (getOLHFormType(String(data.formReferenceId)) === 'refill') {
    if (data.number_of_injections !== undefined && 
        (typeof data.number_of_injections !== 'number' || data.number_of_injections < 0)) {
      errors.push('number_of_injections must be a positive number for refill forms');
    }
  }
  
  return errors;
}; 