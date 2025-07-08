import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from './Loading';

const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['spinner', 'dots', 'bars', 'pulse', 'skeleton', 'progress', 'linear'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Loading>;

export const Spinner: Story = {
  args: {
    variant: 'spinner',
  },
};

export const Progress: Story = {
  args: {
    variant: 'progress',
    progress: 60,
  },
};