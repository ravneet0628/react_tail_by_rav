import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
};
export default meta;

type Story = StoryObj<typeof Tabs>;

const items = [
  { id: 'tab1', label: 'Tab 1' },
  { id: 'tab2', label: 'Tab 2' },
  { id: 'tab3', label: 'Tab 3' },
];

export const Basic: Story = {
  args: {
    items,
    activeItem: 'tab1',
  },
};

export const Pills: Story = {
  args: {
    variant: 'pills',
    items,
    activeItem: 'tab2',
  },
};

export const Underline: Story = {
  args: {
    variant: 'underline',
    items,
    activeItem: 'tab3',
  },
};