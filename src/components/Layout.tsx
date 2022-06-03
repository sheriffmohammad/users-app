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
            gap: true
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
        <div className='layout'>

            <Sidebar appName='Users App' menu={Menu}></Sidebar>

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