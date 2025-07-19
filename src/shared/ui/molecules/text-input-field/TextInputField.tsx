import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { TextInput, TextInputInputProps, TextInputTextareaProps } from '@/shared/ui/text-input';
import { FormField } from '../form-field';
import { cn } from '@/shared/lib/utils';

const textInputFieldVariants = cva(
  "w-full rounded-lg border-2 border-gray-300 bg-white transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:ring-opacity-30 focus:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
  {
    variants: {
      textSize: {
        sm: "text-sm",
        md: "text-base", 
        lg: "text-lg",
        xl: "text-xl",
        "24px": "text-[24px]",
      },
      height: {
        sm: "px-3 py-2 min-h-8",
        md: "px-4 py-3 min-h-10", 
        lg: "px-5 py-4 min-h-12",
        xl: "px-5 py-4 min-h-14",
        "90px": "min-h-[90px]",
        auto: "h-auto",
      },
    },
    defaultVariants: {
      textSize: "24px",
      height: "md",
    },
  }
);

// Define discriminated union for TextInputField props
export type TextInputFieldInputProps = Omit<TextInputInputProps, 'label' | 'error' | 'inputSize' | 'height'> & 
  VariantProps<typeof textInputFieldVariants> & {
    as?: 'input';
    label?: string;
    error?: string;
    required?: boolean;
    fieldClassName?: string;
  };

export type TextInputFieldTextareaProps = Omit<TextInputTextareaProps, 'label' | 'error' | 'inputSize' | 'height'> & 
  VariantProps<typeof textInputFieldVariants> & {
    as: 'textarea';
    label?: string;
    error?: string;
    required?: boolean;
    fieldClassName?: string;
  };

export type TextInputFieldProps = TextInputFieldInputProps | TextInputFieldTextareaProps;

// Support both input and textarea refs
type TextInputFieldRef = HTMLInputElement | HTMLTextAreaElement;

function isTextareaField(props: TextInputFieldProps): props is TextInputFieldTextareaProps {
  return props.as === 'textarea';
}

function filterInputFieldProps(props: TextInputFieldInputProps) {
  const { label, error, required, fieldClassName, textSize, height, ...inputProps } = props;
  return { label, error, required, fieldClassName, textSize, height, inputProps };
}

function filterTextareaFieldProps(props: TextInputFieldTextareaProps) {
  const { label, error, required, fieldClassName, textSize, height, ...textareaProps } = props;
  return { label, error, required, fieldClassName, textSize, height, textareaProps };
}

export const TextInputField = forwardRef<TextInputFieldRef, TextInputFieldProps>(
  (props, ref) => {
    if (isTextareaField(props)) {
      const { label, error, required, fieldClassName, textSize, height, textareaProps } = filterTextareaFieldProps(props);
      
      return (
        <FormField
          label={label}
          error={error}
          required={required}
          className={fieldClassName}
        >
          <TextInput
            ref={ref}
            className={cn(textInputFieldVariants({ textSize, height }))}
            variant="custom"
            as="textarea"
            {...textareaProps}
          />
        </FormField>
      );
    }
    
    const { label, error, required, fieldClassName, textSize, height, inputProps } = filterInputFieldProps(props);
    
    return (
      <FormField
        label={label}
        error={error}
        required={required}
        className={fieldClassName}
      >
        <TextInput
          ref={ref}
          className={cn(textInputFieldVariants({ textSize, height }))}
          variant="custom"
          as="input"
          {...inputProps}
        />
      </FormField>
    );
  }
);

TextInputField.displayName = 'TextInputField'; 