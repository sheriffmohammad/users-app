import { useEffect } from "react";
import './Page.scss';

type Props = {
    pageTitle: string,
    children: JSX.Element,
};

const Page = ({ pageTitle, children }: Props) => {
    useEffect(() => {
        document.title = "Users App - " + pageTitle || "";
    }, [pageTitle]);
    return (
        <div>
            <div className="page-header text-black">

                <h1>{pageTitle} Page</h1>
            </div>
            <div className="page-content">

                {children}
            </div>
        </div>
    )
};

export default Page;