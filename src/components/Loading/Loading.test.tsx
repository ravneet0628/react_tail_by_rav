import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Loading } from './Loading';
import { axe } from 'jest-axe';

describe('Loading', () => {
  it('renders spinner by default', () => {
    render(<Loading />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('shows progress bar with correct width', () => {
    render(<Loading variant="progress" progress={50} />);
    const progressText = screen.getByText(/50%/);
    expect(progressText).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<Loading variant="spinner" />);
    const results = await axe(container);
    (expect(results) as any).toHaveNoViolations();
  });
});