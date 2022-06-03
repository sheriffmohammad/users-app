import { useEffect } from "react";
import './Page.scss';

type Props = {
    pageTitle?: string,
    children: JSX.Element,
    addHeader: boolean
};

const Page = ({ pageTitle, children, addHeader }: Props) => {
    useEffect(() => {
        document.title = "Users App - " + pageTitle || "";
    }, [pageTitle]);
    return (
        <div className="height-full">

            {/* Conditionally render header based on preference */}
            {addHeader == true &&
                <div className="page-header text-black">

                    <h1>{pageTitle} Page</h1>
                </div>}

            <div className="page-content">

                {children}
            </div>
        </div>
    )
};

export default Page;