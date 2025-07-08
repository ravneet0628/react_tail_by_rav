import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['basic', 'elevated', 'outlined', 'gradient', 'image', 'interactive', 'compact'],
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    variant: 'basic',
    children: 'This is a basic card.',
  },
};

export const WithHeaderFooter: Story = {
  render: () => {
    const C = Card as any;
    return (
      <C variant="elevated">
        <C.Header>Card Title</C.Header>
        <C.Body>Body content goes here.</C.Body>
        <C.Footer>Footer actions</C.Footer>
      </C>
    );
  },
};