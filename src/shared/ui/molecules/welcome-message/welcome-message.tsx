"use client";

import { useBackendAuth } from "@/shared/hooks/use-backend-auth";

export function WelcomeMessage() {
  const { user } = useBackendAuth();
  
  const firstName = user?.name?.split(" ")[0] || user?.email?.split("@")[0] || "Friend";
  const currentTime = new Date().getHours();

  let greeting = "Good morning";
  if (currentTime >= 12 && currentTime < 17) {
    greeting = "Good afternoon";
  } else if (currentTime >= 17) {
    greeting = "Good evening";
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Welcome Card */}
      <div className="rounded-3xl sm:rounded-[50px] p-6 sm:p-12 text-center">
        {/* Content */}
        <div>
          {/* Greeting */}
          <h1 className="p-1 text-2xl sm:text-4xl lg:text-5xl font-light mb-4 bg-gradient-to-r from-[#CAB8FF] to-[#6F69AC] bg-clip-text text-transparent">
            {greeting}, {firstName}!
          </h1>

          {/* Welcome message */}
          <p className="text-lg sm:text-xl lg:text-2xl font-light mb-8 max-w-2xl mx-auto leading-relaxed bg-gradient-to-r from-[#CAB8FF] to-[#6F69AC] bg-clip-text text-transparent">
            Welcome to your personalized health dashboard. We&apos;re here to
            support you on your wellness journey.
          </p>
        </div>
      </div>
    </div>
  );
} 