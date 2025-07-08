import type { ReactNode } from 'react';

export interface AccordionItem {
  id: string;
  title: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export type AccordionVariant = 'single' | 'multiple' | 'flush' | 'bordered' | 'card' | 'icon' | 'nested';

export interface AccordionProps {
  variant?: AccordionVariant;
  items: AccordionItem[];
  defaultOpen?: string[]; // array of open ids
  allowMultiple?: boolean; // overrides variant 'multiple'
  expandIcon?: ReactNode;
  className?: string;
  onChange?: (openIds: string[]) => void;
}