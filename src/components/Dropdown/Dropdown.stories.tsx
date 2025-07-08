import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { User, Settings, Globe } from 'lucide-react';
import { Dropdown } from './Dropdown';
import type { DropdownOption } from './Dropdown.types';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: 'Flexible dropdown component supporting single selection, multiple selection, and searchable options. Optimized for accessibility and keyboard navigation.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['select', 'multiselect', 'searchable'],
      description: 'Dropdown behavior variant'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the dropdown'
    },
    searchable: {
      control: { type: 'boolean' },
      description: 'Enable search functionality'
    }
  },
  args: {
    variant: 'select',
    placeholder: 'Select an option...',
    disabled: false,
    searchable: false,
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

// Sample data
const basicOptions: DropdownOption[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Date', value: 'date' },
  { label: 'Elderberry', value: 'elderberry' },
];

const optionsWithIcons: DropdownOption[] = [
  { label: 'Profile', value: 'profile', icon: <User size={16} /> },
  { label: 'Settings', value: 'settings', icon: <Settings size={16} /> },
  { label: 'Language', value: 'language', icon: <Globe size={16} /> },
];

const groupedOptions = [
  {
    label: 'Fruits',
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
    ]
  },
  {
    label: 'Vegetables',
    options: [
      { label: 'Carrot', value: 'carrot' },
      { label: 'Broccoli', value: 'broccoli' },
      { label: 'Spinach', value: 'spinach' },
    ]
  }
];

// Basic Examples
export const Default: Story = {
  args: {
    options: basicOptions,
    label: 'Choose a fruit',
  }
};

export const WithValue: Story = {
  args: {
    options: basicOptions,
    value: 'banana',
    label: 'Pre-selected option',
  }
};

export const WithIcons: Story = {
  args: {
    options: optionsWithIcons,
    label: 'Select action',
    placeholder: 'Choose an action...',
  }
};

// Variants
export const Multiselect: Story = {
  args: {
    variant: 'multiselect',
    options: basicOptions,
    label: 'Select multiple fruits',
    placeholder: 'Choose one or more...',
  }
};

export const Searchable: Story = {
  args: {
    variant: 'searchable',
    options: basicOptions,
    label: 'Searchable dropdown',
    placeholder: 'Search and select...',
  }
};

// Interactive Examples
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string | number | (string | number)[]>('');
    
    return (
      <div className="space-y-4">
        <Dropdown
          options={basicOptions}
          value={value}
          onChange={setValue}
          label="Controlled dropdown"
          placeholder="Select a fruit..."
        />
        <p className="text-sm text-gray-600">
          Selected value: <code>{JSON.stringify(value)}</code>
        </p>
      </div>
    );
  }
};

export const MultiselectControlled: Story = {
  render: () => {
    const [selectedValues, setSelectedValues] = useState<(string | number)[]>([]);
    
    return (
      <div className="space-y-4">
        <Dropdown
          variant="multiselect"
          options={basicOptions}
          value={selectedValues}
          onChange={(values) => setSelectedValues(values as (string | number)[])}
          label="Multi-select controlled"
          placeholder="Select multiple fruits..."
        />
        <p className="text-sm text-gray-600">
          Selected values: <code>{JSON.stringify(selectedValues)}</code>
        </p>
      </div>
    );
  }
};

// States
export const Disabled: Story = {
  args: {
    options: basicOptions,
    disabled: true,
    value: 'apple',
    label: 'Disabled dropdown',
  }
};

export const WithError: Story = {
  args: {
    options: basicOptions,
    label: 'Dropdown with error',
    error: 'Please select a valid option',
    placeholder: 'This field has an error...',
  }
};

export const EmptyOptions: Story = {
  args: {
    options: [],
    label: 'Empty dropdown',
    placeholder: 'No options available',
  }
};

// Advanced Examples
export const CustomRenderer: Story = {
  args: {
    options: optionsWithIcons,
    label: 'Custom option rendering',
    renderOption: (option, isSelected) => (
      <div className="flex items-center gap-3">
        {option.icon}
        <span className={isSelected ? 'font-semibold' : ''}>{option.label}</span>
        {isSelected && <span className="text-xs text-primary-600">(selected)</span>}
      </div>
    ),
  }
};

export const AsyncOptions: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('');
    
    const loadOptions = async (searchTerm: string): Promise<DropdownOption[]> => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const countries = [
        'United States', 'Canada', 'United Kingdom', 'Germany', 'France',
        'Japan', 'Australia', 'Brazil', 'India', 'China'
      ];
      
      return countries
        .filter(country => 
          country.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map(country => ({
          label: country,
          value: country.toLowerCase().replace(/\s+/g, '-')
        }));
    };
    
    return (
      <div className="space-y-4">
        <Dropdown
          variant="searchable"
          options={[]} // Options loaded async
          value={value}
          onChange={setValue}
          loadOptions={loadOptions}
          label="Async country search"
          placeholder="Type to search countries..."
        />
        <p className="text-sm text-gray-600">
          Selected: <code>{value}</code>
        </p>
      </div>
    );
  }
};

// Sizing
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Dropdown
        options={basicOptions}
        size="sm"
        label="Small dropdown"
        placeholder="Small size..."
      />
      <Dropdown
        options={basicOptions}
        size="md"
        label="Medium dropdown (default)"
        placeholder="Medium size..."
      />
      <Dropdown
        options={basicOptions}
        size="lg"
        label="Large dropdown"
        placeholder="Large size..."
      />
    </div>
  )
};