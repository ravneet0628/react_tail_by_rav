import type { ReactNode } from 'react';
import type { BaseComponentProps } from '../../types';

export interface DropdownOption {
  label: string;
  value: string | number;
  disabled?: boolean;
  icon?: ReactNode;
}

export type DropdownVariant = 'select' | 'multi' | 'searchable' | 'grouped' | 'custom' | 'async' | 'combobox';

export interface DropdownGroup {
  label: string;
  options: DropdownOption[];
}

export type DropdownOptionOrGroup = DropdownOption | DropdownGroup;

export interface DropdownProps extends BaseComponentProps {
  variant?: DropdownVariant;
  options?: DropdownOptionOrGroup[];
  value?: string | number | Array<string | number>;
  placeholder?: string;
  label?: string;
  searchable?: boolean;
  onChange?: (value: string | number | Array<string | number>) => void;
  /** custom render function used when variant is custom */
  renderOption?: (option: DropdownOption, selected: boolean) => ReactNode;
  /** async loader used for async variant; receives search term */
  loadOptions?: (search: string) => Promise<DropdownOptionOrGroup[]>;
}