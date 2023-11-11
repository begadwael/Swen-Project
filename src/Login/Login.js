import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <div>
            <div className="login-container">
                <h2>Login</h2>
                <form className="login-form" method="post">
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required/>
                    </div>
                    <div className="form-group">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
