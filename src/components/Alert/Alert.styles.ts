import type { AlertVariant } from './Alert.types';
import type { ComponentColor } from '../../types';

// Extended alert variant type for internal styling
type ExtendedAlertVariant = AlertVariant | 'banner' | 'toast' | 'inline';

/**
 * Configuration for alert styling
 */
export interface AlertConfig {
  variant: ExtendedAlertVariant;
  dismissible?: boolean;
  icon?: boolean;
}

// Base alert styles following design token system
const baseStyles = [
  'rounded-lg',
  'border',
  'p-4',
  'text-sm',
  'flex',
  'items-start',
  'gap-3',
  'leading-normal',
  
  // Smooth transitions for dynamic alerts
  'transition-all',
  'duration-200',
  'ease-in-out',
].join(' ');

// Semantic color system for alert variants
const variantStyles: Record<ExtendedAlertVariant, string> = {
  // Informational alerts with blue theming
  info: [
    'bg-blue-50',
    'border-blue-200',
    'text-blue-800',
  ].join(' '),
  
  // Success alerts with green theming
  success: [
    'bg-green-50',
    'border-green-200',
    'text-green-800',
  ].join(' '),
  
  // Warning alerts with yellow theming
  warning: [
    'bg-yellow-50',
    'border-yellow-200',
    'text-yellow-800',
  ].join(' '),
  
  // Error alerts with red theming
  error: [
    'bg-red-50',
    'border-red-200',
    'text-red-800',
  ].join(' '),
  
  // Banner alerts with left border emphasis
  banner: [
    'bg-gray-50',
    'border-gray-200',
    'text-gray-800',
    'rounded-none',
    'border-l-4',
    'border-l-blue-500',
  ].join(' '),
  
  // Toast alerts with elevated appearance
  toast: [
    'bg-white',
    'border-gray-200',
    'text-gray-800',
    'shadow-lg',
    'shadow-gray-200/50',
  ].join(' '),
  
  // Inline alerts for form fields
  inline: [
    'bg-transparent',
    'border-transparent',
    'text-gray-700',
    'p-2',
  ].join(' '),
};

/**
 * Generates alert class string based on configuration
 */
export function getAlertStyles(config: AlertConfig | ExtendedAlertVariant): string {
  // Handle both old string parameter and new config object
  const variant = typeof config === 'string' ? config : config.variant;
  return `${baseStyles} ${variantStyles[variant]}`.trim();
}

/**
 * Generates alert icon class string with semantic colors
 */
export function getAlertIconStyles(variant: ExtendedAlertVariant): string {
  const iconColors: Record<ExtendedAlertVariant, string> = {
    info: 'text-blue-500',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500',
    banner: 'text-blue-500',
    toast: 'text-gray-500',
    inline: 'text-gray-500',
  };

  const baseIconClasses = [
    'w-5',
    'h-5',
    'flex-shrink-0',
    'mt-0.5',
  ].join(' ');

  return `${baseIconClasses} ${iconColors[variant]}`;
}

/**
 * Generates alert title class string with proper typography
 */
export function getAlertTitleStyles(): string {
  return [
    'font-medium',
    'text-base',
    'leading-normal',
    'mb-1',
  ].join(' ');
}

/**
 * Generates alert description class string
 */
export function getAlertDescriptionStyles(): string {
  return [
    'text-sm',
    'leading-normal',
    'opacity-90',
  ].join(' ');
}

/**
 * Generates alert action container class string
 */
export function getAlertActionStyles(): string {
  return [
    'mt-3',
    'flex',
    'gap-2',
    'flex-wrap',
  ].join(' ');
}

/**
 * Generates close button class string for dismissible alerts
 */
export function getAlertCloseStyles(): string {
  return [
    'ml-auto',
    'pl-3',
    'cursor-pointer',
    'text-gray-400',
    'hover:text-gray-600',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-gray-500',
    'focus:ring-offset-2',
    'rounded',
    'transition-colors',
    'duration-150',
    'flex-shrink-0',
    'w-5',
    'h-5',
  ].join(' ');
}

/**
 * Generates custom alert styles with configurable colors
 */
export function getCustomAlertStyles(color: ComponentColor): string {
  const colorStyles: Record<ComponentColor, string> = {
    primary: 'bg-blue-50 border-blue-200 text-blue-800',
    secondary: 'bg-gray-50 border-gray-200 text-gray-800',
    accent: 'bg-purple-50 border-purple-200 text-purple-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    info: 'bg-cyan-50 border-cyan-200 text-cyan-800',
    gray: 'bg-gray-50 border-gray-200 text-gray-800',
    neutral: 'bg-gray-50 border-gray-200 text-gray-800',
    transparent: 'bg-transparent border-gray-200 text-gray-800',
  };

  return `${baseStyles} ${colorStyles[color]}`.trim();
}

// Legacy function exports for backward compatibility
export const getDismissButtonStyles = getAlertCloseStyles;
export const getAlertContentStyles = getAlertDescriptionStyles;