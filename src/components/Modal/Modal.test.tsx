import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Modal } from './Modal';
import { axe } from 'jest-axe';

describe('Modal', () => {
  it('renders content when open', () => {
    render(<Modal open onClose={vi.fn()} title="Test">Content</Modal>);
    expect(screen.getByText('Content')).toBeTruthy();
  });

  it('calls onClose when escape pressed', () => {
    const onClose = vi.fn();
    render(<Modal open onClose={onClose} title="Esc">Body</Modal>);
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });

  it('renders drawer variant', () => {
    render(
      <Modal variant="drawer" open onClose={vi.fn()}>
        Content
      </Modal>
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('renders fullscreen variant', () => {
    render(
      <Modal variant="fullscreen" open onClose={vi.fn()}>
        Full
      </Modal>
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('renders popup variant', () => {
    render(<Modal variant="popup" open onClose={vi.fn()} title="Popup">Hi</Modal>);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<Modal open onClose={vi.fn()} title="A11y">Text</Modal>);
    const results = await axe(container);
    (expect(results) as any).toHaveNoViolations();
  });
});