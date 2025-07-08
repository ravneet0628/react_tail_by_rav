import type { ReactNode, HTMLAttributes } from 'react';
import type { BaseComponentProps } from '../../types';

export type ToastVariant = 'info' | 'success' | 'warning' | 'error';
export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style' | 'color'>, BaseComponentProps {
  /**
   * Toast variant
   * @default 'info'
   */
  variant?: ToastVariant;
  
  /**
   * Toast title
   */
  title?: string;
  
  /**
   * Toast description/content
   */
  description?: ReactNode;
  
  /**
   * Whether the toast can be dismissed
   * @default true
   */
  dismissible?: boolean;
  
  /**
   * Auto dismiss duration in milliseconds
   * @default 5000
   */
  duration?: number;
  
  /**
   * Dismiss callback
   */
  onDismiss?: () => void;
  
  /**
   * Custom icon
   */
  icon?: ReactNode;
  
  /**
   * Action button
   */
  action?: {
    label: string;
    onClick: () => void;
  };
}

export interface ToastContextValue {
  toasts: ToastItem[];
  addToast: (toast: Omit<ToastItem, 'id'>) => void;
  removeToast: (id: string) => void;
  clearToasts: () => void;
}

export interface ToastItem extends Omit<ToastProps, 'onDismiss'> {
  id: string;
}

export interface ToastProviderProps {
  children: ReactNode;
  position?: ToastPosition;
  maxToasts?: number;
} 