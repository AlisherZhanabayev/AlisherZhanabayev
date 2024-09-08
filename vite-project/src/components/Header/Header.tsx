import './Header.scss'
import psLogo from '../../assets/images/header-icons/ps-logo.svg'
import bellIcon from '../../assets/images/header-icons/bell-icon.svg'
import tengeIcon from '../../assets/images/header-icons/tenge-icon.svg'
import avatar from '../../assets/images/header-icons/avatar.svg'
import { useState } from 'react'
import openIcon from '../../assets/images/header-icons/open-menu.svg'
import closeIcon from '../../assets/images/header-icons/close-menu.svg'
import { Sidebar } from '../Sidebar/Sidebar'


export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleAvatarClick = () => {
        if(window.innerWidth < 550) {
            setIsMenuOpen(!isMenuOpen);
        }
    };

    const handleBurgerClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    
    return (
        <>
            <header>
                <div className='burger-menu'  onClick={handleBurgerClick}>
                    <img src={!isSidebarOpen ? openIcon : closeIcon} alt="burger-menu" />
                </div>
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
                        <div className='avatar' onClick={handleAvatarClick}>
                            <img src={avatar} alt='avatar' />
                            {isMenuOpen && (
                                <div className='account-menu'>
                                    <span>Имя Фамилия</span>
                                    <span>ID123456</span>
                                    <span>Баланс: 0 тг</span>
                                </div>
                            )}
                        </div>
                        <div className='user-name'>
                            <span className='firstname'>Имя</span>
                            <span className='secondname'>Фамилия</span>
                        </div>
                    </div>
                </div>
            </header>
            <Sidebar isOpen={isSidebarOpen} />
        </>
    )
}