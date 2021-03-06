import React, { useEffect, useState } from 'react'
import './Forms.scss'
import { useAddUserData } from '../shared/helpers/httpHelper'
import { useNavigate } from 'react-router-dom';
import { user } from '../shared/classes/user'
import { t } from '../translation/translate';
import { useTranslate } from '../translation';

type Props = {
    onRegisterHandler: () => void; // Used to change the menu after successful registration
};

export default function Register({ onRegisterHandler }: Props) {

    // Translation

    const i18n = useTranslate();
    const { t } = i18n;

    // Component states

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [formErrors, setFormErrors] = useState({ errors: '' });

    // Current user data (if any)

    const user = localStorage.getItem('user');

    // Use react-query on adding a new user

    const { mutate: addUser, isLoading } = useAddUserData();

    // Navigation

    const navigate = useNavigate();

    // Check if input is valid

    const isValidInput = () => {

        // If any field is empty

        if (!userName.trim() || !password.trim() || !confirmPassword.trim()) {
            return false;
        }
        else
            return true;
    }

    // On register button click

    const register = (e: any) => {

        // Prevent page reloading

        e.preventDefault();

        // If the input is valid

        if (isValidInput()) {

            // Create a user object

            const user: user = {
                id: 0,
                userName: userName,
                password: password
            };

            // Use the api to add the user object

            addUser(user, {

                // If the user is added successfully

                onSuccess: () => {

                    // Store user data in local storage

                    localStorage.setItem('user', JSON.stringify(user));

                    // Update the menu

                    onRegisterHandler();

                    // Navigate to home

                    navigate('/');
                }

            });
        }
        else {
            setFormErrors({ errors: t('Application.required') })
        }
    };

    useEffect(() => {

        const handleUserInput = () => {

            // If passwords are not empty and don't match

            if (password !== '' && confirmPassword !== '' && password !== confirmPassword) {

                // Add an error to the form errors

                setFormErrors({ errors: t('Application.passwordsDontMatch') })
            }

            // if passwords match

            if (password === confirmPassword) {

                // Remove the error

                setFormErrors({ errors: '' });
            }
        };
        handleUserInput();
    }, [password, confirmPassword]);

    return (
        <div >

            {/* If user isn't signed in show the registration form */}
            {!user &&
                <div className="register">

                    {/* Registration form */}
                    <div className="col-1">

                        {/* Form title */}
                        <h2>{t('Application.register')}</h2>

                        <form id='form' className='flex flex-col'>

                            {/* Username */}
                            <label htmlFor='username'>{t('Application.userName')}</label>
                            <input name='username' value={userName} onChange={(e) => setUserName(e.target.value)} type="text" />

                            {/* Password */}
                            <label htmlFor='password'>{t('Application.password')}</label>
                            <input name='password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" />

                            {/* Confirm password */}
                            <label htmlFor='confirmPassword'>{t('Application.confirmPassword')}</label>
                            <input name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type='password' />

                            {/* Passwords don't match label */}
                            <label className='error-label'>{formErrors.errors}</label>

                            {/* Register button */}
                            <button type='submit' disabled={isLoading || formErrors.errors == t('Application.passwordsDontMatch')} onClick={register} className='btn'>{t('Application.register')}</button>
                        </form>

                    </div>

                    {/* Form image */}
                    <div className="col-2">
                        <img src='assets/images/bg-form-2.jpg' alt="" />
                    </div>
                </div>}

            {/* Else if the user is signed in don't allow him to register*/}
            {user && <div>User already logged-in</div>}
        </div>
    )
}
