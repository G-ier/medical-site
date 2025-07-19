'use client';

import { useState } from 'react';
import { Button, ButtonProps } from '@/shared/ui/button';
import { cn } from '@/shared/lib/utils';

export interface PaymentButtonProps extends Omit<ButtonProps, 'onClick'> {
  isProcessing?: boolean;
  onPayment?: () => void | Promise<void>;
  processingText?: string;
  amount?: string;
}

export function PaymentButton({
  children,
  isProcessing = false,
  onPayment,
  processingText = "Processing...",
  amount,
  className,
  variant = "cta-primary",
  size = "lg",
  disabled = false,
  ...props
}: PaymentButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (isProcessing || isLoading || !onPayment) return;
    
    setIsLoading(true);
    try {
      await onPayment();
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isDisabled = isProcessing || isLoading || disabled;
  const displayText = isDisabled ? processingText : children;

  return (
    <Button
      onClick={handleClick}
      disabled={isDisabled}
      variant={variant}
      size={size}
      className={cn(
        'w-full font-semibold transition-all duration-200',
        isDisabled && 'opacity-70 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {isDisabled && (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2" />
      )}
      {displayText}
      {amount && !isDisabled && (
        <span className="ml-2 font-bold">{amount}</span>
      )}
    </Button>
  );
} 