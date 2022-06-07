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

    const i18n = useTranslate();
    const { t } = i18n;

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
        <div className="h-full">

            {/* Conditionally render header based on preference */}
            {addHeader == true &&
                <div className="page-header text-black">
                    {getCurrentLanguage() === 'en' && <h1>{pageTitle} {t('Application.page')}</h1>}
                    {getCurrentLanguage() === 'ar' && <h1>{t('Application.page')} {pageTitle}</h1>}
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