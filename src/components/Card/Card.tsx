import React, { forwardRef } from 'react';
import type { CardProps } from './Card.types';
import { 
  getCardStyles, 
  getCardHeaderStyles, 
  getCardFooterStyles, 
  getCardImageStyles,
  getCardBodyStyles
} from './Card.styles';
import { cn } from '../../utils';

/**
 * Card component with multiple variants and layouts
 * 
 * @example
 * ```tsx
 * <Card variant="elevated" padding="md">
 *   <Card.Header>Card Title</Card.Header>
 *   <Card.Body>Card content goes here</Card.Body>
 *   <Card.Footer>Card actions</Card.Footer>
 * </Card>
 * ```
 */
interface CardComponent extends React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'basic',
      padding = 'md',
      header,
      footer,
      children,
      image,
      imageAlt,
      clickable = false,
      onClick,
      fullHeight = false,
      gradientFrom,
      gradientTo,
      className,
      ...props
    },
    ref
  ) => {
    const hasImage = !!image;
    const hasHeader = !!header;
    const hasFooter = !!footer;

    // Get card styles
    const cardStyles = getCardStyles({
      variant,
      padding: hasHeader || hasFooter ? 'none' : padding, // Remove padding if header/footer present
      clickable,
      fullHeight,
      hasImage,
    });

    // Handle click events
    const handleClick = () => {
      if (clickable && onClick) {
        onClick();
      }
    };

    // Handle keyboard events for accessibility
    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (clickable && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        onClick?.();
      }
    };

    // Gradient style for gradient variant
    const gradientStyle = variant === 'gradient' && gradientFrom && gradientTo
      ? {
          background: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`,
        }
      : undefined;

    return (
      <div
        ref={ref}
        className={cn(cardStyles, className)}
        onClick={clickable ? handleClick : undefined}
        onKeyDown={clickable ? handleKeyDown : undefined}
        tabIndex={clickable ? 0 : undefined}
        role={clickable ? 'button' : undefined}
        aria-pressed={clickable ? false : undefined}
        style={gradientStyle}
        {...props}
      >
        {/* Image */}
        {hasImage && (
          <div className="relative">
            <img
              src={image}
              alt={imageAlt || ''}
              className={getCardImageStyles()}
            />
          </div>
        )}

        {/* Header */}
        {hasHeader && (
          <div className={getCardHeaderStyles(variant)}>
            {header}
          </div>
        )}

        {/* Body */}
        {children && (
          <div className={cn(
            getCardBodyStyles(variant, hasHeader, hasFooter),
            paddingStyles[padding]
          )}>
            {children}
          </div>
        )}

        {/* Footer */}
        {hasFooter && (
          <div className={getCardFooterStyles(variant)}>
            {footer}
          </div>
        )}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Padding styles for card body
const paddingStyles = {
  none: 'px-0 py-0',
  xs: 'px-2',
  sm: 'px-3',
  md: 'px-6',
  lg: 'px-8',
  xl: 'px-10',
  '2xl': 'px-12',
} as const;

// Compound components
const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('px-6 py-4 border-b border-gray-200 dark:border-gray-700', className)}
      {...props}
    >
      {children}
    </div>
  )
);

const CardBody = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('px-6 py-4 flex-1', className)}
      {...props}
    >
      {children}
    </div>
  )
);

const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50', className)}
      {...props}
    >
      {children}
    </div>
  )
);

CardHeader.displayName = 'CardHeader';
CardBody.displayName = 'CardBody';
CardFooter.displayName = 'CardFooter';

// Attach compound components
(Card as CardComponent).Header = CardHeader;
(Card as CardComponent).Body = CardBody;
(Card as CardComponent).Footer = CardFooter;