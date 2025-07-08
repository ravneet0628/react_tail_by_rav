import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Input } from './Input';
import { axe } from 'jest-axe';

describe('Input', () => {
  it('renders label and placeholder', () => {
    render(<Input label="Email" placeholder="Enter email" />);
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
  });

  it('calls onChange when value changes', () => {
    const handleChange = vi.fn();
    render(<Input placeholder="Name" onChange={handleChange} />);
    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'John' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('has no a11y violations', async () => {
    const { container } = render(<Input label="Email" placeholder="Email" />);
    const results = await axe(container);
    (expect(results) as any).toHaveNoViolations();
  });
});