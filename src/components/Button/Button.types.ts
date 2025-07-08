import type { ReactNode, ButtonHTMLAttributes } from 'react';
import type { BaseComponentProps, ComponentSize, ComponentColor } from '../../types';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';

export interface ButtonConfig {
  variant: ButtonVariant;
  size: ComponentSize;
  disabled: boolean;
  loading: boolean;
  fullWidth: boolean;
  hasIcon: boolean;
}

// Modern interface with proper optional property handling
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'size' | 'style' | 'className'>, BaseComponentProps {
  variant?: ButtonVariant;
  size?: ComponentSize;
  color?: ComponentColor;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  children?: ReactNode;
}