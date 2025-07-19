import React from 'react';
import { cn } from '@/shared/lib/utils';
import { WeightLossStatistic, HealthGainsCard, OverlappingImages, SuperchargeGoalsSection } from './index';
import type { 
  WeightLossStatisticProps, 
  HealthGainsCardProps, 
  OverlappingImagesProps, 
  SuperchargeGoalsSectionProps 
} from './index';

export interface WeightLossOverviewSectionProps {
  firstStatistic: WeightLossStatisticProps;
  secondStatistic: WeightLossStatisticProps;
  healthGainsCard: HealthGainsCardProps;
  overlappingImages: OverlappingImagesProps;
  superchargeGoals: SuperchargeGoalsSectionProps;
  className?: string;
}

export const WeightLossOverviewSection: React.FC<WeightLossOverviewSectionProps> = ({
  firstStatistic,
  secondStatistic,
  healthGainsCard,
  overlappingImages,
  superchargeGoals,
  className
}) => {
  return (
    <section className={cn('py-16 px-4 sm:px-8', className)}>
      <div className="max-w-7xl mx-auto">
        {/* Top row - Two statistics and health gains card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left column - Two statistics stacked */}
          <div className="lg:col-span-2">
            <WeightLossStatistic {...firstStatistic} />
            
            {/* Divider between statistics */}
            <div className="flex justify-center py-8">
              <div className="w-full max-w-full sm:max-w-md h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
            
            <WeightLossStatistic {...secondStatistic} />
          </div>
          
          {/* Right column - Health gains card */}
          <div className="flex items-center justify-center">
            <HealthGainsCard {...healthGainsCard} />
          </div>
        </div>

        {/* Bottom row - Overlapping images and supercharge goals */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between lg:items-start">
          {/* Left - Overlapping images */}
          <div className="flex-shrink-0 mb-32 lg:mb-0 w-full max-w-full lg:max-w-xl">
            <OverlappingImages {...overlappingImages} />
          </div>
          
          {/* Right - Supercharge goals */}
          <div className="flex-1">
            <SuperchargeGoalsSection {...superchargeGoals} />
          </div>
        </div>
      </div>
    </section>
  );
}; 