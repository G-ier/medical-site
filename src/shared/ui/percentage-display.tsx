import { cn } from "@/shared/lib/utils"

interface PercentageDisplayProps {
  value: number;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  color?: 'default' | 'primary' | 'white' | 'success' | 'muted';
  showSign?: boolean;
  precision?: number;
  fontSize?: string;
  className?: string;
}

const sizeClasses = {
  sm: 'text-lg font-semibold',
  md: 'text-2xl font-bold',
  lg: 'text-4xl font-bold',
  xl: 'text-[86px] font-bold',
  custom: 'font-bold'
}

const colorClasses = {
  default: 'text-gray-900',
  primary: 'text-blue-600',
  white: 'text-white',
  success: 'text-green-600',
  muted: 'text-gray-600'
}

export function PercentageDisplay({ 
  value, 
  size = 'md', 
  color = 'default',
  showSign = false,
  precision = 1,
  fontSize,
  className 
}: PercentageDisplayProps) {
  const formattedValue = value.toFixed(precision)
  const sign = showSign && value > 0 ? '+' : ''
  
  return (
    <span 
      className={cn(
        sizeClasses[size],
        colorClasses[color],
        'tabular-nums',
        className
      )}
      style={size === 'custom' && fontSize ? { fontSize } : undefined}
    >
      {sign}{formattedValue}%
    </span>
  )
} 