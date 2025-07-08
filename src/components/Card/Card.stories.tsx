import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button';

/**
 * The Card component is a versatile container for grouping and displaying content.
 * It provides a consistent visual structure with customizable styling options.
 * 
 * ## Features
 * - Multiple visual variants (default, outline, shadow)
 * - Flexible padding options
 * - Hover effects for interactive cards
 * - Accessible and semantic HTML structure
 * 
 * ## When to use
 * - To group related content
 * - To create visual hierarchy
 * - To contain interactive elements
 * - To display information in a structured layout
 */
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: 'A flexible container component for organizing and displaying content.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'shadow'],
      description: 'Visual style variant of the card',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Internal padding of the card',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    hoverable: {
      control: { type: 'boolean' },
      description: 'Whether the card should have hover effects',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'Card content',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
  args: {
    variant: 'default',
    padding: 'md',
    hoverable: false,
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// Basic Variants
export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Default Card</h3>
        <p className="text-gray-600">This is a default card with a subtle border.</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'The default card variant with a simple border and white background.',
      },
    },
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Outline Card</h3>
        <p className="text-gray-600">This card has a more prominent border and transparent background.</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'The outline variant with a more prominent border and transparent background.',
      },
    },
  },
};

export const Shadow: Story = {
  args: {
    variant: 'shadow',
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Shadow Card</h3>
        <p className="text-gray-600">This card has a drop shadow for more visual prominence.</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'The shadow variant with a drop shadow for elevated appearance.',
      },
    },
  },
};

// Padding Options
export const PaddingVariations: Story = {
  render: () => (
    <div className="space-y-4">
      <Card padding="none" variant="outline">
        <div className="bg-blue-50 p-2 text-center">No Padding</div>
      </Card>
      <Card padding="sm" variant="outline">
        <div className="text-center">Small Padding</div>
      </Card>
      <Card padding="md" variant="outline">
        <div className="text-center">Medium Padding (Default)</div>
      </Card>
      <Card padding="lg" variant="outline">
        <div className="text-center">Large Padding</div>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different padding options for controlling internal spacing.',
      },
    },
  },
};

// Interactive Cards
export const InteractiveCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card variant="shadow" hoverable onClick={() => alert('Card clicked!')}>
        <h3 className="text-lg font-semibold mb-2">Hoverable Card</h3>
        <p className="text-gray-600 mb-4">This card has hover effects and is clickable.</p>
        <Button size="sm">Learn More</Button>
      </Card>
      <Card variant="outline" hoverable>
        <h3 className="text-lg font-semibold mb-2">Interactive Content</h3>
        <p className="text-gray-600 mb-4">Cards can contain interactive elements.</p>
        <div className="flex gap-2">
          <Button size="sm" variant="primary">Action</Button>
          <Button size="sm" variant="outline">Cancel</Button>
        </div>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Cards with hover effects and interactive content.',
      },
    },
  },
};

// Layout Examples
export const LayoutExamples: Story = {
  render: () => (
    <div className="space-y-6">
      {/* Profile Card */}
      <Card variant="shadow">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            JD
          </div>
          <div>
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-gray-600">Software Engineer</p>
            <p className="text-sm text-gray-500">john.doe@example.com</p>
          </div>
        </div>
      </Card>

      {/* Stats Card */}
      <Card variant="default">
        <h3 className="text-lg font-semibold mb-4">Statistics</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">127</div>
            <div className="text-sm text-gray-600">Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">89%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">2.4k</div>
            <div className="text-sm text-gray-600">Hours</div>
          </div>
        </div>
      </Card>

      {/* Article Card */}
      <Card variant="outline" hoverable>
        <div className="space-y-3">
          <div className="w-full h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
          <h3 className="text-lg font-semibold">Article Title</h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>March 15, 2024</span>
            <span>5 min read</span>
          </div>
        </div>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of card layouts for different use cases.',
      },
    },
  },
};

// Playground
export const Playground: Story = {
  args: {
    variant: 'default',
    padding: 'md',
    hoverable: false,
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Playground Card</h3>
        <p className="text-gray-600">Use the controls below to experiment with different card configurations.</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to experiment with different card configurations.',
      },
    },
  },
};