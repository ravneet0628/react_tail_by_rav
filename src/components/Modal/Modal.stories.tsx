import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Dialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Modal Title">
          <p className="mb-4">This is a simple dialog modal.</p>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </Modal>
      </>
    );
  },
};

export const Popup: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Show Popup</Button>
        <Modal variant="popup" open={open} onClose={() => setOpen(false)} title="Popup Message" size="sm">
          <p className="mb-4">Quick popup notification content.</p>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </Modal>
      </>
    );
  },
};