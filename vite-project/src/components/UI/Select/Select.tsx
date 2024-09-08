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
    <div className="select-container">
      <div className="inline-select">
        {options.map((option) => (
          <div
            key={option.value}
            className={`select-option ${option.value === selectedValue ? 'selected' : ''}`}
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}
