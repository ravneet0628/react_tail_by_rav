import type { ToastVariant, ToastPosition } from './Toast.types';

const baseToastStyles = [
  'max-w-sm',
  'w-full',
  'bg-white',
  'border',
  'rounded-lg',
  'shadow-lg',
  'pointer-events-auto',
  'p-4',
  'transition-all',
  'duration-300',
  'ease-in-out',
].join(' ');

const variantStyles: Record<ToastVariant, string> = {
  info: [
    'border-blue-200',
    'bg-blue-50',
  ].join(' '),
  
  success: [
    'border-green-200',
    'bg-green-50',
  ].join(' '),
  
  warning: [
    'border-yellow-200',
    'bg-yellow-50',
  ].join(' '),
  
  error: [
    'border-red-200',
    'bg-red-50',
  ].join(' '),
};

const containerStyles: Record<ToastPosition, string> = {
  'top-left': 'top-4 left-4',
  'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
  'top-right': 'top-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
  'bottom-right': 'bottom-4 right-4',
};

export function getToastStyles(variant: ToastVariant): string {
  return `${baseToastStyles} ${variantStyles[variant]}`.trim();
}

export function getToastContainerStyles(position: ToastPosition): string {
  return `fixed z-50 pointer-events-none ${containerStyles[position]} flex flex-col gap-2`.trim();
}

export const toastIconStyles = 'w-5 h-5 flex-shrink-0';

export const toastTitleStyles = 'text-sm font-medium text-gray-900';

export const toastDescriptionStyles = 'text-sm text-gray-600 mt-1';

export const toastDismissButtonStyles = [
  'ml-auto',
  'flex-shrink-0',
  'rounded-md',
  'p-1.5',
  'text-gray-400',
  'hover:text-gray-600',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-offset-2',
  'focus:ring-primary-500',
  'transition-colors',
].join(' ');

export const toastActionButtonStyles = [
  'text-sm',
  'font-medium',
  'text-primary-600',
  'hover:text-primary-500',
  'focus:outline-none',
  'focus:underline',
  'ml-auto',
  'flex-shrink-0',
].join(' '); 