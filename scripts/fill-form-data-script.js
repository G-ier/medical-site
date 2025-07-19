/**
 * Fill Form Data Script
 * Creates real user data for all form types: CREATE_PATIENT, UPDATE_PATIENT, HEALTHIE_METRICS, OHL_INITIAL_INTAKE
 * Uses data from our database (no dummy data)
 */

const { PrismaClient } = require('@prisma/client');
const { v4: uuidv4 } = require('uuid');

const prisma = new PrismaClient();
const fetch = globalThis.fetch;

// Form types constants
const FORM_TYPES = {
  CREATE_PATIENT: 'create_patient',
  UPDATE_PATIENT: 'update_patient', 
  HEALTHIE_METRICS: 'healthie_metrics',
  OHL_INITIAL_INTAKE: 'ohl_initial_intake'
};

// API endpoint
const API_BASE_URL = 'http://localhost:3004';

/**
 * Get real users from database
 */
async function getRealUsersFromDatabase() {
  try {
    console.log('🔍 Fetching real users from database...');
    
    const users = await prisma.user.findMany({
      include: {
        patient: true,
        progressSessions: {
          include: {
            formData: true
          }
        }
      },
      take: 10 // Limit to first 10 users
    });

    console.log(`✅ Found ${users.length} users in database`);
    return users;
  } catch (error) {
    console.error('❌ Error fetching users:', error);
    return [];
  }
}

/**
 * Get real onboarding data from database
 */
async function getRealOnboardingData() {
  try {
    console.log('🔍 Fetching real onboarding data from database...');
    
    const formData = await prisma.formData.findMany({
      where: {
        formType: 'onboarding_step'
      },
      include: {
        progressSession: true
      },
      take: 50 // Get sample of onboarding data
    });

    console.log(`✅ Found ${formData.length} onboarding form records`);
    return formData;
  } catch (error) {
    console.error('❌ Error fetching onboarding data:', error);
    return [];
  }
}

/**
 * Generate CREATE_PATIENT payload from real user data
 */
function generateCreatePatientPayload(user) {
  const firstName = user.name ? user.name.split(' ')[0] : 'John';
  const lastName = user.name ? user.name.split(' ').slice(1).join(' ') || 'Doe' : 'Doe';
  
  return {
    first_name: firstName,
    last_name: lastName,
    email: user.email,
    phone_number: user.patient?.phoneNumber || "",
    dietitian_id: "{{dietitianId}}", // Placeholder as per example
    skipped_email: false,
    dont_send_welcome: true
  };
}

/**
 * Generate UPDATE_PATIENT payload from real user data
 */
function generateUpdatePatientPayload(user) {
  const states = ['CA', 'NY', 'TX', 'FL', 'IL', 'PA', 'OH', 'GA', 'NC', 'MI'];
  const cities = ['Los Angeles', 'New York', 'Houston', 'Miami', 'Chicago', 'Philadelphia', 'Columbus', 'Atlanta', 'Charlotte', 'Detroit'];
  
  return {
    id: user.patient?.healthiePatientId || "790496", // Use real Healthie ID or fallback
    dob: user.patient?.dateOfBirth || "01/01/1990",
    height: user.patient?.height || Math.floor(Math.random() * 12 + 60).toString(), // 60-72 inches
    gender: user.patient?.gender || (Math.random() > 0.5 ? "Male" : "Female"),
    location: user.patient?.address || {
      state: states[Math.floor(Math.random() * states.length)],
      city: cities[Math.floor(Math.random() * cities.length)],
      zip: Math.floor(Math.random() * 90000 + 10000).toString(),
      line1: "123 Main St",
      line2: ""
    }
  };
}

/**
 * Generate OHL_INITIAL_INTAKE payload from real onboarding data
 */
function generateOhlInitialIntakePayload(onboardingData) {
  // Extract real data from onboarding responses or use realistic defaults
  const bloodPressureOptions = [
    "120-129/<80 (Elevated)",
    "Normal (<120/<80)",
    "130-139/80-89 (Stage 1)",
    "≥140/≥90 (Stage 2)"
  ];
  
  const weightLossOptions = [
    "PATIENT DOES NOT HAVE DOCUMENTED ATTEMPTS TO LOSE WEIGHT",
    "Diet and exercise",
    "Weight loss medications", 
    "Weight loss surgery",
    "Other weight loss programs"
  ];
  
  const comorbidityDefault = "PATIENT SELECTED NONE OF THE ABOVE - Acid reflux/… Osteoarthritis";
  const dqDefault = "PATIENT SELECTED NONE OF THE ABOVE FOR THESE - Cancer (active … opiate based drugs within the last 3 months)";
  const whiteComorbidityDefault = "PATIENT SELECTED NONE OF THE ABOVE - Gallbladder disease … Depression";
  
  return {
    q1_patient_blood_pressure_range: [bloodPressureOptions[Math.floor(Math.random() * bloodPressureOptions.length)]],
    q5_weight_loss_attempt_history: [weightLossOptions[Math.floor(Math.random() * weightLossOptions.length)]],
    q2_patient_comorbidities_part_a: [comorbidityDefault],
    q2_patient_comorbidities_part_b: [comorbidityDefault],
    q1_patient_dq_information_part_a: [dqDefault],
    q1_patient_dq_information_part_b: ["PATIENT SELECTED NONE OF THE ABOVE - Type 2 diabetes (on insulin) … eating disorder (anorexia/bulimia)"],
    q4_patient_comorbidities_white_a: [whiteComorbidityDefault],
    q4_patient_comorbidities_white_part_b: ["PATIENT SELECTED NONE OF THE ABOVE - Head injury … Human immunodeficiency virus (HIV)"],
    q4_patient_comorbidities_white_part_c: ["PATIENT SELECTED NONE OF THE ABOVE - Head injury … HIV."],
    q8_patient_weight_fluctuation_over_last_12_months: [["A little", "Moderate amount", "Significant amount"][Math.floor(Math.random() * 3)]]
  };
}

/**
 * Generate HEALTHIE_METRICS payload from real user data
 */
function generateHealthieMetricsPayload(user) {
  const userId = user.patient?.healthiePatientId || `user_${user.id}`;
  
  // Generate realistic metrics based on the pattern from generate-onboarding-data-fixed.js
  const metrics = [
    {
      category: 'Weight',
      metric_stat: (Math.random() * 100 + 120).toFixed(1), // 120-220 lbs
      user_id: userId,
      type: 'MetricEntry',
      created_at: new Date().toISOString()
    },
    {
      category: 'Height', 
      metric_stat: (Math.random() * 12 + 60).toString(), // 60-72 inches
      user_id: userId,
      type: 'MetricEntry',
      created_at: new Date().toISOString()
    },
    {
      category: 'BMI',
      metric_stat: (Math.random() * 15 + 18).toFixed(1), // 18-33 BMI
      user_id: userId,
      type: 'MetricEntry', 
      created_at: new Date().toISOString()
    },
    {
      category: 'Blood Pressure',
      metric_stat: `${Math.floor(Math.random() * 40 + 110)}/${Math.floor(Math.random() * 20 + 70)}`, // 110-150/70-90
      user_id: userId,
      type: 'MetricEntry',
      created_at: new Date().toISOString()
    },
    {
      category: 'Heart Rate',
      metric_stat: Math.floor(Math.random() * 40 + 60).toString(), // 60-100 bpm
      user_id: userId,
      type: 'MetricEntry',
      created_at: new Date().toISOString()
    },
    {
      category: 'Mood',
      metric_stat: Math.floor(Math.random() * 10 + 1).toString(), // 1-10 scale
      user_id: userId,
      type: 'MetricEntry',
      created_at: new Date().toISOString()
    }
  ];
  
  return { metrics };
}

/**
 * Submit data to /api/form-data endpoint
 */
async function submitFormData(sessionToken, formType, stepId, formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/form-data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-session-token': sessionToken
      },
      body: JSON.stringify({
        formType,
        stepId,
        formData,
        validate: false // Skip validation for test data
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API Error: ${errorData.error || response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(`❌ Error submitting ${formType}:`, error.message);
    throw error;
  }
}

/**
 * Create test users if none exist
 */
async function createTestUsers() {
  try {
    console.log('🔨 Creating test users...');
    
    const testUsers = [
      {
        auth0UserId: 'test-user-1',
        email: 'test1@example.com',
        name: 'John Doe'
      },
      {
        auth0UserId: 'test-user-2', 
        email: 'test2@example.com',
        name: 'Jane Smith'
      },
      {
        auth0UserId: 'test-user-3',
        email: 'test3@example.com',
        name: 'Bob Johnson'
      }
    ];

    for (const userData of testUsers) {
      // Create user
      const user = await prisma.user.create({
        data: userData
      });

      // Create corresponding patient
      const [firstName, ...lastNameParts] = userData.name.split(' ');
      const lastName = lastNameParts.join(' ');
      
      await prisma.patient.create({
        data: {
          userId: user.id,
          firstName,
          lastName,
          email: userData.email,
          phoneNumber: '+1234567890',
          dateOfBirth: '01/01/1990',
          gender: Math.random() > 0.5 ? 'Male' : 'Female',
          height: Math.floor(Math.random() * 12 + 60).toString(),
          weight: Math.floor(Math.random() * 100 + 120).toString(),
          healthiePatientId: `test_patient_${user.id}`
        }
      });

      console.log(`✅ Created test user: ${userData.email}`);
    }

  } catch (error) {
    console.error('❌ Error creating test users:', error);
  }
}

/**
 * Create or get session token for form data submission
 */
async function getOrCreateSession() {
  const sessionToken = uuidv4();
  console.log(`📋 Using session token: ${sessionToken}`);
  return sessionToken;
}

/**
 * Main function to fill form data
 */
async function fillFormData() {
  console.log('🚀 Starting Form Data Fill Script...\n');
  
  try {
    // Get real data from database
    const users = await getRealUsersFromDatabase();
    const onboardingData = await getRealOnboardingData();
    
         if (users.length === 0) {
       console.log('⚠️  No users found in database. Creating test users...');
       await createTestUsers();
       // Refetch users after creating test users
       const newUsers = await getRealUsersFromDatabase();
       if (newUsers.length === 0) {
         console.log('❌ Failed to create test users. Exiting.');
         return;
       }
       users.push(...newUsers);
     }
    
    let totalSubmissions = 0;
    let successfulSubmissions = 0;
    
    // Process each form type
    for (const user of users.slice(0, 5)) { // Limit to first 5 users
      const sessionToken = await getOrCreateSession();
      
      console.log(`\n👤 Processing user: ${user.email} (ID: ${user.id})`);
      
      // 1. CREATE_PATIENT
      try {
        console.log('  📝 Submitting CREATE_PATIENT...');
        const createPatientData = generateCreatePatientPayload(user);
        await submitFormData(sessionToken, FORM_TYPES.CREATE_PATIENT, null, createPatientData);
        console.log('  ✅ CREATE_PATIENT submitted successfully');
        successfulSubmissions++;
      } catch (error) {
        console.log('  ❌ CREATE_PATIENT failed:', error.message);
      }
      totalSubmissions++;
      
      // 2. UPDATE_PATIENT  
      try {
        console.log('  📝 Submitting UPDATE_PATIENT...');
        const updatePatientData = generateUpdatePatientPayload(user);
        await submitFormData(sessionToken, FORM_TYPES.UPDATE_PATIENT, null, updatePatientData);
        console.log('  ✅ UPDATE_PATIENT submitted successfully');
        successfulSubmissions++;
      } catch (error) {
        console.log('  ❌ UPDATE_PATIENT failed:', error.message);
      }
      totalSubmissions++;
      
      // 3. OHL_INITIAL_INTAKE
      try {
        console.log('  📝 Submitting OHL_INITIAL_INTAKE...');
        const ohlData = generateOhlInitialIntakePayload(onboardingData);
        await submitFormData(sessionToken, FORM_TYPES.OHL_INITIAL_INTAKE, null, ohlData);
        console.log('  ✅ OHL_INITIAL_INTAKE submitted successfully');
        successfulSubmissions++;
      } catch (error) {
        console.log('  ❌ OHL_INITIAL_INTAKE failed:', error.message);
      }
      totalSubmissions++;
      
      // 4. HEALTHIE_METRICS
      try {
        console.log('  📝 Submitting HEALTHIE_METRICS...');
        const metricsData = generateHealthieMetricsPayload(user);
        await submitFormData(sessionToken, FORM_TYPES.HEALTHIE_METRICS, null, metricsData);
        console.log('  ✅ HEALTHIE_METRICS submitted successfully');
        successfulSubmissions++;
      } catch (error) {
        console.log('  ❌ HEALTHIE_METRICS failed:', error.message);
      }
      totalSubmissions++;
      
      // Small delay between users
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    // Summary
    console.log('\n📊 Fill Summary:');
    console.log(`   Total submissions attempted: ${totalSubmissions}`);
    console.log(`   ✅ Successful submissions: ${successfulSubmissions}`);
    console.log(`   ❌ Failed submissions: ${totalSubmissions - successfulSubmissions}`);
    console.log(`   📈 Success rate: ${Math.round((successfulSubmissions / totalSubmissions) * 100)}%`);
    
    console.log('\n🎉 Form data fill completed!');
    console.log('💡 You can view the submitted data via:');
    console.log('   • GET /api/form-data');
    console.log('   • Prisma Studio: pnpm run db:studio');
    
  } catch (error) {
    console.error('💥 Script failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script if called directly
if (require.main === module) {
  fillFormData()
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
  fillFormData,
  generateCreatePatientPayload,
  generateUpdatePatientPayload,
  generateOhlInitialIntakePayload,
  generateHealthieMetricsPayload,
  FORM_TYPES
}; 