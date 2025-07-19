'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useOnboarding } from '@/features/onboarding-flow/hooks/use-onboarding';
import { getFirstStep } from '@/entities/onboarding/model/config';

/**
 * Main onboarding entry point
 * Handles session restoration and initial routing
 */
export default function OnboardingPage() {
  const router = useRouter();
  const { isLoading, completedCount, completedSteps } = useOnboarding();

  console.log('🔍 Onboarding completedCount:', completedCount);
  console.log('🔍 Onboarding isLoading:', isLoading);

  useEffect(() => {
    // Only run when not loading
    if (!isLoading) {
      if (completedCount === 0) {
        // New session - start from the first step
        const firstStep = getFirstStep();
        if (firstStep) {
          console.log('🆕 New session, starting from first step:', firstStep.id);
          router.push(`/onboarding/${firstStep.id}`);
        } else {
          console.error('❌ No steps configured, redirecting to home');
          router.push('/');
        }
      } else {
        // Existing session with progress - find next uncompleted step
        console.log('📋 Found existing session with progress, completed count:', completedCount);
        
        // Import onboarding config to find next step using completedSteps logic
        import('@/entities/onboarding/model/config').then(({ getStepById }) => {
          // Get completed step IDs from debug state
          const completedStepIds = completedSteps || [];
          console.log('✅ Completed steps:', completedStepIds);
          
          // Get the last completed step
          const lastCompletedStepId = completedStepIds[completedStepIds.length - 1];
          const lastCompletedStep = getStepById(lastCompletedStepId);
          
          if (lastCompletedStep && lastCompletedStep.conditions?.nextStep) {
            // Use conditions.nextStep from the last completed step
            const nextStepId = typeof lastCompletedStep.conditions.nextStep === 'function'
              ? lastCompletedStep.conditions.nextStep({}) // Pass empty data for now
              : lastCompletedStep.conditions.nextStep;
            
            const nextStep = getStepById(nextStepId);
            
            if (nextStep) {
              console.log('➡️ Redirecting to next step from config:', nextStep.id);
              router.push(`/onboarding/${nextStep.id}`);
            } else {
              console.log('🎉 All steps completed, redirecting to dashboard');
              router.push('/dashboard'); // Or completion page
            }
          } else {
            console.log('🎉 All steps completed, redirecting to dashboard');
            router.push('/dashboard'); // Or completion page
          }
        });
      }
    }
  }, [router, isLoading, completedCount, completedSteps]);

  // Show loading state while initializing
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Initializing your onboarding session...</p>
        </div>
      </div>
    );
  }

  // This should not be reached as we redirect in useEffect
  return null;
} 