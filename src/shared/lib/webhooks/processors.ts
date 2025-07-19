/**
 * Webhook Processing Utilities
 * Contains business logic for processing different webhook events
 */

import { FormAnswerGroupData, AppointmentData, WebhookProcessingResult } from '@/shared/api/healthie/types';

export interface WebhookProcessor {
  processFormAnswerGroup(data: FormAnswerGroupData): Promise<WebhookProcessingResult>;
  processAppointment(data: AppointmentData): Promise<WebhookProcessingResult>;
}

export class HealthieWebhookProcessor implements WebhookProcessor {
  
  async processFormAnswerGroup(data: FormAnswerGroupData): Promise<WebhookProcessingResult> {
    const actions: string[] = [];
    const formName = data.custom_module_form.name;
    const patientId = data.user.id;

    console.log(`[WebhookProcessor] Processing form: ${formName} for patient: ${patientId}`);

    try {
      // Process Weight Management Encounter Note
      if (formName.includes('Weight Management Encounter')) {
        return await this.processWeightManagementForm(data, actions);
      }

      // Process Weight Management - Initial (Visit)
      if (formName.includes('Weight Management - Initial')) {
        return await this.processInitialVisitForm(data, actions);
      }

      // Process WM Lab Results Form
      if (formName.includes('WM Lab Results')) {
        return await this.processLabResultsForm(data, actions);
      }

      // Process PF - Patient Medication Instructions
      if (formName.includes('Patient Medication Instructions')) {
        return await this.processMedicationInstructionsForm(data, actions);
      }

      // Default processing for unknown forms
      actions.push(`Processed unknown form type: ${formName}`);
      
      return {
        success: true,
        event_type: 'form_answer_group.locked',
        actions_taken: actions,
        patient_id: patientId,
        details: { form_name: formName }
      };

    } catch (error: any) {
      console.error(`[WebhookProcessor] Error processing form:`, error);
      
      return {
        success: false,
        event_type: 'form_answer_group.locked',
        actions_taken: actions,
        patient_id: patientId,
        error: error.message,
        details: { form_name: formName }
      };
    }
  }

  async processAppointment(data: AppointmentData): Promise<WebhookProcessingResult> {
    const actions: string[] = [];
    const patientId = data.user.id;
    const appointmentType = data.appointment_type.name;

    console.log(`[WebhookProcessor] Processing appointment: ${appointmentType} for patient: ${patientId}`);

    try {
      // Check appointment status for no-shows, cancellations, etc.
      if (data.pm_status) {
        switch (data.pm_status.toLowerCase()) {
          case 'no_show':
          case 'patient_no_show':
            actions.push('Patient no-show detected');
            actions.push('Prompt patient to reschedule in portal');
            actions.push('Create NPLB queue ticket for follow-up');
            break;
            
          case 'provider_no_show':
            actions.push('Provider no-show detected');
            actions.push('Prompt patient to reschedule in portal');
            actions.push('Create NPLB queue ticket for follow-up');
            break;
            
          case 'cancelled':
          case 'canceled':
            actions.push('Visit cancelled');
            actions.push('Prompt patient to reschedule in portal');
            actions.push('Create follow-up ticket if applicable');
            break;
            
          case 'completed':
            actions.push('Visit completed');
            actions.push('Update patient portal with completion status');
            break;
            
          default:
            actions.push(`Appointment status updated: ${data.pm_status}`);
        }
      }

      return {
        success: true,
        event_type: 'appointment.updated',
        actions_taken: actions,
        patient_id: patientId,
        details: { 
          appointment_type: appointmentType,
          status: data.pm_status,
          appointment_id: data.id 
        }
      };

    } catch (error: any) {
      console.error(`[WebhookProcessor] Error processing appointment:`, error);
      
      return {
        success: false,
        event_type: 'appointment.updated',
        actions_taken: actions,
        patient_id: patientId,
        error: error.message,
        details: { appointment_type: appointmentType }
      };
    }
  }

  private async processWeightManagementForm(data: FormAnswerGroupData, actions: string[]): Promise<WebhookProcessingResult> {
    const patientId = data.user.id;
    const answers = this.getFormAnswersMap(data.form_answers);

    // 1. Check for Patient Disqualified (DQ'd)
    const visitStatus = answers['WM Visit Status'] || answers['Visit Status'];
    if (visitStatus?.includes('Not Eligible for GLP-1 Program')) {
      actions.push('Patient disqualified from GLP-1 program');
      actions.push('Display DQ reason to patient in portal');
      actions.push('Trigger refund for initial consult');
      
      const dqReason = answers['Patient Education & Patient Plan - Not Prescribed DQ'] || 'Not specified';
      return {
        success: true,
        event_type: 'patient_disqualified',
        actions_taken: actions,
        patient_id: patientId,
        details: { dq_reason: dqReason }
      };
    }

    // 2. Check for No-Shows
    const noShowField = answers['DQ/No-Show/ReScheduled/Cancellation'];
    if (noShowField?.includes('No-Show')) {
      if (noShowField.includes('Patient No-Showed')) {
        actions.push('Patient no-show detected');
      } else if (noShowField.includes('Provider No-Show')) {
        actions.push('Provider no-show detected');
      }
      actions.push('Prompt patient to reschedule in portal');
      actions.push('Create NPLB queue ticket for follow-up');
    }

    // 3. Check for Cancelled Visit
    if (visitStatus?.includes('Cancelled') || noShowField?.includes('Cancelled')) {
      actions.push('Visit cancelled');
      actions.push('Prompt patient to reschedule in portal');
      actions.push('Create follow-up ticket if applicable');
    }

    // 4. Check for Completed Visit
    if (visitStatus?.includes('Visit Completed')) {
      actions.push('Visit completed');
      actions.push('Update patient portal with completion status');
    }

    // 5. Check for Labs Ordered
    const labsOrdered = answers['Are labs needing to be ordered for the patient?'];
    if (labsOrdered?.includes('Yes')) {
      actions.push('Labs ordered for patient');
      actions.push('Create 60-day lab completion reminder');
      actions.push('Generate ticket to place order and send requisition');
    }

    // 6. Check for Medication Ordered
    const medicationOrdered = answers['Was medication ordered in this consult?'];
    if (medicationOrdered?.includes('Yes')) {
      actions.push('Medication ordered');
      actions.push('Display "Medication prescribed" in portal');
      actions.push('Setup shipping notifications');
      
      // Get medication details
      const medicationType = this.extractMedicationType(medicationOrdered);
      const medicationLevel = answers['What level of semaglutide is being ordered?'] || 
                             answers['What level of tirzepatide is being ordered?'];
      
      actions.push(`Medication type: ${medicationType}`);
      if (medicationLevel) {
        actions.push(`Medication level: ${medicationLevel}`);
      }
    }

    // 7. Check for Patient AVS (After Visit Summary)
    const patientEducation = answers['PF - Patient Education & Patient Plan for Compound Semaglutide'] ||
                            answers['PF Patient Education & Plan'] ||
                            answers['Patient Facing Not Prescribed DQ'];
    
    if (patientEducation) {
      actions.push('Patient AVS available');
      actions.push('Update patient portal with visit outcome and AVS');
      actions.push('Send AVS to patient if applicable');
    }

    return {
      success: true,
      event_type: 'weight_management_form_processed',
      actions_taken: actions,
      patient_id: patientId,
      details: {
        visit_status: visitStatus,
        labs_ordered: labsOrdered,
        medication_ordered: medicationOrdered
      }
    };
  }

  private async processInitialVisitForm(data: FormAnswerGroupData, actions: string[]): Promise<WebhookProcessingResult> {
    const patientId = data.user.id;
    // Similar processing logic for initial visit forms
    actions.push('Initial visit form processed');
    actions.push('Update patient portal with visit information');

    return {
      success: true,
      event_type: 'initial_visit_form_processed',
      actions_taken: actions,
      patient_id: patientId
    };
  }

  private async processLabResultsForm(data: FormAnswerGroupData, actions: string[]): Promise<WebhookProcessingResult> {
    const patientId = data.user.id;
    
    actions.push('Lab results form processed');
    actions.push('Update patient database to reflect completed labs');
    actions.push('Upload results for immediate provider review');

    return {
      success: true,
      event_type: 'lab_results_processed',
      actions_taken: actions,
      patient_id: patientId
    };
  }

  private async processMedicationInstructionsForm(data: FormAnswerGroupData, actions: string[]): Promise<WebhookProcessingResult> {
    const patientId = data.user.id;
    
    actions.push('Medication instructions form processed');
    actions.push('Display medication instructions in patient portal');

    return {
      success: true,
      event_type: 'medication_instructions_processed',
      actions_taken: actions,
      patient_id: patientId
    };
  }

  private getFormAnswersMap(formAnswers: Array<{id: string, label: string, answer: string}>): Record<string, string> {
    const map: Record<string, string> = {};
    formAnswers.forEach(answer => {
      map[answer.label] = answer.answer;
    });
    return map;
  }

  private extractMedicationType(medicationAnswer: string): string {
    if (medicationAnswer.includes('Semaglutide')) {
      if (medicationAnswer.includes('MAINTENANCE')) {
        return 'Maintenance Semaglutide';
      }
      return 'Semaglutide';
    }
    if (medicationAnswer.includes('Tirzepatide')) {
      return 'Tirzepatide';
    }
    return 'Unknown medication type';
  }
}

// Export singleton instance
export const webhookProcessor = new HealthieWebhookProcessor(); 