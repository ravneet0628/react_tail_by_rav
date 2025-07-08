import type { NavigationVariant } from './Navigation.types';
import { cn } from '../../utils';

// Base navigation styles
const baseStyles = cn(
  'w-full'
);

// Variant-specific container styles
const variantStyles: Record<NavigationVariant, string> = {
  horizontal: cn(
    'bg-white border-b border-gray-200',
    'shadow-sm'
  ),
  vertical: cn(
    'bg-white border-r border-gray-200',
    'w-64 h-full'
  ),
  breadcrumb: cn(
    'py-2'
  ),
  tabs: cn(
    'border-b border-gray-200'
  )
};

// Navigation item styles
const baseItemStyles = cn(
  'inline-flex items-center px-3 py-2',
  'text-sm font-medium',
  'transition-colors duration-200',
  'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
  'rounded-md'
);

// Item state styles
const itemStateStyles = {
  default: 'text-gray-700 hover:text-primary-600 hover:bg-gray-50',
  active: 'text-primary-600 bg-primary-50',
  disabled: 'text-gray-400 cursor-not-allowed opacity-50'
};

/**
 * Generates navigation container class string
 */
export function getNavigationStyles(variant: NavigationVariant): string {
  return cn(baseStyles, variantStyles[variant]);
}

/**
 * Generates navigation item class string
 */
export function getNavigationItemStyles(
  variant: NavigationVariant,
  isActive: boolean = false,
  disabled: boolean = false
): string {
  const classes = [baseItemStyles];
  
  if (disabled) {
    classes.push(itemStateStyles.disabled);
  } else if (isActive) {
    classes.push(itemStateStyles.active);
  } else {
    classes.push(itemStateStyles.default);
  }
  
  // Variant-specific adjustments
  if (variant === 'vertical') {
    classes.push('w-full justify-start');
  }
  
  if (variant === 'breadcrumb') {
    classes.push('p-1 text-primary-600 hover:underline');
  }
  
  if (variant === 'tabs') {
    classes.push('border-b-2 border-transparent', isActive && 'border-primary-500');
  }
  
  return cn(...classes);
}

/**
 * Generates mobile menu button styles
 */
export function getMobileMenuButtonStyles(): string {
  return cn(
    'md:hidden p-2 rounded-md',
    'text-gray-400 hover:text-gray-500 hover:bg-gray-100',
    'focus:outline-none focus:ring-2 focus:ring-primary-500'
  );
}

/**
 * Generates breadcrumb separator styles
 */
export function getBreadcrumbSeparatorStyles(): string {
  return cn(
    'mx-2 text-gray-400'
  );
}