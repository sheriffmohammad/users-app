import React, { useState } from 'react'
import './Register.scss'
import { useGetUsersData } from '../helpers/httpHelper'
import { useNavigate } from 'react-router-dom';
import { user } from '../classes/user'

type Props = {
    onLoginHandler: () => void; // Used to change menu after successful login
};

export default function Login({ onLoginHandler }: Props) {

    // Component states

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [formErrors, setFormErrors] = useState({ incorrect: '' });

    const navigate = useNavigate();

    // Current user data (if any)

    const user = localStorage.getItem('user');

    const { data, isSuccess, isLoading } = useGetUsersData();

    // On login button click

    const login = (e: any) => {

        // Prevent page reloading

        e.preventDefault();

        // Get all users from api

        const users: user[] = data?.data;

        // Search for user by username and password

        const foundUsers = users.filter(user => user.userName === userName && user.password === password);

        // If the user is found

        if (foundUsers.length > 0) {

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

            setFormErrors({ incorrect: 'Incorrect username or password' })
        }
    };

    return (
        <div >

            {/* If user isn't signed in show the sign in form */}
            {!user &&
                <div className="register">

                    {/* Sign in form */}
                    <div className="col-1">
                        <h2>Log-In</h2>

                        <form id='form' className='flex flex-col'>

                            {/* Username */}
                            <label htmlFor='username'>Username</label>
                            <input name='username' value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder='username' />

                            {/* Password */}
                            <label htmlFor='password'>Password</label>
                            <input name='password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' />

                            {/* Username or password incorrect label */}
                            <label className='error-label'>{formErrors.incorrect}</label>

                            {/* Login button */}
                            <button disabled={isLoading} onClick={login} className='btn'>Log in</button>
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
