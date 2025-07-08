import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Navigation } from './Navigation';
import { axe } from 'jest-axe';

describe('Navigation', () => {
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
  ];

  it('renders items', () => {
    render(<Navigation items={items} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('calls onItemClick', () => {
    const onClick = vi.fn();
    render(<Navigation items={items} onItemClick={onClick} />);
    fireEvent.click(screen.getByText('About'));
    expect(onClick).toHaveBeenCalledWith(items[1]);
  });

  it('renders vertical layout', () => {
    render(<Navigation variant="vertical" items={items} />);
    const list = screen.getByRole('list');
    expect(list.className).toMatch(/flex-col/);
  });

  it('renders breadcrumb separators', () => {
    render(<Navigation variant="breadcrumb" items={items} />);
    expect(screen.getAllByText('/').length).toBe(items.length - 1);
  });

  it('applies active tab aria-selected', () => {
    render(<Navigation variant="tabs" items={items} activeItem="about" />);
    expect(screen.getByRole('tab', { name: 'About' }).getAttribute('aria-selected')).toBe('true');
  });

  it('marks active page with aria-current', () => {
    const pages = [
      { id: '1', label: '1' },
      { id: '2', label: '2' },
    ];
    render(<Navigation variant="pagination" items={pages} activeItem="2" />);
    expect(screen.getByRole('button', { name: '2' }).getAttribute('aria-current')).toBe('page');
  });

  it('toggles mobile menu and triggers click', () => {
    const onClick = vi.fn();
    render(<Navigation variant="mobile" items={items} onItemClick={onClick} logo={<span>Logo</span>} />);
    const toggleBtn = screen.getByRole('button', { name: /toggle navigation/i });
    // Menu initially hidden
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    // Open menu
    fireEvent.click(toggleBtn);
    expect(screen.getByRole('menu')).toBeInTheDocument();
    // Click menu item
    fireEvent.click(screen.getByText('Home'));
    expect(onClick).toHaveBeenCalledWith(items[0]);
  });

  it('shows mega panel on hover', () => {
    const megaItems = [
      {
        id: 'products',
        label: 'Products',
        children: [
          { id: 'prod1', label: 'Product 1' },
        ],
      },
      { id: 'about', label: 'About' },
    ];
    render(<Navigation variant="mega" items={megaItems} />);
    fireEvent.mouseEnter(screen.getByText('Products'));
    expect(screen.getByTestId('mega-panel')).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<Navigation items={[{id:'home',label:'Home'}]} />);
    const results = await axe(container);
    (expect(results) as any).toHaveNoViolations();
  });
});