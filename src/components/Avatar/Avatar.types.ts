import type { ReactNode, HTMLAttributes } from 'react';
import type { BaseComponentProps, ComponentSize } from '../../types';

export type AvatarVariant = 'image' | 'initials' | 'icon' | 'placeholder' | 'group' | 'status' | 'upload';

// Modern interface with proper optional property handling
export interface AvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'>, BaseComponentProps {
  variant?: AvatarVariant;
  size?: ComponentSize | '2xl';
  src?: string;
  alt?: string;
  name?: string;
  status?: 'online' | 'offline' | 'away' | 'busy';
  icon?: ReactNode;
  onUpload?: (file: File) => void;
}