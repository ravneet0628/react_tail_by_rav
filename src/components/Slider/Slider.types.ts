import type { InputHTMLAttributes } from 'react';
import type { BaseComponentProps, ComponentSize } from '../../types';

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'style' | 'className' | 'color'>, BaseComponentProps {
  /**
   * Slider size
   * @default 'md'
   */
  size?: Exclude<ComponentSize, '2xl'>;
  
  /**
   * Slider label
   */
  label?: string;
  
  /**
   * Helper text
   */
  helperText?: string;
  
  /**
   * Error message
   */
  error?: string;
  
  /**
   * Current value
   */
  value?: number;
  
  /**
   * Minimum value
   * @default 0
   */
  min?: number;
  
  /**
   * Maximum value
   * @default 100
   */
  max?: number;
  
  /**
   * Step increment
   * @default 1
   */
  step?: number;
  
  /**
   * Whether to show value
   * @default false
   */
  showValue?: boolean;
  
  /**
   * Whether to show min/max labels
   * @default false
   */
  showMinMax?: boolean;
  
  /**
   * Custom value formatter
   */
  formatValue?: (value: number) => string;
  
  /**
   * Change handler
   */
  onChange?: (value: number) => void;
  
  /**
   * Whether slider is disabled
   * @default false
   */
  disabled?: boolean;
} 