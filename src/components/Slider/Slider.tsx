import { forwardRef, useId, useRef, useState } from 'react';
import { cn } from '../../utils';
import type { SliderProps } from './Slider.types';
import {
  getSliderStyles,
  sliderLabelStyles,
  sliderHelperTextStyles,
  sliderErrorStyles,
  sliderValueStyles,
  sliderMinMaxStyles,
} from './Slider.styles';

/**
 * Slider component for selecting numeric values from a range
 * 
 * @example
 * ```tsx
 * <Slider 
 *   label="Volume"
 *   value={volume}
 *   min={0}
 *   max={100}
 *   onChange={setVolume}
 *   showValue
 * />
 * ```
 */
export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      size = 'md',
      label,
      helperText,
      error,
      value = 0,
      min = 0,
      max = 100,
      step = 1,
      showValue = false,
      showMinMax = false,
      formatValue,
      onChange,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const sliderId = useId();
    const helpId = useId();
    const trackRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const styles = getSliderStyles(size, disabled);
    
    // Calculate percentage for positioning
    const percentage = ((value - min) / (max - min)) * 100;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseFloat(event.target.value);
      onChange?.(newValue);
    };

    const displayValue = formatValue ? formatValue(value) : value.toString();

    return (
      <div className={cn('w-full', className)}>
        {label && (
          <label htmlFor={sliderId} className={sliderLabelStyles}>
            {label}
          </label>
        )}

        <div className="flex items-center">
          <div className={styles.container}>
            {/* Track */}
            <div ref={trackRef} className={styles.track}>
              {/* Progress */}
              <div 
                className={styles.progress}
                style={{ width: `${percentage}%` }}
              />
            </div>

            {/* Thumb */}
            <div 
              className={styles.thumb}
              style={{ left: `${percentage}%` }}
            />

            {/* Hidden input for accessibility and form integration */}
            <input
              ref={ref}
              id={sliderId}
              type="range"
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={handleChange}
              disabled={disabled}
              className={cn(styles.input, 'absolute inset-0 opacity-0')}
              aria-describedby={
                (helperText || error) ? helpId : undefined
              }
              {...props}
            />
          </div>

          {showValue && (
            <span className={sliderValueStyles}>
              {displayValue}
            </span>
          )}
        </div>

        {showMinMax && (
          <div className={sliderMinMaxStyles}>
            <span>{formatValue ? formatValue(min) : min}</span>
            <span>{formatValue ? formatValue(max) : max}</span>
          </div>
        )}

        {(helperText || error) && (
          <div
            id={helpId}
            className={error ? sliderErrorStyles : sliderHelperTextStyles}
          >
            {error || helperText}
          </div>
        )}
      </div>
    );
  }
);

Slider.displayName = 'Slider'; 