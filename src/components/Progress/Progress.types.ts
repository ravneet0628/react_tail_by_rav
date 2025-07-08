import type { HTMLAttributes } from 'react';
import type { BaseComponentProps, ComponentSize, ComponentColor } from '../../types';

export type ProgressVariant = 'linear' | 'circular';

export interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'>, BaseComponentProps {
  /**
   * Progress variant
   * @default 'linear'
   */
  variant?: ProgressVariant;
  
  /**
   * Progress size
   * @default 'md'
   */
  size?: ComponentSize;
  
  /**
   * Progress color
   * @default 'primary'
   */
  color?: ComponentColor;
  
  /**
   * Progress value (0-100)
   * @default 0
   */
  value?: number;
  
  /**
   * Maximum value
   * @default 100
   */
  max?: number;
  
  /**
   * Whether to show value text
   * @default false
   */
  showValue?: boolean;
  
  /**
   * Custom value formatter
   */
  formatValue?: (value: number, max: number) => string;
  
  /**
   * Progress label
   */
  label?: string;
  
  /**
   * Indeterminate state (loading without known progress)
   * @default false
   */
  indeterminate?: boolean;
  
  /**
   * Progress bar thickness (for circular variant)
   * @default 4
   */
  thickness?: number;
} 