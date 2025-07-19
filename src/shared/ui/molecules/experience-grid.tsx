'use client';

import { cn } from '@/shared/lib/utils';
import { ExperienceOption } from '../atoms/experience-option';

export type ExperienceType = 'first-timer' | 'somewhat-familiar' | 'experienced';

export interface ExperienceGridProps {
  selectedExperience?: ExperienceType;
  onExperienceSelect?: (experience: ExperienceType) => void;
  className?: string;
}

const EXPERIENCE_OPTIONS = [
  { 
    id: 'first-timer' as ExperienceType, 
    label: 'First Timer',
    icon: '🌱' // Green leaf emoji to represent new/beginner
  },
  { 
    id: 'somewhat-familiar' as ExperienceType, 
    label: 'Somewhat\nFamiliar',
    icon: '🍀' // Four-leaf clover to represent some experience
  },
  { 
    id: 'experienced' as ExperienceType, 
    label: 'Experienced',
    icon: '🍀' // Four-leaf clover for experienced (matching the design)
  },
];

export function ExperienceGrid({
  selectedExperience,
  onExperienceSelect,
  className
}: ExperienceGridProps) {
  return (
    <div className={cn('w-full max-w-2xl mx-auto', className)}>
      {/* Grid container with 3 columns, 1 row */}
      <div className="grid grid-cols-3 gap-6">
        {EXPERIENCE_OPTIONS.map((experience) => (
          <ExperienceOption
            key={experience.id}
            id={experience.id}
            label={experience.label}
            icon={experience.icon}
            isSelected={selectedExperience === experience.id}
            onClick={onExperienceSelect}
            className="aspect-square"
          />
        ))}
      </div>
    </div>
  );
} 