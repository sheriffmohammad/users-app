import React from 'react'
import Sidebar from './Sidebar';
import './Layout.scss'
import Menu from '../data/Menu'

type Props = {
    children: JSX.Element,
};

const Layout = ({ children }: Props) => {


    return (
        <div className='layout'>

            {/* Side bar */}
            <Sidebar appName='Users App' appLogo='user' menu={Menu}></Sidebar>

            {/* Main Content */}
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout