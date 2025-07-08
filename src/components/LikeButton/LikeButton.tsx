'use client';

import { useActionState, useId } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '../../utils';
import type { LikeButtonProps, LikeState } from './LikeButton.types';

// Simulate a like toggle action
async function toggleLikeAction(
  prevState: LikeState,
  formData: FormData
): Promise<LikeState> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));

  const itemId = formData.get('itemId')?.toString() || '';

  try {
    // Here you would typically call your API
    const newLiked = !prevState.liked;
    const newCount = prevState.count + (newLiked ? 1 : -1);

    console.log(`${newLiked ? 'Liked' : 'Unliked'} item:`, itemId);

    return {
      liked: newLiked,
      count: newCount,
      error: null
    };
  } catch (error) {
    return {
      ...prevState,
      error: 'Failed to update like status'
    };
  }
}

/**
 * LikeButton component demonstrating React 19's useActionState hook
 * for simple async actions with optimistic UI updates.
 * 
 * @example
 * ```tsx
 * <LikeButton itemId="post-123" initialLiked={false} initialCount={42} />
 * ```
 */
export const LikeButton = ({
  itemId,
  initialLiked = false,
  initialCount = 0,
  size = 'md',
  variant = 'default',
  showCount = true,
  disabled = false,
  onLikeChange,
  className,
  ...props
}: LikeButtonProps) => {
  const buttonId = useId();

  const [state, formAction, isPending] = useActionState(
    toggleLikeAction,
    {
      liked: initialLiked,
      count: initialCount,
      error: null
    }
  );

  // Handle like change callback
  if (onLikeChange && state.liked !== initialLiked) {
    onLikeChange(state.liked, state.count);
  }

  // Size variants
  const sizeClasses = {
    sm: 'text-sm px-2 py-1',
    md: 'text-base px-3 py-2',
    lg: 'text-lg px-4 py-3',
  };

  // Variant styles
  const variantClasses = {
    default: state.liked
      ? 'text-red-600 bg-red-50 border-red-200 hover:bg-red-100'
      : 'text-gray-600 bg-gray-50 border-gray-200 hover:bg-gray-100',
    outline: state.liked
      ? 'text-red-600 border-red-600 hover:bg-red-50'
      : 'text-gray-600 border-gray-300 hover:bg-gray-50',
    ghost: state.liked
      ? 'text-red-600 hover:bg-red-50'
      : 'text-gray-600 hover:bg-gray-50',
  };

  // Icon size based on button size
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className={cn('inline-flex flex-col items-center', className)} {...props}>
      <form action={formAction}>
        <input type="hidden" name="itemId" value={itemId} />
        <button
          id={buttonId}
          type="submit"
          disabled={disabled || isPending}
          className={cn(
            'inline-flex items-center gap-2 font-medium rounded-md border transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            sizeClasses[size],
            variantClasses[variant],
            isPending && 'animate-pulse'
          )}
          aria-label={state.liked ? 'Unlike this item' : 'Like this item'}
          aria-pressed={state.liked}
        >
          <Heart
            className={cn(
              iconSizes[size],
              'transition-all duration-200',
              state.liked ? 'fill-current' : 'fill-none',
              isPending && 'animate-pulse'
            )}
          />
          {showCount && (
            <span className="font-medium">
              {isPending ? '...' : state.count}
            </span>
          )}
        </button>
      </form>

      {/* Error message */}
      {state.error && (
        <div
          className="mt-1 text-xs text-red-600 bg-red-50 px-2 py-1 rounded"
          role="alert"
          aria-live="polite"
        >
          {state.error}
        </div>
      )}
    </div>
  );
};

LikeButton.displayName = 'LikeButton'; 