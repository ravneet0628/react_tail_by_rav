import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Alert } from './Alert';
import { axe } from 'jest-axe';

describe('Alert', () => {
  it('renders title and message', () => {
    render(<Alert title="Notice">Message</Alert>);
    expect(screen.getByText('Notice')).toBeInTheDocument();
    expect(screen.getByText('Message')).toBeInTheDocument();
  });

  it('handles dismiss', () => {
    const onDismiss = vi.fn();
    render(
      <Alert title="Dismiss" dismissible onDismiss={onDismiss}>
        Content
      </Alert>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('has no a11y violations', async () => {
    const { container } = render(<Alert variant="info">Info</Alert>);
    const results = await axe(container);
    (expect(results) as any).toHaveNoViolations();
  });
});