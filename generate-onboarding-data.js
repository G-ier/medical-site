const { v4: uuidv4 } = require('uuid');

/**
 * Comprehensive Onboarding Data Generator
 * Generates realistic random answers for all onboarding questions
 */

// Helper function to get random element from array
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Helper function to get random elements (for checkboxes)
function getRandomElements(array, min = 1, max = 3) {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, array.length));
}

// Helper function to generate random number in range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper function to generate random date
function getRandomDate(startYear = 1950, endYear = 2005) {
  const start = new Date(startYear, 0, 1);
  const end = new Date(endYear, 11, 31);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

/**
 * Generate complete onboarding data with realistic random answers
 */
function generateOnboardingData() {
  const sessionToken = uuidv4();
  
  // Names pool
  const firstNames = ['John', 'Jane', 'Michael', 'Sarah', 'David', 'Emily', 'Robert', 'Jessica', 'William', 'Ashley', 'James', 'Amanda', 'Christopher', 'Stephanie', 'Daniel', 'Melissa'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas'];
  
  // Generate basic info
  const firstName = getRandomElement(firstNames);
  const lastName = getRandomElement(lastNames);
  const birthDate = getRandomDate(1970, 2000);
  
  return {
    sessionToken,
    steps: [
      // Basic Information
      {
        stepId: 'name-introduction',
        formType: 'ohl_initial_intake',
        data: {
          firstName: firstName
        }
      },
      {
        stepId: 'last-name-introduction', 
        formType: 'ohl_initial_intake',
        data: {
          lastName: lastName
        }
      },
      {
        stepId: 'personal-greeting',
        formType: 'ohl_initial_intake', 
        data: {
          greeting: `Hello ${firstName}!`
        }
      },
      
      // Demographics
      {
        stepId: 'location-verification',
        formType: 'ohl_initial_intake',
        data: {
          state: getRandomElement(['CA', 'NY', 'TX', 'FL', 'IL', 'PA', 'OH', 'GA', 'NC', 'MI']),
          zipCode: getRandomNumber(10000, 99999).toString()
        }
      },
      {
        stepId: 'location-success-age',
        formType: 'ohl_initial_intake',
        data: {
          dateOfBirth: birthDate.toISOString().split('T')[0],
          age: new Date().getFullYear() - birthDate.getFullYear()
        }
      },
      {
        stepId: 'sex-assignment',
        formType: 'ohl_initial_intake',
        data: {
          'sex-assignment': getRandomElement(['male', 'female'])
        }
      },
      {
        stepId: 'gender-identity-question-1',
        formType: 'ohl_initial_intake',
        data: {
          'gender-identity-question-1': getRandomElement(['man', 'woman', 'non-binary', 'prefer-not-to-say'])
        }
      },
      {
        stepId: 'gender-identity-question-2',
        formType: 'ohl_initial_intake',
        data: {
          'gender-identity-question-2': getRandomElement(['yes', 'no'])
        }
      },
      {
        stepId: 'ethnicity-selection',
        formType: 'ohl_initial_intake',
        data: {
          'ethnicity-selection': getRandomElements([
            'white',
            'black-or-african-american', 
            'asian',
            'hispanic-or-latino',
            'native-american',
            'pacific-islander',
            'other',
            'prefer-not-to-say'
          ], 1, 2)
        }
      },
      
      // Physical Measurements
      {
        stepId: 'height-question',
        formType: 'ohl_initial_intake',
        data: {
          height: {
            feet: getRandomNumber(4, 6),
            inches: getRandomNumber(0, 11)
          },
          weight: getRandomNumber(120, 250)
        }
      },
      
      // Health Goals & Conditions
      {
        stepId: 'health-goals',
        formType: 'ohl_initial_intake',
        data: {
          'health-goals': getRandomElements([
            'persistent-or-excessive-worry',
            'depressed-mood-or-loss-of-interest-in-activities',
            'panic-attacks',
            'insomnia',
            'stress-or-burnout',
            'other-mental-health-condition',
            'not-sure'
          ], 1, 3)
        }
      },
      {
        stepId: 'medical-conditions',
        formType: 'ohl_initial_intake',
        data: {
          'medical-conditions': getRandomElements([
            'diabetes',
            'high-blood-pressure',
            'heart-disease',
            'asthma',
            'arthritis',
            'depression',
            'anxiety',
            'none'
          ], 0, 2)
        }
      },
      {
        stepId: 'allergies',
        formType: 'ohl_initial_intake',
        data: {
          'allergies': getRandomElements([
            'penicillin',
            'sulfa',
            'aspirin',
            'shellfish',
            'nuts',
            'latex',
            'none'
          ], 0, 2)
        }
      },
      {
        stepId: 'current-medications',
        formType: 'ohl_initial_intake',
        data: {
          'current-medications': getRandomElements([
            'birth-control',
            'blood-pressure-medication',
            'antidepressants',
            'pain-relievers',
            'vitamins',
            'none'
          ], 0, 2)
        }
      },
      
      // Mental Health Assessment - GAD-7
      {
        stepId: 'gad7-question-1',
        formType: 'ohl_initial_intake',
        data: {
          'gad7-question-1': getRandomElement(['not-at-all', 'several-days', 'more-than-half', 'nearly-every-day'])
        }
      },
      {
        stepId: 'gad7-question-2',
        formType: 'ohl_initial_intake',
        data: {
          'gad7-question-2': getRandomElement(['not-at-all', 'several-days', 'more-than-half', 'nearly-every-day'])
        }
      },
      {
        stepId: 'gad7-question-3',
        formType: 'ohl_initial_intake',
        data: {
          'gad7-question-3': getRandomElement(['not-at-all', 'several-days', 'more-than-half', 'nearly-every-day'])
        }
      },
      {
        stepId: 'gad7-question-4',
        formType: 'ohl_initial_intake',
        data: {
          'gad7-question-4': getRandomElement(['not-at-all', 'several-days', 'more-than-half', 'nearly-every-day'])
        }
      },
      {
        stepId: 'gad7-question-5',
        formType: 'ohl_initial_intake',
        data: {
          'gad7-question-5': getRandomElement(['not-at-all', 'several-days', 'more-than-half', 'nearly-every-day'])
        }
      },
      {
        stepId: 'gad7-question-6',
        formType: 'ohl_initial_intake',
        data: {
          'gad7-question-6': getRandomElement(['not-at-all', 'several-days', 'more-than-half', 'nearly-every-day'])
        }
      },
      {
        stepId: 'gad7-question-7',
        formType: 'ohl_initial_intake',
        data: {
          'gad7-question-7': getRandomElement(['not-at-all', 'several-days', 'more-than-half', 'nearly-every-day'])
        }
      },
      
      // Mental Health Assessment - PHQ-9
      {
        stepId: 'phq9-question-1',
        formType: 'ohl_initial_intake',
        data: {
          'phq9-question-1': getRandomElement(['not-at-all', 'several-days', 'more-than-half', 'nearly-every-day'])
        }
      },
      {
        stepId: 'phq9-question-2',
        formType: 'ohl_initial_intake',
        data: {
          'phq9-question-2': getRandomElement(['not-at-all', 'several-days', 'more-than-half', 'nearly-every-day'])
        }
      },
      
      // Lifestyle & Habits
      {
        stepId: 'alcohol-consumption',
        formType: 'ohl_initial_intake',
        data: {
          'alcohol-consumption': getRandomElement(['never', 'rarely', 'occasionally', 'regularly', 'daily'])
        }
      },
      {
        stepId: 'nicotine-use',
        formType: 'ohl_initial_intake',
        data: {
          'nicotine-use': getRandomElement(['never', 'former-smoker', 'current-smoker', 'vaping', 'other-tobacco'])
        }
      },
      {
        stepId: 'sleep-assessment',
        formType: 'ohl_initial_intake',
        data: {
          'sleep-hours': getRandomNumber(4, 10),
          'sleep-quality': getRandomElement(['excellent', 'good', 'fair', 'poor'])
        }
      },
      {
        stepId: 'mood-assessment',
        formType: 'ohl_initial_intake',
        data: {
          'mood-assessment': getRandomElement(['excellent', 'good', 'fair', 'poor', 'very-poor'])
        }
      },
      {
        stepId: 'heart-rate-assessment',
        formType: 'ohl_initial_intake',
        data: {
          'resting-heart-rate': getRandomNumber(60, 100)
        }
      },
      
      // Safety & Crisis Questions
      {
        stepId: 'crisis-question-1',
        formType: 'ohl_initial_intake',
        data: {
          'crisis-question-1': getRandomElement(['yes', 'no'])
        }
      },
      {
        stepId: 'current-harm-question',
        formType: 'ohl_initial_intake',
        data: {
          'current-harm-question': getRandomElement(['yes', 'no'])
        }
      },
      {
        stepId: 'violence-question',
        formType: 'ohl_initial_intake',
        data: {
          'violence-question': getRandomElement(['yes', 'no'])
        }
      },
      
      // Medical History
      {
        stepId: 'mental-health-diagnosis',
        formType: 'ohl_initial_intake',
        data: {
          'mental-health-diagnosis': getRandomElements([
            'depression',
            'anxiety',
            'bipolar-disorder',
            'ptsd',
            'adhd',
            'eating-disorder',
            'none'
          ], 0, 2)
        }
      },
      {
        stepId: 'mental-health-age-history',
        formType: 'ohl_initial_intake',
        data: {
          'first-symptoms-age': getRandomNumber(12, 25),
          'first-treatment-age': getRandomNumber(16, 30)
        }
      },
      {
        stepId: 'previous-mental-health-medications',
        formType: 'ohl_initial_intake',
        data: {
          'previous-mental-health-medications': getRandomElements([
            'ssri',
            'snri', 
            'benzodiazepines',
            'antipsychotics',
            'mood-stabilizers',
            'none'
          ], 0, 2)
        }
      },
      {
        stepId: 'medication-experience',
        formType: 'ohl_initial_intake',
        data: {
          'medication-experience': getRandomElement(['very-positive', 'positive', 'neutral', 'negative', 'very-negative', 'no-experience'])
        }
      },
      
      // Specialized Questions
      {
        stepId: 'pregnancy-screening',
        formType: 'ohl_initial_intake',
        data: {
          'pregnancy-screening': getRandomElement(['yes', 'no', 'not-applicable'])
        }
      },
      {
        stepId: 'breastfeeding-question',
        formType: 'ohl_initial_intake',
        data: {
          'breastfeeding-question': getRandomElement(['yes', 'no', 'not-applicable'])
        }
      },
      {
        stepId: 'eating-disorder-symptoms',
        formType: 'ohl_initial_intake',
        data: {
          'eating-disorder-symptoms': getRandomElements([
            'restriction',
            'binging',
            'purging',
            'excessive-exercise',
            'body-image-issues',
            'none'
          ], 0, 2)
        }
      },
      {
        stepId: 'eating-disorder-diagnoses',
        formType: 'ohl_initial_intake',
        data: {
          'eating-disorder-diagnoses': getRandomElements([
            'anorexia',
            'bulimia',
            'binge-eating-disorder',
            'other',
            'none'
          ], 0, 1)
        }
      },
      {
        stepId: 'episodes-history',
        formType: 'ohl_initial_intake',
        data: {
          'manic-episodes': getRandomElement(['yes', 'no']),
          'hypomanic-episodes': getRandomElement(['yes', 'no'])
        }
      },
      
      // Treatment & Support
      {
        stepId: 'current-feelings',
        formType: 'ohl_initial_intake',
        data: {
          'current-feelings': getRandomElements([
            'anxious',
            'depressed',
            'overwhelmed',
            'hopeful',
            'motivated',
            'uncertain'
          ], 1, 3)
        }
      },
      
      // Shipping & Contact
      {
        stepId: 'shipping-details',
        formType: 'ohl_initial_intake',
        data: {
          address: {
            street: `${getRandomNumber(100, 9999)} ${getRandomElement(['Main', 'Oak', 'Pine', 'Maple', 'Cedar'])} ${getRandomElement(['St', 'Ave', 'Dr', 'Ln'])}`,
            city: getRandomElement(['Los Angeles', 'New York', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego']),
            state: getRandomElement(['CA', 'NY', 'TX', 'FL', 'IL', 'PA', 'OH', 'GA']),
            zipCode: getRandomNumber(10000, 99999).toString()
          },
          phone: `${getRandomNumber(200, 999)}-${getRandomNumber(200, 999)}-${getRandomNumber(1000, 9999)}`
        }
      },
      {
        stepId: 'address-validation',
        formType: 'ohl_initial_intake',
        data: {
          'address-confirmed': true
        }
      },
      
      // Identity Verification
      {
        stepId: 'ssn-identity-verification',
        formType: 'ohl_initial_intake',
        data: {
          'ssn-last-four': getRandomNumber(1000, 9999).toString()
        }
      }
    ]
  };
}

/**
 * Save form data to API
 */
async function saveFormData(sessionToken, stepId, formType, data) {
  try {
    const response = await fetch('http://localhost:3004/api/form-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-session-token': sessionToken
      },
      body: JSON.stringify({
        formType,
        stepId,
        formData: data,
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
    console.error(`❌ Error saving ${stepId}:`, error.message);
    throw error;
  }
}

/**
 * Main function to generate and save complete onboarding data
 */
async function generateAndSaveOnboardingData() {
  console.log('🎯 Starting onboarding data generation...\n');
  
  const onboardingData = generateOnboardingData();
  const { sessionToken, steps } = onboardingData;
  
  console.log(`📋 Generated data for session: ${sessionToken}`);
  console.log(`📊 Total steps: ${steps.length}\n`);
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const step of steps) {
    try {
      console.log(`💾 Saving step: ${step.stepId}...`);
      
      const result = await saveFormData(
        sessionToken,
        step.stepId,
        step.formType,
        step.data
      );
      
      console.log(`✅ Saved: ${step.stepId}`);
      successCount++;
      
      // Small delay to avoid overwhelming the API
      await new Promise(resolve => setTimeout(resolve, 100));
      
    } catch (error) {
      console.error(`❌ Failed to save ${step.stepId}:`, error.message);
      errorCount++;
    }
  }
  
  console.log('\n📈 Generation Summary:');
  console.log(`   Session Token: ${sessionToken}`);
  console.log(`   ✅ Successfully saved: ${successCount} steps`);
  console.log(`   ❌ Failed to save: ${errorCount} steps`);
  console.log(`   📊 Success rate: ${Math.round((successCount / steps.length) * 100)}%`);
  
  if (successCount > 0) {
    console.log('\n🎉 Onboarding data generation completed!');
    console.log(`🔍 You can view the data in Prisma Studio or test with session: ${sessionToken}`);
  }
  
  return {
    sessionToken,
    successCount,
    errorCount,
    totalSteps: steps.length
  };
}

// Run the generator if called directly
if (require.main === module) {
  generateAndSaveOnboardingData()
    .then((result) => {
      console.log('\n✅ Script completed successfully');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n❌ Script failed:', error);
      process.exit(1);
    });
}

module.exports = {
  generateOnboardingData,
  generateAndSaveOnboardingData,
  saveFormData
}; 