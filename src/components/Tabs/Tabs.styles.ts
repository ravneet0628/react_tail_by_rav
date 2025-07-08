import type { TabsVariant } from './Tabs.types';
import type { ComponentSize } from '../../types';

// Base tab styles following design token system
const baseTabStyles = [
  'inline-flex',
  'items-center',
  'justify-center',
  'font-medium',
  'leading-normal',
  'whitespace-nowrap',
  'select-none',
  'cursor-pointer',
  
  // Touch target compliance
  'min-h-10',         // 40px minimum height
  'px-4',             // 16px horizontal padding
  'py-2',             // 8px vertical padding
  
  // Smooth transitions
  'transition-all',
  'duration-200',
  'ease-in-out',
  
  // Focus management
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-blue-500',
  'focus:ring-offset-2',
  'rounded-md',
].join(' ');

// Wrapper styles for different tab container layouts
const wrapperStyles: Record<TabsVariant, string> = {
  // Basic horizontal tabs with underline
  basic: [
    'flex',
    'border-b',
    'border-gray-200',
    'space-x-1',
  ].join(' '),
  
  // Pill-style tabs with background container
  pills: [
    'flex',
    'space-x-1',
    'bg-gray-100',
    'p-1',
    'rounded-lg',
    'w-fit',
  ].join(' '),
  
  // Underline tabs with more spacing
  underline: [
    'flex',
    'space-x-6',
    'border-b',
    'border-gray-200',
  ].join(' '),
  
  // Vertical tab layout for sidebars
  vertical: [
    'flex',
    'flex-col',
    'space-y-1',
    'border-r',
    'border-gray-200',
    'w-fit',
    'pr-4',
  ].join(' '),
  
  // Scrollable horizontal tabs for overflow
  scrollable: [
    'flex',
    'overflow-x-auto',
    'space-x-2',
    'scrollbar-hide',
    'border-b',
    'border-gray-200',
  ].join(' '),
  
  // Icon tabs with reduced padding
  icon: [
    'flex',
    'space-x-2',
    'border-b',
    'border-gray-200',
  ].join(' '),
  
  // Card-style tabs with borders
  card: [
    'flex',
    'space-x-2',
    'mb-4',
  ].join(' '),
};

// Tab styles with inactive and active states
const tabVariantStyles: Record<TabsVariant, { inactive: string; active: string }> = {
  // Basic tabs with bottom border indicator
  basic: {
    inactive: [
      'text-gray-500',
      'hover:text-blue-600',
      'border-b-2',
      'border-transparent',
      'hover:border-gray-300',
    ].join(' '),
    active: [
      'text-blue-600',
      'border-b-2',
      'border-blue-600',
    ].join(' '),
  },
  
  // Pill tabs with background highlighting
  pills: {
    inactive: [
      'text-gray-700',
      'hover:bg-gray-200',
      'rounded-md',
    ].join(' '),
    active: [
      'bg-blue-600',
      'text-white',
      'rounded-md',
      'shadow-sm',
    ].join(' '),
  },
  
  // Underline tabs with animated indicator
  underline: {
    inactive: [
      'text-gray-500',
      'hover:text-blue-600',
      'relative',
      'after:absolute',
      'after:left-0',
      'after:bottom-0',
      'after:w-full',
      'after:h-0.5',
      'after:bg-transparent',
      'after:transition-colors',
      'after:duration-200',
      'hover:after:bg-gray-300',
    ].join(' '),
    active: [
      'text-blue-600',
      'after:absolute',
      'after:left-0',
      'after:bottom-0',
      'after:w-full',
      'after:h-0.5',
      'after:bg-blue-600',
    ].join(' '),
  },
  
  // Vertical tabs for sidebar navigation
  vertical: {
    inactive: [
      'text-gray-500',
      'hover:text-blue-600',
      'hover:bg-gray-50',
      'justify-start',
      'w-full',
    ].join(' '),
    active: [
      'text-blue-600',
      'bg-blue-50',
      'border-r-2',
      'border-blue-600',
      'justify-start',
      'w-full',
    ].join(' '),
  },
  
  // Scrollable tabs maintain basic styling
  scrollable: {
    inactive: [
      'text-gray-500',
      'hover:text-blue-600',
      'border-b-2',
      'border-transparent',
      'flex-shrink-0',
    ].join(' '),
    active: [
      'text-blue-600',
      'border-b-2',
      'border-blue-600',
      'flex-shrink-0',
    ].join(' '),
  },
  
  // Icon tabs with reduced padding for icons
  icon: {
    inactive: [
      'text-gray-500',
      'hover:text-blue-600',
      'border-b-2',
      'border-transparent',
      'px-2',
    ].join(' '),
    active: [
      'text-blue-600',
      'border-b-2',
      'border-blue-600',
      'px-2',
    ].join(' '),
  },
  
  // Card tabs with border styling
  card: {
    inactive: [
      'text-gray-500',
      'hover:text-blue-600',
      'border',
      'rounded-md',
      'border-gray-200',
      'hover:border-gray-300',
      'bg-white',
    ].join(' '),
    active: [
      'bg-blue-50',
      'text-blue-700',
      'border',
      'border-blue-300',
      'rounded-md',
    ].join(' '),
  },
};

/**
 * Generates tabs wrapper class string based on variant
 */
export function getTabsWrapperStyles({ variant }: { variant: TabsVariant }): string {
  return wrapperStyles[variant];
}

/**
 * Generates individual tab class string based on variant and state
 */
export function getTabStyles(variant: TabsVariant, isActive: boolean): string {
  const variantStyles = tabVariantStyles[variant];
  const stateStyles = isActive ? variantStyles.active : variantStyles.inactive;
  
  return `${baseTabStyles} ${stateStyles}`;
}

/**
 * Generates tab panel class string for content area
 */
export function getTabPanelStyles(): string {
  return [
    'mt-4',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-blue-500',
    'focus:ring-offset-2',
    'rounded-md',
  ].join(' ');
}

/**
 * Generates tab icon class string with proper sizing
 */
export function getTabIconStyles(size: ComponentSize = 'md'): string {
  const iconSizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
    '2xl': 'w-7 h-7',
  };

  return `${iconSizes[size]} flex-shrink-0 mr-2`;
}

/**
 * Generates tab badge class string for notification counts
 */
export function getTabBadgeStyles(): string {
  return [
    'ml-2',
    'bg-red-500',
    'text-white',
    'text-xs',
    'font-medium',
    'px-1.5',
    'py-0.5',
    'rounded-full',
    'min-w-4',
    'h-4',
    'flex',
    'items-center',
    'justify-center',
  ].join(' ');
}

/**
 * Generates disabled tab class string
 */
export function getDisabledTabStyles(): string {
  return [
    'opacity-50',
    'cursor-not-allowed',
    'pointer-events-none',
  ].join(' ');
}