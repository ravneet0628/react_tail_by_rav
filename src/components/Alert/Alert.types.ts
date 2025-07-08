import type { ReactNode, HTMLAttributes } from 'react';
import type { BaseComponentProps, ComponentVariant } from '../../types';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertConfig {
  variant: AlertVariant;
  dismissible?: boolean;
  icon?: boolean;
  title?: string;
}

// Modern interface with proper optional className handling
export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style'>, BaseComponentProps {
  variant?: AlertVariant;
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: ReactNode | boolean;
  children?: ReactNode;
}