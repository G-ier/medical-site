'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/shared/lib/utils';

export interface NameInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

/**
 * Name Input Component
 * Displays "My name is" text with an input field for first name
 */
export function NameInput({
  value = '',
  onChange,
  placeholder = 'first name',
  className
}: NameInputProps) {
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  // Helper function to measure text width
  const measureTextWidth = (text: string): number => {
    if (!inputRef.current) return window.innerWidth < 640 ? 64 : 120;
    
    const tempSpan = document.createElement('span');
    tempSpan.style.font = window.getComputedStyle(inputRef.current).font;
    tempSpan.style.position = 'absolute';
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.whiteSpace = 'nowrap';
    tempSpan.textContent = text;
    
    document.body.appendChild(tempSpan);
    const width = tempSpan.offsetWidth;
    document.body.removeChild(tempSpan);
    
    return width;
  };

  // Auto-focus on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
    
    // Dynamically adjust width as user types
    if (inputRef.current) {
      const contentWidth = measureTextWidth(newValue || placeholder);
      const minWidth = window.innerWidth < 640 ? 64 : 120; // Minimum width in pixels
      // Reduce padding to make text closer to the dot
      inputRef.current.style.width = `${Math.max(contentWidth + 5, minWidth)}px`;
    }
  };

  // Set initial width based on placeholder
  useEffect(() => {
    if (inputRef.current) {
      const contentWidth = measureTextWidth(inputValue || placeholder);
      const minWidth = window.innerWidth < 640 ? 64 : 120; // Minimum width in pixels
      // Reduce padding to make text closer to the dot
      inputRef.current.style.width = `${Math.max(contentWidth + 5, minWidth)}px`;
    }
  }, [inputValue, placeholder]);

  return (
    <div className={cn('flex items-center justify-center text-xl sm:text-[40px] font-medium text-black', className)}>
      <span className="mr-2">My name is</span>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="bg-transparent border-none outline-none text-black placeholder-gray-400 w-auto text-left px-0"
      />
      <span>.</span>
    </div>
  );
} 