import React, { forwardRef, useState } from 'react';
import { cn } from '../../utils';
import type { NavigationProps } from './Navigation.types';
import type { NavigationItem } from '../../types';
import { getNavigationStyles } from './Navigation.styles';
import { X } from 'lucide-react';

/**
 * Navigation component – currently implements the horizontal variant.
 */
export const Navigation = forwardRef<HTMLElement, NavigationProps>(
  (
    {
      variant = 'horizontal',
      items,
      activeItem,
      onItemClick,
      logo,
      actions,
      className,
      ...props
    },
    ref
  ) => {
    // State for mobile variant menu
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // State for mega menu id
    const [openMega, setOpenMega] = useState<string | null>(null);

    const navStyles = getNavigationStyles({ variant });

    // Mobile variant specific rendering
    if (variant === 'mobile') {
      return (
        <nav
          ref={ref}
          className={cn(navStyles, className, 'relative')}
          aria-label="Mobile Navigation"
          {...props}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            {logo && <div className="flex-shrink-0">{logo}</div>}
            <button
              type="button"
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>

          {mobileMenuOpen && (
            <div
              id="mobile-menu"
              className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-md"
            >
              <ul className="flex flex-col py-2 list-none m-0 p-0" role="menu">
                {items.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      role="menuitem"
                      className={cn(
                        'w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700',
                        item.id === activeItem && 'bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300'
                      )}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onItemClick?.(item);
                      }}
                      disabled={item.disabled}
                    >
                      {item.icon && <span className="mr-2 inline-flex">{item.icon}</span>}
                      {item.label}
                    </button>
                  </li>
                ))}

                {/* Actions placed at bottom */}
                {actions && <li className="border-t border-gray-200 dark:border-gray-700 mt-2 px-4 py-2">{actions}</li>}
              </ul>
            </div>
          )}
        </nav>
      );
    }

    if (variant === 'mega') {
      return (
        <nav
          ref={ref}
          className={cn(navStyles, className, 'relative')}
          aria-label="Mega Navigation"
          onMouseLeave={() => setOpenMega(null)}
          {...props}
        >
          {/* Top bar */}
          <ul role="menubar" className="flex items-center space-x-4 px-4 py-3 list-none m-0 p-0">
            {items.map((item) => {
              const hasChildren = Array.isArray(item.children) && item.children.length > 0;
              return (
                <li key={item.id} className="relative">
                  <button
                    type="button"
                    role="menuitem"
                    className={cn(
                      'px-2 py-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors',
                      item.id === activeItem && 'text-primary-600 dark:text-primary-400'
                    )}
                    onMouseEnter={() => hasChildren && setOpenMega(item.id)}
                    onFocus={() => hasChildren && setOpenMega(item.id)}
                    onClick={() => {
                      if (!hasChildren) onItemClick?.(item);
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mega panel */}
          {openMega && (
            <div className="absolute left-0 top-full w-full bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700 py-6 z-10" data-testid="mega-panel">
              <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
                {items
                  .find((it) => it.id === openMega)
                  ?.children?.map((child) => (
                    <a
                      key={child.id}
                      href={child.href}
                      className="block text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                      onClick={(e) => {
                        e.preventDefault();
                        onItemClick?.(child);
                        setOpenMega(null);
                      }}
                    >
                      {child.label}
                    </a>
                  ))}
              </div>
            </div>
          )}
        </nav>
      );
    }

    const renderItem = (item: NavigationItem) => {
      const isActive = item.id === activeItem;
      const itemClasses = cn(
        'px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors',
        isActive
          ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300'
          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50'
      );

      return (
        <li key={item.id}>
          <button
            type="button"
            className={itemClasses}
            onClick={() => onItemClick?.(item)}
            disabled={item.disabled}
          >
            {item.icon && <span className="mr-2 inline-flex">{item.icon}</span>}
            {item.label}
          </button>
        </li>
      );
    };

    if (variant === 'breadcrumb') {
      return (
        <nav ref={ref} aria-label="Breadcrumb" className={cn(navStyles, className)} {...props}>
          <ol className="flex space-x-2 text-sm list-none m-0 p-0">
            {items.map((item, idx) => {
              const isLast = idx === items.length - 1;
              const linkClasses = cn(
                'inline-flex items-center',
                !isLast && 'text-primary-600 hover:underline dark:text-primary-400',
                isLast && 'text-gray-500 dark:text-gray-300 cursor-default'
              );

              return (
                <li key={item.id} className="inline-flex items-center">
                  {idx > 0 && <span className="mx-1 text-gray-400">/</span>}
                  <button
                    type="button"
                    className={linkClasses}
                    disabled={isLast || item.disabled}
                    onClick={() => !isLast && onItemClick?.(item)}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>
      );
    }

    if (variant === 'tabs') {
      return (
        <nav ref={ref} className={cn(navStyles, className)} aria-label="Tabs" {...props}>
          <ul role="tablist" className="flex space-x-4 list-none m-0 p-0">
            {items.map((item) => {
              const isActive = item.id === activeItem;
              const tabClasses = cn(
                'px-4 py-2 text-sm font-medium focus:outline-none transition-colors',
                isActive
                  ? 'text-primary-600 border-b-2 border-primary-600 dark:text-primary-400'
                  : 'text-gray-600 hover:text-primary-600 border-b-2 border-transparent dark:text-gray-300 dark:hover:text-primary-400'
              );

              return (
                <li key={item.id}>
                  <button
                    role="tab"
                    type="button"
                    className={tabClasses}
                    aria-selected={isActive}
                    onClick={() => onItemClick?.(item)}
                    disabled={item.disabled}
                    id={`tab-${item.id}`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      );
    }

    if (variant === 'pagination') {
      return (
        <nav ref={ref} className={cn(navStyles, className)} aria-label="Pagination" {...props}>
          <ul className="inline-flex items-center space-x-1 list-none m-0 p-0">
            {items.map((item) => {
              const isActive = item.id === activeItem;
              const btnClasses = cn(
                'px-3 py-1.5 text-sm rounded-md',
                isActive
                  ? 'bg-primary-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700'
              );

              return (
                <li key={item.id}>
                  <button
                    type="button"
                    className={btnClasses}
                    onClick={() => onItemClick?.(item)}
                    disabled={item.disabled}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      );
    }

    const listClasses = variant === 'vertical'
      ? 'flex flex-col items-start space-y-1 list-none m-0 p-0'
      : 'flex-1 flex items-center space-x-2 list-none m-0 p-0';

    return (
      <nav ref={ref} className={cn(navStyles, className)} {...props}>
        {logo && (
          <div className={variant === 'vertical' ? 'mb-4' : 'flex-shrink-0 mr-6'}>
            {logo}
          </div>
        )}
        <ul className={listClasses}>{items.map(renderItem)}</ul>
        {actions && (
          <div className={variant === 'vertical' ? 'mt-4 flex items-center space-x-2' : 'ml-6 flex items-center space-x-2'}>
            {actions}
          </div>
        )}
      </nav>
    );
  }
);

Navigation.displayName = 'Navigation';