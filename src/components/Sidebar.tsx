import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.scss'
import { menu } from '../classes/menu';

type Props = {
    appName: string,
    appLogo: string,
    menu: menu[],
};

const Sidebar = ({ appName, appLogo, menu }: Props) => {
    const [open, setOpen] = useState(false);

    return (

        <div className={'side-bar ' + `${open ? 'open' : 'closed'}`}>

            {/* Arrow */}
            <img onClick={() => setOpen(!open)} src="/assets/icons/arrow.png" alt='' className={`arrow bg-quaternary ${!open && 'rotate-180'}`} />

            {/* Header */}
            <div className='side-bar-header'>

                {/* App Logo */}
                <img className={`logo ${!open && 'center-absolute'}`} src={`/assets/icons/${appLogo}.png`} alt='' />

                {/* Title */}
                <h2 className={`text-white header-title ${!open && 'scale-0'} `}>{appName}</h2>
            </div>

            {/* Navigation menu*/}
            <ul>
                {menu.map((item, index) => (
                    <Link key={index} to={`${item.path}`}>

                        <li className={`menu-item text-tertiary ${item.gap ? 'menu-item-gap' : ''}`}>
                            <img className={`menu-icon ${!open && 'center-h'}`} src={`/assets/icons/${item.src}.png`} alt='' />
                            <span className={`${!open && 'hidden'}`}>{item.title}</span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div >
    )
}

export default Sidebar

