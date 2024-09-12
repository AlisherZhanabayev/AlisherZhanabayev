import './Header.scss';
import psLogo from '../../assets/images/header-icons/ps-logo.svg';
import bellIcon from '../../assets/images/header-icons/bell-icon.svg';
import tengeIcon from '../../assets/images/header-icons/tenge-icon.svg';
import avatar from '../../assets/images/header-icons/avatar.svg';
import { useState } from 'react';
import openIcon from '../../assets/images/header-icons/open-menu.svg';
import closeIcon from '../../assets/images/header-icons/close-menu.svg';
import { Sidebar } from '../Sidebar/Sidebar';

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
            <header className='header'>
                <div className='header__burger-menu' onClick={handleBurgerClick}>
                    <img src={!isSidebarOpen ? openIcon : closeIcon} alt="burger-menu" />
                </div>
                <div className='header__logo'>
                    <img className='header__logo-icon' src={psLogo} alt="ps-logo"/>
                    <span className='header__logo-text'>Консоль управления</span>
                </div>
                <div className='header__account'>
                    <div className='header__notifications'>
                        <img className='header__notifications-icon' src={bellIcon} alt='bell-icon' />
                    </div>
                    <div className='header__balance'>
                        <div className='header__balance-logo'>
                            <img className='header__balance-logo-icon' src={tengeIcon} alt='tenge-icon' />
                        </div>
                        <div className='header__balance-info'>
                            <span className='header__balance-id'>ID123456</span>
                            <span className='header__balance-sum'>0 тг</span>
                        </div>
                    </div>
                    <div className='header__user'>
                        <button className='header__avatar' onClick={handleAvatarClick}>
                            <img src={avatar} alt='avatar' />
                            {isMenuOpen && (
                                <div className='header__account-menu'>
                                    <span>Имя Фамилия</span>
                                    <span>ID123456</span>
                                    <span>Баланс: 0 тг</span>
                                </div>
                            )}
                        </button>
                        <div className='header__user-info'>
                            <span className='header__user-firstname'>Имя</span>
                            <span className='header__user-secondname'>Фамилия</span>
                        </div>
                    </div>
                </div>
            </header>
            <Sidebar isOpen={isSidebarOpen} />
        </>
    );
}