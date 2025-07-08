import { cva } from '../../utils';
import type { ComponentSize } from '../../types';
import type { ButtonConfig } from './Button.types';

// Base button styles that apply to all variants
const baseStyles = [
  'inline-flex',
  'items-center',
  'justify-center',
  'font-medium',
  'transition-all',
  'duration-200',
  'border',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-offset-2',
  'disabled:cursor-not-allowed',
  'disabled:opacity-50',
].join(' ');

// Size variants
const sizeVariants = {
  xs: 'px-2 py-1 text-xs rounded gap-1',
  sm: 'px-3 py-1.5 text-sm rounded gap-1.5',
  md: 'px-4 py-2 text-sm rounded-md gap-2',
  lg: 'px-6 py-3 text-base rounded-md gap-2',
  xl: 'px-8 py-4 text-lg rounded-lg gap-3',
  '2xl': 'px-10 py-5 text-xl rounded-lg gap-3',
};

// Variant and color combinations
const variantStyles = {
  primary: {
    primary: 'bg-primary-500 text-white border-primary-500 hover:bg-primary-600 focus:ring-primary-500 dark:bg-primary-600 dark:hover:bg-primary-700',
    secondary: 'bg-secondary-500 text-white border-secondary-500 hover:bg-secondary-600 focus:ring-secondary-500 dark:bg-secondary-600 dark:hover:bg-secondary-700',
    success: 'bg-success-500 text-white border-success-500 hover:bg-success-600 focus:ring-success-500 dark:bg-success-600 dark:hover:bg-success-700',
    warning: 'bg-warning-500 text-white border-warning-500 hover:bg-warning-600 focus:ring-warning-500 dark:bg-warning-600 dark:hover:bg-warning-700',
    error: 'bg-error-500 text-white border-error-500 hover:bg-error-600 focus:ring-error-500 dark:bg-error-600 dark:hover:bg-error-700',
    neutral: 'bg-gray-500 text-white border-gray-500 hover:bg-gray-600 focus:ring-gray-500 dark:bg-gray-600 dark:hover:bg-gray-700',
  },
  secondary: {
    primary: 'bg-primary-50 text-primary-700 border-primary-200 hover:bg-primary-100 focus:ring-primary-500 dark:bg-primary-900/20 dark:text-primary-300 dark:border-primary-800 dark:hover:bg-primary-900/30',
    secondary: 'bg-secondary-50 text-secondary-700 border-secondary-200 hover:bg-secondary-100 focus:ring-secondary-500 dark:bg-secondary-900/20 dark:text-secondary-300 dark:border-secondary-800 dark:hover:bg-secondary-900/30',
    success: 'bg-success-50 text-success-700 border-success-200 hover:bg-success-100 focus:ring-success-500 dark:bg-success-900/20 dark:text-success-300 dark:border-success-800 dark:hover:bg-success-900/30',
    warning: 'bg-warning-50 text-warning-700 border-warning-200 hover:bg-warning-100 focus:ring-warning-500 dark:bg-warning-900/20 dark:text-warning-300 dark:border-warning-800 dark:hover:bg-warning-900/30',
    error: 'bg-error-50 text-error-700 border-error-200 hover:bg-error-100 focus:ring-error-500 dark:bg-error-900/20 dark:text-error-300 dark:border-error-800 dark:hover:bg-error-900/30',
    neutral: 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 focus:ring-gray-500 dark:bg-gray-900/20 dark:text-gray-300 dark:border-gray-800 dark:hover:bg-gray-900/30',
  },
  outline: {
    primary: 'bg-transparent text-primary-600 border-primary-300 hover:bg-primary-50 focus:ring-primary-500 dark:text-primary-400 dark:border-primary-600 dark:hover:bg-primary-900/20',
    secondary: 'bg-transparent text-secondary-600 border-secondary-300 hover:bg-secondary-50 focus:ring-secondary-500 dark:text-secondary-400 dark:border-secondary-600 dark:hover:bg-secondary-900/20',
    success: 'bg-transparent text-success-600 border-success-300 hover:bg-success-50 focus:ring-success-500 dark:text-success-400 dark:border-success-600 dark:hover:bg-success-900/20',
    warning: 'bg-transparent text-warning-600 border-warning-300 hover:bg-warning-50 focus:ring-warning-500 dark:text-warning-400 dark:border-warning-600 dark:hover:bg-warning-900/20',
    error: 'bg-transparent text-error-600 border-error-300 hover:bg-error-50 focus:ring-error-500 dark:text-error-400 dark:border-error-600 dark:hover:bg-error-900/20',
    neutral: 'bg-transparent text-gray-600 border-gray-300 hover:bg-gray-50 focus:ring-gray-500 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-900/20',
  },
  ghost: {
    primary: 'bg-transparent text-primary-600 border-transparent hover:bg-primary-50 focus:ring-primary-500 dark:text-primary-400 dark:hover:bg-primary-900/20',
    secondary: 'bg-transparent text-secondary-600 border-transparent hover:bg-secondary-50 focus:ring-secondary-500 dark:text-secondary-400 dark:hover:bg-secondary-900/20',
    success: 'bg-transparent text-success-600 border-transparent hover:bg-success-50 focus:ring-success-500 dark:text-success-400 dark:hover:bg-success-900/20',
    warning: 'bg-transparent text-warning-600 border-transparent hover:bg-warning-50 focus:ring-warning-500 dark:text-warning-400 dark:hover:bg-warning-900/20',
    error: 'bg-transparent text-error-600 border-transparent hover:bg-error-50 focus:ring-error-500 dark:text-error-400 dark:hover:bg-error-900/20',
    neutral: 'bg-transparent text-gray-600 border-transparent hover:bg-gray-50 focus:ring-gray-500 dark:text-gray-400 dark:hover:bg-gray-900/20',
  },
  link: {
    primary: 'bg-transparent text-primary-600 border-transparent hover:text-primary-700 hover:underline focus:ring-primary-500 p-0 dark:text-primary-400 dark:hover:text-primary-300',
    secondary: 'bg-transparent text-secondary-600 border-transparent hover:text-secondary-700 hover:underline focus:ring-secondary-500 p-0 dark:text-secondary-400 dark:hover:text-secondary-300',
    success: 'bg-transparent text-success-600 border-transparent hover:text-success-700 hover:underline focus:ring-success-500 p-0 dark:text-success-400 dark:hover:text-success-300',
    warning: 'bg-transparent text-warning-600 border-transparent hover:text-warning-700 hover:underline focus:ring-warning-500 p-0 dark:text-warning-400 dark:hover:text-warning-300',
    error: 'bg-transparent text-error-600 border-transparent hover:text-error-700 hover:underline focus:ring-error-500 p-0 dark:text-error-400 dark:hover:text-error-300',
    neutral: 'bg-transparent text-gray-600 border-transparent hover:text-gray-700 hover:underline focus:ring-gray-500 p-0 dark:text-gray-400 dark:hover:text-gray-300',
  },
  icon: {
    primary: 'bg-transparent text-primary-600 border-transparent hover:bg-primary-50 focus:ring-primary-500 dark:text-primary-400 dark:hover:bg-primary-900/20',
    secondary: 'bg-transparent text-secondary-600 border-transparent hover:bg-secondary-50 focus:ring-secondary-500 dark:text-secondary-400 dark:hover:bg-secondary-900/20',
    success: 'bg-transparent text-success-600 border-transparent hover:bg-success-50 focus:ring-success-500 dark:text-success-400 dark:hover:bg-success-900/20',
    warning: 'bg-transparent text-warning-600 border-transparent hover:bg-warning-50 focus:ring-warning-500 dark:text-warning-400 dark:hover:bg-warning-900/20',
    error: 'bg-transparent text-error-600 border-transparent hover:bg-error-50 focus:ring-error-500 dark:text-error-400 dark:hover:bg-error-900/20',
    neutral: 'bg-transparent text-gray-600 border-transparent hover:bg-gray-50 focus:ring-gray-500 dark:text-gray-400 dark:hover:bg-gray-900/20',
  },
  floating: {
    primary: 'bg-primary-500 text-white border-primary-500 hover:bg-primary-600 focus:ring-primary-500 shadow-lg hover:shadow-xl rounded-full dark:bg-primary-600 dark:hover:bg-primary-700',
    secondary: 'bg-secondary-500 text-white border-secondary-500 hover:bg-secondary-600 focus:ring-secondary-500 shadow-lg hover:shadow-xl rounded-full dark:bg-secondary-600 dark:hover:bg-secondary-700',
    success: 'bg-success-500 text-white border-success-500 hover:bg-success-600 focus:ring-success-500 shadow-lg hover:shadow-xl rounded-full dark:bg-success-600 dark:hover:bg-success-700',
    warning: 'bg-warning-500 text-white border-warning-500 hover:bg-warning-600 focus:ring-warning-500 shadow-lg hover:shadow-xl rounded-full dark:bg-warning-600 dark:hover:bg-warning-700',
    error: 'bg-error-500 text-white border-error-500 hover:bg-error-600 focus:ring-error-500 shadow-lg hover:shadow-xl rounded-full dark:bg-error-600 dark:hover:bg-error-700',
    neutral: 'bg-gray-500 text-white border-gray-500 hover:bg-gray-600 focus:ring-gray-500 shadow-lg hover:shadow-xl rounded-full dark:bg-gray-600 dark:hover:bg-gray-700',
  },
};

// Icon-only sizes (square buttons)
const iconOnlySizes = {
  xs: 'w-6 h-6 p-1',
  sm: 'w-8 h-8 p-1.5',
  md: 'w-10 h-10 p-2',
  lg: 'w-12 h-12 p-3',
  xl: 'w-16 h-16 p-4',
  '2xl': 'w-20 h-20 p-5',
};

// Loading state styles
const loadingStyles = 'cursor-wait';

// Full width styles
const fullWidthStyles = 'w-full';

export function getButtonStyles(config: ButtonConfig): string {
  const {
    variant,
    color,
    size,
    loading,
    fullWidth,
    iconOnly,
  } = config;

  // Get the appropriate size styles
  const sizeStyle = iconOnly ? iconOnlySizes[size] : sizeVariants[size];
  
  // Get variant and color specific styles
  const variantStyle = variantStyles[variant][color];

  // Build the complete class string
  return cva(
    baseStyles,
    {
      size: { [size]: sizeStyle },
      variant: { [variant]: variantStyle },
      loading: { true: loadingStyles, false: '' },
      fullWidth: { true: fullWidthStyles, false: '' },
    },
    {
      size,
      variant,
      loading: loading.toString() as 'true' | 'false',
      fullWidth: fullWidth.toString() as 'true' | 'false',
    }
  );
}

// Helper function to get icon styles
export function getIconStyles(size: ComponentSize, position: 'left' | 'right'): string {
  const iconSizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
    '2xl': 'w-6 h-6',
  } as const;

  const positionStyles = {
    left: '-ml-0.5',
    right: '-mr-0.5',
  } as const;

  return `${iconSizes[size]} ${positionStyles[position]}`;
}

// Helper function to get loading spinner styles
export function getSpinnerStyles(size: ComponentSize): string {
  const spinnerSizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
    '2xl': 'w-6 h-6',
  } as const;

  return `${spinnerSizes[size]} animate-spin`;
}