import { useState, useRef, useEffect, useId } from 'react';
import { ChevronDown, Search, Check } from 'lucide-react';
import { cn } from '../../utils';
import type { DropdownProps, DropdownOption, DropdownOptionGroup } from './Dropdown.types';

/**
 * Simplified Dropdown component with essential functionality
 * 
 * @example
 * ```tsx
 * <Dropdown 
 *   variant="select"
 *   options={options}
 *   value={value}
 *   onChange={setValue}
 *   placeholder="Choose an option"
 * />
 * ```
 */
export const Dropdown = ({
  variant = 'select',
  options = [],
  value,
  placeholder = 'Select...',
  label,
  onChange,
  className,
  searchable = false,
  renderOption,
  loadOptions,
  disabled = false,
  error
}: DropdownProps) => {
  const dropdownId = useId();
  const labelId = useId();
  const listboxId = useId();
  
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [asyncOptions, setAsyncOptions] = useState<DropdownOption[]>([]);
  const [loading, setLoading] = useState(false);
  
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isMulti = variant === 'multiselect';
  const isSearchable = variant === 'searchable' || searchable;
  const isAsync = Boolean(loadOptions);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Load async options
  useEffect(() => {
    if (isAsync && open && loadOptions) {
      setLoading(true);
      loadOptions(searchTerm)
        .then(setAsyncOptions)
        .catch(() => setAsyncOptions([]))
        .finally(() => setLoading(false));
    }
  }, [isAsync, open, searchTerm, loadOptions]);
  
  // Get current options (static or async)
  const currentOptions = isAsync ? asyncOptions : options;
  
  // Normalize options to flat array
  const flatOptions: DropdownOption[] = currentOptions.flatMap(option => 
    'options' in option ? option.options : [option as DropdownOption]
  );
  
  // Filter options if searchable
  const filteredOptions = isSearchable && searchTerm
    ? flatOptions.filter(option => 
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : flatOptions;
  
  // Get selected option(s)
  const selectedOptions = isMulti 
    ? flatOptions.filter(option => 
        Array.isArray(value) && value.includes(option.value)
      )
    : flatOptions.find(option => option.value === value);
  
  // Handle option selection
  const handleSelect = (option: DropdownOption) => {
    if (option.disabled) return;
    
    if (isMulti) {
      const currentValues = Array.isArray(value) ? value : [];
      const newValues = currentValues.includes(option.value)
        ? currentValues.filter(v => v !== option.value)
        : [...currentValues, option.value];
      onChange?.(newValues);
    } else {
      onChange?.(option.value);
      setOpen(false);
    }
  };
  
  // Check if option is selected
  const isSelected = (option: DropdownOption) => {
    return isMulti 
      ? Array.isArray(value) && value.includes(option.value)
      : value === option.value;
  };
  
  // Get display value
  const getDisplayValue = () => {
    if (isMulti) {
      const selected = Array.isArray(selectedOptions) ? selectedOptions : [];
      return selected.length > 0 
        ? `${selected.length} selected`
        : placeholder;
    }
    
    const selected = selectedOptions as DropdownOption | undefined;
    return selected ? selected.label : placeholder;
  };
  
  // Base styles
  const triggerClasses = cn(
    'w-full bg-white border border-gray-300 rounded-lg px-3 py-2',
    'text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
    'flex items-center justify-between cursor-pointer',
    'transition-colors duration-200',
    disabled && 'bg-gray-100 cursor-not-allowed opacity-60',
    error && 'border-red-500 focus:ring-red-500',
    'min-h-11' // 44px touch target
  );
  
  const listboxClasses = cn(
    'absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg',
    'max-h-60 overflow-auto focus:outline-none'
  );
  
  const optionClasses = (option: DropdownOption, selected: boolean) => cn(
    'px-3 py-2 cursor-pointer flex items-center justify-between',
    'text-sm hover:bg-gray-50',
    selected && 'bg-primary-50 text-primary-700',
    option.disabled && 'opacity-50 cursor-not-allowed'
  );
  
  return (
    <div className={cn('relative w-full', className)} ref={wrapperRef}>
      {/* Label */}
      {label && (
        <label 
          id={labelId}
          htmlFor={dropdownId}
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      
      {/* Trigger */}
      <button
        id={dropdownId}
        type="button"
        className={triggerClasses}
        onClick={() => !disabled && setOpen(!open)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={label ? labelId : undefined}
        aria-controls={listboxId}
      >
        <span className={cn(!selectedOptions && 'text-gray-500')}>
          {getDisplayValue()}
        </span>
        <ChevronDown 
          className={cn(
            'w-4 h-4 text-gray-400 transition-transform duration-200',
            open && 'rotate-180'
          )} 
        />
      </button>
      
      {/* Error message */}
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      
      {/* Dropdown */}
      {open && (
        <div className={listboxClasses}>
          {/* Search input */}
          {isSearchable && (
            <div className="p-2 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          )}
          
          {/* Options list */}
          <ul
            id={listboxId}
            role="listbox"
            aria-multiselectable={isMulti}
            aria-labelledby={label ? labelId : undefined}
          >
            {loading && (
              <li className="px-3 py-2 text-sm text-gray-500 flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 border-t-primary-500 rounded-full animate-spin" />
                Loading...
              </li>
            )}
            
            {!loading && filteredOptions.length === 0 && (
              <li className="px-3 py-2 text-sm text-gray-500">
                No options found
              </li>
            )}
            
            {!loading && filteredOptions.map((option) => {
              const selected = isSelected(option);
              
              return (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={selected}
                  className={optionClasses(option, selected)}
                  onClick={() => handleSelect(option)}
                >
                  <div className="flex items-center gap-2">
                    {option.icon && (
                      <span className="w-4 h-4">{option.icon}</span>
                    )}
                    <span>
                      {renderOption ? renderOption(option, selected) : option.label}
                    </span>
                  </div>
                  
                  {selected && <Check className="w-4 h-4 text-primary-600" />}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};