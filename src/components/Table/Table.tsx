import { useState, useId } from 'react';
import { ChevronUp, ChevronDown, Loader2 } from 'lucide-react';
import { cn } from '../../utils';
import type { TableProps, TableRow, TableSort } from './Table.types';

/**
 * Comprehensive Table component with sorting, selection, and responsive features
 * 
 * @example
 * ```tsx
 * <Table 
 *   variant="striped"
 *   columns={columns}
 *   data={data}
 *   sortable
 *   selectable
 *   onSort={handleSort}
 *   onRowSelect={handleSelection}
 * />
 * ```
 */
export const Table = ({
  variant = 'basic',
  columns,
  data,
  selectable = false,
  sortable = false,
  sort,
  onSort,
  selectedRows = [],
  onRowSelect,
  loading = false,
  emptyMessage = 'No data available',
  caption,
  className,
  size = 'md',
  ...props
}: TableProps) => {
  const tableId = useId();
  const [internalSort, setInternalSort] = useState<TableSort | null>(sort || null);
  const [internalSelectedRows, setInternalSelectedRows] = useState<(string | number)[]>(selectedRows);
  
  // Use controlled or uncontrolled sorting
  const currentSort = sort || internalSort;
  const currentSelectedRows = selectedRows.length > 0 ? selectedRows : internalSelectedRows;
  
  // Sort data if sorting is enabled
  const sortedData = currentSort 
    ? [...data].sort((a, b) => {
        const aValue = a[currentSort.column];
        const bValue = b[currentSort.column];
        
        if (aValue < bValue) return currentSort.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return currentSort.direction === 'asc' ? 1 : -1;
        return 0;
      })
    : data;
  
  // Handle column sorting
  const handleSort = (columnKey: string) => {
    if (!sortable) return;
    
    const newDirection = 
      currentSort?.column === columnKey && currentSort.direction === 'asc' 
        ? 'desc' 
        : 'asc';
    
    const newSort = { column: columnKey, direction: newDirection as 'asc' | 'desc' };
    
    if (onSort) {
      onSort(columnKey, newDirection as 'asc' | 'desc');
    } else {
      setInternalSort(newSort);
    }
  };
  
  // Handle row selection
  const handleRowSelect = (rowId: string | number, checked: boolean) => {
    const newSelectedRows = checked
      ? [...currentSelectedRows, rowId]
      : currentSelectedRows.filter(id => id !== rowId);
    
    if (onRowSelect) {
      const selectedRowsData = sortedData.filter(row => newSelectedRows.includes(row.id));
      onRowSelect(selectedRowsData);
    } else {
      setInternalSelectedRows(newSelectedRows);
    }
  };
  
  // Handle select all
  const handleSelectAll = (checked: boolean) => {
    const newSelectedRows = checked ? sortedData.map(row => row.id) : [];
    
    if (onRowSelect) {
      const selectedRowsData = checked ? sortedData : [];
      onRowSelect(selectedRowsData);
    } else {
      setInternalSelectedRows(newSelectedRows);
    }
  };
  
  // Check if all rows are selected
  const isAllSelected = sortedData.length > 0 && currentSelectedRows.length === sortedData.length;
  const isIndeterminate = currentSelectedRows.length > 0 && currentSelectedRows.length < sortedData.length;
  
  // Get size-based styles
  const sizeStyles = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  };
  
  const paddingStyles = {
    xs: 'px-2 py-1',
    sm: 'px-3 py-2',
    md: 'px-4 py-3',
    lg: 'px-5 py-4',
    xl: 'px-6 py-5',
    '2xl': 'px-8 py-6'
  };
  
  // Base table styles
  const tableClasses = cn(
    'w-full border-collapse bg-white',
    sizeStyles[size],
    variant === 'bordered' && 'border border-gray-300',
    className
  );
  
  const headerClasses = cn(
    'bg-gray-50 border-b border-gray-200',
    'font-semibold text-gray-900 text-left',
    paddingStyles[size]
  );
  
  const cellClasses = cn(
    'border-b border-gray-200',
    paddingStyles[size],
    'text-gray-700'
  );
  
  const rowClasses = (index: number) => cn(
    variant === 'striped' && index % 2 === 1 && 'bg-gray-50',
    'hover:bg-gray-50 transition-colors duration-150'
  );
  
  return (
    <div className="overflow-x-auto">
      <table 
        id={tableId}
        className={tableClasses}
        {...props}
      >
        {caption && <caption className="sr-only">{caption}</caption>}
        
        <thead>
          <tr>
            {/* Selection header */}
            {selectable && (
              <th className={cn(headerClasses, 'w-12')}>
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  ref={input => {
                    if (input) input.indeterminate = isIndeterminate;
                  }}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
                  aria-label="Select all rows"
                />
              </th>
            )}
            
            {/* Column headers */}
            {columns.map((column) => {
              const isSorted = currentSort?.column === column.key;
              const sortDirection = isSorted ? currentSort?.direction : null;
              const canSort = sortable && column.sortable !== false;
              
              return (
                <th
                  key={column.key}
                  className={cn(
                    headerClasses,
                    canSort && 'cursor-pointer hover:bg-gray-100',
                    column.align === 'center' && 'text-center',
                    column.align === 'right' && 'text-right'
                  )}
                  style={{ width: column.width }}
                  onClick={() => canSort && handleSort(column.key)}
                >
                  <div className="flex items-center gap-2">
                    <span>{column.label}</span>
                    {canSort && (
                      <div className="flex flex-col">
                        <ChevronUp 
                          className={cn(
                            'w-3 h-3',
                            isSorted && sortDirection === 'asc' 
                              ? 'text-primary-600' 
                              : 'text-gray-400'
                          )} 
                        />
                        <ChevronDown 
                          className={cn(
                            'w-3 h-3 -mt-1',
                            isSorted && sortDirection === 'desc' 
                              ? 'text-primary-600' 
                              : 'text-gray-400'
                          )} 
                        />
                      </div>
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        
        <tbody>
          {loading && (
            <tr>
              <td 
                colSpan={columns.length + (selectable ? 1 : 0)} 
                className={cn(cellClasses, 'text-center py-8')}
              >
                <div className="flex items-center justify-center gap-2 text-gray-500">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Loading...
                </div>
              </td>
            </tr>
          )}
          
          {!loading && sortedData.length === 0 && (
            <tr>
              <td 
                colSpan={columns.length + (selectable ? 1 : 0)} 
                className={cn(cellClasses, 'text-center py-8 text-gray-500')}
              >
                {emptyMessage}
              </td>
            </tr>
          )}
          
          {!loading && sortedData.map((row, index) => {
            const isSelected = currentSelectedRows.includes(row.id);
            
            return (
              <tr key={row.id} className={rowClasses(index)}>
                {/* Selection cell */}
                {selectable && (
                  <td className={cellClasses}>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={(e) => handleRowSelect(row.id, e.target.checked)}
                      className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
                      aria-label={`Select row ${index + 1}`}
                    />
                  </td>
                )}
                
                {/* Data cells */}
                {columns.map((column) => {
                  const value = row[column.key];
                  const content = column.render 
                    ? column.render(value, row, index)
                    : value;
                  
                  return (
                    <td
                      key={column.key}
                      className={cn(
                        cellClasses,
                        column.align === 'center' && 'text-center',
                        column.align === 'right' && 'text-right'
                      )}
                    >
                      {content}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};