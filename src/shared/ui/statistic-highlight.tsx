import { cn } from "@/shared/lib/utils"
import { PercentageDisplay } from "./percentage-display"

interface StatisticHighlightProps {
  preText?: string;
  percentage: number;
  timeframe?: string;
  postText?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  textColor?: 'default' | 'white' | 'muted';
  className?: string;
  // New props for custom multi-line layout
  lines?: {
    text: string;
    fontSize: string;
  }[];
  useCustomLayout?: boolean;
}

const sizeClasses = {
  sm: {
    preText: 'text-base',
    percentage: 'xl',
    timeframe: 'text-base',
    postText: 'text-sm'
  },
  md: {
    preText: 'text-lg',
    percentage: 'xl',
    timeframe: 'text-lg',
    postText: 'text-base'
  },
  lg: {
    preText: 'text-xl',
    percentage: 'xl',
    timeframe: 'text-xl',
    postText: 'text-lg'
  },
  xl: {
    preText: 'text-[36px]',
    percentage: 'xl',
    timeframe: 'text-[36px]',
    postText: 'text-[36px]'
  }
}

const textColorClasses = {
  default: 'text-gray-900',
  white: 'text-white',
  muted: 'text-gray-600'
}

export function StatisticHighlight({
  preText = "Experience an average weight loss of",
  percentage,
  timeframe = "within a year",
  postText = "with GLP-1",
  size = 'lg',
  textColor = 'white',
  className,
  lines,
  useCustomLayout = false
}: StatisticHighlightProps) {
  const sizeConfig = sizeClasses[size]
  const textColorClass = textColorClasses[textColor]

  // Custom layout for specific text requirements
  if (useCustomLayout && lines) {
    return (
      <div className={cn("space-y-2", className)}>
        {lines.map((line, index) => {
          // Check if this line contains the percentage
          if (line.text.includes('14.9%')) {
            const parts = line.text.split('14.9%')
            return (
              <div key={index} className="flex items-baseline gap-1">
                {parts[0] && (
                  <span 
                    className={cn(textColorClass, "font-normal")}
                    style={{ fontSize: line.fontSize }}
                  >
                    {parts[0]}
                  </span>
                )}
                <PercentageDisplay
                  value={percentage}
                  size="custom"
                  color={textColor}
                  precision={1}
                  fontSize={line.fontSize}
                  className="leading-none"
                />
                {parts[1] && (
                  <span 
                    className={cn(textColorClass, "font-normal")}
                    style={{ fontSize: line.fontSize }}
                  >
                    {parts[1]}
                  </span>
                )}
              </div>
            )
          }
          
          return (
            <p 
              key={index}
              className={cn(textColorClass, "font-normal leading-relaxed")}
              style={{ fontSize: line.fontSize }}
            >
              {line.text}
            </p>
          )
        })}
      </div>
    )
  }

  return (
    <div className={cn("space-y-2", className)}>
      {/* Pre-text */}
      {preText && (
        <p className={cn(
          sizeConfig.preText,
          textColorClass,
          "font-normal leading-relaxed"
        )}>
          {preText}
        </p>
      )}

      {/* Main statistic */}
      <div className="space-y-1">
        <div className="flex items-baseline gap-2 flex-wrap">
          <PercentageDisplay
            value={percentage}
            size="xl"
            color={textColor}
            precision={1}
            className="leading-none"
          />
          {timeframe && (
            <span className={cn(
              sizeConfig.timeframe,
              textColorClass,
              "font-normal"
            )}>
              {timeframe}
            </span>
          )}
        </div>
      </div>

      {/* Post-text */}
      {postText && (
        <p className={cn(
          sizeConfig.postText,
          textColorClass,
          "font-normal opacity-90"
        )}>
          {postText}
        </p>
      )}
    </div>
  )
} 