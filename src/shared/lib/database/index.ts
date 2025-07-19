/**
 * Database Library - Main Exports
 * Level 4 Implementation: Auth0 + User in DB
 * 
 * Provides unified access to all database services and types
 */

// Core client and types
export { 
  prisma, 
  checkDatabaseConnection, 
  disconnectDatabase 
} from './client'

export type { 
  User, 
  ProgressSession,
  FormData,
  CreateUserData,
  CreateProgressSessionData,
  UpdateProgressData,
  CreateFormDataInput,
  UpdateFormDataInput,
  SessionIdentifier
} from './client'

// Add new Prisma types
export type { 
  Patient, 
  MedicalRecord, 
  FormSubmission 
} from '@prisma/client'

// Services
export { UserService } from './user-service'
export { ProgressService } from './progress-service'
export { AuthService } from './auth-service'
export { FormDataService } from './form-data-service'
export { PatientService } from './patient-service'

// Create service instances for easier access
import { UserService } from './user-service'
import { ProgressService } from './progress-service'
import { AuthService } from './auth-service'
import { FormDataService } from './form-data-service'
import { PatientService } from './patient-service'
import { checkDatabaseConnection, disconnectDatabase } from './client'

// Re-export for convenience
export const db = {
  user: UserService,
  progress: ProgressService,
  auth: AuthService,
  formData: FormDataService,
  patient: PatientService
}

// Health check utility
export const dbHealth = {
  check: checkDatabaseConnection,
  disconnect: disconnectDatabase
} 