import { cva } from '../../utils';
import type { BadgeProps } from './Badge.types';

// Base styles always applied
const base = [
  'inline-flex',
  'items-center',
  'justify-center',
  'font-medium',
  'transition-colors',
  'duration-200',
  'select-none',
  'whitespace-nowrap',
].join(' ');

// Size styles
const sizeStyles = {
  sm: 'text-xs px-1.5 py-0.5 rounded',
  md: 'text-sm px-2 py-0.5 rounded-md',
  lg: 'text-base px-3 py-1 rounded-lg',
} as const;

// Color palette mapping to Tailwind CSS variables (assuming Tailwind configured)
const colorMap = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning',
  error: 'error',
  neutral: 'gray',
} as const;

type VariantKey = 'default' | 'outline' | 'pill' | 'status' | 'icon' | 'dot' | 'number';

function buildVariantStyles(variant: VariantKey): Record<string, string> {
  const result: Record<string, string> = {};
  Object.entries(colorMap).forEach(([key, color]) => {
    switch (variant) {
      case 'default':
        result[key] = `bg-${color}-500 text-white`;
        break;
      case 'outline':
        result[key] = `border border-${color}-500 text-${color}-600 bg-transparent`;
        break;
      case 'pill':
        result[key] = `bg-${color}-100 text-${color}-800 rounded-full`;
        break;
      case 'status':
        result[key] = `bg-${color}-100 text-${color}-600`;
        break;
      case 'icon':
        result[key] = `text-${color}-600`;
        break;
      default:
        result[key] = `bg-${color}-500 text-white`;
    }
  });
  return result;
}

const variantBase = {
  default: buildVariantStyles('default'),
  outline: buildVariantStyles('outline'),
  pill: buildVariantStyles('pill'),
  status: buildVariantStyles('status'),
  icon: buildVariantStyles('icon'),
} as const;

// Dot & number handled separately

export function getBadgeStyles({ variant: variantKey = 'default', size = 'md' }: BadgeProps): string {
  const variantStyles = (variantKey === 'dot' || variantKey === 'number')
    ? {}
    : variantBase[variantKey as keyof typeof variantBase];

  const styles = cva(
    base,
    {
      size: sizeStyles,
      variant: variantStyles,
    },
    { size, variant: variantKey }
  );
  return styles.replace(/undefined/g, '').trim();
}