import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { cn } from '../../utils';
import { useFocusTrap, useKeyPress } from '../../hooks';
import type { ModalProps } from './Modal.types';
import { getBackdropStyles, getModalContainerStyles, getDrawerStyles } from './Modal.styles';

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  size = 'md',
  position = 'right',
  variant = 'dialog',
  showCloseButton = true,
  closeOnBackdrop = true,
  closeOnEscape = true,
  header,
  footer,
  children,
  className,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Close on Escape key
  const escPressed = useKeyPress('Escape');
  useEffect(() => {
    if (open && closeOnEscape && escPressed) {
      onClose();
    }
  }, [escPressed, open, closeOnEscape, onClose]);

  // Focus trap
  useFocusTrap(containerRef.current, open);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [open]);

  if (!open) return null;

  const backdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && closeOnBackdrop) {
      onClose();
    }
  };

  // Build styles
  const backdropCls = getBackdropStyles();
  let containerCls = '';
  if (variant === 'drawer') {
    containerCls = getDrawerStyles(position, size);
  } else if (variant === 'fullscreen') {
    containerCls = 'fixed inset-0 bg-white dark:bg-gray-800 overflow-y-auto';
  } else if (variant === 'popup') {
    containerCls = cn(getModalContainerStyles({ size, variant }), 'animate-bounce');
  } else {
    // dialog, confirmation, form, image
    containerCls = getModalContainerStyles({ size, variant });
  }
  containerCls = cn(containerCls, className);

  const modalContent = (
    <div className={backdropCls} onMouseDown={backdropClick} aria-modal="true" role="dialog">
      <div ref={containerRef} className={containerCls} {...props}>
        {/* Header */}
        {(title || header || showCloseButton) && (
          <div className="flex items-start justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <div className="text-lg font-medium text-gray-900 dark:text-gray-100">{header || title}</div>
            {showCloseButton && (
              <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        )}
        {/* Body */}
        <div className="px-4 py-6 overflow-y-auto max-h-[80vh]">{children}</div>
        {/* Footer */}
        {footer && <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">{footer}</div>}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};