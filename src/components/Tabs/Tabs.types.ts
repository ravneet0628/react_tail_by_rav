import type { ReactNode } from 'react';
import type { BaseComponentProps } from '../../types';

export interface TabItem {
  id: string;
  label: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}

export type TabsVariant = 'basic' | 'pills' | 'underline' | 'vertical' | 'scrollable' | 'icon' | 'card';

export interface TabsProps extends BaseComponentProps {
  items: TabItem[];
  activeItem?: string;
  variant?: TabsVariant;
  onTabChange?: (item: TabItem) => void;
}

export interface TabsStyleConfig {
  variant: TabsVariant;
}