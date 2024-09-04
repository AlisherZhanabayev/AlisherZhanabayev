import './Sidebar.scss'
import menuIcon from '../../assets/images/nav-icons/menu-icon.svg'
import helpIcon from '../../assets/images/nav-icons/help-icon.svg'
import nightIcon from '../../assets/images/nav-icons/night-icon.svg'
import languageIcon from '../../assets/images/nav-icons/language-icon.svg'
import pinIcon from '../../assets/images/nav-icons/pin-icon.svg'
import { useState } from 'react'

export function Sidebar() {
    const [active, setActive] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActive(index);
    };
    return (
        <nav>
            <ul>
                <div className="top">
                    <li className={active === 0 ? 'active' : ''} onClick={()=>handleClick(0)}>
                        <img src={menuIcon} alt="menu-icon" />
                    </li>
                    <li className={active === 1 ? 'active' : ''} onClick={()=>handleClick(1)}>
                        <img src={helpIcon} alt="help-icon" />
                    </li>
                </div>

                <div className="middle">
                    <li className={active === 2 ? 'active' : ''} onClick={()=>handleClick(2)}>
                        <img src={helpIcon} alt="help-icon" />
                    </li>
                </div>

                <div className="bottom">
                    <li className={active === 3 ? 'active' : ''} onClick={()=>handleClick(3)}>
                        <img src={nightIcon} alt="night-icon" />
                    </li>
                    <li className={active === 4 ? 'active' : ''} onClick={()=>handleClick(4)}>
                        <img src={languageIcon} alt="language-icon" />
                    </li>
                    <li className={active === 5 ? 'active' : ''} onClick={()=>handleClick(5)}>
                        <img src={pinIcon} alt="pin-icon" />
                    </li>
                </div>
            </ul>
        </nav>
    )
}