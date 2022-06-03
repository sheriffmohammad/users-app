import React, { useState } from 'react'
import './Register.scss'
import { useMutation } from 'react-query';
import { useAddUserData } from '../helpers/httpHelper'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Register() {

    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const { mutate: addUser, isLoading, isSuccess } = useAddUserData();

    const register = (e: any) => {

        // Prevent page reloading

        e.preventDefault();

        const user = {
            userName: userName,
            password: password
        };

        addUser(user, {
            onSuccess: () => {
                localStorage.setItem('user', JSON.stringify(user));
                navigate('/');
            }
        });
    };

    return (
        <div className="register">
            <div className="col-1">
                <h2>Register</h2>

                <form id='form' className='flex flex-col'>
                    <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder='username' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' />
                    <input type="text" placeholder='confirm password' />
                    <button disabled={isLoading} onClick={register} className='btn'>Register</button>
                </form>

            </div>
            <div className="col-2">
                <img src='assets/images/bg-form-2.jpg' alt="" />
            </div>
        </div>
    )
}
