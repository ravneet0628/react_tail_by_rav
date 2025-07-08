'use client';

import { useActionState, useId } from 'react';
import { cn } from '../../utils';
import { Input } from '../Input';
import { Button } from '../Button';
import type { ContactFormProps, ContactFormState } from './ContactForm.types';

// Simulate a form submission action
async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  const name = formData.get('name')?.toString() || '';
  const email = formData.get('email')?.toString() || '';
  const message = formData.get('message')?.toString() || '';

  // Validation
  if (!name.trim()) {
    return {
      success: false,
      message: 'Name is required',
      errors: { name: 'Please enter your name' }
    };
  }

  if (!email.trim() || !email.includes('@')) {
    return {
      success: false,
      message: 'Please enter a valid email address',
      errors: { email: 'Valid email is required' }
    };
  }

  if (!message.trim() || message.length < 10) {
    return {
      success: false,
      message: 'Message must be at least 10 characters long',
      errors: { message: 'Please provide a more detailed message' }
    };
  }

  // Simulate success
  try {
    // Here you would typically send to your API
    console.log('Submitting contact form:', { name, email, message });
    
    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      data: { name, email, message }
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to send message. Please try again.',
      errors: { general: 'Network error occurred' }
    };
  }
}

/**
 * ContactForm component demonstrating React 19's useActionState hook
 * for form submission with built-in loading states and error handling.
 * 
 * @example
 * ```tsx
 * <ContactForm onSuccess={(data) => console.log('Form submitted:', data)} />
 * ```
 */
export const ContactForm = ({
  className,
  onSuccess,
  onError,
  ...props
}: ContactFormProps) => {
  const formId = useId();
  
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    { success: null, message: '', errors: {} }
  );

  // Handle success/error callbacks
  if (state.success === true && onSuccess && state.data) {
    onSuccess(state.data);
  }
  
  if (state.success === false && onError) {
    onError(state.message, state.errors);
  }

  return (
    <div className={cn('w-full max-w-md mx-auto', className)} {...props}>
      <form action={formAction} className="space-y-4">
        <div>
          <Input
            name="name"
            label="Name"
            placeholder="Your full name"
            required
            error={state.errors?.name}
            disabled={isPending}
          />
        </div>

        <div>
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="your@email.com"
            required
            error={state.errors?.email}
            disabled={isPending}
          />
        </div>

        <div>
          <Input
            name="message"
            variant="textarea"
            label="Message"
            placeholder="Tell us how we can help..."
            rows={4}
            required
            error={state.errors?.message}
            disabled={isPending}
          />
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          fullWidth
          loading={isPending}
          disabled={isPending}
        >
          {isPending ? 'Sending...' : 'Send Message'}
        </Button>

        {/* Status Messages */}
        {state.message && (
          <div
            className={cn(
              'mt-4 p-3 rounded-md text-sm',
              state.success
                ? 'bg-[oklch(var(--color-success-50))] text-[oklch(var(--color-success-800))] border border-[oklch(var(--color-success-200))]'
                : 'bg-[oklch(var(--color-danger-50))] text-[oklch(var(--color-danger-800))] border border-[oklch(var(--color-danger-200))]'
            )}
            role={state.success ? 'status' : 'alert'}
            aria-live="polite"
          >
            {state.message}
          </div>
        )}

        {/* Reset form after successful submission */}
        {state.success && (
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              const form = document.getElementById(formId) as HTMLFormElement;
              form?.reset();
            }}
          >
            Send Another Message
          </Button>
        )}
      </form>
    </div>
  );
};

ContactForm.displayName = 'ContactForm'; 