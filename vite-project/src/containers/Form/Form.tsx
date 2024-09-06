import { useState } from 'react';
import { Select } from '../../components/UI/Select/Select'
import { Stepper } from '../../components/UI/Stepper/Stepper';
import { Dropdown } from '../../components/UI/Dropdown/Dropdown';
import './Form.scss'
import routerIcon from '../../assets/images/form-icons/router-icon.svg'
import publicNetworkIcon from '../../assets/images/form-icons/public-network-icon.svg'
import processorCoresIcon from '../../assets/images/form-icons/processor-core-icon.svg'
import archiveDiskIcon from '../../assets/images/form-icons/archive-disk-icon.svg'
import ramIcon from '../../assets/images/form-icons/ram-icon.svg'
import fastDiskLogo from '../../assets/images/form-icons/fast-disk-logo.svg'
import routerIpAddressIcon from '../../assets/images/form-icons/router-ip-address-icon.svg'

export function Form() {
    const [selectPeriod, setSelectPeriod] = useState('inMonth');
    const [selectRouter, setSelectRouter] = useState('compact')
    const [selectPublicNetwork, setSelectPublicNetwork] = useState('notOrder')
    const [selectProcessorCores, setSelectProcessorCores] = useState(0)
    const [selectArchiveDisk, setSelectArchiveDisk] = useState(0)
    const [selectRam, setSelectRam] = useState(0)
    const [selectFastDisk, setSelectFastDisk] = useState(0)
    const [selectRouterIpAddress, setSelectRouterIpAddress] = useState(0)

    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const processorCoresPrice = 1900;
    const archiveDiskPrice = 10;
    const ramPrice = 5200
    const fastDiskPrice = 160
    const routerIpAddressPrice = 1000

    const periodOptions = [
        { value: "inHour", label: 'в час'},
        { value: "inMonth", label: 'в месяц'},
    ];

    const routerOptions = [
        { value: 'compact', label: 'Compact — 1 vCPU, 512 MB RAM', price: 3000 },
        { value: 'large', label: 'Large — 2 vCPU, 1 GB RAM', price: 6000 },
    ];

    const publicNetworkOptions = [
        { value: 'order', label: 'Заказать', price: 2000 },
        { value: 'notOrder', label: 'Не заказывать', price: 0 },
    ];

    const calculatePrice = (price: number, period: string) => {
        if (period === 'inHour') {
            return price / 720;
        }
        return price; 
    };

    const selectedRouter = routerOptions.find(option => option.value === selectRouter)?.price || 0;
    const selectedPublicNetwork = publicNetworkOptions.find(option => option.value === selectPublicNetwork)?.price || 0;

    const totalPrice = Math.round(
        calculatePrice(selectedRouter, selectPeriod) + 
        calculatePrice(selectedPublicNetwork, selectPeriod) + 
        calculatePrice(selectProcessorCores * processorCoresPrice, selectPeriod) +
        calculatePrice(selectArchiveDisk * archiveDiskPrice, selectPeriod) +
        calculatePrice(selectRam * ramPrice, selectPeriod) +
        calculatePrice(selectFastDisk * fastDiskPrice, selectPeriod) +
        calculatePrice(selectRouterIpAddress * routerIpAddressPrice, selectPeriod) 
    );

    const handleOrderClick = () => {
        setModalVisible(true); 
        setTimeout(() => {
            setModalVisible(false); 
        }, 2000);
    };


    return (
        <div className="form-container">
            <div className='form-header'>
                <span className='form-title'>Ресурсы вашего облака Virtuozzo PaaS</span>
                <Select
                    options={periodOptions}
                    defaultValue={selectPeriod}
                    onChange={setSelectPeriod}
                />
            </div>
            <div className='form-body'>
                <Stepper
                    defaultValue={selectProcessorCores}
                    onChange={setSelectProcessorCores}
                    placeholder='Ядра процессора'
                    icon={processorCoresIcon}
                    price={processorCoresPrice}
                    period={selectPeriod}
                    unit='ядро'
                />
                <Stepper
                    defaultValue={selectArchiveDisk}
                    onChange={setSelectArchiveDisk}
                    placeholder='Архивный диск, ГБ'
                    icon={archiveDiskIcon}
                    price={archiveDiskPrice}
                    period={selectPeriod}
                    help
                    helpText='Выберите размер архивного диска'
                    unit='ГБ'
                />
                <Dropdown
                    options={routerOptions}
                    onChange={setSelectRouter}
                    defaultValue={selectRouter}
                    placeholder='Маршрутизатор'
                    help
                    helpText='Выберите подходящий маршрутизатор'
                    icon={routerIcon}
                    period={selectPeriod}
                />
                <Stepper
                    defaultValue={selectRam}
                    onChange={setSelectRam}
                    placeholder='Оперативная память, ГБ'
                    icon={ramIcon}
                    price={ramPrice}
                    period={selectPeriod}
                    unit='ГБ'
                />
                <Dropdown
                    options={publicNetworkOptions}
                    onChange={setSelectPublicNetwork}
                    defaultValue={selectPublicNetwork}
                    placeholder='Публичная сеть'
                    icon={publicNetworkIcon}
                    period={selectPeriod}
                />
                <Stepper
                    defaultValue={selectFastDisk}
                    onChange={setSelectFastDisk}
                    placeholder='Быстрый диск NVME, ГБ'
                    icon={fastDiskLogo}
                    price={fastDiskPrice}
                    period={selectPeriod}
                    help
                    helpText='Выберите размер быстрого диска NVME'
                    unit='ГБ'
                />
                <Stepper
                    defaultValue={selectRouterIpAddress}
                    onChange={setSelectRouterIpAddress}
                    placeholder='Маршрутизируемые IP-адреса'
                    icon={routerIpAddressIcon}
                    price={routerIpAddressPrice}
                    period={selectPeriod}
                    help
                    helpText='Выберите количество маршрутизируемых IP-адресов'
                    unit='адрес'
                />
            </div>
            <div className='form-footer'>
                <button className='form-btn' onClick={handleOrderClick}>Заказать</button>
                <div className='form-footer-price'>
                    <span>за </span>
                    <span>{totalPrice} </span>
                    <span>тг/{selectPeriod === 'inHour' ? 'час' : 'мес'}</span>
                </div>
            </div>
            <div className={`modal ${modalVisible ? 'show' : ''}`}>
                <p>Добавлено в корзину</p>
            </div>
        </div>
    )
}