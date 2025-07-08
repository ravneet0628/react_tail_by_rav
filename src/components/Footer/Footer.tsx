import { forwardRef, useId } from 'react';
import { cn } from '../../utils';
import type { FooterProps, FooterColumn } from './Footer.types';
import { getFooterStyles } from './Footer.styles';

/**
 * Footer component with a few flexible variants (simple, multi-column, social).
 *
 * Example:
 * ```tsx
 * <Footer variant="simple" brand={<Logo />} />
 * ```
 */
export const Footer = forwardRef<HTMLElement, FooterProps>(
  (
    {
      variant = 'simple',
      brand,
      columns = [],
      socials,
      newsletter,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const footerId = useId();
    const footerClasses = cn(getFooterStyles({ variant }), className);

    const renderSimple = () => (
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {brand && <div className="flex-shrink-0">{brand}</div>}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} All rights reserved.
        </div>
        {children && <div className="text-sm">{children}</div>}
      </div>
    );

    const renderColumn = (column: FooterColumn) => {
      const columnId = useId();
      return (
        <div key={column.title} className="space-y-2">
          <h4 id={columnId} className="font-semibold text-gray-700 dark:text-gray-100 mb-2">{column.title}</h4>
          <ul className="space-y-1 list-none m-0 p-0" aria-labelledby={columnId}>
            {column.links.map((link) => {
              const linkId = useId();
              return (
                <li key={link.href}>
                  <a
                    id={linkId}
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      );
    };

    const renderMultiColumn = () => (
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {brand && <div className="sm:col-span-2 lg:col-span-1">{brand}</div>}
        {columns.map(renderColumn)}
      </div>
    );

    const renderSocial = () => (
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {brand && <div className="flex-shrink-0">{brand}</div>}
        {socials && <div className="flex items-center space-x-3">{socials}</div>}
      </div>
    );

    const renderContent = () => {
      switch (variant) {
        case 'multi-column':
        case 'corporate':
          return renderMultiColumn();
        case 'social':
          return renderSocial();
        case 'newsletter':
          return (
            <div className="container mx-auto px-4 space-y-6">
              {brand && <div>{brand}</div>}
              {newsletter}
            </div>
          );
        case 'simple':
        default:
          return renderSimple();
      }
    };

    return (
      <footer id={footerId} ref={ref} className={footerClasses} {...props}>
        {renderContent()}
      </footer>
    );
  }
);

Footer.displayName = 'Footer';