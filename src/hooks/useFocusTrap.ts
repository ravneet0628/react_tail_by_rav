import { useEffect } from 'react';
import { trapFocus } from '../utils';

/**
 * useFocusTrap – traps keyboard focus within the given element while enabled.
 * @param element - HTMLElement or null
 * @param enabled - when true, trap is active
 */
export function useFocusTrap(element: HTMLElement | null, enabled: boolean = true) {
  useEffect(() => {
    if (!element || !enabled) return;

    const handler = (e: KeyboardEvent) => trapFocus(element, e);
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [element, enabled]);
}