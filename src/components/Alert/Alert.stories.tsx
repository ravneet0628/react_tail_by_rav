import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error', 'banner', 'toast', 'inline'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational alert',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    children: 'Your operation was successful!',
  },
};

export const Dismissible: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'You can dismiss this alert',
    dismissible: true,
  },
};