import { KMSClient, EncryptCommand, DecryptCommand } from '@aws-sdk/client-kms';
import crypto from 'crypto';

/**
 * HIPAA-Compliant Field Encryption Service
 * Supports dev mode (no encryption) and prod mode (AWS KMS encryption)
 */

export class FieldEncryptionService {
  private isDevMode: boolean;
  private kmsClient: KMSClient | null;
  private kmsKeyId: string | undefined;
  private encryptionProvider: string;
  private localKey: Buffer | null;

  constructor() {
    this.isDevMode = process.env.ENCRYPTION_MODE === 'dev';
    this.kmsKeyId = process.env.KMS_KEY_ID;
    this.encryptionProvider = process.env.ENCRYPTION_PROVIDER || 'local';
    this.kmsClient = !this.isDevMode && this.kmsKeyId && this.encryptionProvider === 'KMS'
      ? new KMSClient({ region: process.env.AWS_REGION })
      : null;
    this.localKey = process.env.FIELD_ENCRYPTION_KEY
      ? Buffer.from(process.env.FIELD_ENCRYPTION_KEY, 'hex')
      : null;
    
    // Enhanced initialization logging
    console.log('🔧 FieldEncryptionService initialized:');
    console.log(`   Mode: ${this.isDevMode ? 'DEV (No Encryption)' : 'PROD (Encryption Enabled)'}`);
    console.log(`   Provider: ${this.encryptionProvider}`);
    console.log(`   KMS Key ID: ${this.kmsKeyId ? 'Configured' : 'Not configured'}`);
    console.log(`   Local Key: ${this.localKey ? 'Configured (32 bytes)' : 'Not configured'}`);
    console.log(`   AWS Region: ${process.env.AWS_REGION || 'Not set'}`);
    
    // Validate configuration
    if (!this.isDevMode) {
      if (this.encryptionProvider === 'KMS' && !this.kmsKeyId) {
        console.error('❌ KMS provider selected but KMS_KEY_ID not configured');
      }
      if (this.encryptionProvider === 'local' && !this.localKey) {
        console.error('❌ Local provider selected but FIELD_ENCRYPTION_KEY not configured');
      }
      if (this.encryptionProvider === 'local' && this.localKey && this.localKey.length !== 32) {
        console.error('❌ FIELD_ENCRYPTION_KEY must be exactly 32 bytes (64 hex characters)');
      }
    }
  }

  /**
   * Encrypt field - transparent for dev mode
   */
  async encryptField(plaintext: string): Promise<string> {
    if (!plaintext) {
      console.log('⚠️  Encryption skipped: empty plaintext');
      return '';
    }

    // Dev mode: return as-is for visibility
    if (this.isDevMode) {
      return plaintext;
    }

    if (this.encryptionProvider === 'KMS') {
      // AWS KMS encryption
      console.log('🔑 Using KMS encryption...');
      try {
        if (!this.kmsClient || !this.kmsKeyId) {
          throw new Error('KMS client or key ID not configured');
        }
        console.log(`📡 Sending encryption request to KMS (Key: ${this.kmsKeyId})`);
        const command = new EncryptCommand({
          KeyId: this.kmsKeyId,
          Plaintext: Buffer.from(plaintext)
        });
        const response = await this.kmsClient.send(command);
        if (!response.CiphertextBlob) {
          throw new Error('KMS encryption failed: No CiphertextBlob');
        }
        const encrypted = Buffer.from(response.CiphertextBlob).toString('base64');
        console.log('✅ KMS encryption successful');
        return `KMS_${encrypted}`;
      } catch (error) {
        console.error('❌ KMS Encryption failed:', error);
        console.error('   Check AWS credentials and KMS key permissions');
        throw new Error('Failed to encrypt sensitive data (KMS)');
      }
    } else {
      // Local AES-256-GCM encryption
      console.log('🔑 Using local AES-256-GCM encryption...');
      try {
        if (!this.localKey || this.localKey.length !== 32) {
          console.error(`❌ Invalid key length: ${this.localKey?.length || 0} bytes (expected 32)`);
          throw new Error('FIELD_ENCRYPTION_KEY must be 32 bytes (64 hex chars)');
        }
        const iv = crypto.randomBytes(12); // 96 bits for GCM
        console.log('🔐 Generating IV and encrypting with AES-256-GCM');
        const cipher = crypto.createCipheriv('aes-256-gcm', this.localKey, iv);
        const encrypted = Buffer.concat([
          cipher.update(plaintext, 'utf8'),
          cipher.final()
        ]);
        const tag = cipher.getAuthTag();
        // Format: LOCAL_<iv>_<tag>_<ciphertext> (all base64)
        const result = `LOCAL_${iv.toString('base64')}_${tag.toString('base64')}_${encrypted.toString('base64')}`;
        console.log('✅ Local AES encryption successful');
        return result;
      } catch (error) {
        console.error('❌ Local Encryption failed:', error);
        console.error('   Check FIELD_ENCRYPTION_KEY configuration');
        throw new Error('Failed to encrypt sensitive data (local)');
      }
    }
  }

  /**
   * Decrypt field - transparent for dev mode
   */
  async decryptField(ciphertext: string): Promise<string> {
    if (!ciphertext) {
      console.log('⚠️  Decryption skipped: empty ciphertext');
      return '';
    }

    // Dev mode: return as-is
    if (this.isDevMode) {
      return ciphertext;
    }

    if (ciphertext.startsWith('KMS_')) {
      // AWS KMS decryption
      try {
        if (!this.kmsClient) {
          throw new Error('KMS client not configured');
        }
        const encrypted = Buffer.from(ciphertext.substring(4), 'base64');
        const command = new DecryptCommand({
          CiphertextBlob: encrypted
        });
        const response = await this.kmsClient.send(command);
        if (!response.Plaintext) {
          throw new Error('KMS decryption failed: No Plaintext');
        }
        const decrypted = Buffer.from(response.Plaintext).toString();
        return decrypted;
      } catch (error) {
        console.error('❌ KMS Decryption failed:', error);
        console.error('   Check AWS credentials and KMS key permissions');
        throw new Error('Failed to decrypt sensitive data (KMS)');
      }
    } else if (ciphertext.startsWith('LOCAL_')) {
      // Local AES-256-GCM decryption
      console.log('🔑 Detected local encrypted data, decrypting...');
      try {
        if (!this.localKey || this.localKey.length !== 32) {
          console.error(`❌ Invalid key length: ${this.localKey?.length || 0} bytes (expected 32)`);
          throw new Error('FIELD_ENCRYPTION_KEY must be 32 bytes (64 hex chars)');
        }
        const parts = ciphertext.split('_');
        if (parts.length !== 4) {
          console.error(`❌ Invalid ciphertext format: expected 4 parts, got ${parts.length}`);
          throw new Error('Invalid local ciphertext format');
        }
        console.log('🔐 Parsing IV, tag, and ciphertext for AES-256-GCM decryption');
        const iv = Buffer.from(parts[1], 'base64');
        const tag = Buffer.from(parts[2], 'base64');
        const encrypted = Buffer.from(parts[3], 'base64');
        const decipher = crypto.createDecipheriv('aes-256-gcm', this.localKey, iv);
        decipher.setAuthTag(tag);
        const decrypted = Buffer.concat([
          decipher.update(encrypted),
          decipher.final()
        ]);
        console.log('✅ Local AES decryption successful');
        return decrypted.toString('utf8');
      } catch (error) {
        console.error('❌ Local Decryption failed:', error);
        console.error('   Check FIELD_ENCRYPTION_KEY configuration and ciphertext format');
        throw new Error('Failed to decrypt sensitive data (local)');
      }
    }
    // If not encrypted, return as-is (backward compatibility)
    console.log('ℹ️  Data not encrypted, returning as-is (backward compatibility)');
    return ciphertext;
  }

  /**
   * Check if field should be encrypted
   */
  shouldEncrypt(model: string, field: string): boolean | 'all' {
    // Updated encryption rules: use 'all' for all JSON fields to enable recursive subfield encryption
    const encryptionRules = {
      'Patient': {
        phoneNumber: true,
        dateOfBirth: true,
        firstName: true,
        lastName: true,
        email: true,
        address: 'all' // encrypt all string subfields in address (Json)
      },
      'User': {
        email: true,
        name: true
      },
      'FormData': {
        formData: 'all' // encrypt all string subfields in formData (Json)
      },
      'MedicalRecord': {
        responses: 'all', // encrypt all string subfields in responses (Json)
        metadata: 'all'   // encrypt all string subfields in metadata (Json)
      },
      'FormSubmission': {
        submissionData: 'all', // encrypt all string subfields in submissionData (Json)
        responseData: 'all'    // encrypt all string subfields in responseData (Json)
      },
      'ProgressSession': {
        stepData: 'all' // encrypt all string subfields in stepData (Json)
      },
      'Payment': {
        paymentMethod: true,
        healthieCustomerDetailId: true,
        metadata: 'all' // encrypt all string subfields in metadata (Json)
      }
    };

    // Support nested object rules
    if (encryptionRules[model] && typeof encryptionRules[model] === 'object') {
      const rule = encryptionRules[model][field];
      const result = rule === 'all' ? 'all' : !!rule;
      return result;
    }
    return false;
  }

  /**
   * Get encryption status for logging
   */
  getStatus(): string {
    if (this.isDevMode) return 'DEV (No Encryption)';
    if (this.encryptionProvider === 'KMS') return 'PROD (KMS Encrypted)';
    return 'PROD (Local AES Encrypted)';
  }
}

// Singleton instance
export const fieldEncryption = new FieldEncryptionService(); 