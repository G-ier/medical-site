/**
 * Healthie API Constants
 * GraphQL queries, form IDs, and static values
 */

// Form IDs for different environments
export const FORM_IDS = {
  staging: {
    initialIntake: '1172921',
    refillIntake: '1172922',
  },
  production: {
    initialIntake: '1975412',
    refillIntake: '1975413',
  },
} as const;

// Common GraphQL fragments
export const GRAPHQL_FRAGMENTS = {
  userBasic: `
    fragment UserBasic on User {
      id
      first_name
      last_name
      email
      phone_number
      dob
      gender
      timezone
      dietitian_id
      created_at
      updated_at
    }
  `,
  
  customModuleForm: `
    fragment CustomModuleFormDetails on CustomModuleForm {
      id
      name
      use_for_charting
      use_for_program
      external_id_type
      external_id
      custom_modules {
        id
        label
        mod_type
        required
        options
        metadata
        placeholder
      }
    }
  `,
  
  metricEntry: `
    fragment MetricEntryDetails on MetricEntry {
      id
      category
      type
      metric_stat
      user_id
      created_at
    }
  `,
} as const;

// Common GraphQL queries
export const GRAPHQL_QUERIES = {
  // Authentication and user queries
  currentUser: `
    query CurrentUser {
      currentUser {
        id
        first_name
        last_name
        email
      }
    }
  `,

  // Organization queries
  organization: `
    query GetOrganization {
      organization {
        id
        name
        organization_memberships {
          user {
            id
            email
            full_name
          }
        }
      }
      appointmentTypes {
        id
        name
      }
    }
  `,

  // Form queries
  customModuleForms: `
    query GetCustomModuleForms {
      customModuleForms {
        ${GRAPHQL_FRAGMENTS.customModuleForm}
      }
    }
  `,

  formAnswerGroups: `
    query GetFormAnswerGroups($user_id: ID!) {
      formAnswerGroups(user_id: $user_id) {
        id
        finished
        form_answers {
          id
          answer
          custom_module_id
          displayed_answer
        }
      }
    }
  `,

  // User queries
  users: `
    query GetUsers($is_patient: Boolean) {
      users(is_patient: $is_patient) {
        ${GRAPHQL_FRAGMENTS.userBasic}
      }
    }
  `,

  // Metrics queries
  metricEntries: `
    query GetMetricEntries($user_id: ID!, $category: String) {
      metricEntries(user_id: $user_id, category: $category) {
        ${GRAPHQL_FRAGMENTS.metricEntry}
      }
    }
  `,
} as const;

// Common GraphQL mutations
export const GRAPHQL_MUTATIONS = {
  // User/Patient mutations
  createUser: `
    mutation CreateUser($input: UserInput!) {
      createUser(input: $input) {
        user {
          ${GRAPHQL_FRAGMENTS.userBasic}
        }
        messages {
          field
          message
        }
      }
    }
  `,

  updateUser: `
    mutation UpdateUser($input: UserInput!) {
      updateUser(input: $input) {
        user {
          ${GRAPHQL_FRAGMENTS.userBasic}
        }
        messages {
          field
          message
        }
      }
    }
  `,

  // Metrics mutations
  createMetricEntry: `
    mutation CreateMetricEntry($input: CreateMetricEntryInput!) {
      createMetricEntry(input: $input) {
        metric_entry {
          ${GRAPHQL_FRAGMENTS.metricEntry}
        }
        messages {
          field
          message
        }
      }
    }
  `,

  // Form mutations
  createFormAnswerGroup: `
    mutation CreateFormAnswerGroup($input: CreateFormAnswerGroupInput!) {
      createFormAnswerGroup(input: $input) {
        form_answer_group {
          id
          finished
          form_answers {
            id
            answer
            custom_module_id
            displayed_answer
          }
        }
        messages {
          field
          message
        }
      }
    }
  `,

  // Authentication mutations
  signIn: `
    mutation SignIn($input: SignInInput!) {
      signIn(input: $input) {
        user {
          id
          access_token
          first_name
          last_name
        }
        messages {
          field
          message
        }
      }
    }
  `,
} as const;

// Split Visits appointment types
export const SPLIT_VISITS = {
  CMA: 'CMA',
  NP: 'NP (Nurse Practitioner)',
} as const;

// Common metric categories
export const METRIC_CATEGORIES = {
  WEIGHT: 'Weight',
  HEIGHT: 'Height',
  BMI: 'BMI',
  BLOOD_PRESSURE: 'Blood Pressure',
} as const;

// Gender options
export const GENDER_OPTIONS = {
  MALE: 'Male',
  FEMALE: 'Female',
  OTHER: 'Other',
} as const;

// API rate limits and timeouts
export const API_LIMITS = {
  REQUEST_TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
  RATE_LIMIT_DELAY: 1000, // 1 second between requests
} as const;

// OLH (Open Loop Health) constants
export const OLH_CONSTANTS = {
  FORM_TYPES: {
    INITIAL_INTAKE: 'initial_intake',
    REFILL_INTAKE: 'refill_intake',
  },
  STATUSES: {
    PENDING: 'pending',
    COMPLETED: 'completed',
    FAILED: 'failed',
  },
} as const;

// Metrics GraphQL Operations
export const METRICS_QUERIES = {
  // Create metric entry (according to Healthie documentation)
  CREATE_ENTRY: `
    mutation createEntry(
      $metric_stat: String,
      $category: String,
      $type: String,
      $user_id: String,
      $created_at: String
    ) {
      createEntry(
        input: {
          category: $category,
          type: $type,
          metric_stat: $metric_stat,
          user_id: $user_id,
          created_at: $created_at
        }
      ) {
        entry {
          id
          category
          type
          metric_stat
          created_at
          updated_at
        }
        messages {
          field
          message
        }
      }
    }
  `,

  // Get entries (metrics) - with client_id filter
  GET_ENTRIES: `
    query getEntries($client_id: String, $category: String, $type: String) {
      entries(client_id: $client_id, category: $category, type: $type) {
        id
        category
        type
        metric_stat
        created_at
        updated_at
      }
    }
  `,

  // Get single entry
  GET_ENTRY: `
    query entry($id: ID!) {
      entry(id: $id) {
        id
        category
        type
        metric_stat
        created_at
        updated_at
      }
    }
  `,

  // Update entry
  UPDATE_ENTRY: `
    mutation updateEntry(
      $id: ID!
      $category: String
      $metric_stat: String
      $created_at: String
    ) {
      updateEntry(
        input: {
          id: $id
          category: $category
          metric_stat: $metric_stat
          created_at: $created_at
        }
      ) {
        entry {
          id
          category
          type
          metric_stat
          created_at
          updated_at
        }
        messages {
          field
          message
        }
      }
    }
  `,

  // Delete entry
  DELETE_ENTRY: `
    mutation deleteEntry($id: ID!) {
      deleteEntry(input: { id: $id }) {
        messages {
          field
          message
        }
      }
    }
  `,

  // Bulk create entries (metrics) - according to Healthie documentation
  BULK_CREATE_ENTRIES: `
    mutation bulkCreateEntries($entries: [BulkEntryInput!]!) {
      bulkCreateEntries(input: { entries: $entries }) {
        entries {
          id
          category
          type
          metric_stat
          created_at
          updated_at
        }
        messages {
          field
          message
        }
      }
    }
  `
};

// Default pagination settings
export const METRICS_DEFAULTS = {
  PAGE_SIZE: 50,
  MAX_PAGE_SIZE: 100
}; 