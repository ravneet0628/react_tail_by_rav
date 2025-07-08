import type { ReactNode, HTMLAttributes } from 'react';
import type { BaseComponentProps, ComponentSize, ComponentColor } from '../../types';

export type LoadingVariant = 'spinner' | 'dots' | 'pulse' | 'progress';

export interface LoadingConfig {
  variant: LoadingVariant;
  size: ComponentSize;
  overlay: boolean;
  text?: string;
  progress?: number;
  fullScreen?: boolean;
}

// Modern interface with proper optional property handling
export interface LoadingProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'>, BaseComponentProps {
  variant?: LoadingVariant;
  size?: ComponentSize;
  color?: ComponentColor;
  progress?: number;
  text?: string;
  fullScreen?: boolean;
  overlay?: boolean;
  children?: ReactNode;
}