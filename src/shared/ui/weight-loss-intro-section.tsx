"use client";

import { Button } from "./button";
import type { CTA, SanityImage } from "@/shared/types/sanity";
import { renderStyledText } from "./render-styled-text";
import { OptimizedImage } from "./image";
import { urlFor } from "@/shared/lib/sanity";

interface MedicationCard {
  title: string;
  price: string;
  cta: CTA;
  image?: SanityImage;
}

export interface WeightLossIntroSectionProps {
  title: string;
  subtitle: string;
  medications: MedicationCard[];
}

export function WeightLossIntroSection({
  title,
  subtitle,
  medications,
}: WeightLossIntroSectionProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-left">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {typeof title === "string" ? renderStyledText(title) : title}
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {medications.map((medication, index) => (
            <div
              key={index}
              className={`max-w-[630px] relative rounded-3xl p-8 text-left transition-all duration-300 bg-weight-loss-intro-bg`}
            >
              <div className="flex items-start justify-between">
                {/* Left side - content */}
                <div className="space-y-6 flex-1">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {medication.title}
                    </h3>
                    <p className="text-gray-700 text-lg">{medication.price}</p>
                  </div>

                  <Button
                    href={medication.cta.href}
                    variant="default"
                    size="default"
                    className="bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 rounded-[8px] px-6 py-3 font-medium"
                  >
                    {medication.cta.text}
                  </Button>
                </div>

                {/* Right side - image */}
                {medication.image && medication.image.asset && (
                  <div className="ml-4 flex-shrink-0">
                    <OptimizedImage
                      src={urlFor(medication.image).url() || ''}
                      alt={medication.image.alt || medication.title}
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
