import React from 'react'
import Sidebar from './Sidebar';
import './Layout.scss'
import menu from '../data/menu'

type Props = {
    children: JSX.Element,
};

const Layout = ({ children }: Props) => {


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