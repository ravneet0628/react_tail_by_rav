import { cva } from '../../utils';
import type { FooterVariant } from './Footer.types';

export interface FooterStyleConfig {
  variant: FooterVariant;
}

// Base footer styles shared across variants
const baseStyles =
  'w-full text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700';

// Variant specific additions
const variantStyles: Record<FooterVariant, string> = {
  'simple': 'py-6',
  'multi-column': 'py-8 md:py-12',
  'social': 'py-6',
  'newsletter': 'py-8 md:py-12',
  'corporate': 'py-8 md:py-12',
};

export function getFooterStyles(config: FooterStyleConfig): string {
  const { variant } = config;
  return cva(
    baseStyles,
    { variant: variantStyles },
    { variant }
  );
}