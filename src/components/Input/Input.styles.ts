import { cva, cn } from '../../utils';
import type { ComponentSize } from '../../types';

export interface InputStyleConfig {
  size: ComponentSize;
  error: boolean;
  disabled: boolean;
  hasIconLeft: boolean;
  hasIconRight: boolean;
}

// Base styles shared across variants
const baseFieldStyles = [
  'block',
  'w-full',
  'border',
  'rounded-md',
  'transition-colors',
  'duration-200',
  'placeholder-gray-400',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-primary-500',
  'focus:border-primary-500',
  'dark:bg-gray-800',
  'dark:border-gray-700',
  'dark:text-gray-100',
  'dark:placeholder-gray-500',
].join(' ');

// Size styles
const sizeStyles = {
  xs: 'text-xs px-2 py-1',
  sm: 'text-sm px-3 py-1.5',
  md: 'text-sm px-4 py-2',
  lg: 'text-base px-5 py-3',
  xl: 'text-lg px-6 py-3.5',
  '2xl': 'text-xl px-8 py-4',
} as const;

// Error styles
const errorStyles = 'border-error-500 text-error-600 placeholder-error-400 focus:ring-error-500';

// Disabled styles
const disabledStyles = 'bg-gray-100 dark:bg-gray-700 opacity-60 cursor-not-allowed placeholder-opacity-60';

// Padding adjustment when icons present
const iconLeftStyles: Record<ComponentSize, string> = {
  xs: 'pl-8',
  sm: 'pl-9',
  md: 'pl-10',
  lg: 'pl-11',
  xl: 'pl-12',
  '2xl': 'pl-14',
};

const iconRightStyles: Record<ComponentSize, string> = {
  xs: 'pr-8',
  sm: 'pr-9',
  md: 'pr-10',
  lg: 'pr-11',
  xl: 'pr-12',
  '2xl': 'pr-14',
};

export function getInputFieldStyles(config: InputStyleConfig): string {
  const { size, error, disabled, hasIconLeft, hasIconRight } = config;

  return cva(
    baseFieldStyles,
    {
      size: { [size]: sizeStyles[size] },
      error: { true: errorStyles, false: '' },
      disabled: { true: disabledStyles, false: '' },
      iconLeft: { true: iconLeftStyles[size], false: '' },
      iconRight: { true: iconRightStyles[size], false: '' },
    },
    {
      size,
      error: error.toString() as 'true' | 'false',
      disabled: disabled.toString() as 'true' | 'false',
      iconLeft: hasIconLeft.toString() as 'true' | 'false',
      iconRight: hasIconRight.toString() as 'true' | 'false',
    }
  );
}

export function getLabelStyles(error: boolean): string {
  return cn(
    'block mb-1 font-medium text-sm',
    error ? 'text-error-600 dark:text-error-500' : 'text-gray-700 dark:text-gray-200'
  );
}

export function getHelperTextStyles(error: boolean): string {
  return cn(
    'mt-1 text-xs',
    error ? 'text-error-600 dark:text-error-500' : 'text-gray-500 dark:text-gray-400'
  );
}

export function getIconWrapperStyles(position: 'left' | 'right', size: ComponentSize): string {
  const base = 'absolute inset-y-0 flex items-center pointer-events-none';
  const translate = position === 'left' ? 'left-0 pl-2' : 'right-0 pr-2';
  const sizeMap: Record<ComponentSize, string> = {
    xs: 'w-4 h-4',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
    '2xl': 'w-6 h-6',
  };
  return `${base} ${translate} ${sizeMap[size]}`;
}