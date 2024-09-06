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
}

export function Stepper({defaultValue, onChange, price, period, placeholder, help, helpText, icon}: Props) {
    const [isHelpVisible, setIsHelpVisible] = useState(false);
    const [stepperValue, setStepperValue] = useState(defaultValue);

    const toggleHelp = () => {
        setIsHelpVisible(true);
        setTimeout(() => {
            setIsHelpVisible(false);
        }, 2000); 
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

    const totalPrice = defaultValue * price

    const monthToHourPrice = (price: number, period: string) => {
        if (period === 'inHour') {
            return Math.round(price / 720); 
        }
        return price;
    };


    return (
        <div className='stepper-container'>
            {placeholder && (
                <div className="stepper-placeholder-container">
                    <label className="stepper-placeholder">{placeholder}</label>
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
                <img src={icon} alt="stepper-icon" className='stepper-icon' />
            )}
            <div
                className='stepper-header'
            >
                <div className='stepper-header-left'>
                    <img src={minusIcon} alt="minus-icon" onClick={handleDecrease} className="stepper-control" />
                    <span className='stepper-value'>{stepperValue}</span>
                </div>
                <img src={plusIcon} alt="plus-icon" onClick={handleIncrease} className="stepper-control"/>
            </div>
            {price !== undefined && (
                <div className="stepper-price">
                    <span>{monthToHourPrice(totalPrice, period)}</span>
                    <span>{period === 'inHour' ? ' тг/час' : ' тг/мес'}</span>
                </div>
            )}

        </div>
    )
}