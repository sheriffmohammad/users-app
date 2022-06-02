import React from 'react'

type Props = {
    pageTitle: string,
    children: JSX.Element,
};

const Layout = ({ pageTitle, children }: Props) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <nav>
                <ul>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}
export default Layout