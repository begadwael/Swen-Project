import React from 'react';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className="SignUp_container">
            <h2>Sign Up</h2>
            <form id="signup-form" method="post">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required/>

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required/>

                    <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default SignUp;
