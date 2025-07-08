import type { ComponentSize } from '../../types';

// Modal overlay styles with proper backdrop handling
const overlayStyles = [
  'fixed',
  'inset-0',
  'z-50',
  'flex',
  'items-center',
  'justify-center',
  'p-4',
  
  // Backdrop styling
  'bg-black',
  'bg-opacity-50',
  'backdrop-blur-sm',
  
  // Smooth transitions
  'transition-all',
  'duration-200',
  'ease-in-out',
].join(' ');

// Base modal container styles following design token system
const baseModalStyles = [
  'relative',
  'bg-white',
  'rounded-lg',
  'shadow-xl',
  'max-h-full',
  'overflow-hidden',
  'flex',
  'flex-col',
  
  // Border and shadow
  'border',
  'border-gray-200',
  'shadow-2xl',
  
  // Animation and transitions
  'transform',
  'transition-all',
  'duration-200',
  'ease-in-out',
  
  // Focus management
  'focus:outline-none',
].join(' ');

// Size system for modal dimensions
const modalSizeStyles: Record<ComponentSize, string> = {
  // Extra small modal for simple confirmations
  xs: [
    'w-full',
    'max-w-sm',        // 384px max width
    'mx-4',
  ].join(' '),
  
  // Small modal for basic forms
  sm: [
    'w-full',
    'max-w-md',        // 448px max width
    'mx-4',
  ].join(' '),
  
  // Medium modal for standard content
  md: [
    'w-full',
    'max-w-lg',        // 512px max width
    'mx-4',
  ].join(' '),
  
  // Large modal for detailed forms
  lg: [
    'w-full',
    'max-w-2xl',       // 672px max width
    'mx-4',
  ].join(' '),
  
  // Extra large modal for complex content
  xl: [
    'w-full',
    'max-w-4xl',       // 896px max width
    'mx-4',
  ].join(' '),
  
  // Double extra large for full-featured modals
  '2xl': [
    'w-full',
    'max-w-6xl',       // 1152px max width
    'mx-4',
  ].join(' '),
};

/**
 * Generates modal overlay class string with backdrop handling
 */
export function getModalOverlayStyles(): string {
  return overlayStyles;
}

/**
 * Generates modal container class string based on size
 */
export function getModalStyles(size: ComponentSize = 'md'): string {
  return `${baseModalStyles} ${modalSizeStyles[size]}`;
}

/**
 * Generates modal header class string with consistent spacing
 */
export function getModalHeaderStyles(): string {
  return [
    'px-6',
    'py-4',
    'border-b',
    'border-gray-200',
    'bg-gray-50',
    'flex',
    'items-center',
    'justify-between',
    'flex-shrink-0',
  ].join(' ');
}

/**
 * Generates modal body class string with proper content spacing
 */
export function getModalBodyStyles(): string {
  return [
    'px-6',
    'py-4',
    'flex-1',
    'overflow-y-auto',
    'text-gray-700',
    'leading-normal',
  ].join(' ');
}

/**
 * Generates modal footer class string with action spacing
 */
export function getModalFooterStyles(): string {
  return [
    'px-6',
    'py-4',
    'border-t',
    'border-gray-200',
    'bg-gray-50',
    'flex',
    'justify-end',
    'gap-3',
    'flex-shrink-0',
  ].join(' ');
}

/**
 * Generates modal title class string with proper typography
 */
export function getModalTitleStyles(): string {
  return [
    'text-lg',
    'font-semibold',
    'text-gray-900',
    'leading-tight',
  ].join(' ');
}

/**
 * Generates close button class string for modal dismissal
 */
export function getModalCloseStyles(): string {
  return [
    'text-gray-400',
    'hover:text-gray-600',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-blue-500',
    'focus:ring-offset-2',
    'rounded',
    'p-1',
    'transition-colors',
    'duration-150',
    'w-6',
    'h-6',
    'flex',
    'items-center',
    'justify-center',
  ].join(' ');
}

/**
 * Generates modal content wrapper class string for scrollable content
 */
export function getModalContentStyles(): string {
  return [
    'flex',
    'flex-col',
    'min-h-0',
    'max-h-full',
  ].join(' ');
}

/**
 * Generates centered modal positioning class string
 */
export function getModalCenterStyles(): string {
  return [
    'flex',
    'items-center',
    'justify-center',
    'min-h-full',
    'p-4',
  ].join(' ');
}

/**
 * Generates modal animation class strings for enter/exit states
 */
export function getModalAnimationStyles() {
  return {
    entering: [
      'opacity-0',
      'scale-95',
      'translate-y-4',
    ].join(' '),
    
    entered: [
      'opacity-100',
      'scale-100',
      'translate-y-0',
    ].join(' '),
    
    exiting: [
      'opacity-0',
      'scale-95',
      'translate-y-4',
    ].join(' '),
  };
}

/**
 * Generates full-screen modal class string for mobile optimization
 */
export function getFullScreenModalStyles(): string {
  return [
    'fixed',
    'inset-0',
    'w-full',
    'h-full',
    'max-w-none',
    'max-h-none',
    'rounded-none',
    'm-0',
  ].join(' ');
}

// Legacy function exports for backward compatibility
export const getBackdropStyles = getModalOverlayStyles;
export const getModalContainerStyles = getModalStyles;
export function getDrawerStyles(): string {
  return [
    'fixed',
    'inset-y-0',
    'right-0',
    'w-full',
    'max-w-md',
    'bg-white',
    'shadow-xl',
    'transform',
    'transition-transform',
    'duration-300',
    'ease-in-out',
    'z-50',
  ].join(' ');
}