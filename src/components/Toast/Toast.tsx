import { forwardRef, useEffect } from 'react';
import { 
  Info, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  X 
} from 'lucide-react';
import { cn } from '../../utils';
import type { ToastProps } from './Toast.types';
import {
  getToastStyles,
  toastIconStyles,
  toastTitleStyles,
  toastDescriptionStyles,
  toastDismissButtonStyles,
  toastActionButtonStyles,
} from './Toast.styles';

/**
 * Toast component for displaying temporary notification messages
 * 
 * @example
 * ```tsx
 * <Toast 
 *   variant="success" 
 *   title="Success" 
 *   description="Your changes have been saved"
 *   onDismiss={() => {}}
 * />
 * ```
 */
export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      variant = 'info',
      title,
      description,
      dismissible = true,
      duration = 5000,
      onDismiss,
      icon,
      action,
      className,
      ...props
    },
    ref
  ) => {
    // Auto dismiss
    useEffect(() => {
      if (duration > 0 && onDismiss) {
        const timer = setTimeout(onDismiss, duration);
        return () => clearTimeout(timer);
      }
    }, [duration, onDismiss]);

    // Default icons for each variant
    const defaultIcons = {
      info: Info,
      success: CheckCircle,
      warning: AlertTriangle,
      error: XCircle,
    };

    const IconComponent = icon === null ? null : (icon || defaultIcons[variant]);

    const handleDismiss = () => {
      onDismiss?.();
    };

    return (
      <div
        ref={ref}
        className={cn(getToastStyles(variant), className)}
        role="alert"
        aria-live="polite"
        {...props}
      >
        <div className="flex items-start">
          {IconComponent && (
            <div className={cn(toastIconStyles, getIconColor(variant))}>
              {typeof IconComponent === 'function' ? <IconComponent /> : IconComponent}
            </div>
          )}
          
          <div className="ml-3 flex-1">
            {title && (
              <p className={toastTitleStyles}>
                {title}
              </p>
            )}
            
            {description && (
              <div className={toastDescriptionStyles}>
                {description}
              </div>
            )}
          </div>

          <div className="ml-4 flex flex-shrink-0 space-x-2">
            {action && (
              <button
                type="button"
                className={toastActionButtonStyles}
                onClick={action.onClick}
              >
                {action.label}
              </button>
            )}

            {dismissible && (
              <button
                type="button"
                className={toastDismissButtonStyles}
                onClick={handleDismiss}
                aria-label="Dismiss notification"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Toast.displayName = 'Toast';

function getIconColor(variant: ToastProps['variant']): string {
  const colors = {
    info: 'text-blue-500',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500',
  };
  return colors[variant!] || colors.info;
} 