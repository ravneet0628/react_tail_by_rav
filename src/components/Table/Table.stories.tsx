import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Badge } from '../Badge';
import { Table } from './Table';
import type { TableColumn, TableRow, TableSort } from './Table.types';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: 'Comprehensive table component with sorting, selection, and responsive features. Perfect for displaying structured data with interactive capabilities.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['basic', 'striped', 'bordered', 'compact'],
      description: 'Visual style variant'
    },
    sortable: {
      control: { type: 'boolean' },
      description: 'Enable column sorting'
    },
    selectable: {
      control: { type: 'boolean' },
      description: 'Enable row selection'
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Show loading state'
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Table size affecting padding and typography'
    }
  },
  args: {
    variant: 'basic',
    sortable: false,
    selectable: false,
    loading: false,
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

// Sample data
const sampleColumns: TableColumn[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'status', label: 'Status', align: 'center' },
  { key: 'lastSeen', label: 'Last Seen', sortable: true, align: 'right' },
];

const sampleData: TableRow[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
    lastSeen: '2 hours ago'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Editor',
    status: 'Active',
    lastSeen: '1 day ago'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Viewer',
    status: 'Inactive',
    lastSeen: '1 week ago'
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice@example.com',
    role: 'Editor',
    status: 'Active',
    lastSeen: '3 hours ago'
  },
];

// Basic Examples
export const Default: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    caption: 'User management table'
  }
};

export const Striped: Story = {
  args: {
    variant: 'striped',
    columns: sampleColumns,
    data: sampleData,
  }
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    columns: sampleColumns,
    data: sampleData,
  }
};

export const Compact: Story = {
  args: {
    variant: 'compact',
    columns: sampleColumns,
    data: sampleData,
  }
};

// Interactive Features
export const Sortable: Story = {
  args: {
    variant: 'striped',
    columns: sampleColumns,
    data: sampleData,
    sortable: true,
  }
};

export const Selectable: Story = {
  args: {
    variant: 'striped',
    columns: sampleColumns,
    data: sampleData,
    selectable: true,
  }
};

export const SortableAndSelectable: Story = {
  args: {
    variant: 'striped',
    columns: sampleColumns,
    data: sampleData,
    sortable: true,
    selectable: true,
  }
};

// Controlled Examples
export const ControlledSorting: Story = {
  render: () => {
    const [sort, setSort] = useState<TableSort>({ column: 'name', direction: 'asc' });
    
    return (
      <div className="space-y-4">
        <div className="text-sm text-gray-600">
          Sorted by: <strong>{sort.column}</strong> ({sort.direction})
        </div>
        <Table
          variant="striped"
          columns={sampleColumns}
          data={sampleData}
          sortable
          sort={sort}
          onSort={(column, direction) => setSort({ column, direction })}
        />
      </div>
    );
  }
};

export const ControlledSelection: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<TableRow[]>([]);
    
    return (
      <div className="space-y-4">
        <div className="text-sm text-gray-600">
          Selected rows: <strong>{selectedRows.length}</strong>
          {selectedRows.length > 0 && (
            <span className="ml-2">
              ({selectedRows.map(row => row.name).join(', ')})
            </span>
          )}
        </div>
        <Table
          variant="striped"
          columns={sampleColumns}
          data={sampleData}
          selectable
          onRowSelect={setSelectedRows}
        />
        {selectedRows.length > 0 && (
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-primary-600 text-white rounded text-sm">
              Edit Selected
            </button>
            <button className="px-3 py-1 bg-red-600 text-white rounded text-sm">
              Delete Selected
            </button>
          </div>
        )}
      </div>
    );
  }
};

// Custom Rendering
export const CustomColumns: Story = {
  render: () => {
    const customColumns: TableColumn[] = [
      { key: 'name', label: 'User', sortable: true },
      { key: 'email', label: 'Contact', sortable: true },
      { 
        key: 'status', 
        label: 'Status', 
        align: 'center',
        render: (value) => (
          <Badge 
            variant={value === 'Active' ? 'solid' : 'outline'}
            color={value === 'Active' ? 'success' : 'gray'}
            size="sm"
          >
            {value}
          </Badge>
        )
      },
      { 
        key: 'actions', 
        label: 'Actions', 
        align: 'right',
        render: (_, row) => (
          <div className="flex gap-2 justify-end">
            <button className="text-primary-600 hover:text-primary-800 text-sm">
              Edit
            </button>
            <button className="text-red-600 hover:text-red-800 text-sm">
              Delete
            </button>
          </div>
        )
      },
    ];
    
    return (
      <Table
        variant="striped"
        columns={customColumns}
        data={sampleData}
        sortable
      />
    );
  }
};

// States
export const Loading: Story = {
  args: {
    variant: 'striped',
    columns: sampleColumns,
    data: sampleData,
    loading: true,
  }
};

export const Empty: Story = {
  args: {
    variant: 'striped',
    columns: sampleColumns,
    data: [],
    emptyMessage: 'No users found. Try adjusting your search criteria.',
  }
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Extra Small</h3>
        <Table
          variant="bordered"
          columns={sampleColumns}
          data={sampleData.slice(0, 2)}
          size="xs"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Small</h3>
        <Table
          variant="bordered"
          columns={sampleColumns}
          data={sampleData.slice(0, 2)}
          size="sm"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Medium (Default)</h3>
        <Table
          variant="bordered"
          columns={sampleColumns}
          data={sampleData.slice(0, 2)}
          size="md"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Large</h3>
        <Table
          variant="bordered"
          columns={sampleColumns}
          data={sampleData.slice(0, 2)}
          size="lg"
        />
      </div>
    </div>
  )
};