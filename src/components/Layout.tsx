import React, { useState } from 'react'
import Sidebar from './Sidebar';
import './Layout.scss'
import menu from '../data/menu'

type Props = {
    children: JSX.Element,
};

const Layout = ({ children }: Props) => {

    const [menuData, setMenuData] = useState(menu);

    return (
        <div className='layout'>

            {/* Side bar */}
            <Sidebar appName='Users App' appLogo='user' menu={menuData}></Sidebar>

            {/* Main Content */}
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout