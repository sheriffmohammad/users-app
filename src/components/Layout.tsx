import React, { useState } from 'react'
import Sidebar from './Sidebar';
import './Layout.scss'

type Menu = {
    title: string,
    src: string,
    gap?: boolean,
    path: string,
    visible: boolean
};

type Props = {
    children: JSX.Element,
    menu: Menu[],
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