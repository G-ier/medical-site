"use client";

import Link from "next/link";
import { useEffect, useState, use } from "react";

interface ErrorPageProps {
  searchParams: Promise<{
    message?: string;
    code?: string;
    type?: string;
  }>;
}

function BackButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleBack = () => {
    if (mounted && window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <button
      onClick={handleBack}
      className="w-full sm:w-auto px-8 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-200"
    >
      Go Back
    </button>
  );
}

export default function ErrorPage({ searchParams }: ErrorPageProps) {
  const params = use(searchParams);
  const errorMessage = params.message || "Something went wrong";
  const errorCode = params.code || "500";
  const errorType = params.type || "general";

  // Determine error icon and colors based on error type
  const getErrorConfig = (type: string, code: string) => {
    switch (type) {
      case "auth":
        return {
          icon: "🔐",
          title: "Authentication Error",
          gradientFrom: "#EF4444",
          gradientTo: "#DC2626",
          suggestion: "Please try logging in again or contact support if the problem persists."
        };
      case "payment":
        return {
          icon: "💳",
          title: "Payment Error",
          gradientFrom: "#F59E0B",
          gradientTo: "#D97706",
          suggestion: "Please check your payment information and try again."
        };
      case "network":
        return {
          icon: "🌐",
          title: "Connection Error",
          gradientFrom: "#8B5CF6",
          gradientTo: "#7C3AED",
          suggestion: "Please check your internet connection and try again."
        };
      default:
        if (code === "404") {
          return {
            icon: "🔍",
            title: "Page Not Found",
            gradientFrom: "#6366F1",
            gradientTo: "#4F46E5",
            suggestion: "The page you're looking for doesn't exist or has been moved."
          };
        }
        return {
          icon: "⚠️",
          title: "Oops! Something went wrong",
          gradientFrom: "#EF4444",
          gradientTo: "#DC2626",
          suggestion: "We're sorry for the inconvenience. Please try again or contact support."
        };
    }
  };

  const config = getErrorConfig(errorType, errorCode);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        {/* Main Error Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 text-center relative overflow-hidden">
          {/* Decorative gradient background */}
          <div 
            className="absolute top-0 left-0 right-0 h-2 opacity-80"
            style={{
              background: `linear-gradient(90deg, ${config.gradientFrom}, ${config.gradientTo})`
            }}
          />

          {/* Error Icon */}
          <div className="text-6xl sm:text-8xl mb-6">
            {config.icon}
          </div>

          {/* Error Code */}
          {errorCode && (
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-4">
              <span className="text-gray-600 font-mono text-sm font-medium">
                Error {errorCode}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4 text-gray-900">
            {config.title}
          </h1>

          {/* Error Message */}
          <p className="text-lg sm:text-xl text-gray-600 font-light mb-6 max-w-xl mx-auto leading-relaxed">
            {errorMessage}
          </p>

          {/* Suggestion */}
          <p className="text-base text-gray-500 mb-8 max-w-lg mx-auto">
            {config.suggestion}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#CAB8FF] to-[#6F69AC] text-white rounded-xl font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              Go Home
            </Link>
            
            <BackButton />

            <Link
              href="/contact"
              className="text-gray-500 hover:text-gray-700 font-medium transition-colors duration-200"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
