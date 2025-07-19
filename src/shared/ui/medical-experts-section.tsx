import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";
import { Container, Section } from "./container";
import { Heading } from "./typography";
import { DoctorCard, type DoctorCardProps } from "./doctor-card";
import { renderStyledText } from "./render-styled-text";

const medicalExpertsSectionVariants = cva("", {
  variants: {
    background: {
      default: "bg-white",
      gray: "bg-gray-50",
      transparent: "bg-transparent",
    },
  },
  defaultVariants: {
    background: "default",
  },
});

export interface MedicalExpertsSectionProps
  extends VariantProps<typeof medicalExpertsSectionVariants> {
  // Section content
  title: string | React.ReactNode;
  subtitle?: string;

  // Doctor data
  doctors: DoctorCardProps[];

  // Layout options
  maxDoctors?: number;
  columnsDesktop?: 2 | 3 | 4 | 5;
  spacing?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
}

export function MedicalExpertsSection({
  title,
  subtitle,
  doctors,
  maxDoctors,
  columnsDesktop,
  spacing,
  background,
  className,
}: MedicalExpertsSectionProps) {
  // Limit doctors if maxDoctors is specified
  const displayedDoctors = maxDoctors ? doctors.slice(0, maxDoctors) : doctors;

  // Column classes for responsive grid
  const gridClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
  };

  return (
    <Section
      spacing={spacing}
      className={cn(medicalExpertsSectionVariants({ background }), className)}
    >
      <Container maxWidth="8xl" padding="none">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Heading
            level="h2"
            color="primary"
            className="mb-4 text-center sm:text-left font-bold text-[24px] sm:text-[32px] md:text-[64px] leading-[120%] tracking-[0%]"
          >
            {typeof title === "string" ? renderStyledText(title) : title}
          </Heading>

          {subtitle && (
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Doctors Grid */}
        <div className={cn("grid gap-6", gridClasses[columnsDesktop || 2])}>
          {displayedDoctors.map((doctor, index) => (
            <DoctorCard
              key={`doctor-${index}`}
              {...doctor}
              className="w-full"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export { medicalExpertsSectionVariants };
