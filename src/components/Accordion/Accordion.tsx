import React, { useState } from 'react';
import type { AccordionProps } from './Accordion.types';
import {
  getAccordionButtonStyles,
  getAccordionContainerStyles,
  getAccordionIconStyles,
  getAccordionItemStyles,
} from './Accordion.styles';
import { cn } from '../../utils';

// fall back simple chevron svg

export const Accordion: React.FC<AccordionProps> = ({
  variant = 'single',
  items,
  defaultOpen = [],
  allowMultiple,
  expandIcon,
  className,
  onChange,
}) => {
  const multiple = allowMultiple ?? variant === 'multiple';

  const [openIds, setOpenIds] = useState<string[]>(defaultOpen);

  const toggleItem = (id: string) => {
    let next: string[];
    if (multiple) {
      next = openIds.includes(id) ? openIds.filter((x) => x !== id) : [...openIds, id];
    } else {
      next = openIds.includes(id) ? [] : [id];
    }
    setOpenIds(next);
    onChange?.(next);
  };

  return (
    <div className={cn(getAccordionContainerStyles(variant), className)}>
      {items.map(({ id, title, content, disabled }) => {
        const open = openIds.includes(id);
        return (
          <div key={id} className={getAccordionItemStyles(variant)}>
            <button
              type="button"
              disabled={disabled}
              onClick={() => toggleItem(id)}
              className={getAccordionButtonStyles()}
              aria-expanded={open}
              aria-controls={`${id}-panel`}
            >
              <span>{title}</span>
              <span className={getAccordionIconStyles(open)}>
                {expandIcon || (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                  </svg>
                )}
              </span>
            </button>
            {open && (
              <div id={`${id}-panel`} className="mt-2 text-sm text-gray-600">
                {content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

Accordion.displayName = 'Accordion';