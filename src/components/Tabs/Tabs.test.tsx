import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs } from './Tabs';
import { axe } from 'jest-axe';

describe('Tabs', () => {
  const items = [
    { id: 'one', label: 'One' },
    { id: 'two', label: 'Two' },
  ];

  it('renders tab labels', () => {
    render(<Tabs items={items} activeItem="one" />);
    expect(screen.getByRole('tab', { name: 'One' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Two' })).toBeInTheDocument();
  });

  it('calls onTabChange', () => {
    const fn = jest.fn();
    render(<Tabs items={items} onTabChange={fn} />);
    fireEvent.click(screen.getByRole('tab', { name: 'Two' }));
    expect(fn).toHaveBeenCalledWith(items[1]);
  });

  it('has no a11y violations', async () => {
    const { container } = render(<Tabs items={items} />);
    const results = await axe(container);
    (expect(results) as any).toHaveNoViolations();
  });
});