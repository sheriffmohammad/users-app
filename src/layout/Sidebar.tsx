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

    const i18n = useTranslate();
    const { t } = i18n;

    const [open, setOpen] = useState(false);

    return (

        <div className={'side-bar ' + `${open ? 'open' : 'closed'}`}>

            {/* Arrow */}
            <img onClick={() => setOpen(!open)} src="/assets/icons/arrow.png" alt='' className={`arrow ${!open && 'rotate-180'}`} />

            {/* Header */}
            <div className='side-bar-header'>

                {/* App Logo */}
                <img className={`logo ${!open && 'logo-click'}`} src={`/assets/icons/${appLogo}.png`} alt='' />

                {/* Title */}
                <h2 className={`text-white ${!open && 'hidden'} `}>{t('Application.title')}</h2>
            </div>

            <div className='menu-item'>
                <LanguageSwitcher></LanguageSwitcher>
            </div>

            {/* Navigation menu*/}
            <ul>
                {menu.map((item, index) => (
                    <Link key={index} to={`${item.path}`}>

                        <li className={`menu-item ${item.gap ? 'menu-item-gap' : ''}`}>
                            <img className={`menu-icon ${!open && 'center-h'}`} src={`/assets/icons/${item.src}.png`} alt='' />
                            <span className={`${!open && 'hidden'}`}>{getCurrentLanguage() === 'ar' ? item.arabicTitle : item.englishTitle}</span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div >
    )
}

export default Sidebar

