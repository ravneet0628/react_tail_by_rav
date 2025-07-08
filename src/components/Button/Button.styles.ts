import type { ComponentSize, ComponentColor } from '../../types';
import { cn } from '../../utils';

// Base button styles - clean and simple
const baseStyles = cn(
  'inline-flex items-center justify-center gap-2',
  'font-medium text-center leading-normal',
  'border rounded-lg',
  'transition-colors duration-200',
  'focus:outline-none focus:ring-2 focus:ring-offset-2',
  'disabled:opacity-50 disabled:cursor-not-allowed',
  'cursor-pointer select-none'
);

// Size variants with proper touch targets
const sizeVariants: Record<ComponentSize, string> = {
  xs: 'h-8 px-3 text-xs min-w-16',      // 32px height
  sm: 'h-10 px-4 text-sm min-w-20',     // 40px height  
  md: 'h-11 px-6 text-base min-w-24',   // 44px height - optimal
  lg: 'h-12 px-8 text-lg min-w-28',     // 48px height
  xl: 'h-14 px-10 text-xl min-w-32',    // 56px height
  '2xl': 'h-16 px-12 text-2xl min-w-36' // 64px height
};

// Icon-only button sizes (square)
const iconOnlySizes: Record<ComponentSize, string> = {
  xs: 'w-8 h-8 p-0',
  sm: 'w-10 h-10 p-0',
  md: 'w-11 h-11 p-0',
  lg: 'w-12 h-12 p-0',
  xl: 'w-14 h-14 p-0',
  '2xl': 'w-16 h-16 p-0'
};

// Color variants
const colorVariants = {
  primary: {
    solid: 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 focus:ring-blue-500',
    outline: 'bg-transparent text-blue-600 border-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    ghost: 'bg-transparent text-blue-600 border-transparent hover:bg-blue-50 focus:ring-blue-500'
  },
  secondary: {
    solid: 'bg-gray-600 text-white border-gray-600 hover:bg-gray-700 focus:ring-gray-500',
    outline: 'bg-transparent text-gray-600 border-gray-600 hover:bg-gray-50 focus:ring-gray-500',
    ghost: 'bg-transparent text-gray-600 border-transparent hover:bg-gray-50 focus:ring-gray-500'
  },
  success: {
    solid: 'bg-green-600 text-white border-green-600 hover:bg-green-700 focus:ring-green-500',
    outline: 'bg-transparent text-green-600 border-green-600 hover:bg-green-50 focus:ring-green-500',
    ghost: 'bg-transparent text-green-600 border-transparent hover:bg-green-50 focus:ring-green-500'
  },
  warning: {
    solid: 'bg-yellow-600 text-white border-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500',
    outline: 'bg-transparent text-yellow-600 border-yellow-600 hover:bg-yellow-50 focus:ring-yellow-500',
    ghost: 'bg-transparent text-yellow-600 border-transparent hover:bg-yellow-50 focus:ring-yellow-500'
  },
  error: {
    solid: 'bg-red-600 text-white border-red-600 hover:bg-red-700 focus:ring-red-500',
    outline: 'bg-transparent text-red-600 border-red-600 hover:bg-red-50 focus:ring-red-500',
    ghost: 'bg-transparent text-red-600 border-transparent hover:bg-red-50 focus:ring-red-500'
  }
};

// Variant styles
type ButtonVariant = 'solid' | 'outline' | 'ghost';

export interface ButtonConfig {
  variant?: ButtonVariant;
  color?: ComponentColor;
  size: ComponentSize;
  loading?: boolean;
  fullWidth?: boolean;
  iconOnly?: boolean;
}

/**
 * Generates button class string based on configuration
 */
export function getButtonStyles(config: ButtonConfig): string {
  const {
    variant = 'solid',
    color = 'primary',
    size,
    loading,
    fullWidth,
    iconOnly,
  } = config;

  // Get size classes
  const sizeClasses = iconOnly ? iconOnlySizes[size] : sizeVariants[size];
  
  // Get color classes - handle missing color gracefully
  const colorClasses = colorVariants[color]?.[variant] || colorVariants.primary[variant];

  // Build classes array
  const classes = [baseStyles, sizeClasses, colorClasses];
  
  if (loading) {
    classes.push('opacity-75 cursor-wait');
  }
  
  if (fullWidth) {
    classes.push('w-full');
  }
  
  return cn(...classes);
}

/**
 * Icon sizing based on button size
 */
export function getIconStyles(size: ComponentSize): string {
  const iconSizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4', 
    md: 'w-5 h-5',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
    '2xl': 'w-7 h-7'
  };
  
  return iconSizes[size];
}

/**
 * Spinner sizing for loading states
 */
export function getSpinnerStyles(size: ComponentSize): string {
  const spinnerSizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-4 h-4', 
    lg: 'w-5 h-5',
    xl: 'w-5 h-5',
    '2xl': 'w-6 h-6'
  };
  
  return cn('animate-spin', spinnerSizes[size]);
}