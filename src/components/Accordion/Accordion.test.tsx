import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion } from './Accordion';
import { axe } from 'jest-axe';

describe('Accordion', () => {
  const items = [
    { id: '1', title: 'Title 1', content: 'Content 1' },
    { id: '2', title: 'Title 2', content: 'Content 2' },
  ];

  it('renders titles', () => {
    render(<Accordion items={items} />);
    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.getByText('Title 2')).toBeInTheDocument();
  });

  it('toggles content visibility', () => {
    render(<Accordion items={items} />);
    const btn = screen.getByText('Title 1');
    fireEvent.click(btn);
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<Accordion items={items} />);
    const results = await axe(container);
    (expect(results) as any).toHaveNoViolations();
  });
});