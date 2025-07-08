/**
 * Container Query Utilities for TailwindCSS v4.1
 * Provides helpers for responsive design based on container size rather than viewport
 */

// Container query breakpoints (matching TailwindCSS v4.1 @container syntax)
export const CONTAINER_BREAKPOINTS = {
  sm: '240px', // @sm
  md: '384px', // @md  
  lg: '512px', // @lg
  xl: '768px', // @xl
  '2xl': '1024px', // @2xl
} as const;

export type ContainerBreakpoint = keyof typeof CONTAINER_BREAKPOINTS;

/**
 * Container query class builder
 * @param breakpoint - Container breakpoint
 * @param classes - Classes to apply at this breakpoint
 * @returns Container query classes string
 * 
 * @example
 * ```tsx
 * <div className={cn('base-class', containerQuery('md', 'grid grid-cols-2'))}>
 *   Content adapts at container md size
 * </div>
 * ```
 */
export function containerQuery(breakpoint: ContainerBreakpoint, classes: string): string {
  return `@${breakpoint}:${classes.split(' ').join(` @${breakpoint}:`)}`;
}

/**
 * Container query responsive helper
 * @param responsive - Object with breakpoint keys and class values
 * @returns Joined container query classes
 * 
 * @example
 * ```tsx
 * <div className={containerResponsive({
 *   sm: 'text-sm',
 *   md: 'text-base grid grid-cols-2',
 *   lg: 'text-lg grid-cols-3'
 * })}>
 *   Responsive content
 * </div>
 * ```
 */
export function containerResponsive(responsive: Partial<Record<ContainerBreakpoint, string>>): string {
  return Object.entries(responsive)
    .map(([breakpoint, classes]) => 
      containerQuery(breakpoint as ContainerBreakpoint, classes)
    )
    .join(' ');
}

/**
 * Container with responsive layout patterns
 * Common layout patterns for container queries
 */
export const CONTAINER_LAYOUTS = {
  // Card layouts
  cardGrid: containerResponsive({
    md: 'grid grid-cols-2 gap-4',
    lg: 'grid-cols-3 gap-6',
    xl: 'grid-cols-4',
  }),
  
  // Navigation layouts  
  navHorizontal: containerResponsive({
    sm: 'flex-col space-y-2',
    md: 'flex-row space-y-0 space-x-4',
    lg: 'space-x-6',
  }),
  
  // Form layouts
  formGrid: containerResponsive({
    md: 'grid grid-cols-2 gap-4',
    lg: 'gap-6',
  }),
  
  // Typography responsive
  headingSize: containerResponsive({
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  }),
  
  // Spacing responsive
  padding: containerResponsive({
    sm: 'px-4 py-3',
    md: 'px-6 py-4',
    lg: 'px-8 py-6',
  }),
} as const;

/**
 * Container query aspect ratio utilities
 * For responsive image and media containers
 */
export const CONTAINER_ASPECTS = {
  square: containerResponsive({
    sm: 'aspect-square',
    md: 'aspect-video',
    lg: 'aspect-[4/3]',
  }),
  
  mediaCard: containerResponsive({
    sm: 'aspect-[4/3]',
    md: 'aspect-video',
    lg: 'aspect-[21/9]',
  }),
} as const; 