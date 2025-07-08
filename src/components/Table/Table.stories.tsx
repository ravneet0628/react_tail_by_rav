import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Data Display/Table',
  component: Table,
  tags: ['autodocs'],
  args: {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'age', label: 'Age' },
    ],
    data: [
      { id: 1, name: 'Alice', age: 30 },
      { id: 2, name: 'Bob', age: 25 },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Basic: Story = {};

export const Selectable: Story = {
  args: {
    selectable: true,
  },
};

export const Sortable: Story = {
  args: {
    sortable: true,
  },
};