import { cva } from '../../utils';
import type { TableVariant } from './Table.types';

const base = 'min-w-full text-left';

const variantStyles: Record<TableVariant, string> = {
  basic: '',
  striped: 'divide-y divide-gray-200',
  bordered: 'border border-gray-300',
  hover: 'hover:divide-gray-100',
  compact: 'text-sm',
  sortable: '',
  selectable: '',
};

export function getTableStyles(variant: TableVariant = 'basic'): string {
  return cva(base, { variant: variantStyles }, { variant });
}

export const headerCellBase = 'px-4 py-2 font-medium text-gray-700';
export const cellBase = 'px-4 py-2';