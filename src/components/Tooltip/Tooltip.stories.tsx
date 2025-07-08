import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: 'Tooltip component for displaying contextual information on hover, focus, or click.',
      },
    },
  },
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Tooltip position relative to trigger'
    },
    trigger: {
      control: { type: 'select' },
      options: ['hover', 'click', 'focus'],
      description: 'How the tooltip is triggered'
    },
    delay: {
      control: { type: 'number' },
      description: 'Delay before showing tooltip (ms)'
    },
    arrow: {
      control: { type: 'boolean' },
      description: 'Whether to show arrow'
    },
  },
  args: {
    position: 'top',
    trigger: 'hover',
    delay: 200,
    arrow: true,
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// Basic Examples
export const Default: Story = {
  args: {
    content: 'This is a helpful tooltip',
    children: <button className="px-4 py-2 bg-primary-600 text-white rounded">Hover me</button>,
  },
};

export const LongContent: Story = {
  args: {
    content: 'This is a much longer tooltip with more detailed information that spans multiple lines.',
    maxWidth: '200px',
    children: <button className="px-4 py-2 bg-primary-600 text-white rounded">Long tooltip</button>,
  },
};

// Position Examples
export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-8">
      <div className="text-center">
        <Tooltip content="Top tooltip" position="top">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Top</button>
        </Tooltip>
      </div>
      
      <div className="text-center">
        <Tooltip content="Bottom tooltip" position="bottom">
          <button className="px-4 py-2 bg-green-600 text-white rounded">Bottom</button>
        </Tooltip>
      </div>
      
      <div className="text-center">
        <Tooltip content="Left tooltip" position="left">
          <button className="px-4 py-2 bg-yellow-600 text-white rounded">Left</button>
        </Tooltip>
      </div>
      
      <div className="text-center">
        <Tooltip content="Right tooltip" position="right">
          <button className="px-4 py-2 bg-red-600 text-white rounded">Right</button>
        </Tooltip>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips can be positioned on any side of the trigger element.',
      },
    },
  },
};

// Trigger Examples
export const ClickTrigger: Story = {
  args: {
    content: 'Click to toggle tooltip',
    trigger: 'click',
    children: <button className="px-4 py-2 bg-purple-600 text-white rounded">Click me</button>,
  },
};

export const FocusTrigger: Story = {
  args: {
    content: 'Focus to show tooltip',
    trigger: 'focus',
    children: <input className="px-3 py-2 border rounded" placeholder="Focus this input" />,
  },
};

// No Arrow
export const WithoutArrow: Story = {
  args: {
    content: 'Tooltip without arrow',
    arrow: false,
    children: <button className="px-4 py-2 bg-gray-600 text-white rounded">No arrow</button>,
  },
};

// Rich Content
export const RichContent: Story = {
  args: {
    content: (
      <div>
        <div className="font-semibold">Rich Content</div>
        <div className="text-sm">You can include any React content</div>
      </div>
    ),
    maxWidth: '250px',
    children: <button className="px-4 py-2 bg-indigo-600 text-white rounded">Rich tooltip</button>,
  },
}; 