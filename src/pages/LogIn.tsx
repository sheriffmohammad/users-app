import React, { ReactPropTypes, useState } from 'react'
import './Register.scss'
import { useMutation } from 'react-query';
import { useAddUserData, useGetUsersData } from '../helpers/httpHelper'
import { Navigate, useNavigate } from 'react-router-dom';
import { user } from '../classes/user'

type Props = {
    onLoginHandler: () => void;
};

export default function Login({ onLoginHandler }: Props) {

    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [formErrors, setFormErrors] = useState({ incorrect: '' });

    const user = localStorage.getItem('user');

    const { data, isSuccess, isLoading } = useGetUsersData();

    const login = (e: any) => {

        // Prevent page reloading

        e.preventDefault();

        // Create a user object

        const users: user[] = data?.data;

        const foundUsers = users.filter(user => user.userName === userName && user.password === password);

        if (foundUsers.length > 0) {

            // Store user data in local storage

            localStorage.setItem('user', JSON.stringify(user));

            // Update the menu

            onLoginHandler();

            // Navigate to home

            navigate('/');
        }

        else {
            setFormErrors({ incorrect: 'Incorrect username or password' })
        }
    };

    return (
        <div >
            {!user &&
                <div className="register">

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
                            <button disabled={isLoading} onClick={login} className='btn'>Log in</button>
                        </form>

                    </div>
                    <div className="col-2">
                        <img src='assets/images/bg-form-2.jpg' alt="" />
                    </div>
                </div>}
            {user && <div>User already logged-in</div>}
        </div>
    )
}
