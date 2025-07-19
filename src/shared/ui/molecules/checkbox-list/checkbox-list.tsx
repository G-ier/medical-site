'use client';

import { useCallback } from 'react';

export interface CheckboxOption {
  id: string;
  label: string;
  value: string;
}

export interface CheckboxListProps {
  options: CheckboxOption[];
  selectedValues?: string[];
  onSelectionChange: (selectedValues: string[], value: string) => void;
  className?: string;
}

export function CheckboxList({ 
  options, 
  selectedValues = [], 
  onSelectionChange, 
  className = '' 
}: CheckboxListProps) {
  const handleOptionToggle = useCallback((value: string) => {
    const isSelected = selectedValues.includes(value);
    let newSelection: string[];
    
    if (isSelected) {
      // Remove from selection
      newSelection = selectedValues.filter(v => v !== value);
    } else {
      // Add to selection
      newSelection = [...selectedValues, value];
    }
    
    onSelectionChange(newSelection, value);
  }, [selectedValues, onSelectionChange]);

  return (
    <div className={`flex flex-col items-center space-y-4 w-full ${className}`}>
      <div className="flex flex-col space-y-4 w-full max-w-md">
        {options.map((option) => {
          const isSelected = selectedValues.includes(option.value);
          return (
            <button
              key={option.id}
              onClick={() => handleOptionToggle(option.value)}
              className={`
                flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200
                ${isSelected 
                  ? 'border-black bg-gray-50' 
                  : 'border-gray-200 bg-white hover:border-gray-300'
                }
                text-left text-gray-900 font-medium
              `}
            >
              <span className="text-[24px] font-normal text-black">{option.label}</span>
              <div className={`
                min-w-5 min-h-5 border-2 rounded transition-all duration-200
                ${isSelected 
                  ? 'border-black bg-black' 
                  : 'border-gray-300 bg-white'
                }
                flex items-center justify-center
              `}>
                {isSelected && (
                  <svg 
                    className="w-3 h-3 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
} 