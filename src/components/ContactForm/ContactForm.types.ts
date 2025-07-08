import type { HTMLAttributes } from 'react';
import type { BaseComponentProps } from '../../types';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
  general?: string;
}

export interface ContactFormState {
  success: boolean | null;
  message: string;
  errors?: ContactFormErrors;
  data?: ContactFormData;
}

// Modern interface with proper optional property handling
export interface ContactFormProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'>, BaseComponentProps {
  /** Callback fired when form is successfully submitted */
  onSuccess?: (data: ContactFormData) => void;
  /** Callback fired when form submission fails */
  onError?: (message: string, errors?: ContactFormErrors) => void;
} 