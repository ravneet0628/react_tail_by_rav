import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import type { ButtonProps } from './Button.types';
import { getButtonStyles, getIconStyles, getSpinnerStyles } from './Button.styles';
import { cn } from '../../utils';

/**
 * Button component with multiple variants and full accessibility support
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      color = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      fullWidth = false,
      icon,
      iconPosition = 'left',
      children,
      className,
      onClick,
      type = 'button',
      ...props
    },
    ref
  ) => {
    // Determine if this is an icon-only button
    const iconOnly = !children && !!icon;
    const hasIcon = !!icon;

    // Get button styles
    const buttonStyles = getButtonStyles({
      variant,
      color,
      size,
      disabled: disabled || loading,
      loading,
      fullWidth,
      hasIcon,
      iconOnly,
    });

    // Handle click events
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    };

    // Render icon with appropriate styling
    const renderIcon = (iconElement: React.ReactNode, position: 'left' | 'right') => {
      if (!iconElement) return null;

      const iconStyles = getIconStyles(size, position);
      
      return (
        <span className={iconStyles} aria-hidden="true">
          {iconElement}
        </span>
      );
    };

    // Render loading spinner
    const renderSpinner = () => {
      const spinnerStyles = getSpinnerStyles(size);
      
      return (
        <Loader2 
          className={cn(spinnerStyles, iconOnly ? '' : '-ml-1')} 
          aria-hidden="true"
        />
      );
    };

    // Determine content layout based on loading state and icon position
    const renderContent = () => {
      if (loading) {
        return (
          <>
            {renderSpinner()}
            {!iconOnly && <span className="sr-only">Loading...</span>}
            {!iconOnly && children && <span>{children}</span>}
          </>
        );
      }

      if (iconOnly) {
        return icon;
      }

      if (icon && iconPosition === 'left') {
        return (
          <>
            {renderIcon(icon, 'left')}
            <span>{children}</span>
          </>
        );
      }

      if (icon && iconPosition === 'right') {
        return (
          <>
            <span>{children}</span>
            {renderIcon(icon, 'right')}
          </>
        );
      }

      return <span>{children}</span>;
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={cn(buttonStyles, className)}
        onClick={handleClick}
        aria-disabled={disabled || loading}
        aria-label={iconOnly ? props['aria-label'] || 'Button' : undefined}
        {...props}
      >
        {renderContent()}
      </button>
    );
  }
);

Button.displayName = 'Button';