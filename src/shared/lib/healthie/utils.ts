/**
 * Healthie API Utility Functions
 */

import { HealthieUser, CreatePatientInput } from '@/shared/api/healthie/types';
import { GENDER_OPTIONS, METRIC_CATEGORIES } from './constants';

// Date utilities
export const formatDateForHealthie = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toISOString().split('T')[0]; // YYYY-MM-DD format
};

export const formatDateTimeForHealthie = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toISOString(); // ISO 8601 format
};

// Validation utilities
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhoneNumber = (phone: string): boolean => {
  // Remove all non-digits
  const cleanPhone = phone.replace(/\D/g, '');
  // Check if it's 10 or 11 digits (US format)
  return cleanPhone.length === 10 || cleanPhone.length === 11;
};

export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digits
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Format as (XXX) XXX-XXXX
  if (cleanPhone.length === 10) {
    return `(${cleanPhone.slice(0, 3)}) ${cleanPhone.slice(3, 6)}-${cleanPhone.slice(6)}`;
  }
  
  // Format as +1 (XXX) XXX-XXXX for 11 digits starting with 1
  if (cleanPhone.length === 11 && cleanPhone.startsWith('1')) {
    const rest = cleanPhone.slice(1);
    return `+1 (${rest.slice(0, 3)}) ${rest.slice(3, 6)}-${rest.slice(6)}`;
  }
  
  return phone; // Return original if can't format
};

export const isValidGender = (gender: string): gender is 'Male' | 'Female' | 'Other' => {
  return Object.values(GENDER_OPTIONS).includes(gender as any);
};

export const isValidDateOfBirth = (dob: string): boolean => {
  const date = new Date(dob);
  const today = new Date();
  const age = today.getFullYear() - date.getFullYear();
  
  // Check if date is valid and person is between 18 and 120 years old
  return !isNaN(date.getTime()) && age >= 18 && age <= 120;
};

// Data transformation utilities
export const sanitizePatientData = (data: Partial<CreatePatientInput>): CreatePatientInput => {
  return {
    first_name: data.first_name?.trim() || '',
    last_name: data.last_name?.trim() || '',
    email: data.email?.toLowerCase().trim() || '',
    phone_number: data.phone_number ? formatPhoneNumber(data.phone_number) : undefined,
    dob: data.dob ? formatDateForHealthie(data.dob) : undefined,
    gender: data.gender && isValidGender(data.gender) ? data.gender : undefined,
    timezone: data.timezone || 'America/New_York',
    dietitian_id: data.dietitian_id,
    skipped_email: data.skipped_email || false,
    dont_send_welcome: data.dont_send_welcome || false,
    user_group_id: data.user_group_id,
    additional_record_identifier: data.additional_record_identifier,
  };
};

export const transformHealthieUser = (user: HealthieUser) => {
  return {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    fullName: `${user.first_name} ${user.last_name}`.trim(),
    email: user.email,
    phoneNumber: user.phone_number,
    dateOfBirth: user.dob,
    gender: user.gender,
    timezone: user.timezone,
    dietitianId: user.dietitian_id,
    height: user.height,
    recordIdentifier: user.additional_record_identifier,
    createdAt: user.created_at,
    updatedAt: user.updated_at,
  };
};

// Metric utilities
export const isValidMetricCategory = (category: string): boolean => {
  return Object.values(METRIC_CATEGORIES).includes(category as any);
};

export const formatMetricValue = (value: number, category: string): string => {
  switch (category) {
    case METRIC_CATEGORIES.WEIGHT:
      return `${value} lbs`;
    case METRIC_CATEGORIES.HEIGHT:
      const feet = Math.floor(value / 12);
      const inches = value % 12;
      return `${feet}'${inches}"`;
    case METRIC_CATEGORIES.BMI:
      return value.toFixed(1);
    case METRIC_CATEGORIES.BLOOD_PRESSURE:
      return value.toString(); // Should be in format "120/80"
    default:
      return value.toString();
  }
};

// Form utilities
export const generateFormAnswers = (answers: Record<string, any>) => {
  return Object.entries(answers).map(([customModuleId, answer]) => ({
    custom_module_id: customModuleId,
    answer: Array.isArray(answer) ? answer.join(', ') : String(answer),
  }));
};

// Environment utilities
export const getCurrentEnvironment = (): 'staging' | 'production' => {
  // Use NEXT_PUBLIC_ENV to distinguish between staging and production deployments
  return process.env.NEXT_PUBLIC_ENV === 'production' ? 'production' : 'staging';
};

export const getFormIdForEnvironment = (formType: 'initial' | 'refill'): string => {
  const env = getCurrentEnvironment();
  
  if (formType === 'initial') {
    return env === 'production' ? '1975412' : '1172921';
  } else {
    return env === 'production' ? '1975413' : '1172922';
  }
};

// Error message utilities
export const getErrorMessage = (error: any): string => {
  if (typeof error === 'string') {
    return error;
  }
  
  if (error?.message) {
    return error.message;
  }
  
  if (error?.graphQLErrors?.length > 0) {
    return error.graphQLErrors[0].message;
  }
  
  return 'An unexpected error occurred';
};

export const isHealthieError = (error: any): boolean => {
  return error?.name === 'HealthieError' || error?.graphQLErrors?.length > 0;
};

// API response utilities
export const isSuccessResponse = <T>(response: any): response is { success: true; data: T } => {
  return response?.success === true && response?.data !== undefined;
};

export const isErrorResponse = (response: any): response is { success: false; error: string } => {
  return response?.success === false && response?.error !== undefined;
};

// Timezone utilities
export const getTimezoneFromLocation = (state?: string): string => {
  const timezoneMap: Record<string, string> = {
    'CA': 'America/Los_Angeles',
    'NY': 'America/New_York',
    'TX': 'America/Chicago',
    'FL': 'America/New_York',
    'IL': 'America/Chicago',
    // Add more states as needed
  };
  
  return timezoneMap[state?.toUpperCase() || ''] || 'America/New_York';
};

// Debug utilities
export const logHealthieRequest = (operation: string, variables?: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Healthie ${operation}]`, variables ? { variables } : '');
  }
};

export const logHealthieResponse = (operation: string, response: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Healthie ${operation} Response]`, response);
  }
};

// Metrics validation and utilities
export const metricsUtils = {
  /**
   * Validate metric entry data
   */
  validateMetricEntry: (data: any): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];

    if (!data.category || typeof data.category !== 'string') {
      errors.push('Category is required and must be a string');
    }

    if (!data.metric_stat || typeof data.metric_stat !== 'string') {
      errors.push('Metric stat is required and must be a string');
    }

    if (!data.user_id || typeof data.user_id !== 'string') {
      errors.push('User ID is required and must be a string');
    }

    // Validate metric_stat is numeric for common categories
    if (data.category && data.metric_stat) {
      const numericCategories = ['Weight', 'Height', 'BMI', 'Temperature', 'Heart Rate'];
      if (numericCategories.includes(data.category)) {
        const numValue = parseFloat(data.metric_stat);
        if (isNaN(numValue)) {
          errors.push(`Metric stat for ${data.category} must be a valid number`);
        }
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  },

  /**
   * Format metric value based on category
   */
  formatMetricValue: (category: string, value: string): string => {
    const numValue = parseFloat(value);
    
    if (isNaN(numValue)) {
      return value; // Return as-is if not numeric
    }

    switch (category.toLowerCase()) {
      case 'weight':
        return `${numValue.toFixed(1)} lbs`;
      case 'height':
        return `${numValue.toFixed(1)} inches`;
      case 'bmi':
        return `${numValue.toFixed(1)}`;
      case 'temperature':
        return `${numValue.toFixed(1)}°F`;
      case 'heart rate':
        return `${Math.round(numValue)} bpm`;
      case 'blood pressure':
        return value; // Usually in format "120/80"
      default:
        return value;
    }
  },

  /**
   * Get common metric categories with their units
   */
  getMetricCategories: () => [
    { category: 'Weight', unit: 'lbs', type: 'numeric' },
    { category: 'Height', unit: 'inches', type: 'numeric' },
    { category: 'BMI', unit: '', type: 'numeric' },
    { category: 'Blood Pressure', unit: 'mmHg', type: 'text' },
    { category: 'Body Fat', unit: '%', type: 'numeric' },
    { category: 'Temperature', unit: '°F', type: 'numeric' },
    { category: 'Heart Rate', unit: 'bpm', type: 'numeric' },
    { category: 'Sleep', unit: 'hours', type: 'numeric' },
    { category: 'Stress', unit: '1-10', type: 'numeric' },
    { category: 'Hydration', unit: 'cups', type: 'numeric' },
    { category: 'Steps', unit: 'count', type: 'numeric' },
    { category: 'Mood', unit: '1-10', type: 'numeric' },
    { category: 'Energy', unit: '1-10', type: 'numeric' },
    { category: 'Pain Level', unit: '1-10', type: 'numeric' }
  ],

  /**
   * Parse date range for metric queries
   */
  parseDateRange: (startDate?: string, endDate?: string) => {
    const result: { start_date?: string; end_date?: string } = {};

    if (startDate) {
      const start = new Date(startDate);
      if (!isNaN(start.getTime())) {
        result.start_date = start.toISOString().split('T')[0];
      }
    }

    if (endDate) {
      const end = new Date(endDate);
      if (!isNaN(end.getTime())) {
        result.end_date = end.toISOString().split('T')[0];
      }
    }

    return result;
  },

  /**
   * Generate metric entry for common categories
   */
  createMetricEntry: (
    category: string, 
    value: string | number, 
    userId: string,
    customDate?: string
  ) => {
    return {
      category,
      type: 'MetricEntry',
      metric_stat: value.toString(),
      user_id: userId,
      created_at: customDate || new Date().toISOString()
    };
  }
}; 