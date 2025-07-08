import type { ReactNode } from 'react';

export type BadgeVariant = 'default' | 'outline' | 'dot' | 'number' | 'status' | 'pill' | 'icon';

export interface BadgeProps {
  /** Visual variant of the badge */
  variant?: BadgeVariant;
  /** Color variant */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
  /** Size of the badge */
  size?: 'sm' | 'md' | 'lg';
  /** Content of the badge (ignored for dot variant) */
  children?: ReactNode;
  /** Numerical value for number variant */
  count?: number;
  /** Whether badge should be rendered as hidden */
  hidden?: boolean;
  /** Additional CSS classes */
  className?: string;
}