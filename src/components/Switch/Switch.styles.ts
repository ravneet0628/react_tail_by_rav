import type { ComponentSize } from '../../types';

const baseSwitchStyles = [
  'relative',
  'inline-flex',
  'flex-shrink-0',
  'border-2',
  'border-transparent',
  'rounded-full',
  'cursor-pointer',
  'transition-colors',
  'duration-200',
  'ease-in-out',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-offset-2',
  'focus:ring-primary-500',
].join(' ');

const switchSizes: Record<Exclude<ComponentSize, '2xl'>, { container: string; thumb: string; translate: string }> = {
  xs: {
    container: 'h-4 w-7',
    thumb: 'h-3 w-3',
    translate: 'translate-x-3',
  },
  sm: {
    container: 'h-5 w-9',
    thumb: 'h-4 w-4',
    translate: 'translate-x-4',
  },
  md: {
    container: 'h-6 w-11',
    thumb: 'h-5 w-5',
    translate: 'translate-x-5',
  },
  lg: {
    container: 'h-7 w-12',
    thumb: 'h-6 w-6',
    translate: 'translate-x-5',
  },
  xl: {
    container: 'h-8 w-14',
    thumb: 'h-7 w-7',
    translate: 'translate-x-6',
  },
};

const thumbStyles = [
  'pointer-events-none',
  'inline-block',
  'rounded-full',
  'bg-white',
  'shadow',
  'transform',
  'ring-0',
  'transition',
  'duration-200',
  'ease-in-out',
].join(' ');

export function getSwitchStyles(
  size: Exclude<ComponentSize, '2xl'>,
  checked: boolean,
  disabled: boolean
): {
  container: string;
  thumb: string;
} {
  const sizeConfig = switchSizes[size];
  
  const containerClasses = [
    baseSwitchStyles,
    sizeConfig.container,
    checked ? 'bg-primary-600' : 'bg-gray-200',
    disabled && 'opacity-50 cursor-not-allowed',
  ].filter(Boolean).join(' ');

  const thumbClasses = [
    thumbStyles,
    sizeConfig.thumb,
    checked ? sizeConfig.translate : 'translate-x-0',
  ].join(' ');

  return {
    container: containerClasses,
    thumb: thumbClasses,
  };
}

export const switchLabelStyles = 'text-sm font-medium text-gray-900';

export const switchHelperTextStyles = 'text-sm text-gray-600 mt-1';

export const switchErrorStyles = 'text-sm text-red-600 mt-1';

export const switchWrapperStyles = 'flex items-start';

export const switchContentStyles = 'ml-3';

export const switchDescriptionStyles = 'text-sm text-gray-500'; 