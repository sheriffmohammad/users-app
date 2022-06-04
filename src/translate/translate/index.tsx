
let _currentLanguage: string = '';
let _fallbackLanguage: string = '';
let _languages: any[] = [];
let _translations: any = {};

export const getCurrentLanguage = () => {
    return _currentLanguage;
};

export const setCurrentLanguage = (currentLanguage: string) => {
    _currentLanguage = currentLanguage;
};

export const getFallbackLanguage = () => {
    return _fallbackLanguage;
};

export const setFallbackLanguage = (fallbackLanguage: string) => {
    _fallbackLanguage = fallbackLanguage;
};

export const getLanguages = () => {
    return _languages;
};

export const setLanguages = (languages: any[]) => {
    _languages = languages;

    _languages.forEach((language: any) => {
        const loadedLanguage = require(`../languages/${language}.json`);
        _translations[language] = loadedLanguage;
    });
};

export const getTranslations = () => {
    return _translations;
};

export const setTranslations = (translations: any) => {
    _translations = translations;
};

export const t = (label: any) => {
    return _translations[_currentLanguage] &&
        _translations[_currentLanguage][label]
        ? _translations[_currentLanguage][label]
        : _translations[_fallbackLanguage] &&
            _translations[_fallbackLanguage][label]
            ? _translations[_fallbackLanguage][label]
            : label;
};