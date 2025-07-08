import React, { useRef } from 'react';
import type { AvatarProps } from './Avatar.types';
import { getAvatarStyles } from './Avatar.styles';
import { cn } from '../../utils';
import { User, Camera } from 'lucide-react';

export const Avatar: React.FC<AvatarProps> = ({
  variant = 'image',
  size = 'md',
  src,
  alt,
  name,
  status,
  icon,
  onUpload,
  className,
}) => {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpload) {
      onUpload(file);
      e.target.value = '';
    }
  };

  const styles = cn(getAvatarStyles({ size }), className);

  const renderContent = () => {
    if (variant === 'image' && src) {
      return <img src={src} alt={alt || name || 'avatar'} className="object-cover w-full h-full" />;
    }

    if (variant === 'icon' && icon) {
      return icon;
    }

    if (variant === 'initials' && name) {
      const initials = name
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('');
      return initials;
    }

    // placeholder
    return <User className="w-4 h-4 text-gray-500" />;
  };

  return (
    <div
      className={styles}
      onClick={variant === 'upload' ? handleUploadClick : undefined}
      role="img"
      aria-label={alt || name || 'avatar'}
    >
      {renderContent()}
      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 block rounded-full ring-2 ring-white',
            {
              'w-2 h-2 bg-green-500': status === 'online',
              'w-2 h-2 bg-gray-400': status === 'offline',
              'w-2 h-2 bg-yellow-400': status === 'away',
              'w-2 h-2 bg-red-500': status === 'busy',
            }
          )}
        />
      )}
      {variant === 'upload' && (
        <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 hover:opacity-100 transition-opacity">
          <Camera className="w-5 h-5" />
        </span>
      )}
      {variant === 'upload' && (
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      )}
    </div>
  );
};

Avatar.displayName = 'Avatar';