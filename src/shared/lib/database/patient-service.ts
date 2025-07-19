import { prisma } from './client'
import type { Patient, MedicalRecord, FormSubmission } from '@prisma/client'

/**
 * Patient Service - Manages patient records and medical data
 * One-to-one relationship with User
 */
export class PatientService {

  /**
   * Find or create patient for user
   */
  static async findOrCreatePatient(
    userId: number,
    patientData: {
      firstName: string
      lastName: string
      email: string
      phoneNumber?: string
      dateOfBirth?: string
      gender?: string
      height?: string
      weight?: string
      address?: any
    }
  ): Promise<Patient> {
    try {
      // Check if patient already exists
      let patient = await prisma.patient.findUnique({
        where: { userId }
      })

      if (patient) {
        console.log('👤 Patient already exists for user:', userId)
        return patient
      }

      // Create new patient
      patient = await prisma.patient.create({
        data: {
          userId,
          firstName: patientData.firstName,
          lastName: patientData.lastName,
          email: patientData.email,
          phoneNumber: patientData.phoneNumber,
          dateOfBirth: patientData.dateOfBirth,
          gender: patientData.gender,
          height: patientData.height,
          weight: patientData.weight,
          address: patientData.address,
        }
      })

      console.log('✅ Patient created for user:', userId)
      return patient

    } catch (error) {
      console.error('❌ Failed to find/create patient:', error)
      throw new Error('Failed to find or create patient')
    }
  }

  /**
   * Update patient with Healthie patient ID
   */
  static async updateHealthiePatientId(
    patientId: number,
    healthiePatientId: string
  ): Promise<Patient> {
    try {
      const patient = await prisma.patient.update({
        where: { id: patientId },
        data: { healthiePatientId }
      })

      console.log('✅ Patient updated with Healthie ID:', healthiePatientId)
      return patient

    } catch (error) {
      console.error('❌ Failed to update patient Healthie ID:', error)
      throw new Error('Failed to update patient Healthie ID')
    }
  }

  /**
   * Get patient by user ID
   */
  static async getPatientByUserId(userId: number): Promise<Patient | null> {
    try {
      return await prisma.patient.findUnique({
        where: { userId },
        include: {
          medicalRecords: true,
          formSubmissions: true
        }
      })
    } catch (error) {
      console.error('❌ Failed to get patient:', error)
      throw new Error('Failed to get patient')
    }
  }

  /**
   * Create medical record for patient
   */
  static async createMedicalRecord(
    patientId: number,
    recordData: {
      recordType: string
      data: any
      source: string
      metadata?: any
    }
  ): Promise<MedicalRecord> {
    try {
      const record = await prisma.medicalRecord.create({
        data: {
          patientId,
          formType: recordData.recordType,
          responses: recordData.data,
          metadata: recordData.metadata || {}
        }
      })

      console.log('✅ Medical record created for patient:', patientId)
      return record

    } catch (error) {
      console.error('❌ Failed to create medical record:', error)
      throw new Error('Failed to create medical record')
    }
  }

  /**
   * Create form submission record
   */
  static async createFormSubmission(
    patientId: number,
    submissionData: {
      formType: string
      formName?: string
      olhFormId: string
      healthiePatientId: string
      dietitianId: string
      submissionData: any
      olhSubmissionId: string
      status: 'pending' | 'submitted' | 'success' | 'failed'
      metadata?: any
    }
  ): Promise<FormSubmission> {
    try {
      const submission = await prisma.formSubmission.create({
        data: {
          patientId,
          formType: submissionData.formType,
          formName: submissionData.formName,
          olhFormId: submissionData.olhFormId,
          status: submissionData.status,
          submissionData: submissionData.submissionData,
          responseData: {
            olhSubmissionId: submissionData.olhSubmissionId,
            dietitianId: submissionData.dietitianId,
            healthiePatientId: submissionData.healthiePatientId,
            metadata: submissionData.metadata
          }
        }
      })

      console.log('✅ Form submission created for patient:', patientId)
      return submission

    } catch (error) {
      console.error('❌ Failed to create form submission:', error)
      throw new Error('Failed to create form submission')
    }
  }

  /**
   * Update form submission with results
   */
  static async updateFormSubmission(
    submissionId: number,
    updates: {
      olhFormId?: string
      status?: 'pending' | 'success' | 'failed'
      responseData?: any
      errorMessage?: string
    }
  ): Promise<FormSubmission> {
    try {
      const submission = await prisma.formSubmission.update({
        where: { id: submissionId },
        data: updates
      })

      console.log('✅ Form submission updated:', submissionId)
      return submission

    } catch (error) {
      console.error('❌ Failed to update form submission:', error)
      throw new Error('Failed to update form submission')
    }
  }

  /**
   * Get patient medical records by form type
   */
  static async getMedicalRecords(
    patientId: number,
    formType?: string
  ): Promise<MedicalRecord[]> {
    try {
      return await prisma.medicalRecord.findMany({
        where: {
          patientId,
          ...(formType && { formType })
        },
        orderBy: { createdAt: 'desc' }
      })
    } catch (error) {
      console.error('❌ Failed to get medical records:', error)
      throw new Error('Failed to get medical records')
    }
  }

  /**
   * Get patient form submissions
   */
  static async getFormSubmissions(
    patientId: number,
    formType?: string
  ): Promise<FormSubmission[]> {
    try {
      return await prisma.formSubmission.findMany({
        where: {
          patientId,
          ...(formType && { formType })
        },
        orderBy: { submittedAt: 'desc' }
      })
    } catch (error) {
      console.error('❌ Failed to get form submissions:', error)
      throw new Error('Failed to get form submissions')
    }
  }
} 