import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import img21 from './img/img21.png';

function Signup() {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};

        if (!fullName.trim()) {
            errors.fullName = "Full name is required";
        }
        if (!username.trim()) {
            errors.username = "Username is required";
        }
        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid";
        }
        if (!password.trim()) {
            errors.password = "Password is required";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Redirect to login page
            window.location.href = '/login';
        }
    };

    return (
        <div className="wrapper" style={{ margin: "130px" }}>
            <form onSubmit={handleSubmit}>
                <h1>Sign up</h1>
                <div className="input">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                    {errors.fullName && <p className="error">{errors.fullName}</p>}
                </div>
                <div className="input">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <div className="input">
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="input">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <button type="submit" className="btn">Sign Up</button>
                <p className="login-link">Already have an account? <Link to="/login"><u>Login</u></Link></p>
            </form>
        </div>
    );
}

export default Signup;
