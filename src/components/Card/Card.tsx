import { forwardRef, HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual variant of the card */
  variant?: 'default' | 'outline' | 'shadow';
  /** Padding size */
  padding?: 'sm' | 'md' | 'lg' | 'none';
  /** Whether card should be hoverable */
  hoverable?: boolean;
}

/**
 * Card component for containing and organizing content with consistent styling
 * 
 * @example
 * ```tsx
 * <Card variant="shadow" padding="md">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 * ```
 * 
 * @example
 * ```tsx
 * <Card variant="outline" hoverable onClick={handleClick}>
 *   Clickable card content
 * </Card>
 * ```
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    variant = 'default', 
    padding = 'md',
    hoverable = false,
    className = '',
    children, 
    ...props 
  }, ref) => {
    
    const baseClasses = 'rounded-lg transition-all duration-200';
    
    const variantClasses = {
      default: 'bg-white border border-gray-200',
      outline: 'bg-transparent border-2 border-gray-300',
      shadow: 'bg-white shadow-lg border border-gray-100'
    };
    
    const paddingClasses = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    };

    const hoverClasses = hoverable ? 'hover:shadow-md hover:scale-[1.02] cursor-pointer' : '';
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className}`.trim();
    
    return (
      <div
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card subcomponents
const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`border-b border-gray-200 pb-4 mb-4 ${className}`} {...props} />
  )
);
CardHeader.displayName = 'Card.Header';

const CardBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={className} {...props} />
  )
);
CardBody.displayName = 'Card.Body';

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`border-t border-gray-200 pt-4 mt-4 ${className}`} {...props} />
  )
);
CardFooter.displayName = 'Card.Footer';

// Attach subcomponents to main Card
(Card as any).Header = CardHeader;
(Card as any).Body = CardBody;
(Card as any).Footer = CardFooter;