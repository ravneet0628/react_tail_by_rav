import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Dropdown } from './Dropdown';
import { axe } from 'jest-axe';

describe('Dropdown', () => {
  const options = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
  ];

  it('renders placeholder', () => {
    render(<Dropdown options={options} placeholder="Pick" />);
    expect(screen.getByText('Pick')).toBeInTheDocument();
  });

  it('opens list and selects value', () => {
    const onChange = vi.fn();
    render(<Dropdown options={options} onChange={onChange} />);
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Two'));
    expect(onChange).toHaveBeenCalledWith('2');
  });

  it('handles multi select', () => {
    const onChange = vi.fn();
    render(<Dropdown variant="multi" options={options} onChange={onChange} />);
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('One'));
    fireEvent.click(screen.getByText('Two'));
    expect(onChange).toHaveBeenLastCalledWith(['1', '2']);
  });

  it('filters options when searchable', () => {
    render(<Dropdown variant="searchable" options={options} />);
    fireEvent.click(screen.getByRole('button'));
    fireEvent.change(screen.getByPlaceholderText('Search...'), { target: { value: 'Two' } });
    expect(screen.getByText('Two')).toBeInTheDocument();
    expect(screen.queryByText('One')).not.toBeInTheDocument();
  });

  it('renders group headers', () => {
    const grouped = [
      { label: 'Group', options: options },
    ];
    render(<Dropdown variant="grouped" options={grouped as any} />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Group')).toBeInTheDocument();
  });

  it('renders custom option content', () => {
    const customOpts = [{ label: 'Red', value: 'red' }];
    render(
      <Dropdown
        variant="custom"
        options={customOpts}
        renderOption={(opt) => <span data-testid={`custom-${opt.value}`}>{opt.label}</span>}
      />
    );
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('custom-red')).toBeInTheDocument();
  });

  it('loads options asynchronously', async () => {
    const load = vi.fn(async () => [{ label: 'Async 1', value: 'a1' }]);
    render(<Dropdown variant="async" placeholder="Async" loadOptions={load} />);
    fireEvent.click(screen.getByRole('button'));
    expect(load).toHaveBeenCalled();
    await screen.findByText('Async 1');
  });

  it('allows typing in combobox', () => {
    render(<Dropdown variant="combobox" options={options} />);
    fireEvent.click(screen.getByRole('button'));
    const input = screen.getByPlaceholderText('Select…');
    fireEvent.change(input, { target: { value: 'One' }});
    expect((input as HTMLInputElement).value).toBe('One');
  });

  it('has no a11y violations', async () => {
    const { container } = render(<Dropdown options={[{label:'One',value:'1'}]} />);
    const results = await axe(container);
    (expect(results) as any).toHaveNoViolations();
  });
});