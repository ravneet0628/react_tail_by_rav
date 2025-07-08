import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';
import { axe } from 'jest-axe';

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('renders number variant', () => {
    render(<Badge variant="number" count={5} />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('hides when hidden prop is true', () => {
    const { container } = render(<Badge hidden>Hidden</Badge>);
    expect(container.firstChild).toBeNull();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<Badge>Status</Badge>);
    const results = await axe(container);
    (expect(results) as any).toHaveNoViolations();
  });
});