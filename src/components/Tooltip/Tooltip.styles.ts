import type { TooltipPosition } from './Tooltip.types';

export const baseTooltipStyles = [
  'absolute',
  'z-50',
  'px-3',
  'py-2',
  'text-sm',
  'text-white',
  'bg-gray-900',
  'rounded-md',
  'shadow-lg',
  'whitespace-nowrap',
  'pointer-events-none',
  'opacity-0',
  'transition-opacity',
  'duration-200',
].join(' ');

export const visibleTooltipStyles = 'opacity-100';

const positionStyles: Record<TooltipPosition, string> = {
  top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
};

const arrowStyles: Record<TooltipPosition, string> = {
  top: 'absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900',
  bottom: 'absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-900',
  left: 'absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900',
  right: 'absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900',
};

export function getTooltipStyles(position: TooltipPosition, visible: boolean): string {
  return [
    baseTooltipStyles,
    positionStyles[position],
    visible ? visibleTooltipStyles : '',
  ].join(' ').trim();
}

export function getArrowStyles(position: TooltipPosition): string {
  return arrowStyles[position];
}

export const tooltipWrapperStyles = 'relative inline-block'; 