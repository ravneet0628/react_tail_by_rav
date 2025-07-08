import type { ReactNode } from 'react';
import type { BaseComponentProps } from '../../types';

export type FooterVariant =
  | 'simple'
  | 'multi-column'
  | 'social'
  | 'newsletter'
  | 'corporate';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterProps extends BaseComponentProps {
  /** Layout/visual variant */
  variant?: FooterVariant;
  /** Brand logo or name */
  brand?: ReactNode;
  /** Columns displayed in multi-column or corporate variants */
  columns?: FooterColumn[];
  /** Social icons list */
  socials?: ReactNode;
  /** Newsletter form */
  newsletter?: ReactNode;
  /** Extra content */
  children?: ReactNode;
}