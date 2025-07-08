import { createContext, useContext, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Toast } from './Toast';
import { getToastContainerStyles } from './Toast.styles';
import type { ToastContextValue, ToastProviderProps, ToastItem } from './Toast.types';

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export function ToastProvider({
  children,
  position = 'top-right',
  maxToasts = 5,
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback((toast: Omit<ToastItem, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastItem = { ...toast, id };
    
    setToasts((prevToasts) => {
      const updatedToasts = [newToast, ...prevToasts];
      return updatedToasts.slice(0, maxToasts);
    });
  }, [maxToasts]);

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const clearToasts = useCallback(() => {
    setToasts([]);
  }, []);

  const contextValue: ToastContextValue = {
    toasts,
    addToast,
    removeToast,
    clearToasts,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {typeof document !== 'undefined' && createPortal(
        <div className={getToastContainerStyles(position)}>
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              {...toast}
              onDismiss={() => removeToast(toast.id)}
            />
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
} 