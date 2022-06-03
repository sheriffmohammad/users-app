import React, { Component, useState } from 'react'
import './Sidebar.scss'

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    return (
        <div>
            <div className={'side-bar ' + `${open ? 'open' : 'closed'}`}>

                {/* Arrow */}
                <img onClick={() => setOpen(!open)} src="/assets/images/icon-arrow.png" className={`arrow bg-quaternary ${!open && 'rotate-180'}`} />
                <div className='side-bar-header'>
                    <img className="icon" src="assets/images/icon-user.png" />
                    <h2 className='text-quaternary'>Users App</h2>
                </div>
            </div>
        </div >
    )
}

