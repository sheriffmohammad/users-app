import React, { ReactPropTypes, useState } from 'react'
import './Register.scss'
import { useMutation } from 'react-query';
import { useAddUserData } from '../helpers/httpHelper'
import { Navigate, useNavigate } from 'react-router-dom';
import { user } from '../classes/user'

type Props = {
    onRegisterHandler: () => void;
};

export default function Register({ onRegisterHandler }: Props) {

    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const user = localStorage.getItem('user');

    const { mutate: addUser, isLoading, isSuccess } = useAddUserData();

    const register = (e: any) => {

        // Prevent page reloading

        e.preventDefault();

        // Create a user object

        const user: user = {
            userName: userName,
            password: password
        };

        // Use the api to add the user object

        addUser(user, {
            onSuccess: () => {
                localStorage.setItem('user', JSON.stringify(user));
                onRegisterHandler();
                navigate('/');
            }
        });
    };

    return (
        <div >
            {!user &&
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
                </div>}
            {user && <div>User already logged-in</div>}
        </div>
    )
}
