import React, { Component, useState } from 'react'
import './Sidebar.scss'

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    return (
        <div>
            <div className={'side-bar ' + `${open ? 'open' : 'closed'}`}>

                {/* Arrow */}
                <img onClick={() => setOpen(!open)} src="/assets/images/side-bar-arrow.png" className={`arrow ${!open && 'rotate-180'}`} />
                Test
            </div>
        </div >
    )
}

