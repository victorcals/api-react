import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import '../Login/login.css';

function Logar() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    return (
        <div class="container">
            <div class="card">
                <a class="singup">Sign Up</a>
                <div class="inputBox1">
                    <input type="text" value={email} onChange={handleEmailChange} />
                    <span class="user">Email</span>
                </div>

                <div class="inputBox">
                    <input type="text" value={email} onChange={handleEmailChange} />
                    <span>Username</span>
                </div>

                <div class="inputBox">
                    <input type="text" value={email} onChange={handleEmailChange} />
                    <span>Password</span>
                </div>

                <button class="enter">Enter</button>

            </div>
        </div>
    )
}

export default Logar;






{/* <div class="container">
    <div class="card">
        <a class="singup">Sign Up</a>
        <div class="inputBox1">
            <input type="text" required="required">
                <span class="user">Email</span>
        </div>

        <div class="inputBox">
            <input type="text" required="required">
                <span>Username</span>
        </div>

        <div class="inputBox">
            <input type="password" required="required">
                <span>Password</span>
        </div>

        <button class="enter">Enter</button>

    </div>
</div> */}