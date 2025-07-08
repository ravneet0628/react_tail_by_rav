import type { ComponentSize } from '../../types';

const baseSliderStyles = [
  'w-full',
  'bg-transparent',
  'cursor-pointer',
  'appearance-none',
  'focus:outline-none',
].join(' ');

const sliderSizes: Record<Exclude<ComponentSize, '2xl'>, { track: string; thumb: string }> = {
  xs: {
    track: 'h-1',
    thumb: 'h-3 w-3',
  },
  sm: {
    track: 'h-1.5',
    thumb: 'h-4 w-4',
  },
  md: {
    track: 'h-2',
    thumb: 'h-5 w-5',
  },
  lg: {
    track: 'h-2.5',
    thumb: 'h-6 w-6',
  },
  xl: {
    track: 'h-3',
    thumb: 'h-7 w-7',
  },
};

const trackStyles = [
  'w-full',
  'bg-gray-200',
  'rounded-full',
  'overflow-hidden',
].join(' ');

const progressStyles = [
  'h-full',
  'bg-primary-600',
  'transition-all',
  'duration-150',
].join(' ');

const thumbStyles = [
  'absolute',
  'top-1/2',
  'bg-white',
  'border-2',
  'border-primary-600',
  'rounded-full',
  'shadow-sm',
  'transform',
  '-translate-y-1/2',
  '-translate-x-1/2',
  'cursor-grab',
  'active:cursor-grabbing',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-offset-2',
  'focus:ring-primary-500',
  'transition-all',
  'duration-150',
].join(' ');

export function getSliderStyles(size: Exclude<ComponentSize, '2xl'>, disabled: boolean) {
  const sizeConfig = sliderSizes[size];
  
  return {
    container: 'relative flex items-center',
    input: [
      baseSliderStyles,
      disabled && 'cursor-not-allowed opacity-50',
    ].filter(Boolean).join(' '),
    track: [
      trackStyles,
      sizeConfig.track,
      disabled && 'bg-gray-100',
    ].filter(Boolean).join(' '),
    progress: [
      progressStyles,
      disabled && 'bg-gray-300',
    ].filter(Boolean).join(' '),
    thumb: [
      thumbStyles,
      sizeConfig.thumb,
      disabled && 'cursor-not-allowed border-gray-300',
    ].filter(Boolean).join(' '),
  };
}

export const sliderLabelStyles = 'block text-sm font-medium text-gray-900 mb-2';

export const sliderHelperTextStyles = 'text-sm text-gray-600 mt-1';

export const sliderErrorStyles = 'text-sm text-red-600 mt-1';

export const sliderValueStyles = 'text-sm font-medium text-gray-900 ml-3';

export const sliderMinMaxStyles = 'flex justify-between text-xs text-gray-500 mt-1'; 