"use client";

import { ReactNode, useCallback } from "react";
import { cn } from "@/shared/lib/utils";
import { BackButton } from "@/shared/ui/atoms/back-button";
import { ProgressBar } from "@/shared/ui/atoms/progress-bar";
import Image from "next/image";
import { useOnboarding } from "@/features/onboarding-flow/hooks/use-onboarding";

export interface QAPageTemplateProps {
  // Title configuration
  title: string | ReactNode;
  titleAlign?: "center" | "left" | "right";
  titleClassName?: string;

  // Optional question
  question?: string | ReactNode;
  questionClassName?: string;

  // Content area
  children?: ReactNode;

  // Action buttons
  actions?: ReactNode;

  // Back button
  showBackButton?: boolean;
  onBackClick?: () => void;

  // Progress bar
  showProgressBar?: boolean;
  progress?: number;
  progressBarClassName?: string;
  totalSegments?: number;
  completedSegments?: number;
  currentSegment?: number;

  // Background image configuration
  backgroundImage?: string;
  backgroundImageAlt?: string;
  backgroundImageClassName?: string;
  backgroundImageStyle?: "cover" | "contain" | "fill" | "none";
  backgroundImagePosition?:
    | "center"
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  backgroundOverlay?: boolean;
  backgroundOverlayClassName?: string;

  // Layout
  className?: string;
  contentClassName?: string;
  maxWidth?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "full"
    | "none";
}

// Title size classes for future use
// const titleSizeClasses = {
//   sm: 'text-sm', // 12px
//   md: 'text-md', // 14px
//   lg: 'text-lg', // 16px,
//   xl: 'text-xl', // 20px,
//   xxl: 'text-2xl', // 24px
//   xxxl: 'text-3xl', // 28px
//   xxxxl: 'text-4xl', // 32px
// };

const titleAlignClasses = {
  center: "text-center",
  left: "text-left",
  right: "text-right",
};

const maxWidthClasses = {
  sm: "max-w-sm", // 384px
  md: "max-w-md", // 448px
  lg: "max-w-lg", // 512px
  xl: "max-w-xl", // 576px
  "2xl": "max-w-2xl", // 672px
  "3xl": "max-w-3xl", // 768px
  "4xl": "max-w-4xl", // 896px
  "5xl": "max-w-5xl", // 1024px
  "6xl": "max-w-6xl", // 1152px
  "7xl": "max-w-7xl", // 1280px
  full: "max-w-full",
  none: "max-w-none",
};

const backgroundImageStyleClasses = {
  cover: "object-cover",
  contain: "object-contain",
  fill: "object-fill",
  none: "object-none",
};

const backgroundImagePositionClasses = {
  center: "object-center",
  top: "object-top",
  bottom: "object-bottom",
  left: "object-left",
  right: "object-right",
  "top-left": "object-left-top",
  "top-right": "object-right-top",
  "bottom-left": "object-left-bottom",
  "bottom-right": "object-right-bottom",
};

/**
 * QA Page Template
 * Flexible template for onboarding pages with title, optional question, content, and actions
 *
 * @example Basic usage without background:
 * ```tsx
 * <QAPageTemplate
 *   title="Welcome"
 *   question="How are you feeling today?"
 * >
 *   <SomeContent />
 * </QAPageTemplate>
 * ```
 *
 * @example With background image:
 * ```tsx
 * <QAPageTemplate
 *   title="Welcome"
 *   question="How are you feeling today?"
 *   backgroundImage="/images/background.jpg"
 *   backgroundOverlay={true}
 *   titleClassName="text-white"
 *   questionClassName="text-white"
 * >
 *   <SomeContent />
 * </QAPageTemplate>
 * ```
 *
 * @example Custom background styling:
 * ```tsx
 * <QAPageTemplate
 *   title="Welcome"
 *   backgroundImage="/images/background.jpg"
 *   backgroundImageStyle="contain"
 *   backgroundImagePosition="top"
 *   backgroundOverlay={true}
 *   backgroundOverlayClassName="bg-gradient-to-b from-black/50 to-transparent"
 * >
 *   <SomeContent />
 * </QAPageTemplate>
 * ```
 */
export function QAPageTemplate({
  title,
  titleAlign = "center",
  titleClassName,
  question,
  questionClassName,
  children,
  actions,
  showBackButton = true,
  onBackClick,
  showProgressBar = false,
  progress = 0,
  progressBarClassName,
  totalSegments = 3,
  completedSegments = 0,
  currentSegment = 1,
  backgroundImage,
  backgroundImageAlt = "Background image",
  backgroundImageClassName,
  backgroundImageStyle = "cover",
  backgroundImagePosition = "center",
  backgroundOverlay = false,
  backgroundOverlayClassName,
  className,
  contentClassName,
  maxWidth = "5xl",
}: QAPageTemplateProps) {
  const { back } = useOnboarding();

  const handleBack = useCallback(async () => {
    await back();
    if (onBackClick) onBackClick();
  }, [back, onBackClick]);

  return (
    <div
      className={cn(
        "min-h-screen w-full flex flex-col relative",
        backgroundImage ? "" : "bg-[#F7F7F7]",
        className
      )}
    >
      {/* Background Image - positioned behind everything */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt}
            fill
            className={cn(
              backgroundImageStyleClasses[backgroundImageStyle],
              backgroundImagePositionClasses[backgroundImagePosition],
              backgroundImageClassName
            )}
            priority={false}
          />
        </div>
      )}

      {/* Background Overlay - optional dark overlay over background image */}
      {backgroundImage && backgroundOverlay && (
        <div
          className={cn(
            "absolute inset-0 z-10 bg-black/30",
            backgroundOverlayClassName
          )}
        />
      )}

      {/* Back Button - positioned absolutely in top left, above background */}
      {showBackButton && (
        <div
          className={cn(
            "absolute z-50",
            showProgressBar ? "top-16 left-6" : "top-6 left-6"
          )}
        >
          <BackButton
            onClick={handleBack}
            color={backgroundImage ? "white" : "black"}
          />
        </div>
      )}

      {/* Main Content Container - takes remaining space and centers content */}
      <div className="flex-1 flex items-center justify-center relative z-30">
        {/* Main Content - positioned above background */}
        <div className={cn("w-full mx-auto", maxWidthClasses[maxWidth])}>
          {/* Progress Bar - positioned at the very top */}
          {showProgressBar && (
            <div className="w-full px-6 pt-6 pb-2 relative z-30">
              <ProgressBar
                progress={progress}
                className={progressBarClassName}
                height="sm"
                totalSegments={totalSegments}
                completedSegments={completedSegments}
                currentSegment={currentSegment}
                segmented={true}
              />
            </div>
          )}
          <div className="px-4 py-8">
            {/* Title Section */}
            <h1
              className={cn(
                "mb-4",
                titleAlignClasses[titleAlign],
                titleClassName
              )}
            >
              {title}
            </h1>

            {/* Optional Question */}
            {question && (
              <div className={cn("mb-8 text-center", questionClassName)}>
                {typeof question === "string" ? <p>{question}</p> : question}
              </div>
            )}

            {/* Content Area */}
            {children && (
              <div className={cn("mb-12", contentClassName)}>{children}</div>
            )}

            {/* Action Buttons */}
            {actions && <div className="flex justify-center">{actions}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
