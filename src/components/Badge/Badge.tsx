import { forwardRef } from 'react';
import { cn } from '../../utils';
import type { BadgeProps } from './Badge.types';
import { getBadgeStyles } from './Badge.styles';

/**
 * Badge component for status indicators and labels
 * 
 * @example
 * ```tsx
 * <Badge variant="solid" color="success" size="md">
 *   New
 * </Badge>
 * ```
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'solid',
      color = 'primary',
      size = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const badgeStyles = getBadgeStyles({
      variant,
      color,
      size
    });
    
    return (
      <span
        ref={ref}
        className={cn(badgeStyles, className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';