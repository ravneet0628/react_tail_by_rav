import { cva } from '../../utils';
import type { AlertConfig } from './Alert.types';

// Base alert styles
const baseStyles = [
  'relative',
  'rounded-lg',
  'p-4',
  'border',
  'transition-all',
  'duration-200',
].join(' ');

// Variant styles
const variantStyles = {
  info: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-200',
  success: 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-200',
  error: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200',
  banner: 'bg-gray-50 border-gray-200 text-gray-800 dark:bg-gray-900/20 dark:border-gray-700 dark:text-gray-200 rounded-none border-l-4 border-l-blue-500',
  toast: 'bg-white border-gray-200 text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 shadow-lg',
  inline: 'bg-transparent border-transparent text-gray-700 dark:text-gray-300 p-2 rounded',
};

// Dismissible styles
const dismissibleStyles = 'pr-12';

// With icon styles
const withIconStyles = 'pl-12';

// With action styles
const withActionStyles = 'pb-12';

export function getAlertStyles(config: AlertConfig): string {
  const { variant, dismissible = false, icon = false } = config;

  const variantStyle = variantStyles[variant];
  const classes = [baseStyles, variantStyle];

  if (dismissible) {
    classes.push(dismissibleStyles);
  }

  if (icon) {
    classes.push(withIconStyles);
  }

  return classes.join(' ');
}

// Icon styles
export function getAlertIconStyles(variant: string): string {
  const iconColors = {
    info: 'text-blue-500 dark:text-blue-400',
    success: 'text-green-500 dark:text-green-400',
    warning: 'text-yellow-500 dark:text-yellow-400',
    error: 'text-red-500 dark:text-red-400',
    banner: 'text-blue-500 dark:text-blue-400',
    toast: 'text-gray-500 dark:text-gray-400',
    inline: 'text-gray-500 dark:text-gray-400',
  } as Record<string, string>;

  return `absolute left-3 top-4 w-5 h-5 ${iconColors[variant] || iconColors.info}`;
}

// Dismiss button styles
export function getDismissButtonStyles(): string {
  return 'absolute right-3 top-3 w-6 h-6 rounded hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-center transition-colors';
}

// Title styles
export function getAlertTitleStyles(variant: string): string {
  const baseTitle = 'font-semibold mb-1';
  
  const titleColors = {
    info: 'text-blue-900 dark:text-blue-100',
    success: 'text-green-900 dark:text-green-100',
    warning: 'text-yellow-900 dark:text-yellow-100',
    error: 'text-red-900 dark:text-red-100',
    banner: 'text-gray-900 dark:text-gray-100',
    toast: 'text-gray-900 dark:text-gray-100',
    inline: 'text-gray-900 dark:text-gray-100',
  } as Record<string, string>;

  return `${baseTitle} ${titleColors[variant] || titleColors.info}`;
}

// Content styles
export function getAlertContentStyles(): string {
  return 'text-sm leading-relaxed';
}

// Action styles
export function getAlertActionStyles(): string {
  return 'mt-3 pt-3 border-t border-current/20 flex gap-2';
}