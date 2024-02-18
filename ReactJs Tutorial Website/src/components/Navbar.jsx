import React from 'react';
import { Link } from 'react-router-dom'; 
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="s5">
          <Link to="/">Home</Link>
        </li>
        <li className="s5">
          <Link to="/about">About</Link>
        </li>
        <li className="s5">
          <Link to="/products">Courses</Link>
        </li>
        <li className="s5">
          <Link to="/contacts">Contacts</Link>
        </li>
        <li className="signup">
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
