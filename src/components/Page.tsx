import { useEffect } from "react";

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
            <h1>{pageTitle} Page</h1>
            {children}
        </div>
    )
};

export default Page;