import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { User, Mail, Lock, Search, Calendar } from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'Versatile input component supporting multiple types and validation states. Includes built-in accessibility features and icon support.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'textarea', 'select'],
      description: 'Input type variant'
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Input size following touch target standards'
    },
    label: {
      control: { type: 'text' },
      description: 'Input label text'
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text'
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text shown below input'
    },
    error: {
      control: { type: 'text' },
      description: 'Error message (overrides helperText)'
    },
    required: {
      control: { type: 'boolean' },
      description: 'Marks field as required'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables input interaction'
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Position of icon relative to input'
    }
  },
  args: {
    variant: 'text',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Text: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    variant: 'text',
  }
};

export const Email: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    variant: 'email',
  }
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    variant: 'password',
  }
};

export const Textarea: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    variant: 'textarea',
    rows: 4,
  }
};

export const Select: Story = {
  args: {
    label: 'Country',
    variant: 'select',
    options: [
      { value: '', label: 'Select a country' },
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'de', label: 'Germany' },
      { value: 'fr', label: 'France' },
    ],
  }
};

// Size Examples
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input size="xs" label="Extra Small" placeholder="32px height" />
      <Input size="sm" label="Small" placeholder="40px height" />
      <Input size="md" label="Medium" placeholder="44px height (optimal)" />
      <Input size="lg" label="Large" placeholder="48px height" />
      <Input size="xl" label="Extra Large" placeholder="56px height" />
      <Input size="2xl" label="2X Large" placeholder="64px height" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input sizes from 32px (xs) to 64px (2xl) height, following accessibility touch target guidelines.'
      }
    }
  }
};

// With Icons
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input 
        label="Username" 
        placeholder="Enter username"
        icon={<User />}
        iconPosition="left"
      />
      <Input 
        label="Email" 
        placeholder="you@example.com"
        variant="email"
        icon={<Mail />}
        iconPosition="left"
      />
      <Input 
        label="Password" 
        placeholder="Enter password"
        variant="password"
        icon={<Lock />}
        iconPosition="left"
      />
      <Input 
        label="Search" 
        placeholder="Search..."
        icon={<Search />}
        iconPosition="right"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inputs with icons positioned on the left or right side.'
      }
    }
  }
};

// Validation States
export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input 
        label="Valid Input"
        placeholder="This field is valid"
        helperText="This field looks good!"
      />
      <Input 
        label="Required Field"
        placeholder="This field is required"
        required
        helperText="Please fill out this field"
      />
      <Input 
        label="Error Field"
        placeholder="This field has an error"
        error="This field is required"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different validation states including helper text and error messages.'
      }
    }
  }
};

// Form Example
export const FormExample: Story = {
  render: () => (
    <form className="space-y-6 max-w-md">
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Form</h3>
      </div>
      
      <Input
        label="Full Name"
        placeholder="John Doe"
        required
        icon={<User />}
        iconPosition="left"
      />
      
      <Input
        label="Email Address"
        placeholder="john@example.com"
        variant="email"
        required
        icon={<Mail />}
        iconPosition="left"
        helperText="We'll never share your email"
      />
      
      <Input
        label="Password"
        placeholder="Enter a secure password"
        variant="password"
        required
        icon={<Lock />}
        iconPosition="left"
        helperText="Minimum 8 characters"
      />
      
      <Input
        label="Message"
        placeholder="Tell us about your project..."
        variant="textarea"
        rows={4}
        helperText="Optional: Describe your requirements"
      />
      
      <Input
        label="Budget Range"
        variant="select"
        required
        options={[
          { value: '', label: 'Select budget range' },
          { value: '1k-5k', label: '$1,000 - $5,000' },
          { value: '5k-10k', label: '$5,000 - $10,000' },
          { value: '10k-25k', label: '$10,000 - $25,000' },
          { value: '25k+', label: '$25,000+' },
        ]}
      />
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete form example showing various input types working together.'
      }
    }
  }
};

// States
export const States: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input 
        label="Default State"
        placeholder="Normal input"
      />
      <Input 
        label="Disabled State"
        placeholder="Cannot interact"
        disabled
      />
      <Input 
        label="Required Field"
        placeholder="This field is required"
        required
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different input states including disabled and required states.'
      }
    }
  }
};

// Interactive Playground
export const Playground: Story = {
  args: {
    label: 'Playground Input',
    placeholder: 'Enter text...',
    variant: 'text',
    size: 'md',
    required: false,
    disabled: false,
    helperText: '',
    error: '',
    icon: undefined,
    iconPosition: 'left'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test different input configurations.'
      }
    }
  }
};