import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { PlusIcon, DownloadIcon, TrashIcon } from 'lucide-react';

/**
 * The Button component is a fundamental interactive element that triggers actions or events.
 * It supports multiple variants, sizes, and states to fit various design needs.
 * 
 * ## Features
 * - Multiple visual variants (primary, secondary, outline, ghost)
 * - Three sizes (small, medium, large)
 * - Loading state with spinner
 * - Icon support with customizable positioning
 * - Full width option
 * - Accessibility compliant
 * - Keyboard navigation support
 * 
 * ## When to use
 * - To trigger an action or event
 * - To submit forms
 * - To navigate to another page
 * - To open modals or dialogs
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and states.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Visual style variant of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the button should take the full width of its container',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Shows loading spinner and disables the button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Position of the icon relative to the text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'Button text content',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    loading: false,
    disabled: false,
    iconPosition: 'left',
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Basic Variants
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary buttons are used for the main action on a page.',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary buttons are used for secondary actions.',
      },
    },
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
  parameters: {
    docs: {
      description: {
        story: 'Outline buttons are less prominent and used for secondary actions.',
      },
    },
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost buttons are the least prominent and used for tertiary actions.',
      },
    },
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons come in three sizes: small, medium, and large.',
      },
    },
  },
};

// States
export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="outline">Default</Button>
        <Button variant="outline" disabled>Disabled</Button>
        <Button variant="outline" loading>Loading</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons support different states including disabled and loading.',
      },
    },
  },
};

// With Icons
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Button icon={<PlusIcon className="w-4 h-4" />} iconPosition="left">
          Add Item
        </Button>
        <Button icon={<DownloadIcon className="w-4 h-4" />} iconPosition="right">
          Download
        </Button>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" icon={<TrashIcon className="w-4 h-4" />}>
          Delete
        </Button>
        <Button variant="ghost" icon={<PlusIcon className="w-4 h-4" />} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons can include icons positioned on the left or right side.',
      },
    },
  },
};

// Full Width
export const FullWidth: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Button fullWidth>Full Width Primary</Button>
      <Button variant="outline" fullWidth>Full Width Outline</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons can be made to take the full width of their container.',
      },
    },
  },
};

// Interactive Playground
export const Playground: Story = {
  args: {
    children: 'Playground Button',
    variant: 'primary',
    size: 'md',
    fullWidth: false,
    loading: false,
    disabled: false,
    icon: undefined,
    iconPosition: 'left',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to experiment with different button configurations.',
      },
    },
  },
};

// Form Usage Example
export const FormUsage: Story = {
  render: () => (
    <form className="space-y-4 max-w-md">
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input 
          type="email" 
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Password</label>
        <input 
          type="password" 
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Enter your password"
        />
      </div>
      <div className="flex gap-2">
        <Button type="submit" fullWidth>Sign In</Button>
        <Button variant="outline" type="button">Cancel</Button>
      </div>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of button usage in a form context.',
      },
    },
  },
};