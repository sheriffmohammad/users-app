import React, { useState } from 'react'
import Sidebar from './Sidebar';
import './Layout.scss'
import { menu } from '../shared/classes/menu';
import { useTranslate } from '../translation';

type Props = {
    children: JSX.Element,
    menu: menu[],
};

const Layout = ({ children, menu }: Props) => {

    // Translation

    const i18n = useTranslate();
    const { t } = i18n;

    return (
        <div className='layout'>

            {/* Side bar */}
            <Sidebar appName={t('Application.title')} appLogo='user' menu={menu}></Sidebar>

            {/* Main Content */}
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout