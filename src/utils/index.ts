// Utility function to merge CSS class names
type ClassValue = string | number | boolean | undefined | null | Record<string, boolean> | ClassValue[];

/**
 * Utility function to merge CSS class names using clsx
 * @param classes - Class names to merge
 * @returns Merged class string
 */
export function cn(...classes: ClassValue[]): string {
  return classes
    .filter(Boolean)
    .map((c): string => {
      if (typeof c === 'string' || typeof c === 'number') {
        return String(c);
      }

      if (Array.isArray(c)) {
        return cn(...c);
      }

      if (typeof c === 'object' && c !== null) {
        return Object.keys(c)
          .filter((key) => (c as Record<string, boolean>)[key])
          .join(' ');
      }

      return '';
    })
    .filter(Boolean)
    .join(' ')
    .trim();
}

/**
 * Utility function to generate component styles based on variants
 * @param base - Base classes that always apply
 * @param variants - Object mapping variant names to their classes
 * @param selectedVariants - Object with currently selected variants
 * @param className - Additional custom classes
 * @returns Merged class string
 */
export function cva(
  base: string,
  variants: Record<string, Record<string, string>>,
  selectedVariants: Record<string, string>,
  className?: string
): string {
  const variantClasses = Object.entries(selectedVariants)
    .map(([key, value]: [string, string]) => variants[key]?.[value])
    .filter(Boolean);

  return cn(base, ...variantClasses, className);
}

/**
 * Debounce function to limit the rate at which a function can fire
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function to limit the rate at which a function can fire
 * @param func - Function to throttle
 * @param limit - Time limit in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Utility to focus the first focusable element within a container
 * @param container - Container element to search within
 */
export function focusFirstElement(container: HTMLElement): void {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0] as HTMLElement;
  if (firstElement) {
    firstElement.focus();
  }
}

/**
 * Utility to focus the last focusable element within a container
 * @param container - Container element to search within
 */
export function focusLastElement(container: HTMLElement): void {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  if (lastElement) {
    lastElement.focus();
  }
}

/**
 * Utility to trap focus within a container
 * @param container - Container element to trap focus within
 * @param event - Keyboard event
 */
export function trapFocus(container: HTMLElement, event: KeyboardEvent): void {
  if (event.key !== 'Tab') return;

  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  if (event.shiftKey) {
    if (document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }
  } else {
    if (document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
}

/**
 * Generate a unique ID for component instances
 * @param prefix - Prefix for the ID
 * @returns Unique ID string
 */
export function generateId(prefix: string = 'ui'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Check if the current environment is browser
 * @returns True if running in browser
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

/**
 * Utility to handle keyboard navigation for lists
 * @param currentIndex - Currently focused index
 * @param itemCount - Total number of items
 * @param key - Keyboard key pressed
 * @returns New index to focus
 */
export function handleListNavigation(
  currentIndex: number,
  itemCount: number,
  key: string
): number {
  switch (key) {
    case 'ArrowDown':
      return currentIndex < itemCount - 1 ? currentIndex + 1 : 0;
    case 'ArrowUp':
      return currentIndex > 0 ? currentIndex - 1 : itemCount - 1;
    case 'Home':
      return 0;
    case 'End':
      return itemCount - 1;
    default:
      return currentIndex;
  }
}

/**
 * Utility to create stable object references for React dependencies
 * @param obj - Object to stabilize
 * @returns Stable object reference
 */
export function createStableRef<T extends Record<string, any>>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Utility to check if an element is visible in viewport
 * @param element - Element to check
 * @returns True if element is visible
 */
export function isElementVisible(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Utility to smoothly scroll element into view
 * @param element - Element to scroll to
 * @param options - Scroll options
 */
export function scrollIntoView(
  element: HTMLElement,
  options: ScrollIntoViewOptions = { behavior: 'smooth', block: 'nearest' }
): void {
  element.scrollIntoView(options);
}

/**
 * Utility to get contrast color (black or white) for a given background color
 * @param backgroundColor - Background color in hex format
 * @returns 'black' or 'white' for optimal contrast
 */
export function getContrastColor(backgroundColor: string): 'black' | 'white' {
  // Remove # if present
  const hex = backgroundColor.replace('#', '');
  
  // Convert to RGB
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  return luminance > 0.5 ? 'black' : 'white';
}

/**
 * Utility to format file size in human readable format
 * @param bytes - File size in bytes
 * @returns Formatted file size string
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Utility to validate email format
 * @param email - Email string to validate
 * @returns True if email format is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Utility to validate URL format
 * @param url - URL string to validate
 * @returns True if URL format is valid
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Utility to copy text to clipboard
 * @param text - Text to copy
 * @returns Promise that resolves when copy is complete
 */
export async function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
  } else {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
  }
}

/**
 * Utility to handle escape key press
 * @param callback - Function to call when escape is pressed
 * @returns Cleanup function
 */
export function onEscapeKey(callback: () => void): () => void {
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      callback();
    }
  };

  document.addEventListener('keydown', handleEscape);
  
  return () => {
    document.removeEventListener('keydown', handleEscape);
  };
}

/**
 * Utility to handle click outside element
 * @param element - Element to detect clicks outside of
 * @param callback - Function to call when click outside occurs
 * @returns Cleanup function
 */
export function onClickOutside(
  element: HTMLElement | null,
  callback: () => void
): () => void {
  const handleClick = (event: MouseEvent) => {
    if (element && !element.contains(event.target as Node)) {
      callback();
    }
  };

  document.addEventListener('mousedown', handleClick);
  
  return () => {
    document.removeEventListener('mousedown', handleClick);
  };
}