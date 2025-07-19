'use client';

import { useCallback } from 'react';

export interface QuestionOption {
  id: string;
  label: string;
  value: string;
}

export interface QuestionListProps {
  options: QuestionOption[];
  selectedValue?: string;
  onSelect: (value: string) => void;
  className?: string;
  showArrows?: boolean;
}

export function QuestionList({ 
  options, 
  selectedValue, 
  onSelect, 
  className = '',
  showArrows = true
}: QuestionListProps) {
  const handleOptionClick = useCallback((value: string) => {
    onSelect(value);
  }, [onSelect]);

  return (
    <div className={`flex flex-col items-center space-y-4 w-full ${className}`}>
      <div className="flex flex-col space-y-4 w-full max-w-md">
        {options.map((option) => (
        <button
          key={option.id}
          onClick={() => handleOptionClick(option.value)}
          className={`
            flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200
            ${selectedValue === option.value 
              ? 'border-black bg-gray-50' 
              : 'border-gray-200 bg-white hover:border-gray-300'
            }
            text-left text-gray-900 font-medium
          `}
                    >
              <span>{option.label}</span>
              {showArrows && (
                <svg 
                  className="min-w-5 min-h-5 max-w-5 max-h-5 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              )}
            </button>
        ))}
      </div>
    </div>
  );
} 