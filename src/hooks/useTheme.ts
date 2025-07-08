import { useState, useEffect } from 'react';
import type { ThemeMode } from '../types';

const LOCAL_STORAGE_KEY = 'react-tail-theme-mode';

/**
 * Custom hook for managing theme mode with system preference detection
 * Updated for 2025 with modern 'system' preference
 */
export function useTheme(initialMode: ThemeMode = 'system'): [ThemeMode, (mode: ThemeMode) => void] {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return initialMode;
    
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY) as ThemeMode;
    if (stored === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return stored || initialMode;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem(LOCAL_STORAGE_KEY) === 'system') {
        setMode(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const updateMode = (newMode: ThemeMode) => {
    setMode(newMode);
    if (newMode !== 'system') localStorage.setItem(LOCAL_STORAGE_KEY, newMode);
    else localStorage.setItem(LOCAL_STORAGE_KEY, 'system');
  };

  return [mode, updateMode];
}