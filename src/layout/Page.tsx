import { useEffect } from "react";
import './Page.scss';
import { Navigate, useNavigate } from 'react-router-dom';
import { useTranslate } from '../translation';
import LanguageSwitcher from '../shared/components/LanguageSwitcher';
import { getCurrentLanguage, t } from "../translation/translate";


type Props = {
    pageTitle?: string,
    children: JSX.Element,
    addHeader: boolean,
    onLogOutHandler: () => void;
};

const Page = ({ pageTitle, children, addHeader, onLogOutHandler }: Props) => {

    // Translation

    const i18n = useTranslate();
    const { t } = i18n;

    // Navigation

    const navigate = useNavigate();

    // Current user info

    let user = localStorage.getItem('user');


    useEffect(() => {

        // Change the document's title when a new page is loaded

        document.title = "Users App - " + pageTitle || "";
    }, [pageTitle]);


    const logOut = () => {

        // Remove user info from local storage 

        localStorage.removeItem('user');

        // Call the log-out handler to change to guest menu

        onLogOutHandler();

        // Go to the log-in page

        navigate('/log-in');
    };


    return (
        <div className="h-full">

            {/* Conditionally render header based on preference */}
            {addHeader == true &&
                <div className="page-header text-black">

                    {/* Page title for English language */}
                    {getCurrentLanguage() === 'en' && <h1>{pageTitle} {t('Application.page')}</h1>}

                    {/* Page title for Arabic language */}
                    {getCurrentLanguage() === 'ar' && <h1>{t('Application.page')} {pageTitle}</h1>}

                    {/* Log-out button (only if user is logged-in) */}
                    {user &&
                        <img onClick={logOut} className="icon" src="assets/icons/log-out.png" alt="" />
                    }
                </div>}

            {/* Page content */}
            <div className="page-content">
                {children}
            </div>
        </div>
    )
};

export default Page;