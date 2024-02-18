import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};

        if (!username.trim()) {
            errors.username = "Username is required";
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
            // Show welcome alert
            alert(`Welcome ${username}! Continue learning :)`);
            // Redirect to home page
            window.location.href = '/home';
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>

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
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <br />
                <button type="submit" className="btn1">Login</button><br />
                <p className="login-link"><br />Don't have an account?<Link to="/signup" className="s2"><u>Sign Up</u></Link></p>
            </form>
        </div>
    );
}

export default Login;
