import type { TableVariant } from './Table.types';
import type { ComponentSize } from '../../types';

// Base table styles following design token system
const baseTableStyles = [
  'min-w-full',
  'text-left',
  'border-collapse',
  'bg-white',
  'rounded-lg',
  'overflow-hidden',
  'shadow-sm',
  'border',
  'border-gray-200',
].join(' ');

// Table variant styles with semantic differences
const variantStyles: Record<TableVariant, string> = {
  // Basic table with minimal styling
  basic: [
    'divide-y',
    'divide-gray-200',
  ].join(' '),
  
  // Striped table with alternating row colors
  striped: [
    'divide-y',
    'divide-gray-200',
  ].join(' '),
  
  // Bordered table with cell borders
  bordered: [
    'border',
    'border-gray-300',
    'divide-y',
    'divide-gray-300',
  ].join(' '),
  
  // Hover table with row hover effects
  hover: [
    'divide-y',
    'divide-gray-200',
  ].join(' '),
  
  // Compact table with reduced padding
  compact: [
    'text-sm',
    'divide-y',
    'divide-gray-200',
  ].join(' '),
  
  // Sortable table with interactive headers
  sortable: [
    'divide-y',
    'divide-gray-200',
  ].join(' '),
  
  // Selectable table with checkbox support
  selectable: [
    'divide-y',
    'divide-gray-200',
  ].join(' '),
};

/**
 * Generates table class string based on variant
 */
export function getTableStyles(variant: TableVariant = 'basic'): string {
  return `${baseTableStyles} ${variantStyles[variant]}`.trim();
}

/**
 * Generates table header class string with proper typography
 */
export function getTableHeaderStyles(): string {
  return [
    'bg-gray-50',
    'text-gray-900',
    'font-semibold',
    'text-sm',
    'leading-normal',
    'tracking-wide',
    'uppercase',
  ].join(' ');
}

/**
 * Generates table header cell class string with size-based padding
 */
export function getTableHeaderCellStyles(size: ComponentSize = 'md'): string {
  const paddingMap = {
    xs: 'px-2 py-2',
    sm: 'px-3 py-2.5',
    md: 'px-4 py-3',
    lg: 'px-5 py-3.5',
    xl: 'px-6 py-4',
    '2xl': 'px-8 py-5',
  };

  const baseClasses = [
    'text-left',
    'font-semibold',
    'text-gray-900',
    'bg-gray-50',
    'border-b',
    'border-gray-200',
  ].join(' ');

  return `${baseClasses} ${paddingMap[size]}`;
}

/**
 * Generates table body class string
 */
export function getTableBodyStyles(): string {
  return [
    'bg-white',
    'divide-y',
    'divide-gray-200',
  ].join(' ');
}

/**
 * Generates table row class string with variant-specific styling
 */
export function getTableRowStyles(variant: TableVariant = 'basic', isEven = false): string {
  const baseClasses = [
    'transition-colors',
    'duration-150',
    'ease-in-out',
  ];

  // Variant-specific row styling
  const variantClasses = {
    basic: [],
    striped: isEven ? ['bg-gray-50'] : [],
    bordered: ['border-b', 'border-gray-300'],
    hover: ['hover:bg-gray-50'],
    compact: [],
    sortable: ['hover:bg-gray-50'],
    selectable: ['hover:bg-blue-50', 'cursor-pointer'],
  };

  return [...baseClasses, ...variantClasses[variant]].join(' ');
}

/**
 * Generates table cell class string with size-based padding
 */
export function getTableCellStyles(size: ComponentSize = 'md'): string {
  const paddingMap = {
    xs: 'px-2 py-2',
    sm: 'px-3 py-2.5',
    md: 'px-4 py-3',
    lg: 'px-5 py-3.5',
    xl: 'px-6 py-4',
    '2xl': 'px-8 py-5',
  };

  const baseClasses = [
    'text-sm',
    'text-gray-700',
    'leading-normal',
    'border-b',
    'border-gray-200',
  ].join(' ');

  return `${baseClasses} ${paddingMap[size]}`;
}

/**
 * Generates sortable header class string with interactive elements
 */
export function getSortableHeaderStyles(): string {
  return [
    'cursor-pointer',
    'select-none',
    'hover:bg-gray-100',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-blue-500',
    'focus:ring-offset-2',
    'transition-colors',
    'duration-150',
    'flex',
    'items-center',
    'justify-between',
  ].join(' ');
}

/**
 * Generates sort icon class string with direction indication
 */
export function getSortIconStyles(direction?: 'asc' | 'desc'): string {
  const baseClasses = [
    'w-4',
    'h-4',
    'ml-2',
    'transition-transform',
    'duration-150',
  ];

  const directionClasses = {
    asc: 'transform rotate-0',
    desc: 'transform rotate-180',
    undefined: 'opacity-50',
  };

  return `${baseClasses.join(' ')} ${directionClasses[direction || 'undefined']}`;
}

/**
 * Generates checkbox cell class string for selectable tables
 */
export function getCheckboxCellStyles(): string {
  return [
    'w-12',
    'px-4',
    'py-3',
    'text-center',
    'border-b',
    'border-gray-200',
  ].join(' ');
}

/**
 * Generates table caption class string for accessibility
 */
export function getTableCaptionStyles(): string {
  return [
    'sr-only',
    'text-sm',
    'text-gray-600',
    'mb-2',
  ].join(' ');
}

/**
 * Generates table wrapper class string for responsive scrolling
 */
export function getTableWrapperStyles(): string {
  return [
    'overflow-x-auto',
    'shadow-sm',
    'ring-1',
    'ring-gray-200',
    'rounded-lg',
  ].join(' ');
}

/**
 * Generates empty state class string for tables with no data
 */
export function getTableEmptyStyles(): string {
  return [
    'text-center',
    'py-12',
    'text-gray-500',
    'italic',
  ].join(' ');
}

/**
 * Generates loading state class string for tables
 */
export function getTableLoadingStyles(): string {
  return [
    'text-center',
    'py-8',
    'text-gray-400',
  ].join(' ');
}

// Legacy exports for backward compatibility
export const headerCellBase = 'px-4 py-2 font-medium text-gray-700';
export const cellBase = 'px-4 py-2';