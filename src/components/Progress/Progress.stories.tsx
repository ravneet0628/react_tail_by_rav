import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import { Progress } from './';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    docs: {
      description: {
        component: 'Progress component for showing completion status with linear and circular variants.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['linear', 'circular'],
      description: 'Progress variant'
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Progress size'
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'Progress color'
    },
    value: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Progress value (0-100)'
    },
    showValue: {
      control: { type: 'boolean' },
      description: 'Show progress value'
    },
    indeterminate: {
      control: { type: 'boolean' },
      description: 'Indeterminate loading state'
    },
  },
  args: {
    variant: 'linear',
    size: 'md',
    color: 'primary',
    value: 50,
    showValue: false,
    indeterminate: false,
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

// Basic Examples
export const Linear: Story = {
  args: {
    variant: 'linear',
    label: 'Upload Progress',
    value: 75,
    showValue: true,
  },
};

export const Circular: Story = {
  args: {
    variant: 'circular',
    label: 'Loading',
    value: 60,
    showValue: true,
  },
};

export const Indeterminate: Story = {
  args: {
    variant: 'linear',
    label: 'Processing...',
    indeterminate: true,
  },
};

export const IndeterminateCircular: Story = {
  args: {
    variant: 'circular',
    label: 'Loading...',
    indeterminate: true,
  },
};

// Color Examples
export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <Progress color="primary" value={70} label="Primary" showValue />
      <Progress color="success" value={85} label="Success" showValue />
      <Progress color="warning" value={45} label="Warning" showValue />
      <Progress color="error" value={25} label="Error" showValue />
      <Progress color="info" value={60} label="Info" showValue />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Progress bars with different semantic colors.',
      },
    },
  },
};

// Size Examples
export const LinearSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Progress size="xs" value={30} label="Extra Small" />
      <Progress size="sm" value={45} label="Small" />
      <Progress size="md" value={60} label="Medium (default)" />
      <Progress size="lg" value={75} label="Large" />
      <Progress size="xl" value={85} label="Extra Large" />
      <Progress size="2xl" value={95} label="2X Large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Linear progress bars in different sizes.',
      },
    },
  },
};

export const CircularSizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <Progress variant="circular" size="xs" value={30} showValue />
      <Progress variant="circular" size="sm" value={45} showValue />
      <Progress variant="circular" size="md" value={60} showValue />
      <Progress variant="circular" size="lg" value={75} showValue />
      <Progress variant="circular" size="xl" value={85} showValue />
      <Progress variant="circular" size="2xl" value={95} showValue />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Circular progress indicators in different sizes.',
      },
    },
  },
};

// Interactive Examples
function UploadProgress() {
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const startUpload = () => {
    setUploading(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  return (
    <div className="max-w-md space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">File Upload</h3>
        <button
          onClick={startUpload}
          disabled={uploading}
          className="px-4 py-2 bg-primary-600 text-white rounded disabled:opacity-50"
        >
          {uploading ? 'Uploading...' : 'Start Upload'}
        </button>
      </div>
      
      <Progress
        value={progress}
        label="Upload Progress"
        showValue
        formatValue={(value) => `${Math.round(value)}%`}
      />
      
      {progress === 100 && !uploading && (
        <p className="text-sm text-green-600">Upload completed!</p>
      )}
    </div>
  );
}

export const InteractiveUpload: Story = {
  render: () => <UploadProgress />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive upload progress simulation.',
      },
    },
  },
};

// Dashboard Example
export const Dashboard: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">System Status</h3>
        
        <div className="space-y-3">
          <Progress
            label="CPU Usage"
            value={68}
            color="warning"
            showValue
            formatValue={(value) => `${value}%`}
          />
          
          <Progress
            label="Memory Usage"
            value={45}
            color="success"
            showValue
            formatValue={(value) => `${value}%`}
          />
          
          <Progress
            label="Disk Usage"
            value={85}
            color="error"
            showValue
            formatValue={(value) => `${value}%`}
          />
          
          <Progress
            label="Network Usage"
            value={32}
            color="info"
            showValue
            formatValue={(value) => `${value}%`}
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Project Progress</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <Progress
              variant="circular"
              value={75}
              color="primary"
              showValue
              size="lg"
            />
            <p className="mt-2 text-sm font-medium">Frontend</p>
          </div>
          
          <div className="text-center">
            <Progress
              variant="circular"
              value={90}
              color="success"
              showValue
              size="lg"
            />
            <p className="mt-2 text-sm font-medium">Backend</p>
          </div>
          
          <div className="text-center">
            <Progress
              variant="circular"
              value={45}
              color="warning"
              showValue
              size="lg"
            />
            <p className="mt-2 text-sm font-medium">Testing</p>
          </div>
          
          <div className="text-center">
            <Progress
              variant="circular"
              value={20}
              color="error"
              showValue
              size="lg"
            />
            <p className="mt-2 text-sm font-medium">Documentation</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dashboard example showing various progress indicators for system monitoring and project tracking.',
      },
    },
  },
}; 