'use client'

import { cn } from "@/shared/lib/utils"
import { forwardRef, Ref } from "react"

// Define discriminated union for props
export type TextInputInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'as'> & {
  as?: 'input';
  label?: string;
  error?: string;
  success?: boolean;
  helperText?: string;
  variant?: 'default' | 'minimal' | 'filled' | 'white' | 'custom';
  inputSize?: 'sm' | 'md' | 'lg' | 'custom';
  width?: string;
  height?: string;
  fontSize?: string;
  textAlign?: 'left' | 'center' | 'right';
  borderRadius?: string;
};

export type TextInputTextareaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'as'> & {
  as: 'textarea';
  label?: string;
  error?: string;
  success?: boolean;
  helperText?: string;
  variant?: 'default' | 'minimal' | 'filled' | 'white' | 'custom';
  inputSize?: 'sm' | 'md' | 'lg' | 'custom';
  width?: string;
  height?: string;
  fontSize?: string;
  textAlign?: 'left' | 'center' | 'right';
  borderRadius?: string;
};

export type TextInputProps = TextInputInputProps | TextInputTextareaProps;

function isTextarea(props: TextInputProps): props is TextInputTextareaProps {
  return props.as === 'textarea';
}

function filterInputProps(props: TextInputInputProps): React.InputHTMLAttributes<HTMLInputElement> {
  // Remove custom props
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { label, error, success, helperText, variant, inputSize, width, height, fontSize, textAlign, borderRadius, ...inputProps } = props;
  return inputProps;
}

function filterTextareaProps(props: TextInputTextareaProps): React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  // Remove custom props
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { label, error, success, helperText, variant, inputSize, width, height, fontSize, textAlign, borderRadius, ...textareaProps } = props;
  return textareaProps;
}

const variantClasses = {
  default: 'border-2 border-gray-300 bg-white focus:border-blue-500',
  minimal: 'border-0 border-b-2 border-gray-300 bg-transparent focus:border-blue-500 rounded-none',
  filled: 'border-2 border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white',
  white: 'border border-gray-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20',
  custom: ''
}

const sizeClasses = {
  sm: "px-3 py-2 min-h-8",
  md: "px-4 py-3 min-h-10", 
  lg: "px-5 py-4 min-h-12",
  xl: "px-5 py-4 min-h-14",
  "90px": "min-h-[90px]",
  auto: "min-h-auto",
  custom: ''
}

export const TextInput = forwardRef<HTMLElement, TextInputProps>(
  (props, ref) => {
    const {
      label,
      error,
      success,
      helperText,
      variant = 'default',
      inputSize = 'md',
      width,
      height,
      fontSize,
      textAlign = 'left',
      borderRadius,
      className,
      // as = 'input', // default to 'input'
      // ..._rest
    } = props;
    const customStyles: React.CSSProperties = {};

    if (width) customStyles.width = width;
    if (height) customStyles.height = height;
    if (fontSize) customStyles.fontSize = fontSize;
    if (borderRadius) customStyles.borderRadius = borderRadius;

    const textAlignClasses = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    };

    if (variant === 'custom') {
      if (isTextarea(props)) {
        return (
          <textarea
            ref={ref as Ref<HTMLTextAreaElement>}
            style={customStyles}
            className={cn(
              'transition-all duration-200',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              textAlignClasses[textAlign],
              error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
              success && 'border-green-500 focus:border-green-500 focus:ring-green-500',
              className
            )}
            {...filterTextareaProps(props)}
          />
        );
      }
      // Default to input with proper centering and no spinners
      return (
        <input
          ref={ref as Ref<HTMLInputElement>}
          style={customStyles}
          className={cn(
            'transition-all duration-200',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            // Hide number input spinner buttons completely
            '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
            '[&::-moz-appearance]:textfield',
            textAlignClasses[textAlign],
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            success && 'border-green-500 focus:border-green-500 focus:ring-green-500',
            className
          )}
          {...filterInputProps(props)}
        />
      );
    }

    const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        {/* Render input or textarea based on 'as' prop */}
        {isTextarea(props) ? (
          <textarea
            ref={ref as Ref<HTMLTextAreaElement>}
            id={inputId}
            style={customStyles}
            className={cn(
              'w-full rounded-lg transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              variantClasses[variant],
              sizeClasses[inputSize],
              textAlignClasses[textAlign],
              error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
              success && 'border-green-500 focus:border-green-500 focus:ring-green-500',
              className
            )}
            {...filterTextareaProps(props)}
          />
        ) : (
          <input
            ref={ref as Ref<HTMLInputElement>}
            id={inputId}
            style={customStyles}
            className={cn(
              'w-full rounded-lg transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              // Hide number input spinner buttons completely for all browsers
              '[appearance:textfield]',
              '[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0',
              '[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0',
              '-moz-appearance:textfield',
              variantClasses[variant],
              sizeClasses[inputSize],
              textAlignClasses[textAlign],
              error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
              success && 'border-green-500 focus:border-green-500 focus:ring-green-500',
              className
            )}
            {...filterInputProps(props)}
          />
        )}
        {(error || helperText) && (
          <p className={cn('mt-1 text-sm', error ? 'text-red-600' : 'text-gray-500')}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput" 