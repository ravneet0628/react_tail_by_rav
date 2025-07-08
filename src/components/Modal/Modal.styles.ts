import { cva } from '../../utils';
import type { ModalStyleConfig } from './Modal.types';
import type { Position } from '../../types';
import type { ModalProps } from './Modal.types';

const backdropBase = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';

const sizeVariants = {
  xs: 'max-w-sm',
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  '2xl': 'max-w-6xl',
  full: 'w-full h-full',
} as const;

const drawerBase = 'fixed top-0 h-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform z-50';

export function getModalContainerStyles(config: ModalStyleConfig): string {
  const { size } = config;
  return cva(
    'bg-white dark:bg-gray-800 rounded-md shadow-lg w-full transform transition-all',
    { size: sizeVariants },
    { size: size || 'md' }
  );
}

export function getBackdropStyles(): string {
  return backdropBase;
}

export function getDrawerStyles(position: Position = 'right', size: ModalProps['size'] = 'md') {
  const widthMap: Record<string, string> = {
    xs: 'w-60',
    sm: 'w-72',
    md: 'w-96',
    lg: 'w-[28rem]',
    xl: 'w-[32rem]',
    '2xl': 'w-[36rem]',
    full: 'w-full',
  };

  const posCls = position === 'left' ? '-translate-x-full left-0' : 'translate-x-full right-0';

  return `${drawerBase} ${posCls} ${widthMap[size ?? 'md']}`;
}