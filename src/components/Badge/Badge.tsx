import React from 'react';
import { getBadgeStyles } from './Badge.styles';
import type { BadgeProps } from './Badge.types';
import { cn } from '../../utils';

/**
 * Badge component for status or counts.
 * Supports multiple visual variants.
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  color = 'primary',
  size = 'md',
  children,
  count,
  hidden = false,
  className,
}) => {
  if (hidden) return null;

  // Special handling for dot variant
  if (variant === 'dot') {
    const dotSize = {
      sm: 'w-1.5 h-1.5',
      md: 'w-2 h-2',
      lg: 'w-2.5 h-2.5',
    }[size];

    return (
      <span
        className={cn(
          'inline-block rounded-full bg-current',
          dotSize,
          `text-${color}-500`,
          className
        )}
        aria-label="status-indicator"
      />
    );
  }

  const content = variant === 'number' ? count : children;

  const styles = getBadgeStyles({ variant, color, size });

  return (
    <span className={cn(styles, className)}>{content}</span>
  );
};

Badge.displayName = 'Badge';