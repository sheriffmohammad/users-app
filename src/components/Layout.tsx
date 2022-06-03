import React from 'react'
import Sidebar from './Sidebar';
import './Layout.scss'

type Props = {
    children: JSX.Element,
};

const Layout = ({ children }: Props) => {

    const Menu = [
        {
            title: 'Home',
            src: 'icon-home',
            gap: true,
            path: '/'
        },
        {
            title: 'Register',
            src: 'icon-register',
            gap: true,
            path: '/register'
        },
        {
            title: 'Log-In',
            src: 'icon-log-in',
            path: '/log-in'
        }
    ]

    return (
        <div className='layout'>

            {/* Side bar */}
            <Sidebar appName='Users App' appLogo='icon-user' menu={Menu}></Sidebar>

            {/* Main Content */}
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout