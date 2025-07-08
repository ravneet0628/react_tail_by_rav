import type { ReactNode, HTMLAttributes } from 'react';
import type { BaseComponentProps, StandardVariant } from '../../types';

/**
 * Badge variants using standardized types
 */
export type BadgeVariant = StandardVariant | 'number';

/**
 * Badge component props following standardized architecture
 */
export interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'className' | 'color'>, BaseComponentProps {
  /**
   * Visual style variant
   * @default 'solid'
   */
  variant?: BadgeVariant;
  
  /**
   * Badge content
   */
  children?: ReactNode;
  
  /**
   * Count number for number variant
   */
  count?: number;
  
  /**
   * Whether to hide the badge
   */
  hidden?: boolean;
}