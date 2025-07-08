import type { Meta, StoryObj } from '@storybook/react';
import { TestTailwind } from './TestTailwind';

const meta: Meta<typeof TestTailwind> = {
  title: 'Test/TailwindCSS',
  component: TestTailwind,
  parameters: {
    docs: {
      description: {
        component: 'Test component to verify Tailwind CSS is working properly in Storybook.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TestTailwind>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This story should show a card with gradient background, proper spacing, colors, and responsive design if Tailwind CSS is working correctly.',
      },
    },
  },
}; 