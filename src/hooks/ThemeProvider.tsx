import { createContext, useContext, ReactNode, useId } from 'react';
import { useTheme } from './useTheme';
import type { ThemeMode } from '../types';

interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  initialMode?: ThemeMode;
}

export function ThemeProvider({ children, initialMode = 'system' }: ThemeProviderProps) {
  const providerId = useId();
  const [mode, setMode] = useTheme(initialMode);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <div id={providerId} data-theme-provider="true">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}