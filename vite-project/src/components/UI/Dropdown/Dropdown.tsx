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
            return (price / 720).toFixed(2); 
        }
        return price;
    };

    return (
        <div className="dropdown">
            {placeholder && (
                <div className="dropdown__placeholder">
                    <label className="dropdown__placeholder-label">{placeholder}</label>
                    {help && <img 
                        src={questionIcon} 
                        alt="question-icon" 
                        className="dropdown__placeholder-icon"
                        onClick={toggleHelp} 
                    />}
                    {isHelpVisible && helpText && (
                        <div className={`dropdown__help ${isHelpVisible ? 'dropdown__help_visible' : ''}`}>
                            {helpText}
                        </div>
                    )}
                </div>
            )}
            {icon && (
                <img src={icon} alt="dropdown-icon" className='dropdown__icon' />
            )}
            <div
                className={`dropdown__container ${isOpen ? 'dropdown__container_active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className='dropdown__container-value'>{selectedLabel}</span>
                <span className='dropdown__container-arrow'>
                    {isOpen ? <img src={arrowUp} alt="arrow-up" /> : <img src={arrowDown} alt="arrow-down" />}
                </span>
            </div>
            {isOpen && (
                <ul className="dropdown__options">
                    {options.map(option => (
                        <li
                            key={option.value}
                            className={`dropdown__options-item ${option.value === dropdownValue ? 'dropdown__options-item_selected' : ''}`}
                            onClick={() => handleSelect(option.value)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
            {selectedPrice !== undefined && (
                <div className="dropdown__price">
                    <span>{monthToHourPrice(selectedPrice, period).toLocaleString('ru-RU')}</span>
                    <span>{period === 'inHour' ? ' тг/час' : ' тг/мес'}</span>
                </div>
            )}
        </div>
    );
}
