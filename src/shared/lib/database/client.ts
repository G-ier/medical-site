import { PrismaClient } from '@prisma/client'
import { fieldEncryption } from '../encryption/field-encryption'

// Global variable to store Prisma instance in development
declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined
}

// Prisma Client singleton pattern for Next.js
// Prevents multiple instances in development hot reloading
const prisma = globalThis.__prisma || new PrismaClient({
  log:  ['error'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
})

// Add encryption middleware
prisma.$use(async (params, next) => {
  const model = params.model;
  const action = params.action;

  // Only log for FormData model
  if (model === 'FormData') {
    console.log(`[ENCRYPTION MIDDLEWARE] Action: ${action}, Model: ${model}`);
  }

  // Encrypt sensitive fields before writing to database
  if ((action === 'create' || action === 'update') && model) {
    if (params.args.data) {
      if (model === 'FormData') {
        console.log(`[ENCRYPTION MIDDLEWARE] Encrypting fields for model: ${model}, action: ${action}`);
      }
      await encryptSensitiveFields(model, params.args.data, action);
    }
  } else if (action === 'upsert' && model) {
    if (params.args.create) {
      await encryptSensitiveFields(model, params.args.create, action);
    }
    if (params.args.update) {
      await encryptSensitiveFields(model, params.args.update, action);
    }
  }

  // Execute the query
  const result = await next(params);

  // Decrypt sensitive fields after reading from database
  if (['findUnique', 'findFirst', 'findMany'].includes(action) && model) {
    if (result) {
      if (Array.isArray(result)) {
        for (const item of result) {
          if (model === 'FormData') {
            console.log(`[ENCRYPTION MIDDLEWARE] Decrypting array item for model: ${model}`);
          }
          await decryptSensitiveFields(model, item);
        }
      } else {
        if (model === 'FormData') {
          console.log(`[ENCRYPTION MIDDLEWARE] Decrypting result for model: ${model}`);
        }
        await decryptSensitiveFields(model, result);
      }
    }
  }

  return result;
});

// Helper to track the path during recursion
function joinPath(path: (string | number)[]): string {
  return path.length ? path.join('.') : '(root)';
}

// Recursively encrypt all string subfields in an object/array, no debug logs
async function deepEncryptStringsOnly(value: any, encryptFn: (v: string) => Promise<string>, path: (string | number)[] = []): Promise<any> {
  if (typeof value === 'string') {
    try {
      return await encryptFn(value);
    } catch (error) {
      console.error(`[DEEP ENCRYPT ERROR] Path: ${joinPath(path)}, Error:`, error);
      throw error;
    }
  } else if (Array.isArray(value)) {
    return Promise.all(value.map((v, i) => deepEncryptStringsOnly(v, encryptFn, [...path, i])));
  } else if (typeof value === 'object' && value !== null) {
    const result: Record<string, any> = {};
    for (const [k, v] of Object.entries(value)) {
      result[k] = await deepEncryptStringsOnly(v, encryptFn, [...path, k]);
    }
    return result;
  } else {
    // number, boolean, null, undefined, or unsupported types
    return value;
  }
}

// Recursively decrypt all string subfields that look like encrypted values, no debug logs
async function deepDecryptStringsOnly(value: any, decryptFn: (v: string) => Promise<string>, path: (string | number)[] = []): Promise<any> {
  if (typeof value === 'string') {
    try {
      const decrypted = await decryptFn(value);
      try {
        return JSON.parse(decrypted);
      } catch {
        return decrypted;
      }
    } catch (error) {
      console.error(`[DEEP DECRYPT ERROR] Path: ${joinPath(path)}, Error:`, error);
      throw error;
    }
  } else if (Array.isArray(value)) {
    return Promise.all(value.map((v, i) => deepDecryptStringsOnly(v, decryptFn, [...path, i])));
  } else if (typeof value === 'object' && value !== null) {
    const result: Record<string, any> = {};
    for (const [k, v] of Object.entries(value)) {
      result[k] = await deepDecryptStringsOnly(v, decryptFn, [...path, k]);
    }
    return result;
  } else {
    // number, boolean, null, undefined, or unsupported types
    return value;
  }
}

async function encryptSensitiveFields(model: string, data: any, action?: string) {
  if (model === 'FormData' && action === 'upsert') {
    console.log('[ENCRYPTION] encryptSensitiveFields called with data:', JSON.stringify(data));
  }
  if (!data || typeof data !== 'object') return;

  for (const [field, value] of Object.entries(data)) {
    const encryptRule = fieldEncryption.shouldEncrypt(model, field);
    if (model === 'FormData') {
      console.log(`[ENCRYPTION] Model: ${model}, Field: ${field}, Rule: ${encryptRule}`);
    }
    try {
      if (encryptRule === 'all') {
        if (model === 'FormData') {
          console.log(`[ENCRYPTION] Deep encrypting all string subfields in field: ${field}`);
        }
        // Recursively encrypt all string subfields in the object
        data[field] = await deepEncryptStringsOnly(value, fieldEncryption.encryptField.bind(fieldEncryption));
      } else if (encryptRule === true) {
        if (model === 'FormData') {
          console.log(`[ENCRYPTION] Encrypting field: ${field} as a whole`);
        }
        // Encrypt the whole value (string, object, etc.)
        if (typeof value === 'string') {
          data[field] = await fieldEncryption.encryptField(value);
        } else {
          // For objects/arrays, serialize to JSON string before encrypting
          data[field] = await fieldEncryption.encryptField(JSON.stringify(value));
        }
      } else {
        if (model === 'FormData') {
          console.log(`[ENCRYPTION] Skipping field: ${field} (no encryption rule)`);
        }
      }
    } catch (error) {
      if (model === 'FormData') {
        console.error(`[ENCRYPT ERROR] Model: ${model}, Field: ${field}, Error:`, error);
      }
    }
  }
}

async function decryptSensitiveFields(model: string, result: any) {
  if (!result || typeof result !== 'object') return;

  for (const [field, value] of Object.entries(result)) {
    const encryptRule = fieldEncryption.shouldEncrypt(model, field);
    if (model === 'FormData') {
      console.log(`[DECRYPTION] Model: ${model}, Field: ${field}, Rule: ${encryptRule}`);
    }
    try {
      if (encryptRule === 'all') {
        if (model === 'FormData') {
          console.log(`[DECRYPTION] Deep decrypting all string subfields in field: ${field}`);
        }
        // Recursively decrypt all string subfields in the object
        result[field] = await deepDecryptStringsOnly(value, fieldEncryption.decryptField.bind(fieldEncryption));
      } else if (encryptRule === true) {
        if (model === 'FormData') {
          console.log(`[DECRYPTION] Decrypting field: ${field} as a whole`);
        }
        if (typeof value === 'string') {
          // Try to decrypt, then try to parse as JSON, fallback to string
          const decrypted = await fieldEncryption.decryptField(value);
          try {
            result[field] = JSON.parse(decrypted);
          } catch {
            result[field] = decrypted;
          }
        }
      } else {
        if (model === 'FormData') {
          console.log(`[DECRYPTION] Skipping field: ${field} (no decryption rule)`);
        }
      }
    } catch (error) {
      if (model === 'FormData') {
        console.error(`[DECRYPT ERROR] Model: ${model}, Field: ${field}, Error:`, error);
      }
    }
  }
}

// Store instance globally in development to prevent hot reload issues
if (process.env.NODE_ENV === 'development') {
  globalThis.__prisma = prisma
}

// Log encryption status on startup
console.log('🔐 Database encryption status:', fieldEncryption.getStatus());

export { prisma }

// Type exports for use throughout the application
export type { User, ProgressSession, FormData } from '@prisma/client'

// Helper types for common operations
export type CreateUserData = {
  auth0UserId: string
  email: string
  name?: string
  picture?: string
}

export type CreateProgressSessionData = {
  sessionToken?: string
  userId?: number
  currentStepId?: string
  completedSteps?: string[]
  stepData?: Record<string, unknown>
  isAnonymous?: boolean
  expiresAt?: Date
}

export type UpdateProgressData = {
  currentStepId?: string
  completedSteps?: string[]
  stepData?: Record<string, unknown>
}

export type CreateFormDataInput = {
  progressSessionId: number
  stepId: string
  formData: Record<string, unknown>
  isValid?: boolean
  validationErrors?: string[]
}

export type UpdateFormDataInput = {
  formData: Record<string, unknown>
  isValid?: boolean
  validationErrors?: string[]
}

export type SessionIdentifier = {
  sessionToken: string
}

// Database connection health check
export async function checkDatabaseConnection(): Promise<boolean> {
  try {
    await prisma.$queryRaw`SELECT 1`
    return true
  } catch (error) {
    console.error('Database connection failed:', error)
    return false
  }
}

// Graceful shutdown
export async function disconnectDatabase(): Promise<void> {
  await prisma.$disconnect()
} 