import type { CardVariant, CardStyleConfig } from './Card.types';
import type { Spacing } from '../../types';
import { cn } from '../../utils';

// Base card styles with modern design
const baseStyles = cn(
  'bg-white rounded-lg',
  'border border-gray-200',
  'transition-all duration-200',
  'overflow-hidden'
);

// Simplified variant styles
const variantStyles: Record<CardVariant, string> = {
  solid: 'bg-white border-gray-200',
  outline: 'bg-transparent border-gray-300 border-2',
  ghost: 'bg-transparent border-transparent shadow-none',
  elevated: 'shadow-md hover:shadow-lg'
};

// Simplified padding system
const paddingStyles: Record<Spacing, string> = {
  none: 'p-0',
  xs: 'p-2',
  sm: 'p-3',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
  '2xl': 'p-12'
};

// Clickable states
const clickableStyles = cn(
  'cursor-pointer select-none',
  'hover:shadow-md active:scale-[0.98]',
  'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
);

/**
 * Generates card class string based on configuration
 */
export function getCardStyles(config: CardStyleConfig): string {
  const { variant, clickable, fullHeight } = config;
  
  const classes = [baseStyles, variantStyles[variant]];
  
  if (clickable) {
    classes.push(clickableStyles);
  }
  
  if (fullHeight) {
    classes.push('h-full');
  }
  
  return cn(...classes);
}

/**
 * Generates card header class string
 */
export function getCardHeaderStyles(): string {
  return cn(
    'px-6 py-4',
    'border-b border-gray-200',
    'bg-gray-50',
    'font-semibold text-gray-900'
  );
}

/**
 * Generates card body class string
 */
export function getCardBodyStyles(padding: Spacing = 'md'): string {
  return cn(
    'flex-1',
    paddingStyles[padding],
    'text-gray-700'
  );
}

/**
 * Generates card footer class string
 */
export function getCardFooterStyles(): string {
  return cn(
    'px-6 py-4',
    'border-t border-gray-200',
    'bg-gray-50',
    'flex justify-end gap-3'
  );
}

/**
 * Generates card image class string
 */
export function getCardImageStyles(): string {
  return cn(
    'w-full h-48 object-cover'
  );
}