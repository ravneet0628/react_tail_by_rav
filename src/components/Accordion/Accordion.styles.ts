import { cva } from '../../utils';
import type { AccordionVariant } from './Accordion.types';

const base = 'w-full';

const variantStyles: Record<AccordionVariant, string> = {
  single: 'divide-y divide-gray-200',
  multiple: 'divide-y divide-gray-200',
  flush: 'divide-y divide-gray-200',
  bordered: 'border border-gray-200 divide-y divide-gray-200 rounded-md',
  card: 'bg-white shadow-sm rounded-md divide-y divide-gray-200',
  icon: 'divide-y divide-gray-200',
  nested: 'divide-y divide-gray-200',
};

export function getAccordionContainerStyles(variant: AccordionVariant = 'single'): string {
  return `${base} ${variantStyles[variant]}`.trim();
}

export function getAccordionItemStyles(variant: AccordionVariant = 'single'): string {
  switch (variant) {
    case 'flush':
      return 'py-2';
    default:
      return 'py-3';
  }
}

export function getAccordionButtonStyles(): string {
  return 'flex w-full items-center justify-between text-left font-medium focus:outline-none focus:ring-2 focus:ring-primary-500';
}

export function getAccordionIconStyles(open: boolean): string {
  return `transform transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`;
}