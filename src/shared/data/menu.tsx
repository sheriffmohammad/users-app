import { menu } from "../classes/menu";

// Menu for guest users

export const guestMenu: menu[] = [
    {
        englishTitle: 'Register',
        arabicTitle:'انشاء حساب',
        src: 'register',
        gap: true,
        path: '/register',
    },
    {
        englishTitle: 'Log-In',
        arabicTitle:'تسجيل الدخول',
        src: 'log-in',
        path: '/log-in',
    }
];

// Menu for logged-in user

export const userMenu: menu[] = [
    {
        englishTitle: 'Home',
        arabicTitle:'الرئيسية',
        src: 'home',
        gap: true,
        path: '/',
    }
];
