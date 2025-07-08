import type { ReactNode, HTMLAttributes } from 'react';
import type { BaseComponentProps, Spacing } from '../../types';

export type CardVariant = 'default' | 'outlined' | 'elevated' | 'filled';

export interface CardConfig {
  variant: CardVariant;
  padding: Spacing;
  clickable: boolean;
  fullHeight: boolean;
  hasImage: boolean;
}

// Modern interface with proper optional property handling
export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'>, BaseComponentProps {
  variant?: CardVariant;
  padding?: Spacing;
  clickable?: boolean;
  fullHeight?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  image?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
}