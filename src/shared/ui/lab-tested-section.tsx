import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";
import { Container, Section } from "./container";
import { Heading, Text } from "./typography";
import { OptimizedImage } from "./image";
import { LabTestCard, type LabTestCardProps } from "./lab-test-card";
import { renderStyledText } from "./render-styled-text";

const labTestedSectionVariants = cva("relative overflow-hidden", {
  variants: {
    background: {
      default: "bg-[#f1eef0]",
      purple: "bg-[#C4A7FF]",
      transparent: "bg-transparent",
    },
  },
  defaultVariants: {
    background: "default",
  },
});

// Feature item interface for the bottom section
export interface FeatureItem {
  icon: React.ReactNode;
  label: string;
}

export interface LabTestedSectionProps
  extends VariantProps<typeof labTestedSectionVariants> {
  // Content
  title: string | React.ReactNode;
  description: string;
  additionalDescription?: string;

  // Test data
  tests: LabTestCardProps["tests"];

  // Background image
  backgroundImage?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };

  // Features section (Clean, simple, and effective)
  featuresTitle?: string | React.ReactNode;
  featuresDescription?: string;
  features?: FeatureItem[];

  // Layout options
  spacing?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
}

function LabTestedSection({
  title,
  description,
  additionalDescription,
  tests,
  backgroundImage,
  featuresTitle,
  featuresDescription,
  features,
  background,
  spacing = "none",
  className,
  ...props
}: LabTestedSectionProps) {
  return (
    <Section
      spacing={spacing}
      className={cn(labTestedSectionVariants({ background }), className)}
      {...props}
    >
      <Container
        maxWidth="8xl"
        padding="md"
        className="px-4 sm:px-6 lg:px-8 max-[768px]:px-0"
      >
        {/* Top Section - Title and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start mb-8 sm:mb-10 lg:mb-16 max-[768px]:text-center">
          {/* Title */}
          <Heading
            level="h2"
            color="primary"
            className="text-center lg:text-left font-bold text-[32px] sm:text-[42px] md:text-[48px] lg:text-[64px] leading-[120%] tracking-[0%]"
          >
            {typeof title === "string" ? renderStyledText(title) : title}
          </Heading>

          {/* Description */}
          <div className="flex flex-col gap-0.5">
            <Text
              variant="body"
              className="text-gray-700 text-base sm:text-lg leading-relaxed text-center lg:text-left"
            >
              {description}
            </Text>

            {/* Additional Description */}
            {additionalDescription && (
              <Text
                variant="body"
                className="text-gray-600 text-sm sm:text-base leading-relaxed text-center lg:text-left"
              >
                {additionalDescription}
              </Text>
            )}
          </div>
        </div>

        {/* Middle Section - Lab Test Card Above Background Image */}
        <div className="relative mb-10 sm:mb-12 lg:mb-16">
          {/* Mobile layout: Stack card and image vertically */}
          <div className="block lg:hidden">
            {/* Card first on mobile */}
            <div className="mb-6 sm:mb-8">
              <LabTestCard
                tests={tests}
                variant="elevated"
                size="compact"
                className="w-full mx-auto"
              />
            </div>

            {/* Image below on mobile */}
            {backgroundImage && backgroundImage.src && (
              <div className="w-full">
                <OptimizedImage
                  src={backgroundImage.src}
                  alt={backgroundImage.alt || "Lab testing background"}
                  width={backgroundImage.width || 1200}
                  height={backgroundImage.height || 590}
                  priority={true}
                  unoptimized={true}
                  className="w-full h-[250px] sm:h-[350px] object-cover rounded-2xl"
                />
              </div>
            )}
          </div>

          {/* Desktop layout: Card positioned over image */}
          <div className="hidden lg:block relative">
            {backgroundImage && backgroundImage.src && (
              <div className="relative w-full">
                <OptimizedImage
                  src={backgroundImage.src}
                  alt={backgroundImage.alt || "Lab testing background"}
                  width={backgroundImage.width || 1200}
                  height={backgroundImage.height || 590}
                  priority={true}
                  unoptimized={true}
                  className="w-full h-[500px] xl:h-[590px] object-cover rounded-2xl"
                />

                {/* Lab Test Card - Absolutely positioned over the image */}
                <div className="absolute top-12 left-12 z-10">
                  <LabTestCard
                    tests={tests}
                    variant="elevated"
                    className="w-[450px] xl:w-[500px]"
                  />
                </div>
              </div>
            )}

            {/* Fallback: Show card normally if no background image */}
            {!backgroundImage && (
              <div className="flex justify-start">
                <LabTestCard
                  tests={tests}
                  variant="elevated"
                  className="max-w-md"
                />
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section - Clean, Simple, and Effective */}
        {(featuresTitle || featuresDescription || features) && (
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {/* Features Header */}
            {(featuresTitle || featuresDescription) && (
              <div className="max-w-xs sm:max-w-md lg:max-w-2xl mx-auto lg:mx-0">
                {featuresTitle && (
                  <Heading
                    level="h2"
                    color="primary"
                    className="text-center lg:text-left font-bold text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[40px] leading-[110%] tracking-[0%] mb-3 sm:mb-4"
                  >
                    {typeof featuresTitle === "string"
                      ? renderStyledText(featuresTitle)
                      : featuresTitle}
                  </Heading>
                )}

                {featuresDescription && (
                  <Text
                    variant="body"
                    className="text-gray-700 text-center lg:text-left text-sm sm:text-base leading-relaxed"
                  >
                    {featuresDescription}
                  </Text>
                )}
              </div>
            )}

            {/* Features Grid */}
            {features && features.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
                {features.map((feature, index) => (
                  <div
                    key={`feature-${index}`}
                    className="flex flex-col items-center text-center space-y-3 sm:space-y-4"
                  >
                    {/* Feature Icon */}
                    <div className="w-[60px] h-[48px] sm:w-[76px] sm:h-[54px] md:w-[88px] md:h-[62px] flex items-center justify-center text-[#CAB8FF]">
                      {typeof feature.icon === "function"
                        ? React.createElement(feature.icon, {
                            className:
                              "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16",
                          })
                        : feature.icon}
                    </div>

                    {/* Feature Label */}
                    <Text
                      variant="body"
                      className="text-gray-700 text-xs sm:text-sm font-normal leading-[140%] text-center"
                    >
                      {feature.label}
                    </Text>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </Container>
    </Section>
  );
}

export { LabTestedSection, labTestedSectionVariants };
