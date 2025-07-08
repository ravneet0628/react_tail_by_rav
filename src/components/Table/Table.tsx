import React, { useState } from 'react';
import type { TableProps } from './Table.types';
import {
  getTableStyles,
  headerCellBase,
  cellBase,
} from './Table.styles';
import { cn } from '../../utils';
// inline chevron svgs
import type { TableRow } from '../../types';

function sortRows(rows: TableRow[], columnKey: string, direction: 'asc' | 'desc'): TableRow[] {
  return [...rows].sort((a, b) => {
    const valA = a[columnKey];
    const valB = b[columnKey];

    if (valA === valB) return 0;
    if (valA == null) return 1;
    if (valB == null) return -1;

    return direction === 'asc' ? (valA > valB ? 1 : -1) : valA > valB ? -1 : 1;
  });
}

export const Table: React.FC<TableProps> = ({
  variant = 'basic',
  columns,
  data,
  sortable = false,
  selectable = false,
  onSort,
  onSelect,
  className,
}) => {
  const [sortState, setSortState] = useState<{ column: string; direction: 'asc' | 'desc' } | null>(null);
  const [selectedIds, setSelectedIds] = useState<Array<string | number>>([]);

  // Apply sorting
  let rows = data;
  if (sortState) {
    rows = sortRows(rows, sortState.column, sortState.direction);
  }

  const handleHeaderClick = (colKey: string, sortableCol: boolean) => {
    if (!(sortable && sortableCol)) return;
    setSortState((prev) => {
      if (prev && prev.column === colKey) {
        const newDir = prev.direction === 'asc' ? 'desc' : 'asc';
        onSort?.(colKey, newDir);
        return { column: colKey, direction: newDir };
      }
      onSort?.(colKey, 'asc');
      return { column: colKey, direction: 'asc' };
    });
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === rows.length) {
      setSelectedIds([]);
      onSelect?.([]);
    } else {
      const all = rows.map((r) => r.id);
      setSelectedIds(all);
      onSelect?.(rows);
    }
  };

  const toggleRow = (rowId: string | number, row: TableRow) => {
    const exists = selectedIds.includes(rowId);
    const next = exists ? selectedIds.filter((id) => id !== rowId) : [...selectedIds, rowId];
    setSelectedIds(next);
    const rowsSelected = rows.filter((r) => next.includes(r.id));
    onSelect?.(rowsSelected);
  };

  return (
    <table className={cn(getTableStyles(variant), className)}>
      <thead className="bg-gray-50">
        <tr>
          {selectable && (
            <th className={headerCellBase}>
              <input
                type="checkbox"
                aria-label="Select all"
                checked={selectedIds.length === rows.length && rows.length > 0}
                onChange={toggleSelectAll}
              />
            </th>
          )}
          {columns.map((col) => {
            const isSortable = sortable && (col.sortable ?? true);
            const sortActive = sortState?.column === col.key;
            const dir = sortState?.direction;
            return (
              <th
                key={col.key}
                onClick={() => handleHeaderClick(col.key, isSortable)}
                className={cn(headerCellBase, isSortable ? 'cursor-pointer select-none' : '')}
                style={{ width: col.width }}
              >
                <div className="flex items-center gap-1">
                  {col.label}
                  {isSortable && (
                    <span className="text-gray-400">
                      {sortActive ? (
                        dir === 'asc' ? (
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M18 15l-6-6-6 6"/></svg>
                        ) : (
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6"/></svg>
                        )
                      ) : (
                        <svg className="w-3 h-3 opacity-20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M18 15l-6-6-6 6"/></svg>
                      )}
                    </span>
                  )}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className={variant === 'striped' ? 'divide-y divide-gray-100' : ''}>
        {rows.map((row) => (
          <tr
            key={row.id}
            className={cn(
              variant === 'hover' ? 'hover:bg-gray-50' : '',
              selectable ? 'cursor-pointer' : ''
            )}
          >
            {selectable && (
              <td className={cellBase}>
                <input
                  type="checkbox"
                  aria-label="Select row"
                  checked={selectedIds.includes(row.id)}
                  onChange={() => toggleRow(row.id, row)}
                />
              </td>
            )}
            {columns.map((col) => (
              <td key={col.key} className={cellBase} style={{ textAlign: col.align }}>
                {col.render ? col.render(row[col.key], row) : row[col.key] as React.ReactNode}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.displayName = 'Table';