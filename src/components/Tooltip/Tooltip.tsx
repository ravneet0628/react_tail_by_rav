import { forwardRef, useState, useRef, useId } from 'react';
import { cn } from '../../utils';
import type { TooltipProps } from './Tooltip.types';
import {
  getTooltipStyles,
  getArrowStyles,
  tooltipWrapperStyles,
} from './Tooltip.styles';

/**
 * Tooltip component for displaying contextual information
 * 
 * @example
 * ```tsx
 * <Tooltip content="This is a helpful tooltip">
 *   <button>Hover me</button>
 * </Tooltip>
 * ```
 */
export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      content,
      position = 'top',
      trigger = 'hover',
      delay = 200,
      disabled = false,
      arrow = true,
      maxWidth = '320px',
      children,
      className,
      ...props
    },
    ref
  ) => {
    const [visible, setVisible] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const tooltipId = useId();

    if (disabled) {
      return <>{children}</>;
    }

    const showTooltip = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setVisible(true);
      }, delay);
    };

    const hideTooltip = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setVisible(false);
    };

    const toggleTooltip = () => {
      if (visible) {
        hideTooltip();
      } else {
        showTooltip();
      }
    };

    const triggerProps = {
      ...(trigger === 'hover' && {
        onMouseEnter: showTooltip,
        onMouseLeave: hideTooltip,
        onFocus: showTooltip,
        onBlur: hideTooltip,
      }),
      ...(trigger === 'click' && {
        onClick: toggleTooltip,
      }),
      ...(trigger === 'focus' && {
        onFocus: showTooltip,
        onBlur: hideTooltip,
      }),
      'aria-describedby': visible ? tooltipId : undefined,
    };

    return (
      <div 
        ref={ref}
        className={cn(tooltipWrapperStyles, className)}
        {...props}
      >
        <div {...triggerProps}>
          {children}
        </div>
        
        <div
          id={tooltipId}
          role="tooltip"
          className={getTooltipStyles(position, visible)}
          style={{ maxWidth }}
        >
          {content}
          {arrow && <div className={getArrowStyles(position)} />}
        </div>
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip'; 