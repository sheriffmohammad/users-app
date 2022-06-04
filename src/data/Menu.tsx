
import { menu } from "../classes/menu";

// Menu for guest users

export const guestMenu: menu[] = [
    {
        title: 'Home',
        src: 'home',
        gap: true,
        path: '/',
    },
    {
        title: 'Register',
        src: 'register',
        gap: true,
        path: '/register',
    },
    {
        title: 'Log-In',
        src: 'log-in',
        path: '/log-in',
    }
];

// Menu for logged-in user

export const userMenu: menu[] = [
    {
        title: 'Home',
        src: 'home',
        gap: true,
        path: '/',
    }
];
