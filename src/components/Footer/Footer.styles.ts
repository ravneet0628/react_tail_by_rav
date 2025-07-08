import type { FooterVariant } from './Footer.types';

// Base footer styles using standard classes
const baseStyles = [
  'w-full',
  'text-gray-600',
  'bg-gray-50',
  'border-t',
  'border-gray-200',
].join(' ');

// Variant styles using standard classes
const variantStyles = {
  simple: 'py-6',
  'multi-column': 'py-12',
  social: 'py-8',
  newsletter: 'py-10',
  corporate: 'py-16',
};

export function getFooterStyles({ variant }: { variant: FooterVariant }): string {
  return `${baseStyles} ${variantStyles[variant]}`;
}