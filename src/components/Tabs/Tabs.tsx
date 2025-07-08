import { useId, forwardRef } from 'react';
import { cn } from '../../utils';
import { TabsProps } from './Tabs.types';
import { getTabsWrapperStyles, getTabStyles } from './Tabs.styles';

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    { items, activeItem, variant = 'basic', onTabChange, className, ...props },
    ref
  ) => {
    const tabsId = useId();
    const wrapperCls = cn(getTabsWrapperStyles({ variant }), className);

    return (
      <div id={tabsId} ref={ref} className={wrapperCls} role="tablist" {...props}>
        {items.map((item) => {
          const isActive = item.id === activeItem;
          const tabCls = getTabStyles(variant, isActive);
          const tabId = useId();
          return (
            <button
              key={item.id}
              id={tabId}
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