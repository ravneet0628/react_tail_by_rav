import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Switch } from './';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: 'Switch component for binary choices with smooth animations and accessibility features.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Switch size'
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether switch is checked'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether switch is disabled'
    },
  },
  args: {
    size: 'md',
    checked: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

// Basic Examples
export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const Checked: Story = {
  args: {
    label: 'Auto-save enabled',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked',
    checked: true,
    disabled: true,
  },
};

// Size Examples
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch size="xs" label="Extra Small" />
      <Switch size="sm" label="Small" />
      <Switch size="md" label="Medium (default)" />
      <Switch size="lg" label="Large" />
      <Switch size="xl" label="Extra Large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Switches available in multiple sizes for different contexts.',
      },
    },
  },
};

// Interactive Example
function InteractiveSwitch() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-4">
      <Switch
        label="Email notifications"
        checked={checked}
        onChange={setChecked}
        helperText="Receive email updates about your account"
      />
      <p className="text-sm text-gray-600">
        Current state: {checked ? 'Enabled' : 'Disabled'}
      </p>
    </div>
  );
}

export const Interactive: Story = {
  render: () => <InteractiveSwitch />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive switch with state management.',
      },
    },
  },
};

// Form Integration
export const FormIntegration: Story = {
  render: () => (
    <form className="space-y-4 max-w-md">
      <h3 className="text-lg font-medium">Notification Preferences</h3>
      
      <Switch
        label="Email notifications"
        helperText="Receive updates via email"
        defaultChecked
      />
      
      <Switch
        label="Push notifications"
        helperText="Receive push notifications on mobile"
      />
      
      <Switch
        label="SMS notifications"
        helperText="Receive SMS for important updates"
        error="SMS service is currently unavailable"
      />
      
      <Switch
        label="Marketing emails"
        helperText="Receive promotional content"
        disabled
      />
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Switches integrated into a form with validation and help text.',
      },
    },
  },
};

// With Labels
export const WithLabels: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch
        label="Dark mode"
        checkedLabel="Dark theme enabled"
        uncheckedLabel="Light theme enabled"
      />
      
      <Switch
        label="Auto-backup"
        checkedLabel="Files are automatically backed up"
        uncheckedLabel="Manual backup required"
        defaultChecked
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Switches with contextual labels that change based on state.',
      },
    },
  },
}; 