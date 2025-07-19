// Form submission types for Healthie API

export interface FormAnswer {
  custom_module_id: string;
  answer: string | string[] | boolean;
  displayed_answer?: string;
}

export interface FormSubmissionRequest {
  custom_module_form_id: string;
  user_id: string;
  form_answers: FormAnswer[];
  finished: boolean;
  external_id_type?: string;
  external_id?: string;
}

export interface FormSubmissionResponse {
  success: boolean;
  data?: {
    form_answer_group: {
      id: string;
      custom_module_form_id: string;
      user_id: string;
      finished: boolean;
      created_at: string;
      updated_at: string;
    };
    form_answers: Array<{
      id: string;
      custom_module_id: string;
      answer: string;
      displayed_answer: string;
    }>;
  };
  error?: string;
  details?: string;
}

export interface OLHSubmissionRequest {
  custom_module_form_id: string;
  user_id: string;
  form_answers: FormAnswer[];
  finished: boolean;
  external_id_type?: string;
  external_id?: string;
}

export interface OLHSubmissionResponse {
  form_answer_group: {
    id: string;
    custom_module_form_id: string;
    user_id: string;
    finished: boolean;
    created_at: string;
    updated_at: string;
  };
  form_answers: Array<{
    id: string;
    custom_module_id: string;
    answer: string;
    displayed_answer: string;
  }>;
}

// Form type detection
export type FormType = 'intake' | 'refill' | 'unknown';

export const FORM_TYPE_MAP: Record<string, FormType> = {
  '1172921': 'intake',   // MWL Initial
  '1172922': 'refill',   // MWL Refill
};

export const getFormType = (formId: string): FormType => {
  return FORM_TYPE_MAP[formId] || 'unknown';
};

// Form validation helpers
export const isValidFormId = (formId: string): boolean => {
  return Object.keys(FORM_TYPE_MAP).includes(formId);
};

export const getFormName = (formId: string): string => {
  switch (formId) {
    case '1172921': return 'Auto-Generated - MWL Initial';
    case '1172922': return 'Auto-Generated - MWL Refill';
    default: return 'Unknown Form';
  }
};

// Field type validation helpers
export type FieldType = 'text' | 'textarea' | 'radio' | 'checkbox' | 'select' | 'date' | 'signature' | 'name';

export const validateAnswerForFieldType = (answer: any, fieldType: FieldType): boolean => {
  switch (fieldType) {
    case 'text':
    case 'textarea':
    case 'name':
      return typeof answer === 'string';
    case 'radio':
    case 'select':
      return typeof answer === 'string';
    case 'checkbox':
      return Array.isArray(answer) || typeof answer === 'string';
    case 'date':
      return typeof answer === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(answer);
    case 'signature':
      return typeof answer === 'string';
    default:
      return true;
  }
}; 