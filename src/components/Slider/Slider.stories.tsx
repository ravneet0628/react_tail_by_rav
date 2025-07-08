import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Slider } from './';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: 'Slider component for selecting numeric values from a range with accessibility support.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Slider size'
    },
    value: {
      control: { type: 'number' },
      description: 'Current value'
    },
    min: {
      control: { type: 'number' },
      description: 'Minimum value'
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum value'
    },
    step: {
      control: { type: 'number' },
      description: 'Step increment'
    },
    showValue: {
      control: { type: 'boolean' },
      description: 'Show current value'
    },
    showMinMax: {
      control: { type: 'boolean' },
      description: 'Show min/max labels'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether slider is disabled'
    },
  },
  args: {
    size: 'md',
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    showValue: false,
    showMinMax: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

// Basic Examples
export const Default: Story = {
  args: {
    label: 'Volume',
    value: 75,
  },
};

export const WithValue: Story = {
  args: {
    label: 'Brightness',
    value: 60,
    showValue: true,
  },
};

export const WithMinMax: Story = {
  args: {
    label: 'Temperature',
    value: 22,
    min: 16,
    max: 30,
    showMinMax: true,
    formatValue: (value) => `${value}°C`,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled slider',
    value: 50,
    disabled: true,
    showValue: true,
  },
};

// Size Examples
export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <Slider size="xs" label="Extra Small" value={20} showValue />
      <Slider size="sm" label="Small" value={40} showValue />
      <Slider size="md" label="Medium (default)" value={60} showValue />
      <Slider size="lg" label="Large" value={80} showValue />
      <Slider size="xl" label="Extra Large" value={100} showValue />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Sliders available in multiple sizes for different contexts.',
      },
    },
  },
};

// Interactive Example
function VolumeControl() {
  const [volume, setVolume] = useState(75);

  return (
    <div className="max-w-md space-y-4">
      <Slider
        label="Volume Control"
        value={volume}
        min={0}
        max={100}
        onChange={setVolume}
        showValue
        showMinMax
        formatValue={(value) => `${value}%`}
        helperText="Adjust the system volume level"
      />
      <p className="text-sm text-gray-600">
        Current volume: {volume}%
      </p>
    </div>
  );
}

export const VolumeSlider: Story = {
  render: () => <VolumeControl />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive volume control slider with percentage formatting.',
      },
    },
  },
};

// Price Range Example
function PriceRange() {
  const [price, setPrice] = useState(250);

  return (
    <div className="max-w-md space-y-4">
      <Slider
        label="Price Range"
        value={price}
        min={0}
        max={1000}
        step={25}
        onChange={setPrice}
        showValue
        showMinMax
        formatValue={(value) => `$${value}`}
        helperText="Select your budget range"
      />
    </div>
  );
}

export const PriceSlider: Story = {
  render: () => <PriceRange />,
  parameters: {
    docs: {
      description: {
        story: 'Price range slider with custom formatting and step increments.',
      },
    },
  },
};

// Form Integration
export const FormIntegration: Story = {
  render: () => (
    <form className="max-w-md space-y-6">
      <h3 className="text-lg font-medium">System Settings</h3>
      
      <Slider
        label="Display Brightness"
        value={80}
        min={10}
        max={100}
        showValue
        showMinMax
        formatValue={(value) => `${value}%`}
        helperText="Adjust screen brightness"
      />
      
      <Slider
        label="Audio Volume"
        value={65}
        min={0}
        max={100}
        step={5}
        showValue
        formatValue={(value) => `${value}%`}
        helperText="Set system volume level"
      />
      
      <Slider
        label="Notification Delay"
        value={3}
        min={1}
        max={10}
        showValue
        showMinMax
        formatValue={(value) => `${value}s`}
        helperText="Delay before showing notifications"
      />
      
      <Slider
        label="Auto-save Interval"
        value={5}
        min={1}
        max={30}
        step={1}
        showValue
        formatValue={(value) => `${value} min`}
        error="Auto-save requires premium subscription"
        disabled
      />
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple sliders integrated into a settings form with various configurations.',
      },
    },
  },
}; 