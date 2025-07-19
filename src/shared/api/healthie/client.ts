/**
 * Healthie GraphQL API Client
 * Based on docs/onboarding/Heathie/API-integration.md
 */

import { healthieConfig, getHealthieHeaders, validateEnvironment } from './config';
import { GraphQLResponse, APIResponse } from './types';
import { HealthieError, handleAsyncError, hasGraphQLErrors, extractGraphQLErrors } from './errors';

export class HealthieClient {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey?: string) {
    // Use provided API key or get from environment
    this.apiKey = apiKey || process.env.HEALTHIE_API_KEY || '';
    this.baseUrl = healthieConfig.url;

    if (!this.apiKey) {
      throw HealthieError.missingEnvironment(['HEALTHIE_API_KEY']);
    }
  }

  // Validate environment on initialization
  static validateEnv(): void {
    validateEnvironment();
  }

  // Execute GraphQL query
  async query<T = unknown>(
    query: string,
    variables?: Record<string, unknown>
  ): Promise<APIResponse<T>> {
    return handleAsyncError(async () => {
      const headers = getHealthieHeaders(this.apiKey);
      
      const body = JSON.stringify({
        query,
        variables: variables || {},
      });

      console.log('[HealthieClient] 🚀 Making GraphQL request to:', this.baseUrl);
      console.log('[HealthieClient] 📋 Headers:', { 
        ...headers, 
        Authorization: headers.Authorization ? '[REDACTED]' : undefined 
      });
      console.log('[HealthieClient] 📝 Query:', query.substring(0, 200) + (query.length > 200 ? '...' : ''));
      console.log('[HealthieClient] 🔧 Variables:', JSON.stringify(variables, null, 2));

      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers,
        body,
      });

      console.log('[HealthieClient] 📊 Response status:', response.status, response.statusText);

      if (!response.ok) {
        const errorData = await response.text();
        console.error('[HealthieClient] ❌ HTTP Error:', response.status, errorData);
        throw HealthieError.fromResponse(response, errorData);
      }

      const jsonResponse: GraphQLResponse<T> = await response.json();
      console.log('[HealthieClient] 📨 Response received:', JSON.stringify(jsonResponse, null, 2));

      // Check for GraphQL errors
      if (hasGraphQLErrors(jsonResponse)) {
        const errors = extractGraphQLErrors(jsonResponse);
        console.error('[HealthieClient] ❌ GraphQL Errors:', errors);
        throw HealthieError.fromGraphQLErrors(errors);
      }

      console.log('[HealthieClient] ✅ Query successful');
      return {
        success: true,
        data: jsonResponse.data,
      };
    }, 'GraphQL Query');
  }

  // Execute GraphQL mutation
  async mutate<T = unknown>(
    mutation: string,
    variables?: Record<string, unknown>
  ): Promise<APIResponse<T>> {
    return this.query<T>(mutation, variables);
  }

  // Test connection to Healthie API
  async testConnection(): Promise<APIResponse<{
    message: string;
    user: unknown;
    environment: string | undefined;
    apiUrl: string;
    authorizationShard: string;
  }>> {
    const query = `
      query TestConnection {
        currentUser {
          id
          first_name
          last_name
          email
        }
      }
    `;

    try {
      const result = await this.query(query);
      
      console.log('[HealthieClient] Connection test successful');
      console.log('[HealthieClient] Current user:', (result.data as { currentUser?: unknown })?.currentUser);
      
      return {
        success: true,
        data: {
          message: 'Connection successful',
          user: (result.data as { currentUser?: unknown })?.currentUser,
          environment: process.env.NEXT_PUBLIC_ENV,
          apiUrl: this.baseUrl,
          authorizationShard: healthieConfig.authorizationShard,
        },
      };
    } catch (error) {
      console.error('[HealthieClient] Connection test failed:', error);
      
      return {
        success: false,
        error: error instanceof HealthieError ? error.getUserMessage() : 'Connection failed',
      };
    }
  }

  // Get organization details with appointment types
  async getOrganization(): Promise<APIResponse<{
    organization: unknown;
    appointmentTypes: unknown[];
  }>> {
    const query = `
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
    `;

    return this.query(query);
  }

  // Get custom module forms
  async getCustomModuleForms(): Promise<APIResponse<{
    customModuleForms: unknown[];
  }>> {
    const query = `
      query GetCustomModuleForms {
        customModuleForms {
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
      }
    `;

    return this.query(query);
  }

  // Get dietitians from organization
  async getDietitians(): Promise<any[]> {
    const query = `
      query GetDietitians {
        organization {
          id
          name
          organization_memberships(keywords: "OpenLoop") {
            user {
              id
              email
              full_name
            }
          }
        }
      }
    `;

    const result = await this.query(query);
    const memberships = (result.data as { organization?: { organization_memberships?: unknown[] } })?.organization?.organization_memberships || [];
    
    return memberships.map((membership: any) => ({
      id: membership.user.id,
      email: membership.user.email,
      fullName: membership.user.full_name
    }));
  }

  // Create patient in Healthie
  async createPatient(patientData: {
    first_name: string;
    last_name: string;
    email: string;
    phone_number?: string;
    date_of_birth?: string;
    gender?: string;
    dietitian_id: string;
  }): Promise<{ id: string }> {
    const mutation = `
      mutation CreateClient($input: createClientInput!) {
        createClient(input: $input) {
          user {
            id
            first_name
            last_name
            email
          }
          messages {
            field
            message
          }
        }
      }
    `;

    const variables = {
      input: {
        first_name: patientData.first_name,
        last_name: patientData.last_name,
        email: patientData.email,
        phone_number: patientData.phone_number ? String(patientData.phone_number) : '',
        dob: patientData.date_of_birth || '',
        gender: patientData.gender || '',
        dietitian_id: patientData.dietitian_id,
        skipped_email: true,
        dont_send_welcome: true
      }
    };

    const result: any = await this.mutate(mutation, variables);
    
    // Check for GraphQL errors in response
    if (result.data?.createClient.messages && result.data.createClient.messages.length > 0) {
      const errorMessages = result.data.createClient.messages.map((msg: any) => `${msg.field}: ${msg.message}`).join(', ');
      throw new HealthieError(`Patient creation failed: ${errorMessages}`);
    }

    return {
      id: result.data?.createClient.user.id
    };
  }

  // Get offerings with filtering support
  async getOfferings({
    offset = 0,
    should_paginate = true,
    keywords = null,
    sort_by = null,
    provider_id = null,
    offering_id = null,
    offering_ids = null,
    only_client_visible = null,
    status = null,
    client_visibility = null,
    offering_user_group_id = null,
    show_only_visible = null
  }: {
    offset?: number;
    should_paginate?: boolean;
    keywords?: string | null;
    sort_by?: string | null;
    provider_id?: string | null;
    offering_id?: string | null;
    offering_ids?: string[] | null;
    only_client_visible?: boolean | null;
    status?: string | null;
    client_visibility?: string | null;
    offering_user_group_id?: string | null;
    show_only_visible?: boolean | null;
  } = {}): Promise<APIResponse<any>> {
    const query = `
      query getOfferings(
        $offset: Int,
        $should_paginate: Boolean,
        $keywords: String,
        $sort_by: String,
        $provider_id: ID,
        $offering_id: ID,
        $offering_ids: [ID],
        $only_client_visible: Boolean,
        $status: String,
        $client_visibility: String,
        $offering_user_group_id: ID,
        $show_only_visible: Boolean
      ) {
        offerings(
          offset: $offset,
          should_paginate: $should_paginate,
          keywords: $keywords,
          sort_by: $sort_by,
          provider_id: $provider_id,
          offering_id: $offering_id,
          offering_ids: $offering_ids,
          only_client_visible: $only_client_visible,
          status: $status,
          client_visibility: $client_visibility,
          offering_user_group_id: $offering_user_group_id,
          show_only_visible: $show_only_visible
        ) {
          id
          name
          billing_frequency
          currency
          price
          initial_payment_amount
          initial_price_with_taxes
        }
      }
    `;

    const variables = {
      offset,
      should_paginate,
      keywords,
      sort_by,
      provider_id,
      offering_id,
      offering_ids,
      only_client_visible,
      status,
      client_visibility,
      offering_user_group_id,
      show_only_visible
    };

    const result = await this.query(query, variables);
    
    const offerings = (result.data as any)?.offerings;
    if (!offerings) {
      throw new HealthieError('No offerings returned from Healthie');
    }

    return {
      success: true,
      data: {
        offerings,
        total_count: offerings.length,
        filters_applied: {
          offset,
          should_paginate,
          keywords,
          sort_by,
          provider_id,
          offering_id,
          offering_ids,
          only_client_visible,
          status,
          client_visibility,
          offering_user_group_id,
          show_only_visible
        }
      }
    };
  }

  // Get FormAnswerGroup data for webhook enrichment
  async getFormAnswerGroup(id: string): Promise<APIResponse<any>> {
    const query = `
      query FormAnswerGroup($id: ID!) {
        formAnswerGroup(id: $id) {
          id
          updated_at
          custom_module_form {
            id
            name
          }
          filler {
            id
            gender
            email
            npi
            qualifications
            full_name_preferred: full_legal_name_with_preferred
            location {
              state
            }
            phone: phone_number
            dob
          }
          finished
          form_answers {
            id
            label
            answer
          }
          user {
            id
            gender
            email
            additional_record_identifier
            full_name_preferred: full_legal_name_with_preferred
            location {
              state
            }
            phone: phone_number
            dob
          }
        }
      }
    `;

    const variables = { id };
    const result = await this.query(query, variables);
    
    return {
      success: true,
      data: (result.data as any)?.formAnswerGroup
    };
  }

  // Get Appointment data for webhook enrichment
  async getAppointment(id: string): Promise<APIResponse<any>> {
    const query = `
      query GetAppointment($id: ID!) {
        appointment(id: $id) {
          id
          date
          time
          appointment_type {
            id
            name
          }
          user {
            id
            first_name
            last_name
            email
          }
          provider {
            id
            first_name
            last_name
            email
          }
          pm_status
          contact_type
          notes
          other_party_id
          appointment_inclusions {
            id
            name
          }
          recurring_appointment {
            id
            frequency
          }
          appointment_type_id
          provider_id
          user_id
          timezone
          metadata
          created_at
          updated_at
        }
      }
    `;

    return this.query(query, { id });
  }

  // Store card in Healthie for a user
  async storeCardInHealthie({ 
    token, 
    card_type_label = 'personal', 
    user_id, 
    is_default 
  }: {
    token: string;
    card_type_label?: string;
    user_id: string;
    is_default: boolean;
  }): Promise<APIResponse<{
    stripe_customer_detail: { id: string };
    messages: Array<{ field: string; message: string }>;
  }>> {
    const mutation = `
      mutation createStripeCustomerDetail(
        $token: String,
        $card_type_label: String,
        $user_id: ID,
        $is_default: Boolean
      ) {
        createStripeCustomerDetail(
          input: {
            token: $token,
            card_type_label: $card_type_label,
            user_id: $user_id,
            is_default: $is_default
          }
        ) {
          stripe_customer_detail {
            id
          }
          messages {
            field
            message
          }
        }
      }
    `;

    const variables = { token, card_type_label, user_id, is_default };
    return this.mutate(mutation, variables);
  }

  // Create billing item and charge patient in Healthie
  async chargePatientInHealthie({ 
    amountPaid, 
    senderId, 
    requestedPaymentId, 
    stripeIdempotencyKey, 
    stripeCustomerDetailId,
    offering_id,
    shouldCharge 
  }: {
    amountPaid: string;
    senderId: string;
    requestedPaymentId?: string;
    stripeIdempotencyKey: string;
    stripeCustomerDetailId: string;
    offering_id: string;
    shouldCharge: boolean;
  }): Promise<APIResponse<{
    billingItem: { id: string };
    messages: Array<{ field: string; message: string }>;
  }>> {
    const mutation = `
      mutation createBillingItem(
        $amount_paid: String,
        $sender_id: ID,
        $requested_payment_id: ID,
        $stripe_idempotency_key: String,
        $stripe_customer_detail_id: ID,
        $offering_id: ID,
        $should_charge: Boolean
      ) {
        createBillingItem(input: {
          amount_paid: $amount_paid,
          sender_id: $sender_id,
          requested_payment_id: $requested_payment_id,
          stripe_idempotency_key: $stripe_idempotency_key,
          stripe_customer_detail_id: $stripe_customer_detail_id,
          offering_id: $offering_id,
          should_charge: $should_charge
        }) {
          billingItem {
            id
          }
          messages {
            field
            message
          }
        }
      }
    `;

    const variables = { 
      amount_paid: amountPaid, 
      sender_id: senderId, 
      requested_payment_id: requestedPaymentId,
      stripe_idempotency_key: stripeIdempotencyKey, 
      stripe_customer_detail_id: stripeCustomerDetailId,
      offering_id,
      should_charge: shouldCharge 
    };

    return this.mutate(mutation, variables);
  }

  // Create invoice/requested payment in Healthie
  async createInvoice({ 
    recipient_id, 
    offering_id, 
    price, 
    invoice_type,
    status,
    notes,
    services_provided
  }: {
    recipient_id: string;
    offering_id: string;
    price: string;
    invoice_type: string;
    status?: string;
    notes?: string;
    services_provided?: string;
  }): Promise<APIResponse<{
    requestedPayment: { id: string };
    messages: Array<{ field: string; message: string }>;
  }>> {
    const mutation = `
      mutation createRequestedPayment(
        $recipient_id: ID,
        $offering_id: ID,
        $price: String,
        $invoice_type: String,
        $status: String,
        $notes: String,
        $services_provided: String
      ) {
        createRequestedPayment(input: {
          recipient_id: $recipient_id,
          offering_id: $offering_id,
          price: $price,
          invoice_type: $invoice_type,
          status: $status,
          notes: $notes,
          services_provided: $services_provided
        }) {
          requestedPayment {
            id
          }
          messages {
            field
            message
          }
        }
      }
    `;

    const variables = { 
      recipient_id, 
      offering_id, 
      price, 
      invoice_type,
      status,
      notes,
      services_provided
    };
    
    return this.mutate(mutation, variables);
  }

  // Get Stripe customer details from Healthie for a user
  async getPaymentCardsFromHealthie({ 
    user_id 
  }: {
    user_id: string;
  }): Promise<APIResponse<Array<{
    id: string;
    card_type_label?: string;
  }>>> {
    const query = `
      query getStripeCustomerDetails($user_id: ID!) {
        stripeCustomerDetails(user_id: $user_id) {
          id
          card_type_label
        }
      }
    `;

    const variables = { user_id };
    const result = await this.query(query, variables);
    
    return {
      success: true,
      data: (result.data as any)?.stripeCustomerDetails || []
    };
  }

  // Get user package selections from Healthie
  async getUserPackageSelections({ 
    offering_id = null, 
    user_id, 
    offset = null 
  }: {
    offering_id?: string | null;
    user_id: string;
    offset?: number | null;
  }): Promise<APIResponse<{
    userPackageSelectionsCount: number;
    userPackageSelections: Array<{
      id: string;
      offering: {
        id: string;
        name: string;
        description: string;
        price: string;
        billing_frequency: string;
      };
      created_at: string;
    }>;
  }>> {
    const query = `
      query getUserPackageSelections(
        $offering_id: ID, 
        $user_id: ID!, 
        $offset: Int
      ) {
        userPackageSelectionsCount(
          offering_id: $offering_id, 
          user_id: $user_id
        )
        userPackageSelections(
          offering_id: $offering_id, 
          user_id: $user_id, 
          offset: $offset
        ) {
          id
          offering {
            id
            name
            description
            price
            billing_frequency
          }
          created_at
        }
      }
    `;

    const variables = { offering_id, user_id, offset };
    const result = await this.query(query, variables);
    
    return {
      success: true,
      data: {
        userPackageSelectionsCount: (result.data as any)?.userPackageSelectionsCount || 0,
        userPackageSelections: (result.data as any)?.userPackageSelections || []
      }
    };
  }

  // Get configuration
  getConfiguration() {
    return {
      baseUrl: this.baseUrl,
      environment: process.env.NEXT_PUBLIC_ENV,
      authorizationShard: healthieConfig.authorizationShard,
      olhCreateFormUrl: healthieConfig.olhCreateFormUrl,
      initialIntakeFormId: healthieConfig.initialIntakeFormId,
      refillIntakeFormId: healthieConfig.refillIntakeFormId,
      hasApiKey: !!this.apiKey,
    };
  }
}

// Singleton instance for default usage
export const createHealthieClient = (apiKey?: string): HealthieClient => {
  return new HealthieClient(apiKey);
};

// Default client instance
export const healthieClient = createHealthieClient(); 