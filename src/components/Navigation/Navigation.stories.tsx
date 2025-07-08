import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
};
export default meta;

type Story = StoryObj<typeof Navigation>;

export const Horizontal: Story = {
  args: {
    items: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'contact', label: 'Contact' },
    ],
    activeItem: 'home',
  },
};

export const Vertical: Story = {
  args: {
    variant: 'vertical',
    items: [
      { id: 'dashboard', label: 'Dashboard' },
      { id: 'settings', label: 'Settings' },
      { id: 'profile', label: 'Profile' },
    ],
  },
  parameters: {
    layout: 'centered',
  },
};

export const Breadcrumb: Story = {
  args: {
    variant: 'breadcrumb',
    items: [
      { id: 'home', label: 'Home' },
      { id: 'library', label: 'Library' },
      { id: 'data', label: 'Data' },
    ],
  },
  parameters: {
    layout: 'padded',
  },
};

export const Tabs: Story = {
  args: {
    variant: 'tabs',
    activeItem: 'tab1',
    items: [
      { id: 'tab1', label: 'Tab 1' },
      { id: 'tab2', label: 'Tab 2' },
      { id: 'tab3', label: 'Tab 3' },
    ],
  },
};

export const Pagination: Story = {
  args: {
    variant: 'pagination',
    activeItem: '2',
    items: [
      { id: 'prev', label: '‹', disabled: true },
      { id: '1', label: '1' },
      { id: '2', label: '2' },
      { id: '3', label: '3' },
      { id: 'next', label: '›' },
    ],
  },
  parameters: {
    layout: 'centered',
  },
};

export const Mobile: Story = {
  args: {
    variant: 'mobile',
    items: [
      { id: 'home', label: 'Home' },
      { id: 'services', label: 'Services' },
      { id: 'contact', label: 'Contact' },
    ],
    logo: <span className="font-bold">Brand</span>,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};

export const Mega: Story = {
  args: {
    variant: 'mega',
    items: [
      {
        id: 'solutions',
        label: 'Solutions',
        children: [
          { id: 'analytics', label: 'Analytics' },
          { id: 'commerce', label: 'Commerce' },
          { id: 'marketing', label: 'Marketing' },
          { id: 'insights', label: 'Insights' },
        ],
      },
      {
        id: 'company',
        label: 'Company',
        children: [
          { id: 'about', label: 'About' },
          { id: 'blog', label: 'Blog' },
          { id: 'careers', label: 'Careers' },
        ],
      },
    ],
  },
  parameters: {
    layout: 'fullscreen',
  },
};