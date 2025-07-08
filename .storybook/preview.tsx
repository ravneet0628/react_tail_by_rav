import React from 'react';
import type { Preview } from "@storybook/react";
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: {
      argTypesRegex: "^on[A-Z].*",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    docs: {
      toc: true,
      source: {
        state: 'open',
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'gray',
          value: '#f3f4f6',
        },
        {
          name: 'dark',
          value: '#1f2937',
        },
      ],
    },
    viewport: {
      viewports: {
        mobile1: {
          name: 'Small mobile',
          styles: { width: '320px', height: '568px' },
        },
        mobile2: {
          name: 'Large mobile',
          styles: { width: '414px', height: '896px' },
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1024px', height: '768px' },
        },
      },
    },
    layout: 'centered',
  },
  decorators: [
    (Story, context) => {
      const isDarkMode = context.globals.backgrounds?.value === '#1f2937';
      
      return (
        <div 
          className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}
          style={{ 
            padding: '1rem',
            backgroundColor: context.globals.backgrounds?.value || '#ffffff',
            minHeight: '200px',
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Story />
          </div>
        </div>
      );
    },
  ],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  tags: ['autodocs'],
};

export default preview; 