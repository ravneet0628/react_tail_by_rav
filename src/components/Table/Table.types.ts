import type { ReactNode, HTMLAttributes } from 'react';
import type { BaseComponentProps, ComponentSize } from '../../types';

/**
 * Table variants with clear use cases
 */
export type TableVariant = 'basic' | 'striped' | 'bordered' | 'compact';

/**
 * Table column definition
 */
export interface TableColumn {
  /**
   * Unique column identifier
   */
  key: string;
  
  /**
   * Column header label
   */
  label: string;
  
  /**
   * Column width (CSS value)
   */
  width?: string;
  
  /**
   * Enable sorting for this column
   * @default false
   */
  sortable?: boolean;
  
  /**
   * Custom cell renderer
   */
  render?: (value: any, row: TableRow, index: number) => ReactNode;
  
  /**
   * Text alignment
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right';
}

/**
 * Table row data
 */
export interface TableRow {
  /**
   * Unique row identifier
   */
  id: string | number;
  
  /**
   * Row data (key-value pairs matching column keys)
   */
  [key: string]: any;
}

/**
 * Sort configuration
 */
export interface TableSort {
  /**
   * Column key to sort by
   */
  column: string;
  
  /**
   * Sort direction
   */
  direction: 'asc' | 'desc';
}

/**
 * Table component props
 */
export interface TableProps extends Omit<HTMLAttributes<HTMLTableElement>, 'className'>, BaseComponentProps {
  /**
   * Table visual variant
   * @default 'basic'
   */
  variant?: TableVariant;
  
  /**
   * Column definitions
   */
  columns: TableColumn[];
  
  /**
   * Table data
   */
  data: TableRow[];
  
  /**
   * Enable row selection
   * @default false
   */
  selectable?: boolean;
  
  /**
   * Enable sorting
   * @default false
   */
  sortable?: boolean;
  
  /**
   * Current sort configuration
   */
  sort?: TableSort;
  
  /**
   * Sort change handler
   */
  onSort?: (column: string, direction: 'asc' | 'desc') => void;
  
  /**
   * Selected row IDs
   */
  selectedRows?: (string | number)[];
  
  /**
   * Row selection handler
   */
  onRowSelect?: (selectedRows: TableRow[]) => void;
  
  /**
   * Loading state
   * @default false
   */
  loading?: boolean;
  
  /**
   * Empty state message
   */
  emptyMessage?: string;
  
  /**
   * Caption for accessibility
   */
  caption?: string;
}