import { forwardRef, useState, useId } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../utils';
import type { NavigationProps, NavigationItem } from './Navigation.types';
import { 
  getNavigationStyles, 
  getNavigationItemStyles, 
  getMobileMenuButtonStyles,
  getBreadcrumbSeparatorStyles
} from './Navigation.styles';

/**
 * Simplified Navigation component focusing on essential patterns
 * 
 * @example
 * ```tsx
 * <Navigation 
 *   variant="horizontal"
 *   items={navItems}
 *   activeItem="home"
 *   onItemClick={handleNavigation}
 * />
 * ```
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
    const navId = useId();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    // Handle item selection
    const handleItemClick = (item: NavigationItem) => {
      if (item.disabled) return;
      
      // Handle external links
      if (item.href) {
        if (item.target === '_blank') {
          window.open(item.href, '_blank', 'noopener,noreferrer');
        } else {
          window.location.href = item.href;
        }
      }
      
      onItemClick?.(item);
      
      // Close mobile menu after selection
      if (variant === 'horizontal') {
        setMobileMenuOpen(false);
      }
    };
    
    // Handle keyboard navigation
    const handleKeyDown = (event: React.KeyboardEvent, item: NavigationItem) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleItemClick(item);
      }
    };
    
    // Render navigation items
    const renderNavItems = (isMobile = false) => {
      return items.map((item) => {
        const isActive = item.id === activeItem;
        const itemClasses = getNavigationItemStyles(variant, isActive, item.disabled);
        
        return (
          <button
            key={item.id}
            type="button"
            className={cn(itemClasses, isMobile && 'w-full justify-start')}
            onClick={() => handleItemClick(item)}
            onKeyDown={(e) => handleKeyDown(e, item)}
            disabled={item.disabled}
            aria-current={isActive ? 'page' : undefined}
            aria-label={item['aria-label'] || item.label}
          >
            {item.icon && (
              <span className="mr-2 w-4 h-4" aria-hidden="true">
                {item.icon}
              </span>
            )}
            {item.label}
          </button>
        );
      });
    };
    
    // Render breadcrumb items
    const renderBreadcrumbItems = () => {
      return items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <div key={item.id} className="flex items-center">
            {index > 0 && (
              <span className={getBreadcrumbSeparatorStyles()}>/</span>
            )}
            <button
              type="button"
              className={getNavigationItemStyles(variant, false, isLast || item.disabled)}
              disabled={isLast || item.disabled}
              onClick={() => !isLast && handleItemClick(item)}
              aria-current={isLast ? 'page' : undefined}
            >
              {item.label}
            </button>
          </div>
        );
      });
    };
    
    const containerStyles = cn(getNavigationStyles(variant), className);
    
    // Breadcrumb variant
    if (variant === 'breadcrumb') {
      return (
        <nav 
          ref={ref} 
          id={navId}
          className={containerStyles}
          aria-label="Breadcrumb"
          {...props}
        >
          <div className="flex items-center space-x-0">
            {renderBreadcrumbItems()}
          </div>
        </nav>
      );
    }
    
    // Vertical variant
    if (variant === 'vertical') {
      return (
        <nav 
          ref={ref} 
          id={navId}
          className={containerStyles}
          aria-label="Sidebar navigation"
          {...props}
        >
          <div className="p-4 space-y-2">
            {renderNavItems()}
          </div>
        </nav>
      );
    }
    
    // Tabs variant
    if (variant === 'tabs') {
      return (
        <nav 
          ref={ref} 
          id={navId}
          className={containerStyles}
          role="tablist"
          {...props}
        >
          <div className="flex space-x-8">
            {items.map((item) => {
              const isActive = item.id === activeItem;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={getNavigationItemStyles(variant, isActive, item.disabled)}
                  onClick={() => handleItemClick(item)}
                  disabled={item.disabled}
                >
                  {item.icon && (
                    <span className="mr-2 w-4 h-4">{item.icon}</span>
                  )}
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>
      );
    }
    
    // Horizontal variant (default)
    return (
      <nav 
        ref={ref} 
        id={navId}
        className={containerStyles}
        aria-label="Main navigation"
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            {logo && (
              <div className="flex items-center">
                {logo}
              </div>
            )}
            
            {/* Desktop navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {renderNavItems()}
            </div>
            
            {/* Actions */}
            {actions && (
              <div className="flex items-center space-x-4">
                {actions}
              </div>
            )}
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className={getMobileMenuButtonStyles()}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {renderNavItems(true)}
            </div>
          </div>
        )}
      </nav>
    );
  }
);

Navigation.displayName = 'Navigation';