import React from 'react'
import Sidebar from './Sidebar';
import './Layout.scss'

type Props = {
    pageTitle: string,
    children: JSX.Element,
};

const Layout = ({ pageTitle, children }: Props) => {
    return (
        <div className='layout'>

            <Sidebar></Sidebar>

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