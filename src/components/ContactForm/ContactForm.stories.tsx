import type { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from './ContactForm';

const meta: Meta<typeof ContactForm> = {
  title: 'Components/ContactForm',
  component: ContactForm,
  parameters: {
    docs: {
      description: {
        component: 'A form component demonstrating React 19\'s useActionState hook for handling form submissions with built-in loading states, error handling, and success messages.',
      },
    },
  },
  argTypes: {
    onSuccess: { action: 'success' },
    onError: { action: 'error' },
  },
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
  args: {
    onSuccess: (data) => console.log('Form submitted successfully:', data),
    onError: (message, errors) => console.error('Form submission failed:', message, errors),
  },
};

export const WithCallbacks: Story = {
  args: {
    onSuccess: (data) => {
      alert(`Thank you ${data.name}! We'll get back to you at ${data.email}`);
    },
    onError: (message) => {
      alert(`Error: ${message}`);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing how to handle success and error callbacks for integration with your application.',
      },
    },
  },
};

export const Styled: Story = {
  args: {
    className: 'bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700',
  },
  parameters: {
    docs: {
      description: {
        story: 'ContactForm with custom styling applied.',
      },
    },
  },
}; 