import { useState } from 'react';
import { Select } from '../../components/UI/Select/Select'
import './Form.scss'

export function Form() {
    const [selectPeriod, setSelectPeriod] = useState('hour');


    const periods = [
        { value: "hour", label: 'в час'},
        { value: "month", label: 'в месяц'},
    ];

    return (
        <div className="Form">
            <div className='head'>
                <span className='title'>Ресурсы вашего облака Virtuozzo PaaS</span>
                <Select
                    options={periods}
                    defaultValue={selectPeriod}
                    onChange={setSelectPeriod}
                />
            </div>

        </div>
    )
}