import { useEffect } from "react";
import './Page.scss';
import { Navigate, useNavigate } from 'react-router-dom';
import LanguageSwitcher from "./LanguageSwitcher";

type Props = {
    pageTitle?: string,
    children: JSX.Element,
    addHeader: boolean,
    onLogOutHandler: () => void;
};

const Page = ({ pageTitle, children, addHeader, onLogOutHandler }: Props) => {
    useEffect(() => {
        document.title = "Users App - " + pageTitle || "";
    }, [pageTitle]);

    const navigate = useNavigate();

    let user = localStorage.getItem('user');

    const logOut = () => {
        localStorage.removeItem('user');
        onLogOutHandler();
        navigate('/log-in');
    };


    return (
        <div className="height-full">

            {/* Conditionally render header based on preference */}
            {addHeader == true &&
                <div className="page-header text-black">
                    <h1>{pageTitle} Page</h1>

                    {user &&
                        <img onClick={logOut} className="icon" src="assets/icons/log-out.png" alt="" />
                    }
                </div>}


            <div className="page-content">
                {children}
            </div>
        </div>
    )
};

export default Page;