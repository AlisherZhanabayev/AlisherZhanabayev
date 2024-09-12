import { useState } from 'react';
import './Select.scss';

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  defaultValue: string;
  onChange: (value: string) => void;
}

export function Select({ options, defaultValue, onChange }: Props) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className="select">
        {options.map((option) => (
          <div
            key={option.value}
            className={`select__option ${option.value === selectedValue ? 'select__option_selected' : ''}`}
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
          </div>
        ))}
    </div>
  );
}
