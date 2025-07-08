import type { ComponentSize } from '../../types';

// Base avatar styles following design token system
const baseStyles = [
  'relative',
  'inline-flex',
  'items-center',
  'justify-center',
  'rounded-full',
  'font-medium',
  'overflow-hidden',
  'flex-shrink-0',
  'select-none',
  
  // Typography configuration
  'leading-normal',
  'text-center',
  
  // Default styling
  'bg-gray-200',
  'text-gray-600',
  
  // Smooth transitions
  'transition-all',
  'duration-200',
  'ease-in-out',
].join(' ');

// Size system following touch target accessibility standards for interactive avatars
const sizeVariants: Record<ComponentSize, string> = {
  // 24px - minimum for non-interactive avatars
  xs: [
    'w-6',           // 24px width
    'h-6',           // 24px height
    'text-xs',       // 12px font size
  ].join(' '),
  
  // 32px - minimum recommended touch target for interactive avatars
  sm: [
    'w-8',           // 32px width
    'h-8',           // 32px height
    'text-sm',       // 14px font size
  ].join(' '),
  
  // 40px - comfortable mobile interaction
  md: [
    'w-10',          // 40px width
    'h-10',          // 40px height
    'text-base',     // 16px font size
  ].join(' '),
  
  // 48px - comfortable desktop interaction
  lg: [
    'w-12',          // 48px width
    'h-12',          // 48px height
    'text-lg',       // 18px font size
  ].join(' '),
  
  // 64px - large emphasis avatars
  xl: [
    'w-16',          // 64px width
    'h-16',          // 64px height
    'text-xl',       // 20px font size
  ].join(' '),
  
  // 80px - hero section avatars
  '2xl': [
    'w-20',          // 80px width
    'h-20',          // 80px height
    'text-2xl',      // 24px font size
  ].join(' '),
};

// Status indicator styling for avatar presence
const statusIndicatorStyles = {
  online: 'bg-green-500',
  offline: 'bg-gray-400',
  away: 'bg-yellow-500',
  busy: 'bg-red-500',
};

/**
 * Generates avatar class string based on configuration
 */
export function getAvatarStyles({ size }: { size: ComponentSize }): string {
  return `${baseStyles} ${sizeVariants[size]}`;
}

/**
 * Generates avatar image class string with proper object fitting
 */
export function getAvatarImageStyles(): string {
  return [
    'w-full',
    'h-full',
    'object-cover',
    'object-center',
  ].join(' ');
}

/**
 * Generates status indicator class string with proper positioning
 */
export function getAvatarStatusStyles(
  size: ComponentSize, 
  status: keyof typeof statusIndicatorStyles = 'offline'
): string {
  const statusSizes = {
    xs: 'w-1.5 h-1.5',   // 6px for xs avatars
    sm: 'w-2 h-2',       // 8px for sm avatars
    md: 'w-2.5 h-2.5',   // 10px for md avatars
    lg: 'w-3 h-3',       // 12px for lg avatars
    xl: 'w-4 h-4',       // 16px for xl avatars
    '2xl': 'w-5 h-5',    // 20px for 2xl avatars
  };

  const baseClasses = [
    'absolute',
    'bottom-0',
    'right-0',
    'rounded-full',
    'border-2',
    'border-white',
    'ring-1',
    'ring-gray-200',
  ].join(' ');

  return `${baseClasses} ${statusSizes[size]} ${statusIndicatorStyles[status]}`;
}

/**
 * Generates avatar group container class string for overlapping avatars
 */
export function getAvatarGroupStyles(): string {
  return [
    'flex',
    'items-center',
    '-space-x-2',
  ].join(' ');
}

/**
 * Generates avatar ring styles for selected or highlighted states
 */
export function getAvatarRingStyles(color: 'primary' | 'secondary' | 'success' | 'warning' | 'error' = 'primary'): string {
  const ringColors = {
    primary: 'ring-blue-500',
    secondary: 'ring-gray-500',
    success: 'ring-green-500',
    warning: 'ring-yellow-500',
    error: 'ring-red-500',
  };

  return `ring-2 ring-offset-2 ${ringColors[color]}`;
}

/**
 * Generates clickable avatar styles with hover states
 */
export function getClickableAvatarStyles(): string {
  return [
    'cursor-pointer',
    'hover:opacity-80',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-blue-500',
    'transition-opacity',
    'duration-150',
  ].join(' ');
}

/**
 * Generates avatar fallback text styles for initials display
 */
export function getAvatarFallbackStyles(): string {
  return [
    'select-none',
    'pointer-events-none',
    'font-medium',
    'uppercase',
  ].join(' ');
}