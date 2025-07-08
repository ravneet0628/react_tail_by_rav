import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Table } from './Table';
import { axe } from 'jest-axe';

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age', sortable: true },
];

const data = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
];

describe('Table', () => {
  it('renders rows', () => {
    render(<Table columns={columns} data={data} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });

  it('sorts when header clicked', () => {
    render(<Table columns={columns} data={data} sortable />);
    const ageHeader = screen.getByText('Age');
    fireEvent.click(ageHeader);
    const rows = screen.getAllByRole('row');
    // First data row after header will now be Bob (age 25)
    expect(rows[1]).toHaveTextContent('Bob');
  });

  it('has no a11y violations', async () => {
    const { container } = render(<Table columns={columns} data={data} />);
    const results = await axe(container);
    (expect(results) as any).toHaveNoViolations();
  });
});