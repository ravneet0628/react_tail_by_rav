import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';
import { axe } from 'jest-axe';

describe('Avatar', () => {
  it('renders image', () => {
    render(<Avatar src="https://via.placeholder.com/40" alt="avatar" />);
    const imgs = screen.getAllByRole('img');
    expect(imgs.length).toBeGreaterThan(0);
  });

  it('renders initials when name provided', () => {
    render(<Avatar variant="initials" name="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<Avatar name="John Doe" variant="initials" />);
    const results = await axe(container);
    (expect(results) as any).toHaveNoViolations();
  });
});