import type { ReactNode, HTMLAttributes } from 'react';
import type { BaseComponentProps } from '../../types';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export type TooltipTrigger = 'hover' | 'click' | 'focus';

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style' | 'content' | 'color'>, BaseComponentProps {
  /**
   * Tooltip content
   */
  content: ReactNode;
  
  /**
   * Tooltip position relative to trigger
   * @default 'top'
   */
  position?: TooltipPosition;
  
  /**
   * How the tooltip is triggered
   * @default 'hover'
   */
  trigger?: TooltipTrigger;
  
  /**
   * Delay before showing tooltip (ms)
   * @default 200
   */
  delay?: number;
  
  /**
   * Whether tooltip is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Custom arrow display
   * @default true
   */
  arrow?: boolean;
  
  /**
   * Maximum width of tooltip
   * @default '320px'
   */
  maxWidth?: string;
  
  /**
   * Element that triggers the tooltip
   */
  children: ReactNode;
} 