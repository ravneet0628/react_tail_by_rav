import React, { forwardRef } from 'react';
import { cn } from '../../utils';
import type { InputProps } from './Input.types';
import {
  getInputFieldStyles,
  getLabelStyles,
  getHelperTextStyles,
  getIconWrapperStyles,
} from './Input.styles';

/**
 * Versatile input component supporting multiple variants (text, password, textarea, select, etc.)
 * with built-in accessibility, error handling, icon support, and dark-mode styling.
 *
 * @example
 * ```tsx
 * <Input label="Email" variant="email" placeholder="you@example.com" />
 * ```
 */
export const Input = forwardRef<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  InputProps
>((props, ref) => {
  const {
    variant = 'text',
    label,
    placeholder,
    helperText,
    error,
    icon,
    iconPosition = 'left',
    size = 'md',
    className,
    disabled = false,
    required = false,
    options = [], // only for select
    rows = 3, // only for textarea
    ...rest
  } = props as any; // rest typed later per variant

  const hasIcon = Boolean(icon);
  const hasIconLeft = hasIcon && iconPosition === 'left';
  const hasIconRight = hasIcon && iconPosition === 'right';
  const fieldStyles = getInputFieldStyles({
    size,
    error: Boolean(error),
    disabled,
    hasIconLeft,
    hasIconRight,
  });

  // Render icon if provided
  const renderIcon = () => {
    if (!icon) return null;
    return (
      <span className={getIconWrapperStyles(iconPosition, size)} aria-hidden="true">
        {icon}
      </span>
    );
  };

  // Determine field element based on variant
  const renderField = () => {
    switch (variant) {
      case 'textarea':
        // eslint-disable-next-line react/jsx-props-no-spreading
        return (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            rows={rows}
            placeholder={placeholder}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={helperText || error ? `${rest.id}-help` : undefined}
            className={cn(fieldStyles, className, 'resize-none', hasIcon && 'relative')}
            {...(rest as any)}
          />
        );
      case 'select':
        return (
          <select
            ref={ref as React.Ref<HTMLSelectElement>}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={helperText || error ? `${rest.id}-help` : undefined}
            className={cn(fieldStyles, className, hasIcon && 'appearance-none')}
            {...(rest as any)}
          >
            {placeholder && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}
            {options.map((opt: { label: string; value: string | number }) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            type={variant === 'password' ? 'password' : variant === 'email' ? 'email' : variant === 'number' ? 'number' : variant === 'search' ? 'search' : 'text'}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            aria-invalid={Boolean(error)}
            aria-describedby={helperText || error ? `${rest.id}-help` : undefined}
            className={cn(fieldStyles, className)}
            {...(rest as any)}
          />
        );
    }
  };

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={(rest as any).id} className={getLabelStyles(Boolean(error))}>
          {label}
          {required && <span className="ml-0.5 text-error-600">*</span>}
        </label>
      )}
      <div className="relative w-full">
        {hasIcon && renderIcon()}
        {renderField()}
      </div>
      {(helperText || error) && (
        <p id={`${(rest as any).id}-help`} className={getHelperTextStyles(Boolean(error))}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';