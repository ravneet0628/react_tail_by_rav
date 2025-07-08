import type { Meta, StoryObj } from '@storybook/react';
import { SimpleTest } from './SimpleTest';

const meta: Meta<typeof SimpleTest> = {
  title: 'Test/SimpleTest',
  component: SimpleTest,
};

export default meta;
type Story = StoryObj<typeof SimpleTest>;

export const Default: Story = {}; 