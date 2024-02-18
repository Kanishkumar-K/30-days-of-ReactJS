import React from 'react';
import './Sidebar.css'; 
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <article className="sidebar"> 
      <>
      <br /><h4>React Js </h4>
      <br />
      <ul className='s1'>
        <li className='s21'><Link to="/intro"> Introduction</Link></li>
        <li className='s21'><Link to="/page2"> JSX</Link></li>
        <li className='s21'><Link to="/page3"> React Components</Link></li>
        <li className='s21'><Link to="/page31"> Props</Link></li>
        <li className='s21'><Link to="/page4"> React Lifecycle Methods</Link></li>
        <li className='s21'><Link to="/page5"> React - Webpack and Babel</Link></li>
        <li className='s21'><Link to="/page6"> UseState Hook </Link></li>
        <li className='s21'><Link to="/page7"> UseEffect Hook </Link></li>
      </ul>
    </>
    </article>
  );
}
export default Sidebar;
