import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './Footer';
import { Facebook, Github, Twitter } from 'lucide-react';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['simple', 'multi-column', 'social'],
    },
  },
};

export default meta;

export const Simple: StoryObj<typeof Footer> = {
  args: {
    variant: 'simple',
    brand: <span className="font-semibold text-lg">Brand</span>,
  },
};

export const MultiColumn: StoryObj<typeof Footer> = {
  args: {
    variant: 'multi-column',
    brand: <span className="font-semibold text-lg">Brand</span>,
    columns: [
      {
        title: 'Company',
        links: [
          { label: 'About', href: '#' },
          { label: 'Careers', href: '#' },
          { label: 'Press', href: '#' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Blog', href: '#' },
          { label: 'Docs', href: '#' },
          { label: 'Support', href: '#' },
        ],
      },
    ],
  },
};

export const Social: StoryObj<typeof Footer> = {
  args: {
    variant: 'social',
    brand: <span className="font-semibold text-lg">Brand</span>,
    socials: (
      <>
        <a href="#"><Facebook size={20} /></a>
        <a href="#"><Twitter size={20} /></a>
        <a href="#"><Github size={20} /></a>
      </>
    ),
  },
};

export const Newsletter: StoryObj<typeof Footer> = {
  args: {
    variant: 'newsletter',
    brand: <span className="font-semibold text-lg">Brand</span>,
    newsletter: (
      <form className="flex flex-col sm:flex-row gap-2 sm:gap-0">
        <input
          type="email"
          placeholder="Your email"
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <button type="submit" className="px-4 py-2 bg-primary-600 text-white rounded-r-md">Subscribe</button>
      </form>
    ),
  },
  parameters: {
    layout: 'centered',
  },
};

export const Corporate: StoryObj<typeof Footer> = {
  args: {
    variant: 'corporate',
    brand: <span className="font-semibold text-lg">CorpInc</span>,
    columns: [
      {
        title: 'Products',
        links: [
          { label: 'Platform', href: '#' },
          { label: 'Pricing', href: '#' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '#' },
          { label: 'Careers', href: '#' },
          { label: 'Press', href: '#' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: '#' },
          { label: 'Terms', href: '#' },
        ],
      },
    ],
  },
  parameters: {
    layout: 'fullscreen',
  },
};