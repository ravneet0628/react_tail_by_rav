import type { ReactNode } from 'react';
import type { NavigationItem } from '../../types';
import type { BaseComponentProps } from '../../types';

export type NavigationVariant =
  | 'horizontal'
  | 'vertical'
  | 'breadcrumb'
  | 'tabs'
  | 'pagination'
  | 'mobile'
  | 'mega';

export interface NavigationProps extends BaseComponentProps {
  variant?: NavigationVariant;
  items: NavigationItem[];
  activeItem?: string;
  onItemClick?: (item: NavigationItem) => void;
  logo?: ReactNode;
  actions?: ReactNode;
}

export interface NavigationStyleConfig {
  variant: NavigationVariant;
}