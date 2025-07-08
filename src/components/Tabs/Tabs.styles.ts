import { cva } from '../../utils';
import type { TabsStyleConfig } from './Tabs.types';

const base = 'flex';

const variantStyles = {
  basic: 'space-x-4 border-b',
  pills: 'space-x-2',
  underline: 'space-x-4 border-b',
  vertical: 'flex-col space-y-2',
  scrollable: 'space-x-4 overflow-x-auto',
  icon: 'space-x-4',
  card: 'space-x-2',
};

export function getTabsWrapperStyles(config: TabsStyleConfig) {
  const { variant } = config;
  return cva(base, { variant: variantStyles }, { variant });
}

export function getTabStyles(variant: string, active: boolean): string {
  const common = 'px-4 py-2 text-sm font-medium focus:outline-none transition-colors';
  const styles: Record<string, [string,string]> = {
    basic: ['text-gray-600 hover:text-primary-600 border-b-2 border-transparent', 'text-primary-600 border-primary-600'],
    pills: ['text-gray-700 hover:bg-gray-100 rounded', 'bg-primary-600 text-white rounded'],
    underline: ['text-gray-600 hover:text-primary-600 relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-transparent', 'text-primary-600 after:bg-primary-600'],
    vertical: ['text-gray-600 hover:text-primary-600', 'text-primary-600'],
    scrollable: ['text-gray-600 hover:text-primary-600', 'text-primary-600'],
    icon: ['text-gray-600 hover:text-primary-600', 'text-primary-600'],
    card: ['text-gray-600 hover:text-primary-600 border rounded-md', 'bg-primary-50 text-primary-700 border-primary-300'],
  };
  const [inactiveCls, activeCls] = styles[variant] || styles.basic;
  return `${common} ${active ? activeCls : inactiveCls}`;
}