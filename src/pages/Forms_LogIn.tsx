import React, { useState } from 'react'
import './Forms.scss'
import { useGetUsersData } from '../shared/helpers/httpHelper'
import { useNavigate } from 'react-router-dom';
import { user } from '../shared/classes/user'
import { useTranslate } from '../translation';

type Props = {
    onLoginHandler: () => void; // Used to change menu after successful login
};

export default function Login({ onLoginHandler }: Props) {

    // Translation

    const i18n = useTranslate();
    const { t } = i18n;

    // Component states

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [formErrors, setFormErrors] = useState({ errors: '' });

    // Navigation

    const navigate = useNavigate();

    // Current user data (if any)

    const user = localStorage.getItem('user');

    const { data, isLoading } = useGetUsersData();

    // Check if input is valid

    const isValidInput = () => {

        // If the username or the password are empty

        if (!userName.trim() || !password.trim()) {
            return false;
        }
        else
            return true;
    }

    // On login button click

    const login = (e: any) => {

        // Prevent page reloading

        e.preventDefault();

        // If the input is valid

        if (isValidInput()) {

            // Get all users from api

            const users: user[] = data?.data;

            // Search for user by username and password

            const foundUsers = users.filter(user => user.userName === userName && user.password === password);

            // If the user is found

            if (foundUsers.length > 0) {

                // Create a user object

                const user: user = {
                    id: 0,
                    userName: userName,
                    password: password
                };

                // Store user data in local storage

                localStorage.setItem('user', JSON.stringify(user));

                // Update the menu

                onLoginHandler();

                // Navigate to home

                navigate('/');
            }

            // Else if the user is not found

            else {

                // Show incorrect username or password error

                setFormErrors({ errors: t('Application.incorrect') })
            }
        }

        // Else if the input is invalid

        else {

            // Show all fields are required error

            setFormErrors({ errors: t('Application.required') })
        }

    };

    return (
        <div >

            {/* If user isn't signed in show the sign in form */}
            {!user &&
                <div className="register">

                    {/* Sign in form */}
                    <div className="col-1">

                        {/* Form title*/}
                        <h2>{t('Application.login')}</h2>

                        <form id='form' className='flex flex-col'>

                            {/* Username */}
                            <label htmlFor='username'>{t('Application.userName')}</label>
                            <input name='username' value={userName} onChange={(e) => setUserName(e.target.value)} type="text" />

                            {/* Password */}
                            <label htmlFor='password'>{t('Application.password')}</label>
                            <input name='password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" />

                            {/* Errors label */}
                            <label className='error-label'>{formErrors.errors}</label>

                            {/* Login button */}
                            <button disabled={isLoading} onClick={login} className='btn'>{t('Application.login')}</button>
                        </form>

                    </div>

                    {/* Form Image */}
                    <div className="col-2">
                        <img src='assets/images/bg-form-2.jpg' alt="" />
                    </div>
                </div>}

            {/* Else if the user is signed in don't allow him to log-in*/}
            {user && <div>User already logged-in</div>}
        </div>
    )
}
