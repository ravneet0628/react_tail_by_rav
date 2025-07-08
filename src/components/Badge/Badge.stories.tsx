import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    children: 'Badge',
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Dot: Story = {
  args: {
    variant: 'dot',
  },
};

export const Number: Story = {
  args: {
    variant: 'number',
    count: 7,
  },
};