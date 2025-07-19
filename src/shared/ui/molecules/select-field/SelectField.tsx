import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { FormField } from '../form-field';
import { cn } from '@/shared/lib/utils';

export interface SelectOption {
  value: string;
  label: string;
}

const selectFieldVariants = cva(
  "w-full rounded-lg border-2 border-gray-300 bg-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-600 focus-visible:ring-opacity-30 focus-visible:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      textSize: {
        sm: "[&_[data-slot=select-value]]:text-sm [&_[data-placeholder]]:text-sm",
        md: "[&_[data-slot=select-value]]:text-base [&_[data-placeholder]]:text-base", 
        lg: "[&_[data-slot=select-value]]:text-lg [&_[data-placeholder]]:text-lg",
        xl: "[&_[data-slot=select-value]]:text-xl [&_[data-placeholder]]:text-xl",
        "24px": "[&_[data-slot=select-value]]:text-[24px] [&_[data-placeholder]]:text-[24px]",
      },
      height: {
        sm: "!px-3 !py-2 !min-h-8 !h-auto",
        md: "!px-4 !py-3 !min-h-10 !h-auto", 
        lg: "!px-5 !py-4 !min-h-12 !h-auto",
        xl: "!px-5 !py-4 !min-h-14 !h-auto",
        "90px": "!min-h-[90px] !h-auto",
        auto: "!h-auto",
      },
    },
    defaultVariants: {
      textSize: "24px",
      height: "md",
    },
  }
);

export interface SelectFieldProps extends VariantProps<typeof selectFieldVariants> {
  label?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  fieldClassName?: string;
}

export const SelectField = forwardRef<HTMLButtonElement, SelectFieldProps>(
  ({ 
    label, 
    error, 
    required, 
    placeholder, 
    options, 
    value, 
    onValueChange, 
    disabled,
    fieldClassName,
    textSize,
    height,
    ...props 
  }, ref) => {
    return (
      <FormField
        label={label}
        error={error}
        required={required}
        className={fieldClassName}
      >
        <Select value={value} onValueChange={onValueChange} disabled={disabled}>
          <SelectTrigger 
            ref={ref}
            className={cn(selectFieldVariants({ textSize, height }))}
            {...props}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
    );
  }
);

SelectField.displayName = 'SelectField'; 