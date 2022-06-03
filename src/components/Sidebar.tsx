import React, { Component, useState } from 'react'
import './Sidebar.scss'

type Menu = {
    title: string,
    src: string,
    gap?: boolean
};

type Props = {
    appName: string,
    appLogo: string,
    menu: Menu[],
};

const Sidebar = ({ appName, appLogo, menu }: Props) => {
    const [open, setOpen] = useState(true);

    return (

        <div className={'side-bar ' + `${open ? 'open' : 'closed'}`}>

            {/* Arrow */}
            <img onClick={() => setOpen(!open)} src="/assets/images/icon-arrow.png" className={`arrow bg-quaternary ${!open && 'rotate-180'}`} />

            {/* Header */}
            <div className='side-bar-header'>

                {/* App Logo */}
                <img className={`logo ${!open && 'center-absolute'}`} src={`/assets/images/${appLogo}.png`} />

                {/* Title */}
                <h2 className={`text-white header-title ${!open && 'scale-0'} `}>{appName}</h2>
            </div>

            {/* Navigation menu*/}
            <ul>
                {menu.map((item, index) => (
                    <li className={`menu-item text-tertiary ${item.gap ? 'menu-item-gap' : ''}`} key={index}>
                        <img className={`menu-icon ${!open && 'center-h'}`} src={`/assets/images/${item.src}.png`} />
                        <span className={`${!open && 'hidden'}`}>{item.title}</span>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default Sidebar

