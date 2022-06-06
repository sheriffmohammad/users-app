// NPM dependencies
import React from 'react';

// Application dependencies
import {
    useTranslate,
    useTranslateDispatch,
    useTranslateState
} from '../../translate';

function LanguageSwitcher() {
    const { language } = useTranslateState(); // we get the current language
    const i18n = useTranslate(); // we get the utils functions
    const { t, getLanguages } = i18n;
    const dispatch = useTranslateDispatch();

    const items = getLanguages().map((key: any) => {
        return key !== language ? (
            <button className='language-switcher'
                key={key}
                onClick={() => {
                    dispatch({ type: 'CHANGE_LANGUAGE', language: key });
                }}
            >
                {t(`LanguageSwitcher.${key}`)}
            </button>
        ) : (
            ''
        );
    });

    return (
        <span className='center-h'>{items}</span>);
}

export default LanguageSwitcher;