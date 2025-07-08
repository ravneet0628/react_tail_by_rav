import type { ReactNode, CSSProperties } from 'react';

// Modern component size type
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Modern spacing type using design system values
export type Spacing = 
  | 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
  | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '52' | '56' | '60' | '64' | '72' | '80' | '96';

// Modern color type supporting design system
export type ComponentColor = 
  | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info'
  | 'gray' | 'neutral' | 'transparent';

// Variant type for component variations
export type ComponentVariant = 'default' | 'outline' | 'ghost' | 'subtle' | 'solid';

// Base component props with optional className (2025 standard)
export interface BaseComponentProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  'data-testid'?: string;
}

// Animation preferences type
export type AnimationPreference = 'smooth' | 'reduced' | 'none';

// Theme mode type
export type ThemeMode = 'light' | 'dark' | 'system';

// Responsive breakpoint type
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Status type for components
export type ComponentStatus = 'idle' | 'loading' | 'success' | 'error';

// Position type for floating elements
export type Position = 'top' | 'bottom' | 'left' | 'right' | 'center';

// Alignment type
export type Alignment = 'start' | 'center' | 'end' | 'stretch';

// Modern form field states
export type FieldState = 'default' | 'success' | 'warning' | 'error' | 'disabled';

// Loading state for async components
export interface LoadingState {
  isLoading: boolean;
  error?: string | null;
  progress?: number;
}

// Accessibility props for 2025 compliance
export interface AccessibilityProps {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-hidden'?: boolean;
  'aria-disabled'?: boolean;
  'aria-required'?: boolean;
  'aria-invalid'?: boolean;
  role?: string;
  tabIndex?: number;
}

// Navigation types for modern navigation patterns
export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  icon?: ReactNode;
  children?: NavigationItem[];
  disabled?: boolean;
  active?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
  'aria-label'?: string;
}

// Table types for modern data display
export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: TableRow) => ReactNode;
  headerClassName?: string;
  cellClassName?: string;
}

export interface TableRow {
  id: string | number;
  [key: string]: any;
}

// Modern form types
export interface FormFieldConfig {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  helperText?: string;
  errorText?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
}

// Event handler types for type safety
export type ClickHandler = (event: React.MouseEvent) => void;
export type ChangeHandler<T = string> = (value: T) => void;
export type KeyboardHandler = (event: React.KeyboardEvent) => void;
export type FormHandler = (event: React.FormEvent) => void;

// Utility types for modern TypeScript patterns
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type WithRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Component ref types for forwardRef components
export type ButtonRef = HTMLButtonElement;
export type InputRef = HTMLInputElement;
export type TextareaRef = HTMLTextAreaElement;
export type DivRef = HTMLDivElement;
export type LinkRef = HTMLAnchorElement;