import { useState } from 'react';
import './Dropdown.scss';
import arrowDown from '../../../assets/images/form-icons/arrow-down-icon.svg'
import arrowUp from '../../../assets/images/form-icons/arrow-up-icon.svg'
import questionIcon from '../../../assets/images/form-icons/question-icon.svg'

interface Option {
    value: string;
    label: string;
    price: number;
}

interface Props {
    options: Option[];
    defaultValue?: string;
    onChange: (value: string) => void;
    placeholder: string
    help?: boolean;
    helpText?: string;
    icon: string;
    period: string;
}

export function Dropdown({ options, defaultValue, onChange, placeholder, help, helpText, icon, period }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownValue, setDropdownValue] = useState(defaultValue);
    const [isHelpVisible, setIsHelpVisible] = useState(false);

    const handleSelect = (value: string) => {
        setDropdownValue(value);
        onChange(value);
        setIsOpen(false);
    };

    const toggleHelp = () => {
        setIsHelpVisible(true);
        setTimeout(() => {
            setIsHelpVisible(false);
        }, 2000); 
    };

    const selectedOption = options.find(option => option.value === dropdownValue);
    const selectedLabel = selectedOption?.label;
    const selectedPrice = selectedOption?.price;

    const monthToHourPrice = (price: number, period: string) => {
        if (period === 'inHour') {
            return Math.round(price / 720); 
        }
        return price;
    };

    return (
        <div className="dropdown-container">
            {placeholder && (
                <div className="dropdown-placeholder-container">
                    <label className="dropdown-placeholder">{placeholder}</label>
                    {help && <img 
                        src={questionIcon} 
                        alt="question-icon" 
                        className="question-icon"
                        onClick={toggleHelp} 
                    />}
                    {isHelpVisible && helpText && (
                        <div className={`help ${isHelpVisible ? 'visible' : ''}`}>
                            {helpText}
                        </div>
                    )}
                </div>
            )}
            {icon && (
                <img src={icon} alt="dropdown-icon" className='dropdown-icon' />
            )}
            <div
                className={`dropdown-header ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selectedLabel}</span>
                <span className='dropdown-arrow'>
                    {isOpen ? <img src={arrowUp} alt="arrow-up" /> : <img src={arrowDown} alt="arrow-down" />}
                </span>
            </div>
            {isOpen && (
                <ul className="dropdown-options">
                    {options.map(option => (
                        <li
                            key={option.value}
                            className={`dropdown-option ${option.value === dropdownValue ? 'selected' : ''}`}
                            onClick={() => handleSelect(option.value)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
            {selectedPrice !== undefined && (
                <div className="dropdown-price">
                    <span>{monthToHourPrice(selectedPrice, period)}</span>
                    <span>{period === 'inHour' ? ' тг/час' : ' тг/мес'}</span>
                </div>
            )}
        </div>
    );
}
