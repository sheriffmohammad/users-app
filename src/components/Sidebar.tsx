import React, { Component, useState } from 'react'
import './Sidebar.scss'

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const Menu = [
        {
            title: 'Home',
            src: 'icon-home',
            gap:true
        },
        {
            title: 'Register',
            src: 'icon-register',
            gap: true
        },
        {
            title: 'Log-In',
            src: 'icon-log-in'
        }
    ]
    return (
        <div className={'side-bar ' + `${open ? 'open' : 'closed'}`}>

            {/* Arrow */}
            <img onClick={() => setOpen(!open)} src="/assets/images/icon-arrow.png" className={`arrow bg-quaternary ${!open && 'rotate-180'}`} />

            {/* Header */}
            <div className='side-bar-header'>

                {/* Logo */}
                <img className={`logo ${!open && 'center-absolute'}`} src="assets/images/icon-user.png" />

                {/* Title */}
                <h2 className={`text-white header-title ${!open && 'scale-0'} `}>Users App</h2>
            </div>

            {/* Navigation menu*/}
            <ul>
                {Menu.map((item, index) => (
                    <li className={`menu-item text-tertiary ${item.gap ? 'menu-item-gap' : ''}`} key={index}>
                        <img className={`menu-icon ${!open && 'center-h'}`} src={`/assets/images/${item.src}.png`} />
                        <span className={`${!open && 'hidden'}`}>{item.title}</span>
                    </li>
                ))}
            </ul>
        </div >
    )
}

