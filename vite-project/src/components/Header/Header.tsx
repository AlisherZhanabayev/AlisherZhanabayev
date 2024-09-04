import './Header.scss'
import psLogo from '../../assets/images/ps-logo.svg'
import bellIcon from '../../assets/images/bell-icon.svg'
import tengeIcon from '../../assets/images/tenge-icon.svg'
import avatar from '../../assets/images/avatar.svg'

export function Header() {
    return (
        <header>
            <div className='logo'>
                <img src={psLogo} alt="ps-logo"/>
                <span>Консоль управления</span>
            </div>
            <div className='account'>
                <div className='notifications'>
                    <img src={bellIcon} alt='bell-icon' />
                </div>
                <div className='balance'>
                    <div className='balance-logo'>
                        <img src={tengeIcon} alt='tenge-icon' />
                    </div>
                    <div className='acc'>
                        <span className='account-id'>ID123456</span>
                        <span className='sum'>0 тг</span>
                    </div>
                </div>
                <div className='user'>
                    <div className='avatar'>
                        <img src={avatar} alt='avatar' />
                    </div>
                    <div className='user-name'>
                        <span className='firstname'>Имя</span>
                        <span className='secondname'>Фамилия</span>
                    </div>
                </div>
            </div>
        </header>
    )
}