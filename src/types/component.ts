import { ReactNode, HTMLAttributes } from 'react';

/**
 * Standard component sizes following touch target accessibility guidelines
 */
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Semantic color system for consistent theming
 */
export type ComponentColor = 
  | 'primary'
  | 'secondary' 
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'gray'
  | 'neutral';

/**
 * Standard spacing scale
 */
export type Spacing = 
  | 'none' 
  | 'xs' 
  | 'sm' 
  | 'md' 
  | 'lg' 
  | 'xl' 
  | '2xl';

/**
 * Theme mode types
 */
export type ThemeMode = 'light' | 'dark' | 'system';

/**
 * Position types for positioning elements
 */
export type Position = 'top' | 'bottom' | 'left' | 'right' | 'center';

/**
 * Field state types for form validation
 */
export type FieldState = 'default' | 'error' | 'success' | 'warning';

/**
 * Base props that all components should extend (without HTML conflicts)
 */
export interface BaseComponentProps {
  /**
   * Custom CSS class name
   */
  className?: string;
  
  /**
   * Component size following accessibility guidelines
   * @default 'md'
   */
  size?: ComponentSize;
  
  /**
   * Component color theme
   * @default 'primary'
   */
  color?: ComponentColor;
  
  /**
   * Children content
   */
  children?: ReactNode;
}

/**
 * Interactive component props for clickable elements
 */
export interface InteractiveComponentProps extends BaseComponentProps {
  /**
   * Whether component is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Loading state with spinner
   * @default false
   */
  loading?: boolean;
  
  /**
   * Full width display
   * @default false
   */
  fullWidth?: boolean;
}

/**
 * Form component props for input elements
 */
export interface FormComponentProps extends InteractiveComponentProps {
  /**
   * Field label
   */
  label?: string;
  
  /**
   * Placeholder text
   */
  placeholder?: string;
  
  /**
   * Helper text
   */
  helperText?: string;
  
  /**
   * Error message
   */
  error?: string;
  
  /**
   * Required field indicator
   * @default false
   */
  required?: boolean;
}

/**
 * Standard configuration interface for component styling functions
 */
export interface ComponentStyleConfig {
  size: ComponentSize;
  color: ComponentColor;
  variant: string;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

/**
 * Standard variant types for different component styles
 */
export type StandardVariant = 'solid' | 'outline' | 'ghost';

/**
 * Icon position for components with icons
 */
export type IconPosition = 'left' | 'right';

/**
 * Common component state types
 */
export type ComponentState = 'default' | 'hover' | 'focus' | 'active' | 'disabled';

/**
 * Responsive breakpoint system
 */
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Animation timing presets
 */
export type AnimationDuration = 'fast' | 'normal' | 'slow';

/**
 * Standard touch target sizes (in pixels)
 */
export const TOUCH_TARGET_SIZES: Record<ComponentSize, number> = {
  xs: 32,   // 32px - minimum
  sm: 40,   // 40px - comfortable mobile
  md: 44,   // 44px - optimal (default)
  lg: 48,   // 48px - comfortable desktop
  xl: 56,   // 56px - large emphasis
  '2xl': 64 // 64px - maximum
} as const;

/**
 * Standard spacing values (in rem)
 */
export const SPACING_SCALE: Record<Spacing, string> = {
  none: '0',
  xs: '0.5rem',   // 8px
  sm: '0.75rem',  // 12px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  '2xl': '3rem'   // 48px
} as const; 