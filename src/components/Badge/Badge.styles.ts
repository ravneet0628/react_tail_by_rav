import type { ComponentSize, ComponentColor } from '../../types';
import type { BadgeVariant } from './Badge.types';
import { cn } from '../../utils';

/**
 * Badge style configuration
 */
export interface BadgeStyleConfig {
  variant: BadgeVariant;
  color: ComponentColor;
  size: ComponentSize;
}

// Base badge styles
const baseStyles = cn(
  'inline-flex items-center justify-center',
  'font-medium leading-none',
  'rounded-full border',
  'transition-colors duration-200'
);

// Size variants with proper touch targets for interactive badges
const sizeVariants: Record<ComponentSize, string> = {
  xs: 'h-5 px-2 text-xs min-w-5',      // 20px height
  sm: 'h-6 px-2.5 text-xs min-w-6',    // 24px height
  md: 'h-7 px-3 text-sm min-w-7',      // 28px height
  lg: 'h-8 px-4 text-sm min-w-8',      // 32px height
  xl: 'h-10 px-5 text-base min-w-10',  // 40px height
  '2xl': 'h-12 px-6 text-lg min-w-12'  // 48px height
};

// Color and variant combinations
const colorVariants: Record<ComponentColor, Record<BadgeVariant, string>> = {
  primary: {
    solid: 'bg-primary-600 text-white border-primary-600',
    outline: 'bg-transparent text-primary-600 border-primary-600',
    ghost: 'bg-primary-50 text-primary-700 border-transparent'
  },
  secondary: {
    solid: 'bg-gray-600 text-white border-gray-600',
    outline: 'bg-transparent text-gray-600 border-gray-600',
    ghost: 'bg-gray-50 text-gray-700 border-transparent'
  },
  success: {
    solid: 'bg-success-600 text-white border-success-600',
    outline: 'bg-transparent text-success-600 border-success-600',
    ghost: 'bg-success-50 text-success-700 border-transparent'
  },
  warning: {
    solid: 'bg-warning-600 text-white border-warning-600',
    outline: 'bg-transparent text-warning-600 border-warning-600',
    ghost: 'bg-warning-50 text-warning-700 border-transparent'
  },
  error: {
    solid: 'bg-error-600 text-white border-error-600',
    outline: 'bg-transparent text-error-600 border-error-600',
    ghost: 'bg-error-50 text-error-700 border-transparent'
  },
  info: {
    solid: 'bg-info-600 text-white border-info-600',
    outline: 'bg-transparent text-info-600 border-info-600',
    ghost: 'bg-info-50 text-info-700 border-transparent'
  },
  gray: {
    solid: 'bg-gray-600 text-white border-gray-600',
    outline: 'bg-transparent text-gray-600 border-gray-600',
    ghost: 'bg-gray-100 text-gray-700 border-transparent'
  },
  neutral: {
    solid: 'bg-gray-500 text-white border-gray-500',
    outline: 'bg-transparent text-gray-500 border-gray-500',
    ghost: 'bg-gray-50 text-gray-600 border-transparent'
  }
};

/**
 * Generates badge class string based on configuration
 */
export function getBadgeStyles(config: BadgeStyleConfig): string {
  const { variant, color, size } = config;
  
  const sizeClasses = sizeVariants[size];
  const colorClasses = colorVariants[color]?.[variant] || colorVariants.primary[variant];
  
  return cn(baseStyles, sizeClasses, colorClasses);
}

/**
 * Generates icon class string for badge icons
 */
export function getBadgeIconStyles(size: ComponentSize): string {
  const iconSizes = {
    xs: 'w-3 h-3',
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-4 h-4',
    xl: 'w-5 h-5',
    '2xl': 'w-6 h-6',
  };

  return `${iconSizes[size]} flex-shrink-0`;
}

/**
 * Generates close button class string for dismissible badges
 */
export function getBadgeCloseStyles(size: ComponentSize): string {
  const buttonSizes = {
    xs: 'w-3 h-3 ml-1',
    sm: 'w-3 h-3 ml-1',
    md: 'w-4 h-4 ml-1.5',
    lg: 'w-4 h-4 ml-2',
    xl: 'w-5 h-5 ml-2',
    '2xl': 'w-6 h-6 ml-2.5',
  };

  const baseClasses = [
    'cursor-pointer',
    'hover:opacity-70',
    'transition-opacity',
    'duration-150',
    'flex-shrink-0',
  ].join(' ');

  return `${baseClasses} ${buttonSizes[size]}`;
}