/**
 * Healthie API TypeScript Types
 * Based on GraphQL schema and API documentation
 */

// Base GraphQL Response structure
export interface GraphQLResponse<T = unknown> {
  data?: T;
  errors?: GraphQLError[];
}

export interface GraphQLError {
  message: string;
  locations?: Array<{
    line: number;
    column: number;
  }>;
  path?: Array<string | number>;
  extensions?: {
    code?: string;
    [key: string]: unknown;
  };
}

// User/Patient types
export interface HealthieUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: string;
  dob?: string;
  gender?: 'Male' | 'Female' | 'Other';
  timezone?: string;
  dietitian_id?: string;
  height?: string;
  additional_record_identifier?: string;
  created_at?: string;
  updated_at?: string;
}

// Authentication types
export interface SignInResponse {
  signIn: {
    user: {
      id: string;
      access_token: string;
      first_name?: string;
      last_name?: string;
    };
  };
}

export interface CurrentUserResponse {
  currentUser: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
  };
}

// Organization types
export interface OrganizationResponse {
  organization: {
    id: string;
    name: string;
    organization_memberships: Array<{
      user: {
        id: string;
        email: string;
        full_name: string;
      };
    }>;
  };
  appointmentTypes: Array<{
    id: string;
    name: string;
  }>;
}

// Form types
export interface CustomModuleForm {
  id: string;
  name: string;
  use_for_charting: boolean;
  use_for_program: boolean;
  external_id_type?: string;
  external_id?: string;
  custom_modules: CustomModule[];
}

export interface CustomModule {
  id: string;
  label: string;
  mod_type: string; // 'text', 'select', 'checkbox', etc.
  required: boolean;
  options?: string[];
  metadata?: unknown;
  placeholder?: string;
}

// Message types
export interface HealthieMessage {
  field?: string;
  message: string;
}

// Metrics types
export interface MetricEntry {
  id: string;
  category: string;
  type: string;
  metric_stat: string;
  user_id: string;
  created_at: string;
  updated_at?: string;
}

// API Request types
export interface CreatePatientInput {
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: string;
  dob?: string;
  gender?: 'Male' | 'Female' | 'Other';
  timezone?: string;
  dietitian_id?: string;
  skipped_email?: boolean;
  dont_send_welcome?: boolean;
  user_group_id?: string;
  additional_record_identifier?: string;
}

export interface CreateMetricInput {
  category: string;
  type: "MetricEntry";
  metric_stat: string;
  user_id: string;
  created_at?: string;
}

export interface UpdateMetricInput {
  id: string;
  category?: string;
  metric_stat?: string;
  created_at?: string;
}

export interface MetricFilters {
  user_id?: string;
  category?: string;
  start_date?: string;
  end_date?: string;
  limit?: number;
  offset?: number;
}

export interface MetricsResponse {
  entries: MetricEntry[];
  total_count: number;
  has_more: boolean;
}

export interface CreateMetricResponse {
  entry: MetricEntry | null;
  messages: HealthieMessage[];
}

export interface UpdateMetricResponse {
  entry: MetricEntry | null;
  messages: HealthieMessage[];
}

export interface DeleteMetricResponse {
  success: boolean;
  messages: HealthieMessage[];
}

// Common metric categories (can be extended with custom ones)
export type MetricCategory = 
  | "Weight"
  | "Height" 
  | "BMI"
  | "Blood Pressure"
  | "Body Fat"
  | "Temperature"
  | "Heart Rate"
  | "Sleep"
  | "Stress"
  | "Hydration"
  | "Steps"
  | "Mood"
  | "Energy"
  | "Pain Level"
  | string; // Allow any custom category

// Error types
export interface HealthieAPIError extends Error {
  code?: string;
  statusCode?: number;
  response?: any;
  graphQLErrors?: GraphQLError[];
}

// Generic API response wrapper
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  errors?: GraphQLError[];
}

// Offering types
export interface HealthieOffering {
  id: string;
  name: string;
  billing_frequency?: string;
  currency?: string;
  price?: number;
  initial_payment_amount?: number;
  initial_price_with_taxes?: number;
}

export interface GetOfferingsInput {
  offset?: number;
  should_paginate?: boolean;
  keywords?: string;
  sort_by?: string;
  provider_id?: string;
  offering_id?: string;
  offering_ids?: string[];
  only_client_visible?: boolean;
  status?: string;
  client_visibility?: string;
  offering_user_group_id?: string;
  show_only_visible?: boolean;
}

export interface GetOfferingsResponse {
  offerings: HealthieOffering[];
}

// Webhook types
export interface HealthieWebhookPayload {
  resource_id: number;
  resource_id_type: 'Appointment' | 'FormAnswerGroup';
  event_type: string;
}

export interface FormAnswerGroupData {
  id: string;
  updated_at?: string;
  custom_module_form: {
    id: string;
    name: string;
  };
  filler: {
    id: string;
    gender?: string;
    email?: string;
    npi?: string;
    qualifications?: string;
    full_name_preferred?: string;
    location?: {
      state?: string;
    };
    phone?: string;
    dob?: string;
  };
  finished: boolean;
  form_answers: Array<{
    id: string;
    label: string;
    answer: string;
  }>;
  user: {
    id: string;
    gender?: string;
    email?: string;
    additional_record_identifier?: string;
    full_name_preferred?: string;
    location?: {
      state?: string;
    };
    phone?: string;
    dob?: string;
  };
}

export interface AppointmentData {
  id: string;
  appointment_type: {
    id: string;
    name: string;
  };
  created_at: string;
  end: string;
  external_videochat_url?: string;
  initiator_id?: string;
  pm_status?: string;
  pm_status_changed_at?: string;
  pm_status_last_changed_by_id?: string;
  provider: {
    id: string;
    name: string;
    organization: {
      id: string;
    };
  };
  start: string;
  user: {
    active_tags?: Array<{
      id: string;
      name: string;
    }>;
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    sex?: string;
    dob?: string;
    location?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      state?: string;
      zip?: string;
    };
    phone_number?: string;
  };
  user_id: string;
  zoom_join_url?: string;
  zoom_start_url?: string;
}

export interface OrderTrackingWebhookPayload {
  patient_id: string;
  pharmacy: string;
  type: 'order_confirmation' | 'order_shipped' | 'after_visit_summary';
  order_number?: string;
  medication_instructions?: string;
  shipping_address?: string;
  shipped_date?: string; // YYYY-MM-DD format
  track_number?: string;
  status?: string;
  order_date?: string; // YYYY-MM-DD format
  // AVS fields
  general_avs?: string;
  injectable_sema?: string;
  injectable_tirz?: string;
  oral_tirz?: string;
  oral_sema?: string;
  patient_dq?: string;
}

export interface PaymentWebhookPayload {
  [key: string]: any; // Varies by payment platform
}

export interface WebhookProcessingResult {
  success: boolean;
  event_type: string;
  actions_taken: string[];
  patient_id?: string;
  error?: string;
  details?: any;
} 