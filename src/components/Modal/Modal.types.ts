import type { ReactNode, HTMLAttributes } from 'react';
import type { BaseComponentProps, ComponentSize, Position } from '../../types';

export type ModalVariant = 'default' | 'dialog' | 'fullscreen' | 'drawer' | 'popup' | 'confirmation' | 'form' | 'image';

// Modern interface with proper optional property handling
export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'style' | 'className'>, BaseComponentProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  size?: ComponentSize | 'full';
  variant?: ModalVariant;
  position?: Position;
  showCloseButton?: boolean;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}

export interface ModalStyleConfig {
  size: ModalProps['size'];
  variant: ModalVariant;
}