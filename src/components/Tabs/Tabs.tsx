import React from 'react';
import { cn } from '../../utils';
import { TabsProps } from './Tabs.types';
import { getTabsWrapperStyles, getTabStyles } from './Tabs.styles';

export const Tabs: React.FC<TabsProps> = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    { items, activeItem, variant = 'basic', onTabChange, className, ...props },
    ref
  ) => {
    const wrapperCls = cn(getTabsWrapperStyles({ variant }), className);

    return (
      <div ref={ref} className={wrapperCls} role="tablist" {...props}>
        {items.map((item) => {
          const isActive = item.id === activeItem;
          const tabCls = getTabStyles(variant, isActive);
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              disabled={item.disabled}
              className={tabCls}
              onClick={() => onTabChange?.(item)}
            >
              {item.icon && <span className="mr-1 inline-flex w-4 h-4">{item.icon}</span>}
              {item.label}
            </button>
          );
        })}
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';