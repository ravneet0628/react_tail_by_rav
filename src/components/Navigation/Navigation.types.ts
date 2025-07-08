import type { ReactNode, HTMLAttributes } from 'react';
import type { BaseComponentProps } from '../../types';

/**
 * Simplified navigation variants focusing on common use cases
 */
export type NavigationVariant = 'horizontal' | 'vertical' | 'breadcrumb' | 'tabs' | 'pagination' | 'mobile' | 'mega';

/**
 * Navigation item interface
 */
export interface NavigationItem {
  /**
   * Unique identifier
   */
  id: string;
  
  /**
   * Display label
   */
  label: string;
  
  /**
   * Optional icon
   */
  icon?: ReactNode;
  
  /**
   * Navigation URL
   */
  href?: string;
  
  /**
   * Link target
   */
  target?: '_blank' | '_self';
  
  /**
   * Disabled state
   */
  disabled?: boolean;
  
  /**
   * Accessibility label
   */
  'aria-label'?: string;
  
  /**
   * Child navigation items for mega menus
   */
  children?: NavigationItem[];
}

/**
 * Navigation component props
 */
export interface NavigationProps extends Omit<HTMLAttributes<HTMLElement>, 'className' | 'color'>, BaseComponentProps {
  /**
   * Navigation style variant
   * @default 'horizontal'
   */
  variant?: NavigationVariant;
  
  /**
   * Navigation items
   */
  items: NavigationItem[];
  
  /**
   * Currently active item ID
   */
  activeItem?: string;
  
  /**
   * Item click handler
   */
  onItemClick?: (item: NavigationItem) => void;
  
  /**
   * Optional logo/brand element
   */
  logo?: ReactNode;
  
  /**
   * Optional action elements (buttons, etc.)
   */
  actions?: ReactNode;
}