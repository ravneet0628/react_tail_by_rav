import type { HTMLAttributes } from 'react';
import type { BaseComponentProps } from '../../types';

export interface LikeState {
  liked: boolean;
  count: number;
  error: string | null;
}

export type LikeButtonSize = 'sm' | 'md' | 'lg';
export type LikeButtonVariant = 'default' | 'outline' | 'ghost';

// Modern interface with proper optional property handling
export interface LikeButtonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'>, BaseComponentProps {
  /** Unique identifier for the item being liked */
  itemId: string;
  /** Initial liked state */
  initialLiked?: boolean;
  /** Initial like count */
  initialCount?: number;
  /** Size of the button */
  size?: LikeButtonSize;
  /** Visual variant of the button */
  variant?: LikeButtonVariant;
  /** Whether to show the like count */
  showCount?: boolean;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Callback fired when like state changes */
  onLikeChange?: (liked: boolean, count: number) => void;
} 