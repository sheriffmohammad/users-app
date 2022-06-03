import React from 'react'
import './Register.scss'

export default function Register() {
    return (
        <div className="register">
            <div className="col-1">
                <h2>Register</h2>

                <form id='form' className='flex flex-col'>
                    <input type="text" placeholder='username' />
                    <input type="text" placeholder='password' />
                    <input type="text" placeholder='confirm password' />
                    <button className='btn'>Register</button>
                </form>

            </div>
            <div className="col-2">
                <img src='assets/images/bg-form-2.jpg' alt="" />
            </div>
        </div>
    )
}
