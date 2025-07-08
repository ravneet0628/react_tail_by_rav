import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Surfaces/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  args: {
    items: [
      { id: '1', title: 'Section 1', content: 'Content 1' },
      { id: '2', title: 'Section 2', content: 'Content 2' },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Single: Story = {};

export const Multiple: Story = {
  args: {
    variant: 'multiple',
    allowMultiple: true,
  },
};