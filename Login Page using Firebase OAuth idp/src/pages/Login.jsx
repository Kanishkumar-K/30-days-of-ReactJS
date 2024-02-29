import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from './img/img4.png'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [notification, setNotification] = useState('');
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const validateEmail = (input) => {
    const value = input.trim();
    if (!value) {
      setEmailError('Email is required');
    } else if (!emailRegex.test(value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (input) => {
    const value = input.trim();
    if (!value) {
      setPasswordError('Password is required');
    } else if (!passwordRegex.test(value)) {
      setPasswordError(
        'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number'
      );
    } else {
      setPasswordError('');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      setNotification('Login successful!');
      setTimeout(() => {
        setNotification('');
        navigate('/');
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    validateEmail(email);
    validatePassword(password);

    if (emailError || passwordError) {
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      setNotification('Login successful!');
      setTimeout(() => {
        setNotification('');
        navigate('/');
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      height: '100vh',
      width:'101.25vw',
      marginLeft:'-20px',
      marginTop:'0px',
    }}>
      <div style={{ 
        marginTop:'80px', 
        marginBottom:'100px', 
        marginLeft: '900px', 
        marginRight: '100px', 
        position: 'relative', 
        border: '2px solid #ccc', 
        padding: '40px', 
        borderRadius: '5px', 
        width: '500px', 
        backgroundColor: '#ffffff', 
      }}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          {/* Input fields */}
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            style={{ border: emailError ? '1px solid red' : '' }}
          />
          {emailError && <p className="error">{emailError}</p>}
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
            style={{ border: passwordError ? '1px solid red' : '' }}
          />
          {passwordError && <p className="error">{passwordError}</p>}<br />
          <button type="submit" style={{ backgroundColor: ' #77ef14' }}>
            <p style={{ paddingTop: '0px', paddingBottom: '3px' }}>Login</p>
          </button>
          <button type="button" onClick={handleGoogleLogin} style={{ backgroundColor: '#4285F4', color: 'white', marginTop: '10px', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Continue with Google
          </button>
          <p>
            Need to Signup? <Link to="/signup">Create Account</Link>
          </p>
        </form>

        {notification && (
          <div style={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: '#4CAF50', color: 'white', padding: '10px', borderRadius: '5px' }}>
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
