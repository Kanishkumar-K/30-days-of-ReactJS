import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';
import './App.css';
import Login from './components/Login';
import Contacts from './components/Contacts';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about" >About</Link>
            </li>
            <li>
              <Link to="/about" >Products</Link>
            </li>
            <li>
              <Link to="/contacts" >Contacts</Link>
            </li>
            <li className="signup">
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element ={<Login />} />
          <Route path="/contacts" element = {<Contacts />} ></Route>

        </Routes>
      </div>
    </Router>
  );
}


export default App;
