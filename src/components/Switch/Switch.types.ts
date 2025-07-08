import type { InputHTMLAttributes, ReactNode } from 'react';
import type { BaseComponentProps, ComponentSize } from '../../types';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'style' | 'className' | 'color'>, BaseComponentProps {
  /**
   * Switch size
   * @default 'md'
   */
  size?: Exclude<ComponentSize, '2xl'>;
  
  /**
   * Switch label
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
   * Whether switch is checked
   */
  checked?: boolean;
  
  /**
   * Whether switch is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Change handler
   */
  onChange?: (checked: boolean) => void;
  
  /**
   * Description to show when checked
   */
  checkedLabel?: ReactNode;
  
  /**
   * Description to show when unchecked
   */
  uncheckedLabel?: ReactNode;
} 