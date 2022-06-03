import React from 'react'
import Sidebar from './Sidebar';
import './Layout.scss'

type Props = {
    pageTitle: string,
    children: JSX.Element,
};

const Layout = ({ pageTitle, children }: Props) => {

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

            <Sidebar appName='Users App' appLogo='icon-user' menu={Menu}></Sidebar>

            {/* Main Content */}
            <main>

                {/* Dynamic Page Title */}
                <title>{pageTitle}</title>

                <h1>{pageTitle}</h1>

                {children}

            </main>
        </div>
    )
}

export default Layout