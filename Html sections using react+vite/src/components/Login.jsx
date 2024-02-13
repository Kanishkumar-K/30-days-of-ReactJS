import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Login() {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>

                <div className="input">
                    <input type="text" placeholder="Email" required />
                </div>
                <div className="input">
                    <input type="password" placeholder="Password" required />
                </div>
                <button><Link to="/home" className="btn">Login</Link></button>
                <p className="login-link">Don't have an account?<Link to="/signup" className="s2"><u>Sign Up</u></Link></p>
            </form>
        </div>
    );
}

export default Login;
