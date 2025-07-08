import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { Info as InfoIcon, CheckCircle, AlertTriangle, XCircle, Bell } from 'lucide-react';

/**
 * The Alert component is used to display important messages, notifications, and feedback to users.
 * It supports multiple variants for different types of information and states.
 * 
 * ## Features
 * - Multiple semantic variants (info, success, warning, error)
 * - Dismissible functionality
 * - Customizable icons
 * - Accessible ARIA attributes
 * - Title and content support
 * 
 * ## When to use
 * - To show system messages or feedback
 * - To display validation errors
 * - To communicate status changes
 * - To provide contextual information
 */
const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: 'A versatile alert component for displaying important messages and notifications.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'Semantic variant of the alert',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    title: {
      control: { type: 'text' },
      description: 'Alert title',
      table: {
        type: { summary: 'string' },
      },
    },
    dismissible: {
      control: { type: 'boolean' },
      description: 'Whether the alert can be dismissed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    icon: {
      control: { type: 'boolean' },
      description: 'Whether to show an icon',
      table: {
        type: { summary: 'ReactNode | boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'Alert content',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
  args: {
    variant: 'info',
    title: '',
    dismissible: false,
    icon: true,
    children: 'This is an alert message.',
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

// Basic Variants
export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational alert message.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Info alerts are used for general information and neutral messages.',
      },
    },
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    children: 'Your operation was completed successfully!',
  },
  parameters: {
    docs: {
      description: {
        story: 'Success alerts indicate that an action was completed successfully.',
      },
    },
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'Please review the information before proceeding.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Warning alerts draw attention to important information that needs consideration.',
      },
    },
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    children: 'An error occurred while processing your request.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Error alerts indicate that something went wrong and needs attention.',
      },
    },
  },
};

// With and Without Icons
export const WithoutIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="info" title="Information" icon={false}>
        This alert has no icon.
      </Alert>
      <Alert variant="success" title="Success" icon={false}>
        This success alert has no icon.
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alerts can be displayed without icons for a cleaner look.',
      },
    },
  },
};

export const CustomIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="info" title="Custom Icon" icon={<Bell className="w-5 h-5" />}>
        This alert uses a custom icon.
      </Alert>
      <Alert variant="warning" title="Another Custom Icon" icon={<AlertTriangle className="w-5 h-5" />}>
        You can provide any React element as an icon.
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'You can provide custom icons by passing a React element to the icon prop.',
      },
    },
  },
};

// Dismissible Alerts
export const Dismissible: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="info" title="Dismissible Info" dismissible onDismiss={() => console.log('Info dismissed')}>
        You can dismiss this alert by clicking the X button.
      </Alert>
      <Alert variant="warning" title="Dismissible Warning" dismissible onDismiss={() => console.log('Warning dismissed')}>
        This warning can also be dismissed.
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alerts can be made dismissible with a close button.',
      },
    },
  },
};

// Different Content Types
export const ContentVariations: Story = {
  render: () => (
    <div className="space-y-4">
      {/* Title only */}
      <Alert variant="info" title="Title Only Alert" />
      
      {/* Content only */}
      <Alert variant="success">
        This alert has content but no title.
      </Alert>
      
      {/* Rich content */}
      <Alert variant="warning" title="Rich Content">
        <div>
          <p className="mb-2">This alert contains rich content:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Multiple paragraphs</li>
            <li>Lists and other elements</li>
            <li>Complex formatting</li>
          </ul>
        </div>
      </Alert>
      
      {/* Long content */}
      <Alert variant="error" title="Detailed Error Information">
        <p className="mb-2">
          An error occurred while processing your request. This could be due to several reasons:
        </p>
        <ol className="list-decimal list-inside space-y-1 mb-2">
          <li>Network connectivity issues</li>
          <li>Server timeout</li>
          <li>Invalid data format</li>
        </ol>
        <p className="text-sm">
          Please try again later or contact support if the problem persists.
        </p>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alerts can contain various types of content including rich HTML.',
      },
    },
  },
};

// Usage Examples
export const UsageExamples: Story = {
  render: () => (
    <div className="space-y-6">
      {/* Form Validation */}
      <div>
        <h4 className="font-semibold mb-2">Form Validation</h4>
        <Alert variant="error" title="Validation Error">
          Please correct the following fields:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Email address is required</li>
            <li>Password must be at least 8 characters</li>
          </ul>
        </Alert>
      </div>
      
      {/* System Status */}
      <div>
        <h4 className="font-semibold mb-2">System Status</h4>
        <Alert variant="warning" title="Scheduled Maintenance" dismissible>
          System maintenance is scheduled for tonight from 2:00 AM to 4:00 AM EST.
        </Alert>
      </div>
      
      {/* Success Feedback */}
      <div>
        <h4 className="font-semibold mb-2">Success Feedback</h4>
        <Alert variant="success" title="Profile Updated" dismissible>
          Your profile information has been successfully updated.
        </Alert>
      </div>
      
      {/* Information */}
      <div>
        <h4 className="font-semibold mb-2">Helpful Information</h4>
        <Alert variant="info" title="Pro Tip">
          You can use keyboard shortcuts to navigate faster. Press Ctrl+K to open the command palette.
        </Alert>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of how alerts are used in different contexts.',
      },
    },
  },
};

// Playground
export const Playground: Story = {
  args: {
    variant: 'info',
    title: 'Playground Alert',
    children: 'Use the controls below to experiment with different alert configurations.',
    dismissible: false,
    icon: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to experiment with different alert configurations.',
      },
    },
  },
};