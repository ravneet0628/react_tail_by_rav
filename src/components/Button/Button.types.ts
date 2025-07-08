import type { ReactNode, ButtonHTMLAttributes } from 'react';
import type { BaseComponentProps, ComponentSize, ComponentColor } from '../../types';

export type ButtonVariant = 'solid' | 'outline' | 'ghost';

export interface ButtonConfig {
  variant?: ButtonVariant;
  color?: ComponentColor;
  size: ComponentSize;
  loading?: boolean;
  fullWidth?: boolean;
  iconOnly?: boolean;
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