import { cn } from "@/shared/lib/utils"

interface NumberDisplayProps {
  value: number;
  unit?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'default' | 'primary' | 'white' | 'muted';
  className?: string;
}

const sizeClasses = {
  sm: 'text-lg font-semibold',
  md: 'text-2xl font-bold',
  lg: 'text-4xl font-bold',
  xl: 'text-6xl font-bold'
}

const colorClasses = {
  default: 'text-gray-900',
  primary: 'text-blue-600',
  white: 'text-white',
  muted: 'text-gray-600'
}

export function NumberDisplay({ 
  value, 
  unit, 
  size = 'md', 
  color = 'default',
  className 
}: NumberDisplayProps) {
  return (
    <span className={cn(
      sizeClasses[size],
      colorClasses[color],
      'tabular-nums',
      className
    )}>
      {value.toLocaleString()}
      {unit && <span className="ml-1 text-current opacity-80">{unit}</span>}
    </span>
  )
} 