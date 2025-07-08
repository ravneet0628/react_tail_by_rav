import type { ReactNode } from 'react';
import type { BaseComponentProps } from '../../types';

/**
 * Simplified dropdown variants
 */
export type DropdownVariant = 'select' | 'multiselect' | 'searchable';

/**
 * Dropdown option interface
 */
export interface DropdownOption {
  /**
   * Option label
   */
  label: string;
  
  /**
   * Option value
   */
  value: string | number;
  
  /**
   * Optional icon
   */
  icon?: ReactNode;
  
  /**
   * Disabled state
   */
  disabled?: boolean;
}

/**
 * Option group interface
 */
export interface DropdownOptionGroup {
  /**
   * Group label
   */
  label: string;
  
  /**
   * Group options
   */
  options: DropdownOption[];
}

/**
 * Dropdown component props
 */
export interface DropdownProps extends BaseComponentProps {
  /**
   * Dropdown variant
   * @default 'select'
   */
  variant?: DropdownVariant;
  
  /**
   * Dropdown options (can be grouped)
   */
  options: (DropdownOption | DropdownOptionGroup)[];
  
  /**
   * Current value
   */
  value?: string | number | (string | number)[];
  
  /**
   * Placeholder text
   * @default 'Select...'
   */
  placeholder?: string;
  
  /**
   * Field label
   */
  label?: string;
  
  /**
   * Change handler
   */
  onChange?: (value: string | number | (string | number)[]) => void;
  
  /**
   * Search functionality
   * @default false
   */
  searchable?: boolean;
  
  /**
   * Custom option renderer
   */
  renderOption?: (option: DropdownOption, isSelected: boolean) => ReactNode;
  
  /**
   * Async option loader
   */
  loadOptions?: (searchTerm: string) => Promise<DropdownOption[]>;
  
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Error message
   */
  error?: string;
}