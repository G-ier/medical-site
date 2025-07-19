/**
 * Universal Form Types - New Implementation
 * Supports onboarding steps and Healthie OLH forms
 */

// Form Types Enum
export enum FormType {
  CREATE_PATIENT = 'create_patient',
  UPDATE_PATIENT = 'update_patient',
  HEALTHIE_METRICS = 'healthie_metrics',  
  OHL_INITIAL_INTAKE = 'ohl_initial_intake',
  OHL_REFILL_INTAKE = 'ohl_refill_intake',
  SSN_IDENTITY_VERIFICATION = 'ssn_identity_verification',
  OHL_DOCUMENT_UPLOAD = 'ohl_document_upload',
  OFFERING = 'offering',
}

// Form data interfaces
export interface BaseFormData {
  progressSessionId: number;
  formType: FormType;
  stepId?: string; // optional for non-onboarding forms
  formData: Record<string, unknown>;
  isValid?: boolean;
  validationErrors?: string[];
}

export interface CreateFormDataInput {
  formType: FormType;
  stepId?: string;
  formData: Record<string, unknown>;
  validate?: boolean;
}

export interface UpdateFormDataInput {
  formType: FormType;
  stepId?: string;
  formData: Record<string, unknown>;
  validate?: boolean;
}

// Session identifier types (from existing system)
export interface SessionIdentifier {
  sessionToken?: string;
}

// Healthie form mapping
export interface HealthieFormMapping {
  formType: FormType.OHL_INITIAL_INTAKE | FormType.OHL_REFILL_INTAKE;
  formReferenceId: string;
  environment: 'staging' | 'production';
}



export function isHealthieForm(formType: FormType): boolean {
  return formType === FormType.OHL_INITIAL_INTAKE || 
         formType === FormType.OHL_REFILL_INTAKE;
}


// Validation helpers
export function validateFormType(formType: string): formType is FormType {
  return Object.values(FormType).includes(formType as FormType);
}

export function getFormTypeDisplayName(formType: FormType): string {
  switch (formType) {
    case FormType.CREATE_PATIENT:
      return 'Create Patient';
    case FormType.UPDATE_PATIENT:
      return 'Update Patient';
    case FormType.OHL_INITIAL_INTAKE:
      return 'Healthie Initial Intake';
    case FormType.OHL_REFILL_INTAKE:
      return 'Healthie Refill Intake';
    case FormType.HEALTHIE_METRICS:
      return 'Healthie Metrics';
    case FormType.SSN_IDENTITY_VERIFICATION:
      return 'SSN Identity Verification';
    default:
      return 'Unknown Form Type';
  }
} 