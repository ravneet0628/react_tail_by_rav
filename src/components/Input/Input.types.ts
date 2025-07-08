import type { ReactNode, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';
import type { BaseComponentProps, ComponentSize, FieldState } from '../../types';

export type InputVariant = 'default' | 'filled' | 'outlined' | 'underlined';

// Common input properties with optional placeholders
interface CommonInputProps extends BaseComponentProps {
  label?: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  size?: ComponentSize;
  variant?: InputVariant;
  state?: FieldState;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

// Native input props with proper optional handling
export interface NativeInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'style' | 'className' | 'placeholder' | 'required' | 'disabled'>,
    CommonInputProps {}

// Textarea props with proper optional handling  
export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'style' | 'className' | 'placeholder' | 'required' | 'disabled'>,
    CommonInputProps {
  rows?: number;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

// Select props with proper optional handling
export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'style' | 'className' | 'required' | 'disabled'>,
    CommonInputProps {
  options?: Array<{ value: string; label: string; disabled?: boolean }>;
}

export interface InputConfig {
  variant: InputVariant;
  size: ComponentSize;
  state: FieldState;
  hasLeftIcon: boolean;
  hasRightIcon: boolean;
  disabled: boolean;
}

export type InputProps = NativeInputProps | TextareaProps | SelectProps;