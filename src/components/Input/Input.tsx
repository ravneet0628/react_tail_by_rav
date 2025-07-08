import { forwardRef, useId } from 'react';
import { cn } from '../../utils';
import type { InputProps } from './Input.types';
import {
  getInputStyles,
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

  // Generate unique IDs for accessibility
  const inputId = useId();
  const helpId = useId();

  const hasIcon = Boolean(icon);
  const hasIconLeft = hasIcon && iconPosition === 'left';
  const hasIconRight = hasIcon && iconPosition === 'right';
  
  // Build field styles using the correct function signature
  const fieldStyles = getInputStyles(
    size,
    'default', // Use default variant styling
    error ? 'error' : undefined,
    disabled
  );

  // Add icon padding to field styles
  const iconPadding = hasIconLeft ? 'pl-8' : hasIconRight ? 'pr-8' : '';
  const finalFieldStyles = cn(fieldStyles, iconPadding);

  // Render icon if provided
  const renderIcon = () => {
    if (!icon) return null;
    return (
      <span className={getIconWrapperStyles(iconPosition, size)} aria-hidden="true">
        {icon}
      </span>
    );
  };

  // Render the appropriate input field based on variant
  const renderField = () => {
    const commonProps = {
      ref: ref as any,
      id: inputId,
      className: cn(finalFieldStyles, className),
      placeholder,
      disabled,
      required,
      'aria-invalid': Boolean(error),
      'aria-describedby': (helperText || error) ? helpId : undefined,
      ...rest,
    };

    switch (variant) {
      case 'textarea':
        return <textarea rows={rows} {...commonProps} />;
      
      case 'select':
        return (
          <select {...commonProps}>
            {options.map((option: { value: string; label: string; disabled?: boolean }) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
        );
      
      default:
        return <input type={variant} {...commonProps} />;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={inputId} className={getLabelStyles(size, required)}>
          {label}
          {required && <span className="ml-0.5 text-error-600">*</span>}
        </label>
      )}
      <div className="relative w-full">
        {hasIcon && renderIcon()}
        {renderField()}
      </div>
      {(helperText || error) && (
        <p id={helpId} className={getHelperTextStyles(error ? 'error' : undefined)}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';