import { forwardRef } from 'react';
import { 
  Info, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  X,
  Bell
} from 'lucide-react';
import type { AlertProps } from './Alert.types';
import { 
  getAlertStyles, 
  getAlertIconStyles, 
  getDismissButtonStyles,
  getAlertTitleStyles,
  getAlertContentStyles,
  getAlertActionStyles
} from './Alert.styles';
import { cn } from '../../utils';

/**
 * Alert component for displaying important messages to users
 * 
 * @example
 * ```tsx
 * <Alert variant="success" title="Success" dismissible>
 *   Your changes have been saved successfully.
 * </Alert>
 * ```
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = 'info',
      title,
      dismissible = false,
      icon = true,
      onDismiss,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const hasIcon = !!icon;

    // Get alert styles
    const alertStyles = getAlertStyles({
      variant,
      dismissible,
      icon: hasIcon,
    });

    // Default icons for each variant
    const defaultIcons = {
      info: Info,
      success: CheckCircle,
      warning: AlertTriangle,
      error: XCircle,
      banner: Bell,
      toast: Info,
      inline: Info,
    };

    // Get the appropriate icon
    const IconComponent = icon ? null : defaultIcons[variant];

    // Handle dismiss
    const handleDismiss = () => {
      onDismiss?.();
    };

    return (
      <div
        ref={ref}
        className={cn(alertStyles, className)}
        role="alert"
        aria-live={variant === 'error' ? 'assertive' : 'polite'}
        {...props}
      >
        {/* Icon */}
        {(hasIcon && (icon || IconComponent)) && (
          <div className={getAlertIconStyles(variant)}>
            {icon || (IconComponent && <IconComponent className="w-5 h-5" />)}
          </div>
        )}

        {/* Dismiss button */}
        {dismissible && (
          <button
            type="button"
            className={getDismissButtonStyles()}
            onClick={handleDismiss}
            aria-label="Dismiss alert"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Content */}
        <div className={hasIcon ? 'ml-2' : ''}>
          {/* Title */}
          {title && (
            <div className={getAlertTitleStyles(variant)}>
              {title}
            </div>
          )}

          {/* Message */}
          {children && (
            <div className={getAlertContentStyles()}>
              {children}
            </div>
          )}


        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';