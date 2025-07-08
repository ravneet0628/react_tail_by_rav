import { forwardRef } from 'react';
import { cn } from '../../utils';
import type { ProgressProps } from './Progress.types';
import {
  getLinearProgressStyles,
  getCircularProgressStyles,
  progressLabelStyles,
  progressValueStyles,
  progressContainerStyles,
} from './Progress.styles';

/**
 * Progress component for showing completion status
 * 
 * @example
 * ```tsx
 * <Progress 
 *   variant="linear"
 *   value={75}
 *   label="Upload Progress"
 *   showValue
 * />
 * ```
 */
export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      variant = 'linear',
      size = 'md',
      color = 'primary',
      value = 0,
      max = 100,
      showValue = false,
      formatValue,
      label,
      indeterminate = false,
      thickness = 4,
      className,
      ...props
    },
    ref
  ) => {
    // Calculate percentage
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    
    // Format display value
    const displayValue = formatValue 
      ? formatValue(value, max)
      : `${Math.round(percentage)}%`;

    if (variant === 'circular') {
      const { container, svg: svgSize } = getCircularProgressStyles(size);
      const radius = (svgSize - thickness * 2) / 2;
      const circumference = 2 * Math.PI * radius;
      const strokeDashoffset = indeterminate 
        ? circumference * 0.25 
        : circumference - (percentage / 100) * circumference;

      return (
        <div ref={ref} className={cn(progressContainerStyles, className)} {...props}>
          {label && <div className={progressLabelStyles}>{label}</div>}
          
          <div className={container}>
            <svg
              width={svgSize}
              height={svgSize}
              className={indeterminate ? 'animate-spin' : ''}
            >
              {/* Background circle */}
              <circle
                cx={svgSize / 2}
                cy={svgSize / 2}
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth={thickness}
                className="text-gray-200"
              />
              
              {/* Progress circle */}
              <circle
                cx={svgSize / 2}
                cy={svgSize / 2}
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth={thickness}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className={getProgressColor(color)}
                style={{
                  transform: 'rotate(-90deg)',
                  transformOrigin: '50% 50%',
                  transition: indeterminate ? 'none' : 'stroke-dashoffset 0.3s ease-in-out',
                }}
              />
            </svg>
            
            {showValue && !indeterminate && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-900">
                  {displayValue}
                </span>
              </div>
            )}
          </div>
        </div>
      );
    }

    // Linear variant
    const { container, bar } = getLinearProgressStyles(size, color, indeterminate);

    return (
      <div ref={ref} className={cn(progressContainerStyles, className)} {...props}>
        {label && <div className={progressLabelStyles}>{label}</div>}
        
        <div className={container} role="progressbar" aria-valuenow={value} aria-valuemax={max}>
          <div 
            className={bar}
            style={{
              width: indeterminate ? '100%' : `${percentage}%`,
            }}
          />
        </div>
        
        {showValue && !indeterminate && (
          <div className={progressValueStyles}>
            {displayValue}
          </div>
        )}
      </div>
    );
  }
);

Progress.displayName = 'Progress';

function getProgressColor(color: ProgressProps['color']): string {
  const colors = {
    primary: 'text-primary-600',
    secondary: 'text-gray-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600',
    info: 'text-blue-600',
    gray: 'text-gray-600',
    neutral: 'text-neutral-600',
  };
  return colors[color!] || colors.primary;
} 