import { cva } from '../../utils';
import type { NavigationStyleConfig } from './Navigation.types';

const baseStyles = 'w-full';

const variantStyles = {
  horizontal: 'flex items-center justify-between space-x-4',
  vertical: 'flex flex-col space-y-2',
  breadcrumb: 'flex space-x-2 text-sm',
  tabs: 'flex space-x-4 border-b',
  pagination: 'inline-flex space-x-1',
  mobile: 'flex items-center justify-between',
  mega: 'relative',
};

export function getNavigationStyles(config: NavigationStyleConfig): string {
  const { variant } = config;
  return cva(
    baseStyles,
    {
      variant: variantStyles,
    },
    { variant }
  );
}