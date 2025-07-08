import type { Meta, StoryObj } from '@storybook/react-vite';
import { Search } from 'lucide-react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number', 'search', 'textarea', 'select'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    label: 'Name',
    placeholder: 'John Doe',
    variant: 'text',
  },
};

export const SearchInput: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    variant: 'search',
    icon: <Search />,
  },
};

export const Select: Story = {
  args: {
    label: 'Country',
    variant: 'select',
    options: [
      { label: 'USA', value: 'usa' },
      { label: 'Canada', value: 'canada' },
    ],
  },
};