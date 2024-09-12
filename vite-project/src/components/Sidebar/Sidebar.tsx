import './Sidebar.scss'
import menuIcon from '../../assets/images/nav-icons/menu-icon.svg'
import helpIcon from '../../assets/images/nav-icons/help-icon.svg'
import nightIcon from '../../assets/images/nav-icons/night-icon.svg'
import languageIcon from '../../assets/images/nav-icons/language-icon.svg'
import pinIcon from '../../assets/images/nav-icons/pin-icon.svg'
import { useState } from 'react'

interface Props {
    isOpen?: boolean;
}

export function Sidebar({ isOpen }: Props) {
    const [active, setActive] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActive(index);
    };
    return (
        <nav className={`sidebar ${isOpen ? 'sidebar_open' : 'sidebar_closed'}`}>
            <ul className='sidebar__list'>
                <div className="sidebar__top">
                    <li className='sidebar__item'>
                        <button 
                            className={`sidebar__button ${active === 0 ? 'sidebar__button_active' : ''}`} 
                            onClick={() => handleClick(0)}
                        >
                            <img className='sidebar__icon' src={menuIcon} alt="menu-icon" />
                        </button>
                    </li>
                    <li className='sidebar__item'>
                        <button 
                            className={`sidebar__button ${active === 1 ? 'sidebar__button_active' : ''}`} 
                            onClick={() => handleClick(1)}
                        >
                            <img className='sidebar__icon' src={helpIcon} alt="help-icon" />
                        </button>
                    </li>
                </div>

                <div className="sidebar__middle">
                    <li className='sidebar__item'>
                        <button 
                            className={`sidebar__button ${active === 2 ? 'sidebar__button_active' : ''}`} 
                            onClick={() => handleClick(2)}
                        >
                            <img className='sidebar__icon' src={helpIcon} alt="help-icon" />
                        </button>
                    </li>
                </div>

                <div className="sidebar__bottom">
                    <li className='sidebar__item'>
                        <button 
                            className={`sidebar__button ${active === 3 ? 'sidebar__button_active' : ''}`} 
                            onClick={() => handleClick(3)}
                        >
                            <img className='sidebar__icon' src={nightIcon} alt="night-icon" />
                        </button>
                    </li>
                    <li className='sidebar__item'>
                        <button 
                            className={`sidebar__button ${active === 4 ? 'sidebar__button_active' : ''}`} 
                            onClick={() => handleClick(4)}
                        >
                            <img className='sidebar__icon' src={languageIcon} alt="language-icon" />
                        </button>
                    </li>
                    <li className='sidebar__item'>
                        <button 
                            className={`sidebar__button ${active === 5 ? 'sidebar__button_active' : ''}`} 
                            onClick={() => handleClick(5)}
                        >
                            <img className='sidebar__icon' src={pinIcon} alt="pin-icon" />
                        </button>
                    </li>
                </div>
            </ul>
        </nav>
    )
}