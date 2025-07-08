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
      count,
      hidden = false,
      ...props
    },
    ref
  ) => {
    // Handle hidden state
    if (hidden) {
      return null;
    }
    
    const badgeStyles = getBadgeStyles({
      variant: variant === 'number' ? 'solid' : variant,
      color,
      size
    });
    
    // Determine content based on variant
    const content = variant === 'number' && count !== undefined ? count.toString() : children;
    
    return (
      <span
        ref={ref}
        className={cn(badgeStyles, className)}
        {...props}
      >
        {content}
      </span>
    );
  }
);

Badge.displayName = 'Badge';