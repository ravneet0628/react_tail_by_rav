import type { ReactNode, HTMLAttributes } from 'react';
import type { BaseComponentProps } from '../../types';

export interface AccordionItem {
  id: string;
  title: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export type AccordionVariant = 'single' | 'multiple' | 'flush' | 'bordered' | 'card' | 'icon' | 'nested';

// Modern interface with proper optional property handling
export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'>, BaseComponentProps {
  variant?: AccordionVariant;
  items: AccordionItem[];
  defaultOpen?: string[]; // array of open ids
  allowMultiple?: boolean; // overrides variant 'multiple'
  expandIcon?: ReactNode;
  onChange?: (openIds: string[]) => void;
}