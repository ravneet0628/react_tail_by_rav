import type { ComponentSize, ComponentColor } from '../../types';

const linearSizes: Record<ComponentSize, string> = {
  xs: 'h-1',
  sm: 'h-1.5',
  md: 'h-2',
  lg: 'h-3',
  xl: 'h-4',
  '2xl': 'h-5',
};

const circularSizes: Record<ComponentSize, number> = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40,
  '2xl': 48,
};

const colorStyles: Record<ComponentColor, string> = {
  primary: 'bg-primary-600',
  secondary: 'bg-gray-600',
  success: 'bg-green-600',
  warning: 'bg-yellow-600',
  error: 'bg-red-600',
  info: 'bg-blue-600',
  gray: 'bg-gray-600',
  neutral: 'bg-neutral-600',
};

const linearBaseStyles = [
  'w-full',
  'bg-gray-200',
  'rounded-full',
  'overflow-hidden',
].join(' ');

const linearBarStyles = [
  'h-full',
  'transition-all',
  'duration-300',
  'ease-in-out',
].join(' ');

const indeterminateAnimation = [
  'animate-pulse',
  'bg-gradient-to-r',
  'from-transparent',
  'via-current',
  'to-transparent',
].join(' ');

export function getLinearProgressStyles(
  size: ComponentSize,
  color: ComponentColor,
  indeterminate: boolean
): {
  container: string;
  bar: string;
} {
  return {
    container: `${linearBaseStyles} ${linearSizes[size]}`,
    bar: [
      linearBarStyles,
      colorStyles[color],
      indeterminate && indeterminateAnimation,
    ].filter(Boolean).join(' '),
  };
}

export function getCircularProgressStyles(size: ComponentSize): {
  container: string;
  svg: number;
} {
  return {
    container: 'relative inline-flex items-center justify-center',
    svg: circularSizes[size],
  };
}

export const progressLabelStyles = 'block text-sm font-medium text-gray-900 mb-2';

export const progressValueStyles = 'text-sm font-medium text-gray-900 text-center mt-1';

export const progressContainerStyles = 'w-full'; 