import type { ReactNode } from 'react';

export type AvatarVariant = 'image' | 'initials' | 'icon' | 'placeholder' | 'group' | 'status' | 'upload';

export interface AvatarProps {
  variant?: AvatarVariant;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  src?: string;
  alt?: string;
  name?: string;
  status?: 'online' | 'offline' | 'away' | 'busy';
  icon?: ReactNode;
  onUpload?: (file: File) => void;
  className?: string;
}