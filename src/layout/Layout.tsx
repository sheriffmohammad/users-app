import React, { useState } from 'react'
import Sidebar from './Sidebar';
import './Layout.scss'
import { menu } from '../shared/classes/menu';

type Props = {
    children: JSX.Element,
    menu: menu[],
};


const Layout = ({ children, menu }: Props) => {

    return (
        <div className='layout'>

            {/* Side bar */}
            <Sidebar appName='Users App' appLogo='user' menu={menu}></Sidebar>

            {/* Main Content */}
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout