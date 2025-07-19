import React from 'react';
import { cn } from '@/shared/lib/utils';
import { HealthGoalItem } from './health-goal-item';
import { SanityImage } from '@/shared/types/sanity';

export interface SuperchargeGoalsSectionProps {
  title: {
    mainText: string;
    highlightedText: string;
  };
  goals: Array<{
    image: SanityImage;
    title: string;
    description: string;
  }>;
  variant?: 'default' | 'compact';
  className?: string;
}

export const SuperchargeGoalsSection: React.FC<SuperchargeGoalsSectionProps> = ({
  title,
  goals,
  variant = 'default',
  className
}) => {
  const containerClasses = cn(
    'py-16 px-8',
    {
      'py-12 px-6': variant === 'compact',
      'py-16 px-8': variant === 'default',
    },
    className
  );

  return (
    <div className={containerClasses}>
      <div className="w-full max-w-full sm:max-w-[485px] mx-auto">
        {/* Section Title */}
        <div className="text-left mb-16">
          <h2 className="text-[48px] md:text-[56px] font-normal text-[#171717] leading-tight">
            {title.mainText}{' '}
            <span className="bg-gradient-to-r from-[#CAB8FF] to-[#6F69AC] bg-clip-text text-transparent">
              {title.highlightedText}
            </span>
          </h2>
        </div>

        {/* Goals List */}
        <div className="space-y-12">
          {goals.map((goal, index) => (
            <HealthGoalItem
              key={index}
              image={goal.image}
              title={goal.title}
              description={goal.description}
              variant={variant === 'compact' ? 'compact' : 'default'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 