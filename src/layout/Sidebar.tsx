import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.scss'
import { menu } from '../shared/classes/menu';
import { useTranslate } from '../translation';
import LanguageSwitcher from '../shared/components/LanguageSwitcher';
import { getCurrentLanguage } from '../translation/translate';

type Props = {
    appName: string,
    appLogo: string,
    menu: menu[],
};

const Sidebar = ({ appName, appLogo, menu }: Props) => {

    // State for toggling side bar

    const [open, setOpen] = useState(false);

    return (

        <div className={'side-bar ' + `${open ? 'open' : 'closed'}`}>

            {/* Toggle arrow */}
            <img onClick={() => setOpen(!open)} src="/assets/icons/arrow.png" alt='' className={`arrow ${!open && 'rotate-180'}`} />

            {/* Sidebar header */}
            <div className='side-bar-header'>

                {/* App logo */}
                <img className={`logo ${!open && 'logo-click'}`} src={`/assets/icons/${appLogo}.png`} alt='' />

                {/* App name */}
                <h2 className={`text-white ${!open && 'hidden'} `}>{appName}</h2>
            </div>

            {/* English / Arabic button */}
            <div className='menu-item'>
                <LanguageSwitcher></LanguageSwitcher>
            </div>

            {/* Navigation menu*/}
            <ul>
                {menu.map((item, index) => (
                    <Link key={index} to={`${item.path}`}>

                        {/* Navigation item*/}
                        <li className={`menu-item ${item.gap ? 'menu-item-gap' : ''}`}>

                            {/* Logo*/}
                            <img className={`menu-icon ${!open && 'center-h'}`} src={`/assets/icons/${item.src}.png`} alt='' />

                            {/* Title*/}
                            <span className={`${!open && 'hidden'}`}>{getCurrentLanguage() === 'ar' ? item.arabicTitle : item.englishTitle}</span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div >
    )
}

export default Sidebar

