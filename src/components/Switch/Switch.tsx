import { forwardRef, useId } from 'react';
import { cn } from '../../utils';
import type { SwitchProps } from './Switch.types';
import {
  getSwitchStyles,
  switchLabelStyles,
  switchHelperTextStyles,
  switchErrorStyles,
  switchWrapperStyles,
  switchContentStyles,
  switchDescriptionStyles,
} from './Switch.styles';

/**
 * Switch component for binary choices with smooth animations
 * 
 * @example
 * ```tsx
 * <Switch 
 *   label="Enable notifications"
 *   checked={enabled}
 *   onChange={setEnabled}
 * />
 * ```
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      size = 'md',
      label,
      helperText,
      error,
      checked = false,
      disabled = false,
      onChange,
      checkedLabel,
      uncheckedLabel,
      className,
      ...props
    },
    ref
  ) => {
    const switchId = useId();
    const helpId = useId();

    const { container: containerStyles, thumb: thumbStyles } = getSwitchStyles(size, checked, disabled);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.checked);
    };

    const currentDescription = checked ? checkedLabel : uncheckedLabel;

    return (
      <div className={cn('flex flex-col', className)}>
        <div className={switchWrapperStyles}>
          <button
            type="button"
            className={containerStyles}
            role="switch"
            aria-checked={checked}
            aria-labelledby={label ? `${switchId}-label` : undefined}
            aria-describedby={
              (helperText || error || currentDescription) ? helpId : undefined
            }
            disabled={disabled}
            onClick={() => !disabled && onChange?.(!checked)}
          >
            <span className={thumbStyles} />
            <input
              ref={ref}
              type="checkbox"
              className="sr-only"
              checked={checked}
              onChange={handleChange}
              disabled={disabled}
              {...props}
            />
          </button>

          {(label || currentDescription) && (
            <div className={switchContentStyles}>
              {label && (
                <label
                  id={`${switchId}-label`}
                  className={switchLabelStyles}
                >
                  {label}
                </label>
              )}
              
              {currentDescription && (
                <div className={switchDescriptionStyles}>
                  {currentDescription}
                </div>
              )}
            </div>
          )}
        </div>

        {(helperText || error) && (
          <div
            id={helpId}
            className={error ? switchErrorStyles : switchHelperTextStyles}
          >
            {error || helperText}
          </div>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch'; 