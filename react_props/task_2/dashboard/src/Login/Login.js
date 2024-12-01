import React from 'react';
import './Login.css';


function Login() {
    return (

        <div className="body">
            <p>
                Login to access the full dashboard
            </p>
        <div className="body_container">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
            <button onClick={() => alert('Login clicked')}>OK</button>
        </div>
    </div>
    )
};

export default Login;
