import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Sign up</h1>
                <div className="input">
                    <input type="text" placeholder="Full Name" required />
                </div>
                <div className="input">
                    <input type="text" placeholder="Username" required />
                </div>
                <div className="input">
                    <input type="text" placeholder="Email" required />
                </div>
                <div className="input">
                    <input type="password" placeholder="Password" required />
                </div>
                <button type="submit" className="btn">Sign up</button>
                <p className="login-link">Already have an account?<Link to ="/login"><p className="s2"><u>Login</u></p></Link></p>
            </form>
        </div>
    );
}

export default Signup;
