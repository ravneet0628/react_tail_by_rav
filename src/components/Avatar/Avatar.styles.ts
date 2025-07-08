import { cva } from '../../utils';
import type { AvatarProps } from './Avatar.types';

const base = [
  'relative',
  'inline-flex',
  'items-center',
  'justify-center',
  'overflow-hidden',
  'select-none',
  'bg-gray-200',
  'dark:bg-gray-700',
  'text-white',
  'uppercase',
  'font-medium',
].join(' ');

const sizeMap = {
  xs: 'w-6 h-6 text-xs rounded',
  sm: 'w-8 h-8 text-sm rounded',
  md: 'w-10 h-10 text-base rounded-md',
  lg: 'w-12 h-12 text-lg rounded-lg',
  xl: 'w-16 h-16 text-xl rounded-lg',
  '2xl': 'w-20 h-20 text-2xl rounded-lg',
} as const;

export function getAvatarStyles({ size = 'md' }: AvatarProps): string {
  return cva(base, { size: sizeMap }, { size });
}