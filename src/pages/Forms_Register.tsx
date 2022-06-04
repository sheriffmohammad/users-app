import React, { useEffect, useState } from 'react'
import './Forms.scss'
import { useAddUserData } from '../helpers/httpHelper'
import { useNavigate } from 'react-router-dom';
import { user } from '../classes/user'
import { t } from '../translate/translate';
import { useTranslate } from '../translate';

type Props = {
    onRegisterHandler: () => void; // Used to change the menu after successful registration
};

export default function Register({ onRegisterHandler }: Props) {

    const i18n = useTranslate();
    const { t } = i18n;

    // Component states

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [formErrors, setFormErrors] = useState({ confirmPassword: '' });

    // Current user data (if any)

    const user = localStorage.getItem('user');

    const { mutate: addUser, data, isLoading } = useAddUserData();

    const navigate = useNavigate();

    // On register button click

    const register = (e: any) => {

        // Prevent page reloading

        e.preventDefault();

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
    };

    useEffect(() => {
        const handleUserInput = () => {

            // If passwords are not empty and don't match

            if (password !== '' && confirmPassword !== '' && password !== confirmPassword) {

                // Add an error to the form errors

                setFormErrors({ confirmPassword: t('Application.passwordsDontMatch') })
            }

            // if passwords match

            if (password === confirmPassword) {

                // Remove the error

                setFormErrors({ confirmPassword: '' });
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
                            <label className='error-label'>{formErrors.confirmPassword}</label>

                            {/* Register button */}
                            <button type='submit' disabled={isLoading || formErrors.confirmPassword !== ''} onClick={register} className='btn'>{t('Application.register')}</button>
                        </form>

                    </div>

                    {/* Image */}
                    <div className="col-2">
                        <img src='assets/images/bg-form-2.jpg' alt="" />
                    </div>
                </div>}

            {/* Else if the user is signed in don't allow him to register*/}
            {user && <div>User already logged-in</div>}
        </div>
    )
}
