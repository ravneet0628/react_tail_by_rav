import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import type { LoadingProps } from './Loading.types';
import { cn } from '../../utils';

/**
 * Loading component with multiple variants for different use cases
 * 
 * @example
 * ```tsx
 * <Loading variant="spinner" size="md" text="Loading..." />
 * <Loading variant="progress" progress={75} />
 * ```
 */
export const Loading = forwardRef<HTMLDivElement, LoadingProps>(
  (
    {
      variant = 'spinner',
      size = 'md',
      color = 'primary',
      progress = 0,
      text,
      fullScreen = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    // Size classes
    const sizeClasses = {
      xs: 'w-4 h-4',
      sm: 'w-5 h-5',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-12 h-12',
      '2xl': 'w-16 h-16',
    } as const;

    // Text size classes
    const textSizeClasses = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    } as const;

    // Color classes
    const colorClasses = {
      primary: 'text-primary-500',
      secondary: 'text-secondary-500',
      success: 'text-success-500',
      warning: 'text-warning-500',
      error: 'text-error-500',
    } as Record<string, string>;

    const sizeClass = sizeClasses[size];
    const textSizeClass = textSizeClasses[size];
    const colorClass = colorClasses[color] || 'text-primary-500';

    // Render different loading variants
    const renderLoadingIndicator = () => {
      switch (variant) {
        case 'spinner':
          return (
            <Loader2 
              className={cn('animate-spin', sizeClass, colorClass)} 
              aria-hidden="true"
            />
          );

        case 'dots':
          return (
            <div className="flex space-x-1" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={cn(
                    'rounded-full animate-pulse',
                    sizeClass,
                    colorClass.replace('text-', 'bg-')
                  )}
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '1s',
                  }}
                />
              ))}
            </div>
          );

        case 'bars':
          return (
            <div className="flex space-x-1" aria-hidden="true">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={cn(
                    'w-1 animate-pulse',
                    colorClass.replace('text-', 'bg-')
                  )}
                  style={{
                    height: `${Math.random() * 20 + 10}px`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '1.2s',
                  }}
                />
              ))}
            </div>
          );

        case 'pulse':
          return (
            <div
              className={cn(
                'rounded-full animate-pulse',
                sizeClass,
                colorClass.replace('text-', 'bg-')
              )}
              aria-hidden="true"
            />
          );

        case 'skeleton':
          return (
            <div className="space-y-3" aria-hidden="true">
              <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-4 rounded w-3/4" />
              <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-4 rounded w-1/2" />
              <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-4 rounded w-5/6" />
            </div>
          );

        case 'progress':
          return (
            <div className="w-full" aria-hidden="true">
              <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                <div
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    colorClass.replace('text-', 'bg-')
                  )}
                  style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
                />
              </div>
              {progress > 0 && (
                <div className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {Math.round(progress)}%
                </div>
              )}
            </div>
          );

        case 'linear':
          return (
            <div className="w-full overflow-hidden bg-gray-200 rounded dark:bg-gray-700" aria-hidden="true">
              <div
                className={cn(
                  'h-1 animate-bounce',
                  colorClass.replace('text-', 'bg-')
                )}
                style={{
                  width: '30%',
                }}
              />
            </div>
          );

        default:
          return null;
      }
    };

    // Container classes
    const containerClasses = cn(
      'flex flex-col items-center justify-center gap-3',
      fullScreen && 'fixed inset-0 bg-white/80 dark:bg-gray-900/80 z-50',
      className
    );

    return (
      <div
        ref={ref}
        className={containerClasses}
        role="status"
        aria-label={text || 'Loading'}
        {...props}
      >
        {renderLoadingIndicator()}
        
        {/* Loading text */}
        {text && (
          <div className={cn('text-gray-600 dark:text-gray-400 font-medium', textSizeClass)}>
            {text}
          </div>
        )}

        {/* Additional content */}
        {children && (
          <div className={textSizeClass}>
            {children}
          </div>
        )}

        {/* Screen reader text */}
        <span className="sr-only">
          {text || 'Loading, please wait...'}
        </span>
      </div>
    );
  }
);

Loading.displayName = 'Loading';