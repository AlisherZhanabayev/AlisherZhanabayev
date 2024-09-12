import './Stepper.scss'
import questionIcon from '../../../assets/images/form-icons/question-icon.svg'
import minusIcon from '../../../assets/images/form-icons/minus-icon.svg'
import plusIcon from '../../../assets/images/form-icons/plus-icon.svg'
import { useState } from 'react';

interface Props {
    defaultValue: number;
    onChange: (value: number) => void;
    placeholder: string;
    help?: boolean;
    helpText?: string;
    icon: string;
    period: string; 
    price: number;
    unit: string;
}

export function Stepper(props: Props) {
    const { 
        defaultValue, 
        onChange, 
        price, 
        period, 
        placeholder, 
        help, 
        helpText, 
        icon, 
        unit 
    } = props;
    
    const [isHelpVisible, setIsHelpVisible] = useState(false);
    const [stepperValue, setStepperValue] = useState(defaultValue);

    const toggleHelp = () => {
        setIsHelpVisible(true);
        setTimeout(() => {
            setIsHelpVisible(false);
        }, 2000); 
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value) || 0;
        if (newValue >= 0 && newValue <= 999) {
            setStepperValue(newValue);
            onChange(newValue);
        }
    };

    const handleDecrease = () => {
        if (stepperValue > 0) {
            const newValue = stepperValue - 1;
            setStepperValue(newValue);
            onChange(newValue); 
        }
    };

    const handleIncrease = () => {
        const newValue = stepperValue + 1;
        setStepperValue(newValue);
        onChange(newValue); 
    };

    const monthToHourPrice = (price: number, period: string) => {
        if (period === 'inHour') {
            return (price / 720).toFixed(2); 
        }
        return price;
    };

    return (
        <div className='stepper'>
            {placeholder && (
                <div className="stepper__placeholder">
                    <label className="stepper__placeholder-label">{placeholder}</label>
                    {help && <img 
                        src={questionIcon} 
                        alt="question-icon" 
                        className="stepper__placeholder-icon"
                        onClick={toggleHelp} 
                    />}
                    {isHelpVisible && helpText && (
                        <div className={`stepper__help ${isHelpVisible ? 'stepper__help_visible' : ''}`}>
                            {helpText}
                        </div>
                    )}
                </div>
            )}
            {icon && (
                <img src={icon} alt="stepper-icon" className='stepper__icon' />
            )}
            <div className='stepper__container'>
                 <div className='stepper__container-left'>
                    <img src={minusIcon} alt="minus-icon" onClick={handleDecrease} className="stepper__control" />
                    <input 
                        type="number" 
                        className="stepper__input"  
                        value={stepperValue} 
                        onChange={handleInputChange} 
                    />
                </div>
                <img src={plusIcon} alt="plus-icon" onClick={handleIncrease} className="stepper__control" />
            </div>
            {price !== undefined && (
                <div className="stepper__price">
                    <span>{monthToHourPrice(price, period).toLocaleString('ru-RU')}</span>
                    <span>
                        {period === 'inHour' ? ` тг за ${unit}/час` : ` тг за ${unit}/мес`}
                    </span>
                </div>
            )}
        </div>
    )
}
