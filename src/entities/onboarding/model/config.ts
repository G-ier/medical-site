import { FormType } from '@/shared/types/form-types';
import { OnboardingStep } from './types';

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    id: 'mood-assessment',
    title: 'Before we get started - how are you feeling today?',
    eyebrow: 'Getting started',
    path: '/onboarding/mood-assessment',
    component: 'MoodAssessment',
    order: 1,
    isRequired: true,
    navigationBehavior: 'auto',
    conditions: {
      canSkip: false,
      nextStep: 'name-introduction'
    }
  },
  {
    id: 'name-introduction',
    title: 'Next, let\'s get acquainted-tell us a bit about yourself.',
    eyebrow: 'Getting started',
    path: '/onboarding/name-introduction',
    component: 'NameIntroduction',
    order: 2,
    isRequired: true,
    navigationBehavior: 'manual',
    conditions: {
      canSkip: false,
      nextStep: 'last-name-introduction'
    }
  },
  {
    id: 'last-name-introduction',
    title: 'And what\'s your last name?',
    eyebrow: 'Getting started',
    path: '/onboarding/last-name-introduction',
    component: 'LastNameIntroduction',
    order: 3,
    isRequired: true,
    navigationBehavior: 'manual',
    conditions: {
      canSkip: false,
      nextStep: 'personal-greeting'
    }
  },
  {
    id: 'personal-greeting',
    title: 'Nice to meet you!',
    eyebrow: 'Getting started',
    path: '/onboarding/personal-greeting',
    component: 'PersonalGreetingPage',
    order: 4,
    isRequired: true,
    navigationBehavior: 'auto',
    conditions: {
      canSkip: false,
      nextStep: 'ethnicity-selection'
    }
  },

  {
    id: 'ethnicity-selection',
    title: 'Getting started',
    question: 'How would you describe your ethnicity?',
    eyebrow: 'Getting started',
    path: '/onboarding/ethnicity-selection',
    component: 'SingleChoiceWidget',
    order: 5,
    isRequired: true,
    navigationBehavior: 'manual',
    conditions: {
      canSkip: false,
      nextStep: 'race-selection'
    },
    type: 'single-choice',
    fieldName: 'ethnicity',
    formType: FormType.HEALTHIE_METRICS,
    options: [
      {
        id: 'hispanic-or-latino',
        label: 'Hispanic or Latino',
        value: 'Hispanic or Latino'
      },
      {
        id: 'not-hispanic-or-latino',
        label: 'Not Hispanic or Latino',
        value: 'Not Hispanic or Latino'
      }
    ],
  },
  {
    id: 'race-selection',
    title: 'Getting started',
    question: 'How would you describe your race?',
    eyebrow: 'Getting started',
    path: '/onboarding/race-selection',
    component: 'SingleChoiceWidget',
    order: 6,
    isRequired: true,
    navigationBehavior: 'manual',
    conditions: {
      canSkip: false,
      nextStep: 'sex-assignment'
    },
    type: 'single-choice',
    fieldName: 'race',
    formType: FormType.HEALTHIE_METRICS,
    options: [
      {
        id: 'american-indian-or-alaska-native',
        label: 'American Indian or Alaska Native',
        value: 'American Indian or Alaska Native'
      },
      {
        id: 'asian',
        label: 'Asian',
        value: 'Asian'
      },
      {
        id: 'black-or-african-american',
        label: 'Black or African American',
        value: 'Black or African American'
      },
      {
        id: 'native-hawaiian-or-other-pacific-islander',
        label: 'Native Hawaiian or Other Pacific Islander',
        value: 'Native Hawaiian or Other Pacific Islander'
      },
      {
        id: 'other',
        label: 'Other',
        value: 'Other'
      },
      {
        id: 'prefer-not-to-say',
        label: 'Prefer not to say',
        value: 'Prefer not to say'
      }
    ],
  },
  {
    id: 'sex-assignment',
    title: 'What was your sex assigned at birth?',
    eyebrow: 'Getting started',
    path: '/onboarding/sex-assignment',
    component: 'SingleChoiceWidget',
    order: 6,
    isRequired: true,
    navigationBehavior: 'auto',
    type: 'single-choice',
    fieldName: 'gender',
    formType: FormType.HEALTHIE_METRICS,
    options: [
      {
        id: 'male',
        label: 'Male',
        value: 'Male'
      },
      {
        id: 'female',
        label: 'Female',
        value: 'Female'
      }
    ],
    conditions: {
      canSkip: false,
      nextStep: 'location-verification'
    }
  },
  {
    id: 'location-verification',
    title: 'Treatment on your terms',
    path: '/onboarding/location-verification',
    component: 'LocationVerificationPage',
    order: 7,
    isRequired: true,
    navigationBehavior: 'manual',
    conditions: {
      canSkip: false,
      nextStep: 'location-success-age'
    }
  },
  {
    id: 'location-success-age',
    title: 'We\'re all good in Delaware',
    path: '/onboarding/location-success-age',
    component: 'LocationSuccessAgePage',
    order: 8,
    isRequired: true,
    navigationBehavior: 'manual',
    conditions: {
      canSkip: false,
      nextStep: 'height-question'
    }
  },


  {
    id: 'height-question',
    title: 'What is your height?',
    path: '/onboarding/height-question',
    component: 'HeightQuestionPage',
    order: 10,
    isRequired: true,
    navigationBehavior: 'manual',
    conditions: {
      canSkip: false,
      nextStep: 'goal-weight-question'
    },
  },

  {
    id: 'goal-weight-question',
    title: 'Rejevu',
    question: 'What is your goal weight?',
    path: '/onboarding/goal-weight-question',
    component: 'GoalWeightQuestionPage',
    order: 11,
    isRequired: true,
    navigationBehavior: 'manual',
    type: 'input',
    fieldName: 'goalWeight',
    formType: FormType.HEALTHIE_METRICS,
    conditions: {
      canSkip: false,
      nextStep: 'bmi-display'
    },
  },
  {
    id: 'bmi-display',
    title: 'BMI Display + Comprehensive Health Assessment',
    eyebrow: 'The bigger picture',
    path: '/onboarding/bmi-display',
    component: 'BMIDisplayPage',
    order: 12,
    isRequired: true,
    navigationBehavior: 'manual',
    conditions: {
      canSkip: false,
      nextStep: 'next-steps-preview'
    }
  },
  {
    id: 'next-steps-preview',
    title: 'Up next, complete your health history',
    eyebrow: 'Weight loss profile',
    path: '/onboarding/next-steps-preview',
    component: 'NextStepsPreviewPage',
    order: 13,
    isRequired: true,
    navigationBehavior: 'auto',
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions'
    }
  },
  {
    id: 'medical-history-questions',
    title: 'Medical Profile',
    question: 'Do any of the following apply to you?',
    description: 'Please select all that apply.',
    options: [

      {
        id: 'currently-or-possibly-pregnant',
        label: 'Currently or possibly pregnant, or actively trying to become pregnant',
        value: 'Currently or possibly pregnant, or actively trying to become pregnant'
      },
      {
        id: 'breastfeeding-or-bottle-feeding-with-breastmilk',
        label: 'Breastfeeding or bottle-feeding with breastmilk',
        value: 'Breastfeeding or bottle-feeding with breastmilk'
      },
      {
        id: 'end-stage-kidney-disease',
        label: 'End-stage kidney disease (on or about to be on dialysis)',
        value: 'End-stage kidney disease (on or about to be on dialysis)'
      },
      {
        id: 'end-stage-liver-disease',
        label: 'End-stage liver disease (cirrhosis)',
        value: 'End-stage liver disease (cirrhosis)'
      },
      {
        id: 'current-or-prior-eating-disorder',
        label: 'Current or prior eating disorder',
        value: 'Current or prior eating disorder'
      },
      {
        id: 'current-suicidal-thoughts-and-or-prior-suicidal-attempt',
        label: 'Current suicidal thoughts and/or prior suicidal attempt',
        value: 'Current suicidal thoughts and/or prior suicidal attempt'
      },
      {
        id: 'cancer',
        label: 'Cancer (active diagnosis, active treatment, or in remission or cancer-free for less than 5 continuous years; does not apply to non-melanoma skin cancer that was considered cured via simple excision alone)',
        value: 'Cancer (active diagnosis, active treatment, or in remission or cancer-free for less than 5 continuous years; does not apply to non-melanoma skin cancer that was considered cured via simple excision alone)'
      },
      {
        id: 'history-of-organ-transplant-on-anti-rejection-medication',
        label: 'History of organ transplant on anti-rejection medication',
        value: 'History of organ transplant on anti-rejection medication'
      },
      {
        id: 'severe-gastrointestinal-condition',
        label: 'Severe gastrointestinal condition (gastroparesis, blockage, etc)',
        value: 'Severe gastrointestinal condition (gastroparesis, blockage, etc)'
      },
      {
        id: 'currently-untreated-or-unmonitored-opioid-alcohol-or-substance-use-disorder-dependence',
        label: 'Currently untreated/unmonitored opioid, alcohol, or substance use disorder/dependence',
        value: 'Currently untreated/unmonitored opioid, alcohol, or substance use disorder/dependence'
      },
      {
        id: 'none-of-the-above',
        label: 'None of the above',
        value: 'PATIENT SELECTED NONE OF THE ABOVE'
      },
    ],
    path: '/onboarding/medical-history-questions',
    component: 'MedicalHistoryQuestionsPage',
    order: 14,
    isRequired: true,
    navigationBehavior: 'auto',
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions-2',
      alternativeNextSteps: [
        {
          condition: (data: any) => data.gender === "Female" && data.selectedValues.includes("PATIENT SELECTED NONE OF THE ABOVE"),
          nextStep: 'medical-history-questions-alert'
        }
      ]
    },
    type: 'multiple-choice',
    fieldName: 'q1_medical_history_questions',
    formType: FormType.OHL_INITIAL_INTAKE,
  },
  {
    id: 'medical-history-questions-alert',
    title: 'Medical Profile',
    description: 'Please note that we strongly recommend that you use an effective method of contraception during treatment with a GLP-1 medication and for at least 2 months thereafter. For those taking Zepbound or Mounjaro (tirzepatide), we recommend switching to a non-oral contraceptive method or adding a barrier method of contraception for four weeks after initiation and for four weeks after each dose escalation',
    path: '/onboarding/medical-history-questions-alert',
    component: 'AlertWidget',
    order: 14,
    type: 'alert',
    isRequired: true,
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions-2'
    },
  },
  {
    id: 'medical-history-questions-2',
    title: 'Medical Profile',
    question: 'Do any of these health conditions or situations apply to you?',
    description: 'Please select all that apply.',
    options: [
      {
        id: 'type-2-diabetes-on-insulin',
        label: 'Type 2 diabetes (on insulin)',
        value: 'Type 2 diabetes (on insulin)'
      },
      {
        id: 'type-1-diabetes',
        label: 'Type 1 diabetes',
        value: 'Type 1 diabetes'
      },
      {
        id: 'diabetic-retinopathy',
        label: 'Diabetic retinopathy (diabetic eye disease), damage to the optic nerve from trauma or reduced blood flow, or blindness',
        value: 'Diabetic retinopathy (diabetic eye disease), damage to the optic nerve from trauma or reduced blood flow, or blindness'
      },
      {
        id: 'use-of-warfarin',
        label: 'Use of the blood thinner warfarin (Coumadin/Jantoven)',
        value: 'Use of the blood thinner warfarin (Coumadin/Jantoven)'
      },
      {
        id: 'history-of-or-current-pancreatitis',
        label: 'History of or current pancreatitis',
        value: 'History of or current pancreatitis'
      },
      {
        id: 'have-given-birth-to-a-child-within-the-last-6-months',
        label: 'Have given birth to a child within the last 6 months',
        value: 'Have given birth to a child within the last 6 months'
      },
      {
        id: 'inflammatory-bowel-disease-or-ibd',
        label: 'Inflammatory bowel disease or IBD (Crohn\'s disease, ulcerative colitis, etc)',
        value: 'Inflammatory bowel disease or IBD (Crohn\'s disease, ulcerative colitis, etc)'
      },
      {
        id: 'personal-or-family-history-of-thyroid-cyst-nodule-thyroid-cancer-medullary-thyroid-carcinoma-or-multiple-endocrine-neoplasia-syndrome-type-2',
        label: 'Personal or family history of thyroid cyst/nodule, thyroid cancer, medullary thyroid carcinoma, or multiple endocrine neoplasia syndrome type 2',
        value: 'Personal or family history of thyroid cyst/nodule, thyroid cancer, medullary thyroid carcinoma, or multiple endocrine neoplasia syndrome type 2'
      },
      {
        id: 'personal-or-family-history-of-mct-or-men2',
        label: 'Personal or family history of MTC or MEN2 is an absolute exclusion',
        value: 'Personal or family history of MTC or MEN2 is an absolute exclusion'
      },
      {
        id: 'gallbladder-disease',
        label: 'Gallbladder disease',
        value: 'Gallbladder disease'
      },
      {
        id: 'seizures',
        label: 'Seizures',
        value: 'Seizures'
      },
      {
        id: 'depression',
        label: 'Depression',
        value: 'Depression'
      },
      {
        id: 'head-injury',
        label: 'Head injury',
        value: 'Head injury'
      },
      {
        id: 'tumor-infection-in-brain-spinal-cord',
        label: 'Tumor/infection in brain/spinal cord',
        value: 'Tumor/infection in brain/spinal cord'
      },
      {
        id: 'low-sodium',
        label: 'Low sodium',
        value: 'Low sodium'
      },
      {
        id: 'qt-prolongation-or-other-heart-rhythm-disorder',
        label: 'QT prolongation or other heart rhythm disorder',
        value: 'QT prolongation or other heart rhythm disorder'
      },
      {
        id: 'hospitalization-within-the-last-1-year',
        label: 'Hospitalization within the last 1 year',
        value: 'Hospitalization within the last 1 year'
      },
      {
        id: 'constipation',
        label: 'Constipation',
        value: 'Constipation'
      },
      {
        id: 'hyperemesis-gravidarum-nausea-vomiting-in-pregnancy',
        label: 'Hyperemesis gravidarum (nausea/vomiting in pregnancy)',
        value: 'Hyperemesis gravidarum (nausea/vomiting in pregnancy)'
      },
      {
        id: 'none-of-the-above',
        label: 'None of the above',
        value: 'PATIENT SELECTED NONE OF THE ABOVE'
      },
    ],
    path: '/onboarding/medical-history-questions-2',
    component: 'MedicalHistoryQuestionsPage',
    order: 15,
    isRequired: true,
    navigationBehavior: 'auto',
    type: 'multiple-choice',
    fieldName: 'q2_medical_history_questions',
    formType: FormType.OHL_INITIAL_INTAKE,
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions-3'
    },
  },

  {
    id: 'medical-history-questions-3',
    title: 'Medical Profile',
    question: 'Do any of the following weight-related medical conditions apply to you?',
    description: 'Please select all that apply.',
    options: [
      {
        id: 'hypertension-high-blood-pressure',
        label: 'Hypertension (high blood pressure)',
        value: 'Hypertension (high blood pressure)'
      },
      {
        id: 'sleep-apnea',
        label: 'Sleep apnea',
        value: 'Sleep apnea'
      },
      {
        id: 'prediabetes',
        label: 'Prediabetes',
        value: 'Prediabetes'
      },
      {
        id: 'type-2-diabetes-not-on-insulin',
        label: 'Type 2 diabetes (not on insulin)',
        value: 'Type 2 diabetes (not on insulin)'
      },
      {
        id: 'high-cholesterol-or-triglycerides',
        label: 'High cholesterol or triglycerides',
        value: 'High cholesterol or triglycerides'
      },
      {
        id: 'acid-reflux',
        label: 'Acid reflux',
        value: 'Acid reflux'
      },
      {
        id: 'asthma-reactive-airway-disease',
        label: 'Asthma/reactive airway disease',
        value: 'Asthma/reactive airway disease'
      },
      {
        id: 'urinary-stress-incontinence',
        label: 'Urinary stress incontinence',
        value: 'Urinary stress incontinence'
      },
      {
        id: 'polycystic-ovarian-syndrome-pcos',
        label: 'Polycystic ovarian syndrome (PCOS)',
        value: 'Polycystic ovarian syndrome (PCOS)'
      },
      {
        id: 'clinically-proven-low-testosterone-male-hypogonadism',
        label: 'Clinically proven low testosterone (male hypogonadism)',
        value: 'Clinically proven low testosterone (male hypogonadism)'
      },
      {
        id: 'osteoporosis',
        label: 'Osteoporosis',
        value: 'Osteoporosis'
      },
      {
        id: 'coronary-artery-disease-or-heart-attack-stroke-in-last-2-years',
        label: 'Coronary artery disease or heart attack/stroke in last 2 years',
        value: 'Coronary artery disease or heart attack/stroke in last 2 years'
      },
      {
        id: 'congestive-heart-failure',
        label: 'Congestive heart failure',
        value: 'Congestive heart failure'
      },
      {
        id: 'liver-disease-including-fatty-liver',
        label: 'Liver disease, including fatty liver',
        value: 'Liver disease, including fatty liver'
      },
      {
        id: 'none-of-the-above',
        label: 'None of the above',
        value: 'PATIENT SELECTED NONE OF THE ABOVE'
      },
    ],
    path: '/onboarding/medical-history-questions-3',
    component: 'MedicalHistoryQuestionsPage',
    order: 16,
    isRequired: true,
    navigationBehavior: 'auto',
    type: 'multiple-choice',
    fieldName: 'q3_medical_history_questions',
    formType: FormType.OHL_INITIAL_INTAKE,
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions-4'
    }
  },

  {
    id: 'medical-history-questions-4',
    title: 'Medical Profile',
    question: 'Are you currently taking or have recently (within the last 12 months) taken medication(s) for weight loss?',
    description: 'Please select all that apply.',
    options: [
      {
        id: 'currently-taking-glp-1-medication-for-weight-loss',
        label: 'Yes, I currently take a GLP-1 medication for weight loss',
        value: 'Yes, I currently take a GLP-1 medication for weight loss'
      },
      {
        id: 'currently-taking-non-glp-1-medication-for-weight-loss',
        label: 'Yes, I currently take another (non-GLP-1) medication for weight loss',
        value: 'Yes, I currently take another (non-GLP-1) medication for weight loss'
      },
      {
        id: 'recently-taken-glp-1-medication-for-weight-loss',
        label: 'Yes, I have recently (within the last 12 months) taken a GLP-1 medication for weight loss',
        value: 'Yes, I have recently (within the last 12 months) taken a GLP-1 medication for weight loss'
      },
      {
        id: 'recently-taken-non-glp-1-medication-for-weight-loss',
        label: 'Yes, I have recently (within the last 12 months) taken another (non-GLP-1) medication for weight loss',
        value: 'Yes, I have recently (within the last 12 months) taken another (non-GLP-1) medication for weight loss'
      },
      {
        id: 'no-medication-for-weight-loss',
        label: 'No, I have taken medication(s) for weight loss before but it was over 12 months ago',
        value: 'No, I have taken medication(s) for weight loss before but it was over 12 months ago'
      },
      {
        id: 'no-medication-for-weight-loss-2',
        label: 'No',
        value: 'No'
      },
    ],
    path: '/onboarding/medical-history-questions-4',
    component: 'MedicalHistoryQuestionsPage',
    order: 17,
    isRequired: true,
    navigationBehavior: 'auto',
    type: 'single-choice',
    fieldName: 'q4_medical_history_questions',
    formType: FormType.OHL_INITIAL_INTAKE,
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions-4c-i',
    },
  },

  {
    id: 'medical-history-questions-4a',
    title: 'Medical Profile',
    question: 'Please list the name, dose, frequency, and timeline of your weight loss medication(s)',
    path: '/onboarding/medical-history-questions-4a',
    component: 'MedicalHistoryQuestionsPage',
    order: 18,
    isRequired: true,
    navigationBehavior: 'auto',
    type: 'textarea',
    fieldName: 'q4a_medical_history_questions',
    formType: FormType.OHL_INITIAL_INTAKE,
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions-4b'
    },
  },

  {
    id: 'medical-history-questions-4b',
    title: 'Medical Profile',
    question: 'What was your starting weight in pounds (lbs)?',
    path: '/onboarding/medical-history-questions-4b',
    component: 'GoalWeightQuestionPage',
    order: 19,
    isRequired: true,
    navigationBehavior: 'manual',
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions-4c'
    },
    type: 'input',
    fieldName: 'q4b_medical_history_questions',
    formType: FormType.OHL_INITIAL_INTAKE,
  },
  {
    id: 'medical-history-questions-4c',
    title: 'Medical Profile',
    question: 'What is your current weight in pounds (lbs)?',
    path: '/onboarding/medical-history-questions-4c',
    component: 'GoalWeightQuestionPage',
    order: 20,
    isRequired: true,
    navigationBehavior: 'manual',
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions-4d'
    },
    type: 'input',
    fieldName: 'q4c_medical_history_questions',
    formType: FormType.OHL_INITIAL_INTAKE,
  },
  {
    id: 'medical-history-questions-4c-i',
    title: 'Medical Profile',
    question: 'Are you currently gaining/re-gaining weight?',
    path: '/onboarding/medical-history-questions-4c-i',
    component: 'SingleChoiceWidget',
    order: 18.1,
    isRequired: true,
    navigationBehavior: 'manual',
    type: 'single-choice',
    fieldName: 'q4c_i_medical_history_questions',
    formType: FormType.OHL_INITIAL_INTAKE,
    options: [
      { id: 'yes', label: 'Yes', value: 'Yes' },
      { id: 'no', label: 'No', value: 'No' },
    ],
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions-4a'
    },
  },
  {
    id: 'medical-history-questions-4d',
    title: 'Medical Profile',
    question: 'Do you agree to only obtain weight loss medication through this platform moving forward?',
    path: '/onboarding/medical-history-questions-4d',
    component: 'SingleChoiceWidget',
    order: 21,
    isRequired: true,
    navigationBehavior: 'manual',
    type: 'single-choice',
    fieldName: 'q4d_medical_history_questions',
    formType: FormType.OHL_INITIAL_INTAKE,
    options: [
      {
        id: 'yes',
        label: 'Yes',
        value: 'Yes'
      },
      {
        id: 'no',
        label: 'No',
        value: 'No'
      },
    ],
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions-4e'
    }
  },
  {
    id: 'medical-history-questions-4d-i',
    title: 'Medical Profile',
    question: 'Are you currently gaining/re-gaining weight?',
    path: '/onboarding/medical-history-questions-4d-i',
    component: 'SingleChoiceWidget',
    order: 18,
    isRequired: true,
    navigationBehavior: 'manual',
    type: 'single-choice',
    fieldName: 'q4d_i_medical_history_questions',
    formType: FormType.OHL_INITIAL_INTAKE,
    options: [
      { id: 'yes', label: 'Yes', value: 'Yes' },
      { id: 'no', label: 'No', value: 'No' },
    ],
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions-4a'
    },
  },
  {
    id: 'medical-history-questions-4e',
    title: 'Medical Profile',
    question: 'When was your last dose of medication? This question is required before further medication can be prescribed.',
    path: '/onboarding/medical-history-questions-4e',
    component: 'DatePickerWidget',
    order: 22,
    isRequired: true,
    navigationBehavior: 'manual',
    type: 'single-choice',
    fieldName: 'q4e_medical_history_questions',
    formType: FormType.OHL_INITIAL_INTAKE,
    options: [
      {
        id: '0-5-days',
        label: '0-5 days',
        value: '0-5 days'
      },
      {
        id: '6-10-days',
        label: '6-10 days',
        value: '6-10 days'
      },
      {
        id: '11-14-days',
        label: '11-14 days',
        value: '11-14 days'
      },
      {
        id: 'more-than-2-weeks-ago-but-within-the-last-4-weeks',
        label: 'More than 2 weeks ago but within the last 4 weeks',
        value: 'More than 2 weeks ago but within the last 4 weeks'
      },
      {
        id: 'more-than-4-weeks-ago',
        label: 'More than 4 weeks ago',
        value: 'More than 4 weeks ago'
      },
    ],
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions-4f'
    }
  },
  {
    id: 'medical-history-questions-4f',
    title: 'Medical Profile',
    question: 'Please upload a picture of your current GLP-1 medication pen or vial',
    path: '/onboarding/medical-history-questions-4f',
    component: 'DocumentUploadWidget',
    order: 23,
    isRequired: true,
    navigationBehavior: 'manual',
    type: 'document-upload',
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions-4g'
    }
  },
  {
    id: 'medical-history-questions-4g',
    title: 'Medical Profile',
    description: 'If your last dose of GLP-1 medication was greater than 4 weeks ago, please note that we restart the dose at level 1 (the lowest dose) of medication',
    path: '/onboarding/medical-history-questions-4g',
    component: 'AlertWidget',
    order: 24,
    isRequired: true,
    navigationBehavior: 'manual',
    type: 'alert',
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions-5'
    }
  },
  {
    id: 'medical-history-questions-5',
    title: 'Medical Profile',
    question: 'Please answer the following regarding your medication and allergy history',
    description: 'Please select all that apply.',
    path: '/onboarding/medical-history-questions-5',
    component: 'MedicalHistoryQuestionsPage',
    order: 19,
    isRequired: true,
    navigationBehavior: 'auto',
    type: 'multiple-choice',
    fieldName: 'q5_medical_history_questions',
    formType: FormType.OHL_INITIAL_INTAKE,
    options: [
      {
        id: 'currently-taking-prescription-or-over-the-counter-medications',
        label: 'I currently take prescription or over the counter medications.',
        value: 'I currently take prescription or over the counter medications.'
      },
      {
        id: 'currently-taking-opiate-pain-medications',
        label: 'I am currently taking, plan to take, or have recently (within the last 3 months) taken opiate pain medications and/or opiate-based street drugs.',
        value: 'I am currently taking, plan to take, or have recently (within the last 3 months) taken opiate pain medications and/or opiate-based street drugs.'
      },
      {
        id: 'medication-allergies',
        label: 'I have medication allergies.',
        value: 'I have medication allergies.'
      },
      {
        id: 'none-of-the-above-2',
        label: 'None of the above',
        value: 'PATIENT SELECTED NONE OF THE ABOVE'
      },
    ],
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions-6'
    }
  },
  {
    id: 'medical-history-questions-6',
    title: 'Medical Profile',
    question: 'Have you had prior bariatric (weight loss) surgery or any abdominal/pelvic surgeries?',
    path: '/onboarding/medical-history-questions-6',
    component: 'SingleChoiceWidget',
    order: 20,
    isRequired: true,
    navigationBehavior: 'auto',
    type: 'single-choice',
    fieldName: 'q6_medical_history_questions',
    formType: FormType.OHL_INITIAL_INTAKE,
    options: [
      {
        id: 'yes',
        label: 'Yes',
        value: 'Yes'
      },
      {
        id: 'no',
        label: 'No',
        value: 'No'
      },
    ],
  },
  {
    id: 'medical-history-questions-6a',
    title: 'Medical Profile',
    question: 'Please list all your prior bariatric (weight loss), abdominal, and pelvic surgeries. Please include date range and type of surgery',
    path: '/onboarding/medical-history-questions-6a',
    component: 'InputWidget',
    order: 21,
    isRequired: true,
    navigationBehavior: 'auto',
    type: 'textarea',
    fieldName: 'q6a_medical_history_questions',
    formType: FormType.OHL_INITIAL_INTAKE,
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions-7'
    }
  },
  {
    id: 'medical-history-questions-7',
    title: 'Medical Profile',
    question: 'Which of the following lifestyle factors apply to you?',
    path: '/onboarding/medical-history-questions-7',
    component: 'SingleChoiceWidget',
    order: 22,
    isRequired: true,
    navigationBehavior: 'auto',
    type: 'multiple-choice',
    fieldName: 'q7_medical_history_questions',
    formType: FormType.OHL_INITIAL_INTAKE,
    options: [
      {
        id: 'i-have-attempted-to-lose-weight-in-a-weight-management-program-before',
        label: 'I have attempted to lose weight in a weight management program before, such as through caloric restriction, exercise, or behavior modification.',
        value: 'I have attempted to lose weight in a weight management program before, such as through caloric restriction, exercise, or behavior modification.'
      },
      {
        id: 'i-am-willing-to-reduce-my-caloric-intake-alongside-medication-if-clinically-appropriate',
        label: 'I am willing to reduce my caloric intake alongside medication, if clinically appropriate.',
        value: 'I am willing to reduce my caloric intake alongside medication, if clinically appropriate.'
      },
      {
        id: 'i-am-willing-to-increase-my-physical-activity-alongside-medication-if-clinically-appropriate',
        label: 'I am willing to increase my physical activity alongside medication, if clinically appropriate.',
        value: 'I am willing to increase my physical activity alongside medication, if clinically appropriate.'
      },
      {
        id: 'none-of-the-above',
        label: 'None of the above',
        value: 'PATIENT SELECTED NONE OF THE ABOVE'
      },
    ],
    conditions: {
      nextStep: 'medical-history-questions-7i'
    }
  },
  {
    id: 'medical-history-questions-7i',
    title: 'Medical Profile',
    question: 'Please provide brief details about your previous weight management program attempts.',
    path: '/onboarding/medical-history-questions-7i',
    component: 'InputAnswerWidget',
    order: 23 ,
    isRequired: true,
    navigationBehavior: 'manual',
    type: 'input',
    fieldName: 'q7i_medical_history_questions',
    formType: FormType.OHL_INITIAL_INTAKE,
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions-8'
    }
  },
  {
    id: 'medical-history-questions-8',
    title: 'Medical Profile',
    question: 'How has your weight changed in the last 12 months?',
    path: '/onboarding/medical-history-questions-8',
    component: 'SingleChoiceWidget',
    order: 23,
    isRequired: true,
    navigationBehavior: 'auto',
    type: 'single-choice',
    fieldName: 'q8_medical_history_questions',
    formType: FormType.OHL_INITIAL_INTAKE,
    options: [
      {
        id: 'lost-a-significant-amount',
        label: 'Lost a significant amount',
        value: 'Lost a significant amount'
      },
      {
        id: 'lost-a-little',
        label: 'Lost a little',
        value: 'Lost a little'
      },
      {
        id: 'about-the-same',
        label: 'About the same',
        value: 'About the same'
      },
      {
        id: 'gained-a-little',
        label: 'Gained a little',
        value: 'Gained a little'
      },
      {
        id: 'gained-a-significant-amount',
        label: 'Gained a significant amount',
        value: 'Gained a significant amount'
      },
    ],
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions-9'
    }
  },

  {
    id: 'medical-history-questions-9',
    title: 'Medical Profile',
    question: 'What is your current or average blood pressure range?',
    path: '/onboarding/medical-history-questions-9',
    component: 'SingleChoiceWidget',
    order: 24,
    isRequired: true,
    navigationBehavior: 'auto',
    type: 'single-choice',
    fieldName: 'q9_medical_history_questions',
    formType: FormType.OHL_INITIAL_INTAKE,
    options: [
      {
        id: 'normal',
        label: '<120/80 (Normal)',
        value: '<120/80 (Normal)'
      },
      {
        id: 'elevated',
        label: '120-129/<80 (Elevated)',
        value: '120-129/<80 (Elevated)'
      },
      {
        id: 'high-stage-1',
        label: '130-139/80-89 (High Stage 1)',
        value: '130-139/80-89 (High Stage 1)'
      },
      {
        id: 'high-stage-2',
        label: '≥140/90 (High Stage 2)',
        value: '≥140/90 (High Stage 2)'
      },
    ],
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions-10'
    }
  },
  {
    id: 'medical-history-questions-10',
    title: 'Medical Profile',
    question: 'What is your current or average resting heart rate range?',
    path: '/onboarding/medical-history-questions-10',
    component: 'SingleChoiceWidget',
    order: 25,
    isRequired: true,
    navigationBehavior: 'auto',
    type: 'single-choice',
    fieldName: 'q10_medical_history_questions',
    formType: FormType.OHL_INITIAL_INTAKE,
    options: [
      {
        id: 'slow',
        label: '<60 beats per minute (Slow)',
        value: '<60 beats per minute (Slow)'
      },
      {
        id: 'normal',
        label: '60-100 beats per minute (Normal)',
        value: '60-100 beats per minute (Normal)'
      },
      {
        id: 'slightly-fast',
        label: '101-110 beats per minute (Slightly Fast)',
        value: '101-110 beats per minute (Slightly Fast)'
      },
      {
        id: 'fast',
        label: '>110 beats per minute (Fast)',
        value: '>110 beats per minute (Fast)'
      },
    ],
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions-11'
    }
  },

  {
    id: 'medical-history-questions-11',
    title: 'Medical Profile',
    question: 'Based on your specific medical history and lifestyle, please select which of the following factors are applicable based on your concerns:',
    path: '/onboarding/medical-history-questions-11',
    component: 'SingleChoiceWidget',
    order: 26,
    isRequired: true,
    navigationBehavior: 'auto',
    type: 'multiple-choice',
    fieldName: 'q11_medical_history_questions',
    formType: FormType.OHL_INITIAL_INTAKE,
    options: [
      {
        id: 'loss-of-muscle-mass',
        label: 'Loss of muscle mass while taking GLP-1/GIP medications such as semaglutide and tirzepatide',
        value: 'Loss of muscle mass while taking GLP-1/GIP medications such as semaglutide and tirzepatide'
      },
      {
        id: 'inability-to-inject-yourself-once-weekly',
        label: 'Inability and/or unwillingness to inject yourself once weekly with GLP-1/GIP medications such as semaglutide and tirzepatide',
        value: 'Inability and/or unwillingness to inject yourself once weekly with GLP-1/GIP medications such as semaglutide and tirzepatide'
      },
      {
        id: 'side-effects-such-as-nausea-vomiting',
        label: 'Side effects such as nausea/vomiting',
        value: 'Side effects such as nausea/vomiting'
      },
      {
        id: 'aging-and-longevity',
        label: 'Aging and longevity (cellular/DNA damage, immune system dysfunction, etc)',
        value: 'Aging and longevity (cellular/DNA damage, immune system dysfunction, etc)'
      },
      {
        id: 'cognitive-function-and-mental-clarity',
        label: 'Cognitive function and mental clarity',
        value: 'Cognitive function and mental clarity'
      },
      {
        id: 'low-energy',
        label: 'Low energy',
        value: 'Low energy'
      },
      {
        id: 'desire-to-regulate-menses-and-hormonal-status',
        label: 'Desire to regulate menses and hormonal status',
        value: 'Desire to regulate menses and hormonal status'
      },
      {
        id: 'poor-sleep-quality',
        label: 'Poor sleep quality',
        value: 'Poor sleep quality'
      },
      {
        id: 'none-of-the-above',
        label: 'None of the above',
        value: 'PATIENT SELECTED NONE OF THE ABOVE'
      },
    ],
    conditions: {
      canSkip: false,
      nextStep: 'medical-history-questions-12'
    }
  },
  {
    id: 'medical-history-questions-12',
    title: 'Medical Profile',
    question: 'Is there any further information which you would like the doctor to know? Please do not include urgent or emergency medical information here, as this is not reviewed immediately.',
    path: '/onboarding/medical-history-questions-12',
    component: 'InputWidget',
    order: 27,
    isRequired: false,
    navigationBehavior: 'auto',
    type: 'textarea',
    fieldName: 'q12_medical_history_questions',
    formType: FormType.OHL_INITIAL_INTAKE,
    conditions: {
      canSkip: true,
      nextStep: 'shipping-details'
    }
  },
  // {
  //   id: 'treatment-preview-header',
  //   title: 'Treatment Preview',
  //   question: 'Treatment Preview',
  //   path: '/onboarding/treatment-preview-header',
  //   component: 'TreatmentPreviewHeader',
  //   order: 28,
  //   isRequired: true,
  //   navigationBehavior: 'manual',
  //   conditions: {
  //     canSkip: false,
  //     nextStep: 'shipping-details'
  //   }
  // },
  {
    id: 'shipping-details',
    title: 'Shipping details',
    question: 'If prescribed, where should we ship your medication?',
    eyebrow: 'Shipping details',
    path: '/onboarding/shipping-details',
    component: 'ShippingDetailsPage',
    order: 28,
    isRequired: true,
    navigationBehavior: 'manual',
    conditions: {
      canSkip: false,
      nextStep: 'check-eligibility'
    }
  },
  {
    id: 'check-eligibility',
    title: 'Check eligibility',
    path: '/onboarding/check-eligibility',
    component: 'CheckEligibilityWidget',
    order: 29,
    isRequired: true,
    navigationBehavior: 'manual',
    conditions: {
      canSkip: false,
      nextStep: 'submit-form'
    }
  },
  {
    id: 'submit-form',
    title: 'Complete form',
    path: '/onboarding/submit-form',
    component: 'SubmitFormWidget',
    order: 30,
    isRequired: true,
    navigationBehavior: 'manual',
    conditions: {
      canSkip: false,
      nextStep: 'medication-eligibility-pricing'
    }
  },
  {
    id: 'medication-eligibility-pricing',
    title: 'Treatment Options',
    question: 'Based on your responses you may be eligible for:',
    eyebrow: 'Treatment Options',
    path: '/onboarding/medication-eligibility-pricing',
    component: 'MedicationEligibilityPricingPage',
    order: 31,
    isRequired: true,
    navigationBehavior: 'manual',
    conditions: {
      canSkip: false,
      nextStep: 'payment-details'
    }
  },
  {
    id: 'payment-details',
    title: 'Payment details',
    path: '/onboarding/payment-details',
    component: 'PaymentDetailsPage',
    order: 32,
    isRequired: true,
    navigationBehavior: 'manual',
    
  },
];

// Helper functions for step management
export const getStepByOrder = (order: number): OnboardingStep | undefined => {
  return ONBOARDING_STEPS.find(step => step.order === order);
};

export const getStepById = (id: string): OnboardingStep | undefined => {
  return ONBOARDING_STEPS.find(step => step.id === id);
};

export const getStepByPath = (path: string): OnboardingStep | undefined => {
  return ONBOARDING_STEPS.find(step => step.path === path);
};

export const getNextStep = (currentStepId: string, data?: any): OnboardingStep | undefined => {
  const currentStep = getStepById(currentStepId);
  if (!currentStep) return undefined;

  // Check if step has custom next step logic
  if (currentStep.conditions?.nextStep) {
    const nextStepId = typeof currentStep.conditions.nextStep === 'function'
      ? currentStep.conditions.nextStep(data)
      : currentStep.conditions.nextStep;
    return getStepById(nextStepId);
  }

  // Default: get next step by order
  return getStepByOrder(currentStep.order + 1);
};

export const getPreviousStep = (currentStepId: string, data?: any): OnboardingStep | undefined => {
  const currentStep = getStepById(currentStepId);
  if (!currentStep) return undefined;

  // Check if step has custom previous step logic
  if (currentStep.conditions?.previousStep) {
    const prevStepId = typeof currentStep.conditions.previousStep === 'function'
      ? currentStep.conditions.previousStep(data)
      : currentStep.conditions.previousStep;
    return getStepById(prevStepId);
  }

  // Default: get previous step by order
  return getStepByOrder(currentStep.order - 1);
};

export const getTotalSteps = (): number => {
  return ONBOARDING_STEPS.length;
};

export const getStepProgress = (currentStepId: string): number => {
  const currentStep = getStepById(currentStepId);
  if (!currentStep) return 0;
  return Math.round((currentStep.order / getTotalSteps()) * 100);
};

export const getFirstStep = (): OnboardingStep | undefined => {
  return getStepByOrder(1);
};

export const getLastStep = (): OnboardingStep | undefined => {
  return getStepByOrder(getTotalSteps());
}; 