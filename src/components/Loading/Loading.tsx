import { forwardRef, useId } from 'react';
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
    // Generate unique ID for accessibility
    const loadingId = useId();
    
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

    // Color classes - including all ComponentColor variants
    const colorClasses: Record<string, string> = {
      primary: 'text-[oklch(var(--color-primary-500))]',
      secondary: 'text-[oklch(0.5_0_0)]',
      accent: 'text-[oklch(var(--color-primary-500))]',
      success: 'text-[oklch(var(--color-success-500))]',
      warning: 'text-[oklch(var(--color-warning-500))]',
      error: 'text-[oklch(var(--color-danger-500))]',
      info: 'text-[oklch(var(--color-primary-500))]',
      gray: 'text-[oklch(0.5_0_0)]',
      neutral: 'text-[oklch(0.5_0_0)]',
      transparent: 'text-[oklch(0.5_0_0)]',
    };
  
    const sizeClass = sizeClasses[size];
    const textSizeClass = textSizeClasses[size];
    const colorClass = colorClasses[color] || 'text-[oklch(var(--color-primary-500))]';

    // Base container styles
    const containerStyles = cn(
      'flex items-center justify-center',
      size === 'xs' && 'space-x-1',
      size === 'sm' && 'space-x-1.5', 
      size === 'md' && 'space-x-2',
      size === 'lg' && 'space-x-3',
      size === 'xl' && 'space-x-4',
      fullScreen && 'fixed inset-0 bg-white/80 dark:bg-[oklch(0.1_0_0/0.8)] z-50',
      className
    );

    // Render content based on variant
    const renderLoadingContent = () => {
      switch (variant) {
        case 'dots':
          return (
            <div className={cn('flex space-x-1', colorClass)}>
              {[1, 2, 3].map((dot) => (
                <div
                  key={dot}
                  className={cn(
                    'rounded-full animate-pulse',
                    sizeClass.replace('w-', 'w-2 h-2').replace('h-', '')
                  )}
                  style={{
                    animationDelay: `${dot * 0.2}s`,
                    backgroundColor: 'currentColor',
                  }}
                />
              ))}
            </div>
          );

        case 'progress':
          return (
            <div className="w-full max-w-md">
              <div className="bg-[oklch(0.9_0_0)] rounded-full h-2 dark:bg-[oklch(0.3_0_0)]">
                <div 
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    color === 'primary' && 'bg-[oklch(var(--color-primary-500))]',
                    color === 'secondary' && 'bg-[oklch(0.5_0_0)]',
                    color === 'success' && 'bg-[oklch(var(--color-success-500))]',
                    color === 'warning' && 'bg-[oklch(var(--color-warning-500))]',
                    color === 'error' && 'bg-[oklch(var(--color-danger-500))]',
                  )}
                  style={{ width: `${progress}%` }}
                />
              </div>
              {progress !== undefined && (
                <div className="text-sm text-[oklch(0.5_0_0)] dark:text-[oklch(0.6_0_0)] mt-2 text-center">
                  {progress}%
                </div>
              )}
            </div>
          );

        case 'pulse':
          return (
            <div className={cn('animate-pulse rounded-full', sizeClass, colorClass)} 
                 style={{ backgroundColor: 'currentColor' }} />
          );

        case 'spinner':
        default:
          return (
            <Loader2 
              className={cn('animate-spin', sizeClass, colorClass)}
              aria-hidden="true"
            />
          );
      }
    };

    return (
      <div 
        ref={ref}
        id={loadingId}
        className={containerStyles}
        role="status"
        aria-live="polite"
        aria-label={text || 'Loading'}
        {...props}
      >
        <div className={cn(
          'flex flex-col items-center gap-3',
          text && variant !== 'progress' && 'space-y-2'
        )}>
          {renderLoadingContent()}
          {text && variant !== 'progress' && (
            <p className={cn('text-center', textSizeClass, colorClass)}>
              {text}
            </p>
          )}
          {children}
        </div>
      </div>
    );
  }
);

Loading.displayName = 'Loading';