import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { axe } from 'jest-axe';

describe('Card', () => {
  it('renders body content', () => {
    render(<Card>Body</Card>);
    expect(screen.getByText('Body')).toBeInTheDocument();
  });

  it('renders header and footer when provided', () => {
    const C = Card as any;
    render(
      <C>
        <C.Header>Header</C.Header>
        <C.Body>Content</C.Body>
        <C.Footer>Footer</C.Footer>
      </C>
    );
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<Card>Accessible</Card>);
    const results = await axe(container);
    (expect(results) as any).toHaveNoViolations();
  });
});