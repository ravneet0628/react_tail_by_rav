import type { TableColumn, TableRow } from '../../types';

export type TableVariant = 'basic' | 'striped' | 'bordered' | 'hover' | 'compact' | 'sortable' | 'selectable';

export interface TableProps {
  variant?: TableVariant;
  columns: TableColumn[];
  data: TableRow[];
  sortable?: boolean;
  selectable?: boolean;
  onSort?: (columnKey: string, direction: 'asc' | 'desc') => void;
  onSelect?: (selectedRows: TableRow[]) => void;
  className?: string;
}