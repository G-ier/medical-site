/**
 * Update Patient Script
 * Works with one user, saves create_patient form type, then updates the data
 * 1) Saves initial create_patient data
 * 2) Adds new fields to existing data
 * 3) Modifies existing fields with new values
 */

const { PrismaClient } = require('@prisma/client');
const { v4: uuidv4 } = require('uuid');

const prisma = new PrismaClient();
const fetch = globalThis.fetch;

// API endpoint
const API_BASE_URL = 'http://localhost:3004';
const FORM_TYPE = 'create_patient';

/**
 * Get one real user from database or create if none exists
 */
async function getOneUser() {
  try {
    console.log('🔍 Fetching one user from database...');
    
    // Check total users count first
    const totalUsers = await prisma.user.count();
    console.log(`📊 Total users in database: ${totalUsers}`);
    
    const user = await prisma.user.findFirst({
      include: {
        patient: true
      }
    });

    if (!user) {
      console.log('⚠️  No users found in database. Creating test user...\n');
      
      console.log('🔨 Creating new user and patient record...');
      
      // Generate unique identifiers
      const timestamp = Date.now();
      const uniqueId = `test-update-user-${timestamp}`;
      const email = `update-test-${timestamp}@example.com`;
      
      console.log(`📧 Email: ${email}`);
      console.log(`🆔 Auth0 ID: ${uniqueId}`);
      
      // Create test user if none exists
      const testUser = await prisma.user.create({
        data: {
          auth0UserId: uniqueId,
          email: email,
          name: 'Update Test User'
        }
      });
      
      console.log(`✅ User created with ID: ${testUser.id}`);

      // Create corresponding patient record
      const patient = await prisma.patient.create({
        data: {
          userId: testUser.id,
          firstName: 'Update',
          lastName: 'Test User',
          email: email,
          phoneNumber: '+1555000000',
          dateOfBirth: '01/01/1985',
          gender: 'Male',
          height: '70',
          weight: '180',
          healthiePatientId: `test_update_${testUser.id}`
        }
      });
      
      console.log(`✅ Patient record created with ID: ${patient.id}`);
      console.log(`🏥 Healthie Patient ID: ${patient.healthiePatientId}`);

      console.log('\n🎉 Test user and patient created successfully!\n');
      
      // Refetch user with patient data to ensure consistency
      const createdUser = await prisma.user.findFirst({
        where: { id: testUser.id },
        include: { patient: true }
      });
      
      if (!createdUser) {
        throw new Error('Failed to refetch created user');
      }
      
      console.log(`✅ Verified created user: ${createdUser.email} (ID: ${createdUser.id})`);
      return createdUser;
    }

    console.log(`✅ Found existing user: ${user.email} (ID: ${user.id})`);
    
    // Check if user has patient record
    if (!user.patient) {
      console.log('⚠️  User found but no patient record. Creating patient...');
      
      const patient = await prisma.patient.create({
        data: {
          userId: user.id,
          firstName: user.name ? user.name.split(' ')[0] : 'John',
          lastName: user.name ? user.name.split(' ').slice(1).join(' ') || 'Doe' : 'Doe',
          email: user.email,
          phoneNumber: '+1555123456',
          dateOfBirth: '01/01/1990',
          gender: 'Male',
          height: '70',
          weight: '175',
          healthiePatientId: `patient_${user.id}`
        }
      });
      
      console.log(`✅ Patient record created for existing user (Patient ID: ${patient.id})`);
      
      // Refetch user with patient data
      return await prisma.user.findFirst({
        where: { id: user.id },
        include: { patient: true }
      });
    }
    
    console.log(`👤 Patient record found (Patient ID: ${user.patient.id})`);
    return user;
  } catch (error) {
    console.error('❌ Error fetching/creating user:', error);
    throw error;
  }
}

/**
 * Submit data to /api/form-data endpoint
 */
async function submitFormData(sessionToken, formData, method = 'POST') {
  try {
    const url = `${API_BASE_URL}/api/form-data`;
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'x-session-token': sessionToken
      },
      body: JSON.stringify({
        formType: FORM_TYPE,
        stepId: null,
        formData,
        validate: false
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API Error: ${errorData.error || response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(`❌ Error submitting ${FORM_TYPE}:`, error.message);
    throw error;
  }
}

/**
 * Get existing form data (latest record)
 */
async function getFormData(sessionToken, getLatest = false) {
  try {
    const url = `${API_BASE_URL}/api/form-data`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-session-token': sessionToken
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API Error: ${errorData.error || response.statusText}`);
    }

    const result = await response.json();
    const createPatientRecords = result.data?.filter(item => item.formType === FORM_TYPE) || [];
    
    if (createPatientRecords.length === 0) {
      return null;
    }
    
    // If getLatest is true, return the most recent record
    if (getLatest) {
      const latestRecord = createPatientRecords.sort((a, b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
      )[0];
      return latestRecord?.formData || null;
    }
    
    // Otherwise return the first record
    return createPatientRecords[0]?.formData || null;
  } catch (error) {
    console.error('❌ Error getting form data:', error.message);
    return null;
  }
}

/**
 * Get all form data records for comparison
 */
async function getAllFormData(sessionToken) {
  try {
    const url = `${API_BASE_URL}/api/form-data`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-session-token': sessionToken
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API Error: ${errorData.error || response.statusText}`);
    }

    const result = await response.json();
    return result.data?.filter(item => item.formType === FORM_TYPE) || [];
  } catch (error) {
    console.error('❌ Error getting all form data:', error.message);
    return [];
  }
}

/**
 * Generate initial CREATE_PATIENT payload
 */
function generateInitialCreatePatientData(user) {
  const firstName = user.name ? user.name.split(' ')[0] : 'John';
  const lastName = user.name ? user.name.split(' ').slice(1).join(' ') || 'Doe' : 'Doe';
  
  return {
    first_name: firstName,
    last_name: lastName,
    email: user.email,
    phone_number: user.patient?.phoneNumber || "+1555123456",
    dietitian_id: "{{dietitianId}}",
    skipped_email: false,
    dont_send_welcome: true
  };
}

/**
 * Generate updated CREATE_PATIENT payload with new and modified fields
 */
function generateUpdatedCreatePatientData(existingData, user) {
  // Add new fields
  const newFields = {
    emergency_contact_name: "Jane Emergency",
    emergency_contact_phone: "+1555987654",
    preferred_language: "English",
    timezone: "America/New_York",
    marketing_consent: true
  };

  // Modify existing fields
  const modifiedFields = {
    phone_number: "+1555999888", // Changed phone number
    first_name: existingData.first_name + " Updated", // Modified first name
    last_name: existingData.last_name + " Modified", // Modified last name
    dont_send_welcome: false, // Changed boolean value
    skipped_email: true // Changed boolean value
  };

  // Combine existing data with new and modified fields
  return {
    ...existingData,
    ...modifiedFields,
    ...newFields
  };
}

/**
 * Main function to demonstrate create and update operations
 */
async function runUpdatePatientScript() {
  console.log('🚀 Starting Update Patient Script...\n');
  
  try {
    // Get one user
    const user = await getOneUser();
    
    if (!user) {
      console.log('❌ No user available for testing');
      return;
    }

    // Generate session token
    const sessionToken = uuidv4();
    console.log(`📋 Using session token: ${sessionToken}\n`);

    // Step 1: Save initial create_patient data
    console.log('📝 Step 1: Saving initial CREATE_PATIENT data...');
    const initialData = generateInitialCreatePatientData(user);
    
    console.log('📄 Initial data:');
    console.log(JSON.stringify(initialData, null, 2));
    
    await submitFormData(sessionToken, initialData);
    console.log('✅ Initial CREATE_PATIENT data saved successfully\n');

    // Small delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Step 2: Get current data and show it
    console.log('🔍 Step 2: Retrieving current data...');
    const currentData = await getFormData(sessionToken);
    
    if (!currentData) {
      console.log('❌ Could not retrieve current data');
      return;
    }
    
    console.log('📄 Current data from API:');
    console.log(JSON.stringify(currentData, null, 2));
    console.log('');

    // Step 3: Update data (add new fields and modify existing ones)
    console.log('🔄 Step 3: Updating data with new and modified fields...');
    const updatedData = generateUpdatedCreatePatientData(currentData, user);
    
    console.log('📄 Updated data (with new and modified fields):');
    console.log(JSON.stringify(updatedData, null, 2));
    
    await submitFormData(sessionToken, updatedData, 'PUT');
    console.log('✅ CREATE_PATIENT data updated successfully\n');

    // Small delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Step 4: Get all records and show comparison
    console.log('🔍 Step 4: Retrieving all records for comparison...');
    const allRecords = await getAllFormData(sessionToken);
    const finalData = await getFormData(sessionToken, true); // Get latest record
    
    console.log(`📊 FOUND ${allRecords.length} RECORDS:\n`);
    
    allRecords.forEach((record, index) => {
      console.log(`📄 Record ${index + 1} (ID: ${record.id}, Created: ${record.createdAt}):`);
      console.log(JSON.stringify(record.formData, null, 2));
      console.log('');
    });
    
    console.log('📊 COMPARISON:\n');
    
    console.log('🔵 INITIAL DATA (First Record):');
    console.log(JSON.stringify(initialData, null, 2));
    console.log('');
    
    console.log('🟢 FINAL DATA (Latest Record):');
    console.log(JSON.stringify(finalData, null, 2));
    console.log('');

    // Show what changed
    console.log('📈 CHANGES SUMMARY:');
    console.log('   🆕 NEW FIELDS ADDED:');
    const newFields = ['emergency_contact_name', 'emergency_contact_phone', 'preferred_language', 'timezone', 'marketing_consent'];
    newFields.forEach(field => {
      if (finalData && finalData[field] !== undefined) {
        console.log(`      • ${field}: ${finalData[field]}`);
      }
    });
    console.log('');
    console.log('   🔄 MODIFIED FIELDS:');
    if (finalData) {
      console.log(`      • phone_number: "${initialData.phone_number}" → "${finalData.phone_number}"`);
      console.log(`      • first_name: "${initialData.first_name}" → "${finalData.first_name}"`);
      console.log(`      • last_name: "${initialData.last_name}" → "${finalData.last_name}"`);
      console.log(`      • dont_send_welcome: ${initialData.dont_send_welcome} → ${finalData.dont_send_welcome}`);
      console.log(`      • skipped_email: ${initialData.skipped_email} → ${finalData.skipped_email}`);
    }
    console.log('');
    
    console.log('💡 API BEHAVIOR ANALYSIS:');
    console.log(`   • POST request created record with ID ${allRecords[0]?.id}`);
    console.log(`   • PUT request created NEW record with ID ${allRecords[1]?.id}`);
    console.log('   • API creates separate records instead of updating existing ones');
    console.log('   • This allows for version history of form data');
    console.log('');

    console.log('🎉 Update Patient Script completed successfully!');
    console.log(`💡 Session token for manual testing: ${sessionToken}`);

  } catch (error) {
    console.error('💥 Script failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script if called directly
if (require.main === module) {
  runUpdatePatientScript()
    .then(() => {
      console.log('\n✅ Script completed successfully');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n❌ Script failed:', error);
      process.exit(1);
    });
}

module.exports = {
  runUpdatePatientScript,
  generateInitialCreatePatientData,
  generateUpdatedCreatePatientData
}; 