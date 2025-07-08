import type { ReactNode, HTMLAttributes } from 'react';
import type { BaseComponentProps, ComponentSize } from '../../types';

export type LoadingVariant = 'spinner' | 'dots' | 'pulse' | 'skeleton';

export interface LoadingConfig {
  variant: LoadingVariant;
  size: ComponentSize;
  overlay: boolean;
  text?: string;
}

// Modern interface with proper optional property handling
export interface LoadingProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'>, BaseComponentProps {
  variant?: LoadingVariant;
  size?: ComponentSize;
  text?: string;
  overlay?: boolean;
  color?: string;
  children?: ReactNode;
}