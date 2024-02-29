import React, { useState } from 'react';
import { auth, googleAuthProvider } from '../firebase'; 
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from './img/img4.png'; 
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [retypePasswordError, setRetypePasswordError] = useState('');
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

  const validateRetypePassword = (input) => {
    const value = input.trim();
    if (!value) {
      setRetypePasswordError('Retype Password is required');
    } else if (value !== password) {
      setRetypePasswordError('Passwords do not match');
    } else {
      setRetypePasswordError('');
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      setNotification('Signup successful! Please login.'); 
      setTimeout(() => {
        setNotification('');
      }, 3000);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);
    validateRetypePassword(retypePassword);
  
    if (emailError || passwordError || retypePasswordError) {
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      setNotification('Signup successful! Please login.'); 
      setTimeout(() => {
        setNotification('');
      }, 3000);
      navigate('/login');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setEmailError('Email is already in use');
      } else {
        console.error(error);
      }
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
        marginTop:'30px', 
        marginBottom:'20px', 
        marginLeft: '900px', 
        marginRight: '100px', 
        position: 'relative', 
        border: '2px solid #ccc', 
        paddingLeft: '40px', 
        paddingRight: '40px', 
        paddingTop:'20px',
        borderRadius: '5px', 
        width: '500px', 
        backgroundColor: '#ffffff',
      }}>
        <h1>Signup</h1>  

        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            style={{ border: emailError ? '1px solid red': '' }}
          />
          
          {emailError && <p className="error">{emailError}</p>}
          
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
              validateRetypePassword(retypePassword);
            }}
            style={{ border: passwordError ? '1px solid red' : '' }}
          />
          
          {passwordError && <p className="error">{passwordError}</p>}
          
          <input
            type="password"
            placeholder="Retype Password"
            value={retypePassword}
            onChange={(e) => {
              setRetypePassword(e.target.value);
              validateRetypePassword(e.target.value);
            }}
            style={{ border: retypePasswordError ? '1px solid red' : '' }}
          />

          {retypePasswordError && <p className="error">{retypePasswordError}</p>}
          <button type="submit" className="signup-button">
            Signup
          </button>
          <button type="button" onClick={handleGoogleSignup} style={{ backgroundColor: '#4285F4', color: 'white', marginTop: '10px', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Continue with Google
          </button>

        </form>
     
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        {notification && (
  <div style={{ 
    position: 'absolute', 
    top: '20px', 
    right: '20px', 
    backgroundColor: '#4CAF50', 
    color: 'white', 
    padding: '10px', 
    borderRadius: '5px',
    zIndex: '999', 
  }}>
    {notification}
  </div>
)}



      </div>
    </div>
  );
};

export default Signup;
