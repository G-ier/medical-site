'use client';

import { cn } from '@/shared/lib/utils';
import { MoodOption } from '../atoms/mood-option';

export type MoodType = 'happy' | 'worried' | 'tired' | 'stressed' | 'sad' | 'angry' | 'pensive' | 'not-sure';

export interface MoodGridProps {
  selectedMood?: MoodType;
  onMoodSelect?: (mood: MoodType) => void;
  className?: string;
}

const MOOD_OPTIONS = [
  // Top row
  { id: 'happy' as MoodType, label: 'Happy', iconPath: '/icons/mood/happy.svg' },
  { id: 'worried' as MoodType, label: 'Worried', iconPath: '/icons/mood/worried.svg' },
  { id: 'tired' as MoodType, label: 'Tired', iconPath: '/icons/mood/tired.svg' },
  { id: 'stressed' as MoodType, label: 'Stressed', iconPath: '/icons/mood/stressed.svg' },
  
  // Bottom row
  { id: 'sad' as MoodType, label: 'Sad', iconPath: '/icons/mood/sad.svg' },
  { id: 'angry' as MoodType, label: 'Angry', iconPath: '/icons/mood/angry.svg' },
  { id: 'pensive' as MoodType, label: 'Pensive', iconPath: '/icons/mood/pensive.svg' },
  { id: 'not-sure' as MoodType, label: 'Not Sure', iconPath: '/icons/mood/not-sure.svg' },
];

export function MoodGrid({
  onMoodSelect,
  className
}: MoodGridProps) {
  return (
    <div className={cn('w-full max-w-2xl mx-auto', className)}>
      {/* Grid container with 4 columns, 2 rows */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {MOOD_OPTIONS.map((mood) => (
          <MoodOption
            key={mood.id}
            id={mood.id}
            label={mood.label}
            iconPath={mood.iconPath}
            onClick={onMoodSelect}
            className="aspect-square"
          />
        ))}
      </div>
    </div>
  );
} 