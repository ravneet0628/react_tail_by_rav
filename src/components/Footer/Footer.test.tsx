import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { axe } from 'jest-axe';

describe('Footer', () => {
  it('renders brand and default text', () => {
    render(<Footer brand={<span>Brand</span>} />);

    expect(screen.getByText('Brand')).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });

  it('renders newsletter variant with form', () => {
    render(
      <Footer
        variant="newsletter"
        brand={<span>Brand</span>}
        newsletter={<input placeholder="Your email" />}
      />
    );
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument();
  });

  it('renders corporate variant columns', () => {
    render(
      <Footer
        variant="corporate"
        columns={[{ title: 'Legal', links: [{ label: 'Privacy', href: '#' }] }]}
      />
    );
    expect(screen.getByText('Legal')).toBeInTheDocument();
    expect(screen.getByText('Privacy')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<Footer brand={<span>Brand</span>} />);
    const results = await axe(container);
    (expect(results) as any).toHaveNoViolations();
  });
});