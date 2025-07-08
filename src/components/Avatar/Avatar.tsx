import { useRef, useId } from 'react';
import type { AvatarProps } from './Avatar.types';
import { getAvatarStyles } from './Avatar.styles';
import { cn } from '../../utils';
import { User, Camera } from 'lucide-react';

export const Avatar = ({
  variant = 'image',
  size = 'md',
  src,
  alt,
  name,
  status,
  icon,
  onUpload,
  className,
}: AvatarProps) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const avatarId = useId();
  const fileInputId = useId();

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
      id={avatarId}
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
              'w-2 h-2 bg-[oklch(var(--color-success-500))]': status === 'online',
              'w-2 h-2 bg-[oklch(0.5_0_0)]': status === 'offline',
              'w-2 h-2 bg-[oklch(var(--color-warning-500))]': status === 'away',
              'w-2 h-2 bg-[oklch(var(--color-danger-500))]': status === 'busy',
            }
          )}
          aria-label={`Status: ${status}`}
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
          id={fileInputId}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
          aria-label="Upload image"
        />
      )}
    </div>
  );
};

Avatar.displayName = 'Avatar';