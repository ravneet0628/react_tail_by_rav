import React, { useState, useRef, useEffect } from 'react';
import { cn, onClickOutside } from '../../utils';
import { DropdownProps, DropdownOption, DropdownOptionOrGroup } from './Dropdown.types';

export const Dropdown: React.FC<DropdownProps> = ({
  variant = 'select',
  options = [],
  value,
  placeholder = 'Select…',
  label,
  onChange,
  className,
  searchable,
  renderOption,
  loadOptions,
}) => {
  const [open, setOpen] = useState(false);
  const isMulti = variant === 'multi';
  const [selected, setSelected] = useState<Array<string | number> | string | number | undefined>(
    value ?? (isMulti ? [] : undefined)
  );
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const isSearch = variant === 'searchable' || searchable;
  const [searchTerm, setSearchTerm] = useState('');
  const isGrouped = variant === 'grouped';
  const isCustom = variant === 'custom';
  const isCombobox = variant === 'combobox';
  const isAsyncVar = variant === 'async';
  const [asyncOptions, setAsyncOptions] = useState<DropdownOptionOrGroup[] | null>(null);
  const [loading, setLoading] = useState(false);

  // state for combobox input
  const [inputValue, setInputValue] = useState<string>(typeof selected === 'string' ? selected : '');

  // close on outside click
  useEffect(() => onClickOutside(wrapperRef.current, () => setOpen(false)), []);

  // update when value prop changes
  useEffect(() => {
    if (value !== undefined) setSelected(value as any);
  }, [value]);

  // fetch options when open or searchTerm changes for async variant
  useEffect(() => {
    if (isAsyncVar && open && loadOptions) {
      setLoading(true);
      loadOptions(searchTerm).then((opts) => {
        setAsyncOptions(opts);
      }).finally(() => setLoading(false));
    }
  }, [isAsyncVar, open, searchTerm]);

  const normalizeGroups = (): Array<{ label?: string; options: DropdownOption[] }> => {
    const sourceOpts = isAsyncVar && asyncOptions ? asyncOptions : options;
    if (isGrouped) {
      return (sourceOpts as any).map((g: any) => {
        if ('options' in g) return { label: g.label, options: g.options };
        return { options: [g] };
      });
    }
    return [{ options: sourceOpts as any }];
  };

  const groups = normalizeGroups();

  const filterGroupOptions = (opts: DropdownOption[]) =>
    isSearch ? opts.filter((o) => o.label.toLowerCase().includes(searchTerm.toLowerCase())) : opts;

  const flatOptions: DropdownOption[] = groups.flatMap((g) => g.options);
  const current = !isMulti ? flatOptions.find((o) => o.value === selected) : undefined;
  const filteredGroups = groups.map((g) => ({ label: g.label, options: filterGroupOptions(g.options) }));

  const handleSelect = (opt: DropdownOption) => {
    if (isCombobox) {
      setInputValue(opt.label);
      setSelected(opt.value);
      onChange?.(opt.value);
      setOpen(false);
    } else if (isMulti) {
      const arr = Array.isArray(selected) ? [...selected] : [];
      const idx = arr.indexOf(opt.value);
      if (idx >= 0) {
        arr.splice(idx, 1);
      } else {
        arr.push(opt.value);
      }
      setSelected(arr);
      onChange?.(arr);
    } else {
      setSelected(opt.value);
      onChange?.(opt.value);
      setOpen(false);
    }
  };

  const isChecked = (val: string | number) => {
    return isMulti ? (selected as Array<string | number>).includes(val) : selected === val;
  };

  return (
    <div className={cn('relative inline-block w-64', className)} ref={wrapperRef}>
      {label && <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}
      <button
        type="button"
        className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 flex items-center justify-between"
        onClick={() => setOpen((p) => !p)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {isCombobox ? (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setSearchTerm(e.target.value);
              if (!open) setOpen(true);
            }}
            placeholder={placeholder}
            className="flex-1 bg-transparent focus:outline-none"
          />
        ) : (
          <span className={cn(isMulti && Array.isArray(selected) && selected.length > 0 ? '' : current ? '' : 'text-gray-400')}>
            {isMulti
              ? Array.isArray(selected) && selected.length > 0
                ? `${selected.length} selected`
                : placeholder
              : current
              ? current.label
              : placeholder}
          </span>
        )}
        <svg className="w-4 h-4 text-gray-500 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6"/></svg>
      </button>

      {open && (
        <div>
          {isSearch && (
            <div className="p-2 border-b border-gray-200 dark:border-gray-700">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="w-full px-2 py-1 text-sm bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          )}
          <ul
            role="listbox"
            className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none"
          >
            {loading && (
              <li className="px-3 py-2 text-sm text-gray-500">Loading...</li>
            )}
            {!loading && filteredGroups.map((grp, gi) => (
              <React.Fragment key={gi}>
                {grp.label && <li className="px-3 py-1 text-xs font-semibold text-gray-500" role="presentation">{grp.label}</li>}
                {grp.options.map((opt) => (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={isChecked(opt.value)}
                    className={cn(
                      'px-3 py-2 cursor-pointer select-none flex items-center gap-2',
                      isChecked(opt.value)
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    )}
                    onClick={() => !opt.disabled && handleSelect(opt)}
                  >
                    {isCustom && renderOption ? (
                      renderOption(opt, isChecked(opt.value))
                    ) : (
                      <>
                        {opt.icon && <span className="w-4 h-4">{opt.icon}</span>}
                        <span>{opt.label}</span>
                      </>
                    )}
                  </li>
                ))}
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};