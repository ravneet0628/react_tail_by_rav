import { cva } from '../../utils';
import type { Spacing } from '../../types';
import type { CardStyleConfig } from './Card.types';

// Base card styles
const baseStyles = [
  'bg-white',
  'dark:bg-gray-800',
  'transition-all',
  'duration-200',
  'overflow-hidden',
].join(' ');

// Variant styles
const variantStyles = {
  basic: 'border border-gray-200 dark:border-gray-700 rounded-lg',
  elevated: 'shadow-md hover:shadow-lg rounded-lg border border-gray-100 dark:border-gray-700',
  outlined: 'border-2 border-gray-300 dark:border-gray-600 rounded-lg',
  gradient: 'bg-gradient-to-br rounded-lg border border-gray-200 dark:border-gray-700',
  image: 'rounded-lg shadow-sm border border-gray-200 dark:border-gray-700',
  interactive: 'border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 cursor-pointer',
  compact: 'border border-gray-200 dark:border-gray-700 rounded',
};

// Padding variants
const paddingStyles = {
  none: 'p-0',
  xs: 'p-2',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8',
  '2xl': 'p-10',
} as const;

// Clickable styles
const clickableStyles = 'hover:bg-gray-50 dark:hover:bg-gray-700 active:bg-gray-100 dark:active:bg-gray-600';

// Full height styles
const fullHeightStyles = 'h-full';

export function getCardStyles(config: CardStyleConfig): string {
  const { variant, padding, clickable, fullHeight, hasImage } = config;

  // Get variant specific styles
  const variantStyle = variantStyles[variant];
  const paddingStyle = paddingStyles[padding];

  return cva(
    baseStyles,
    {
      variant: { [variant]: variantStyle },
      padding: { [padding]: paddingStyle },
      clickable: { true: clickableStyles, false: '' },
      fullHeight: { true: fullHeightStyles, false: '' },
    },
    {
      variant,
      padding,
      clickable: clickable.toString() as 'true' | 'false',
      fullHeight: fullHeight.toString() as 'true' | 'false',
    }
  );
}

// Header styles
export function getCardHeaderStyles(variant: string): string {
  const baseHeaderStyles = 'border-b border-gray-200 dark:border-gray-700 px-6 py-4';
  
  const variantHeaderStyles = {
    compact: 'px-3 py-2 text-sm',
    gradient: 'bg-black/5 dark:bg-white/5',
  } as Record<string, string>;

  return cva(
    baseHeaderStyles,
    {
      variant: variantHeaderStyles,
    },
    { variant }
  );
}

// Footer styles
export function getCardFooterStyles(variant: string): string {
  const baseFooterStyles = 'border-t border-gray-200 dark:border-gray-700 px-6 py-4 bg-gray-50 dark:bg-gray-700/50';
  
  const variantFooterStyles = {
    compact: 'px-3 py-2 text-sm',
    gradient: 'bg-black/5 dark:bg-white/5',
  } as Record<string, string>;

  return cva(
    baseFooterStyles,
    {
      variant: variantFooterStyles,
    },
    { variant }
  );
}

// Image styles
export function getCardImageStyles(): string {
  return 'w-full h-48 object-cover';
}

// Body styles
export function getCardBodyStyles(variant: string, hasHeader: boolean, hasFooter: boolean): string {
  const baseBodyStyles = 'flex-1';
  
  // Add top padding if no header, bottom padding if no footer
  let conditionalStyles = '';
  if (!hasHeader && !hasFooter) {
    conditionalStyles = 'py-6';
  } else if (!hasHeader) {
    conditionalStyles = 'pt-6';
  } else if (!hasFooter) {
    conditionalStyles = 'pb-6';
  }

  const variantBodyStyles = {
    compact: conditionalStyles.replace('6', '3'),
  } as Record<string, string>;

  return cva(
    `${baseBodyStyles} ${conditionalStyles}`,
    {
      variant: variantBodyStyles,
    },
    { variant }
  );
}