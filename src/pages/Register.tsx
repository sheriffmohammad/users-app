import React from 'react'
import './Register.scss'

export default function Register() {
    return (
        <div className='registration-form'>
            <form action="" className="log-in">
                <h4>We are <span>NUVA</span></h4>
                <p>Welcome back! Log in to your account to view today's clients:</p>
                <div className="floating-label">
                    <input placeholder="Email" type="email" name="email" id="email" />
                    <label>Email:</label>
                </div>
                <div className="floating-label">
                    <input placeholder="Password" type="password" name="password" id="password" />
                    <label>Password:</label>
                    <div className="icon">
                    </div>

                </div>
                <button type="submit">Log in</button>
                <a href="https://codepen.io/elujambio/pen/yjwzGP" className="discrete" target="_blank">Basic version</a>
            </form>
        </div>
    )
}
