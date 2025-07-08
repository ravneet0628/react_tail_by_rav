import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastProvider, useToast } from './';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    docs: {
      description: {
        component: 'Toast component for displaying temporary notification messages with automatic dismissal and action support.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'Visual style variant'
    },
    dismissible: {
      control: { type: 'boolean' },
      description: 'Whether the toast can be dismissed'
    },
    duration: {
      control: { type: 'number' },
      description: 'Auto dismiss duration in milliseconds'
    },
  },
  args: {
    variant: 'info',
    dismissible: true,
    duration: 5000,
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

// Basic Examples
export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    description: 'This is an informational toast message.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success!',
    description: 'Your changes have been saved successfully.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    description: 'Please review your input before continuing.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    description: 'Something went wrong. Please try again.',
  },
};

// Interactive Examples
export const WithAction: Story = {
  args: {
    variant: 'info',
    title: 'Update Available',
    description: 'A new version is available for download.',
    action: {
      label: 'Update',
      onClick: () => alert('Update clicked!'),
    },
  },
};

export const NonDismissible: Story = {
  args: {
    variant: 'warning',
    title: 'Important Notice',
    description: 'This message cannot be dismissed.',
    dismissible: false,
  },
};

// Toast Provider Example
function ToastExample() {
  const { addToast } = useToast();

  const showToast = (variant: 'info' | 'success' | 'warning' | 'error') => {
    addToast({
      variant,
      title: `${variant.charAt(0).toUpperCase() + variant.slice(1)} Toast`,
      description: `This is a ${variant} toast message.`,
    });
  };

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium">Toast System Demo</h3>
      <p className="text-gray-600 mb-4">Click buttons to show toasts</p>
      <div className="flex gap-2">
        <button
          onClick={() => showToast('info')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Show Info
        </button>
        <button
          onClick={() => showToast('success')}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Show Success
        </button>
        <button
          onClick={() => showToast('warning')}
          className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
        >
          Show Warning
        </button>
        <button
          onClick={() => showToast('error')}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Show Error
        </button>
      </div>
    </div>
  );
}

export const ToastSystem: Story = {
  render: () => (
    <ToastProvider position="top-right">
      <ToastExample />
    </ToastProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete toast notification system with provider and hook integration.',
      },
    },
  },
}; 