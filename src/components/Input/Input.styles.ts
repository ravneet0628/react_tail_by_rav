import type { ComponentSize, ComponentColor } from '../../types';
import { cn } from '../../utils';

// Base input styles
const baseStyles = cn(
  'w-full rounded-lg border border-gray-300',
  'bg-white text-gray-900 placeholder-gray-500',
  'transition-colors duration-200',
  'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
  'disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60'
);

// Size variants with proper touch targets
const sizeVariants: Record<ComponentSize, string> = {
  xs: 'h-8 px-3 text-xs',        // 32px height
  sm: 'h-10 px-3 text-sm',       // 40px height
  md: 'h-11 px-4 text-base',     // 44px height - optimal
  lg: 'h-12 px-4 text-lg',       // 48px height
  xl: 'h-14 px-6 text-xl',       // 56px height
  '2xl': 'h-16 px-8 text-2xl'    // 64px height
};

// State colors for validation
const stateStyles: Record<ComponentColor, string> = {
  primary: 'border-blue-500 focus:ring-blue-500 focus:border-blue-600',
  secondary: 'border-gray-500 focus:ring-gray-500 focus:border-gray-600',
  accent: 'border-purple-500 focus:ring-purple-500 focus:border-purple-600',
  success: 'border-green-500 focus:ring-green-500 focus:border-green-600',
  warning: 'border-yellow-500 focus:ring-yellow-500 focus:border-yellow-600',
  error: 'border-red-500 focus:ring-red-500 focus:border-red-600',
  info: 'border-cyan-500 focus:ring-cyan-500 focus:border-cyan-600',
  gray: 'border-gray-400 focus:ring-gray-400 focus:border-gray-500',
  neutral: 'border-gray-400 focus:ring-gray-400 focus:border-gray-500',
  transparent: 'border-transparent focus:ring-gray-400 focus:border-gray-400',
};

/**
 * Generates input class string based on configuration
 */
export function getInputStyles(
  size: ComponentSize, 
  variant: 'default' | 'filled' | 'outlined' = 'default', 
  state?: ComponentColor, 
  disabled = false
): string {
  const classes = [baseStyles, sizeVariants[size]];
  
  // Add variant styles
  if (variant === 'filled') {
    classes.push('bg-gray-50');
  } else if (variant === 'outlined') {
    classes.push('border-2');
  }
  
  // Add state styles
  if (state && stateStyles[state]) {
    classes.push(stateStyles[state]);
  }
  
  return cn(...classes);
}

/**
 * Generates label class string
 */
export function getLabelStyles(size: ComponentSize, required = false): string {
  const sizeClasses = {
    xs: 'text-xs mb-1',
    sm: 'text-sm mb-1.5',
    md: 'text-base mb-2',
    lg: 'text-lg mb-2.5',
    xl: 'text-xl mb-3',
    '2xl': 'text-2xl mb-4',
  };

  const classes = ['block font-medium text-gray-700', sizeClasses[size]];
  
  if (required) {
    classes.push("after:content-['*'] after:text-red-500 after:ml-1");
  }

  return cn(...classes);
}

/**
 * Generates helper text class string
 */
export function getHelperTextStyles(state?: ComponentColor): string {
  const stateColors = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    accent: 'text-purple-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600',
    info: 'text-cyan-600',
    gray: 'text-gray-500',
    neutral: 'text-gray-500',
    transparent: 'text-gray-500',
  };

  const color = state ? stateColors[state] : stateColors.neutral;
  
  return cn('text-xs mt-1.5', color);
}

/**
 * Generates icon wrapper class string
 */
export function getIconWrapperStyles(position: 'left' | 'right', size: ComponentSize): string {
  const positionClasses = {
    left: 'left-3',
    right: 'right-3',
  };
  
  const iconSizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
    '2xl': 'w-7 h-7',
  };

  return cn(
    'absolute inset-y-0 flex items-center pointer-events-none',
    positionClasses[position],
    iconSizes[size]
  );
}