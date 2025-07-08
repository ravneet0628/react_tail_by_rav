import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://via.placeholder.com/64',
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Image: Story = {};

export const Initials: Story = {
  args: {
    variant: 'initials',
    name: 'Jane Smith',
  },
};

export const Upload: Story = {
  args: {
    variant: 'upload',
  },
};