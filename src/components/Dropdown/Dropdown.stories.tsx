import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Select: Story = {
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
    placeholder: 'Choose',
    label: 'Select an option',
  },
};

export const Multi: Story = {
  args: {
    variant: 'multi',
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Orange', value: 'orange' },
      { label: 'Banana', value: 'banana' },
    ],
    placeholder: 'Fruits',
    label: 'Pick fruits',
  },
};

export const Searchable: Story = {
  args: {
    variant: 'searchable',
    options: Array.from({ length: 20 }).map((_, i) => ({ label: `Item ${i+1}`, value: i+1 })),
    placeholder: 'Search items',
    label: 'Searchable',
  },
};

export const Grouped: Story = {
  args: {
    variant: 'grouped',
    options: [
      {
        label: 'Fruits',
        options: [
          { label: 'Apple', value: 'apple' },
          { label: 'Orange', value: 'orange' },
        ],
      },
      {
        label: 'Vegetables',
        options: [
          { label: 'Carrot', value: 'carrot' },
          { label: 'Broccoli', value: 'broccoli' },
        ],
      },
    ],
    placeholder: 'Select item',
    label: 'Grouped',
  },
};

export const Custom: Story = {
  args: {
    variant: 'custom',
    options: [
      { label: 'Red', value: 'red' },
      { label: 'Green', value: 'green' },
      { label: 'Blue', value: 'blue' },
    ],
    placeholder: 'Pick color',
    renderOption: (opt) => (
      <div className="flex items-center gap-2">
        <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: opt.value as string }} />
        <span>{opt.label}</span>
      </div>
    ),
  },
};

export const Async: Story = {
  render: () => {
    const load = async (search: string) => {
      await new Promise((r) => setTimeout(r, 500));
      return Array.from({ length: 5 }).map((_, i) => ({ label: `${search || 'Item'} ${i+1}`, value: i }));
    };
    return <Dropdown variant="async" placeholder="Async" loadOptions={load} />;
  },
};

export const Combobox: Story = {
  args: {
    variant: 'combobox',
    options: [
      { label: 'JavaScript', value: 'js' },
      { label: 'TypeScript', value: 'ts' },
      { label: 'Python', value: 'py' },
    ],
    placeholder: 'Type or select…',
    label: 'Combobox',
  },
};