import type { ReactNode, HTMLAttributes } from 'react';
import type { BaseComponentProps, StandardVariant, Spacing } from '../../types';

/**
 * Simplified Card variants focusing on essential use cases
 */
export type CardVariant = StandardVariant | 'elevated';

/**
 * Card configuration for styling
 */
export interface CardStyleConfig {
  variant: CardVariant;
  padding: Spacing;
  clickable: boolean;
  fullHeight: boolean;
}

/**
 * Modern Card component props with standardized interface
 */
export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
  /**
   * Visual style variant
   * @default 'solid'
   */
  variant?: CardVariant;
  
  /**
   * Internal padding
   * @default 'md'
   */
  padding?: Spacing;
  
  /**
   * Make card clickable
   * @default false
   */
  clickable?: boolean;
  
  /**
   * Expand to full height of container
   * @default false
   */
  fullHeight?: boolean;
  
  /**
   * Header content
   */
  header?: ReactNode;
  
  /**
   * Footer content
   */
  footer?: ReactNode;
  
  /**
   * Optional image
   */
  image?: string;
  
  /**
   * Alt text for image
   */
  imageAlt?: string;
  
  /**
   * Click handler for clickable cards
   */
  onClick?: () => void;
}

/**
 * Card compound component interface
 */
export interface CardComponent extends React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> {
  Header: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
  Body: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
  Footer: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
}