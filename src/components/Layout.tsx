import React from 'react'

type Props = {
    pageTitle: string,
    children: JSX.Element,
};

const Layout = ({ pageTitle, children }: Props) => {
    return (
        <div>

            {/* Dynamic Page Title */}
            <title>{pageTitle}</title>

            {/* Navigation */}
            <nav>
                <ul>
                </ul>
            </nav>

            {/* Main Content */}
            <main>

                <h1>{pageTitle}</h1>

                {children}

            </main>
        </div>
    )
}

export default Layout