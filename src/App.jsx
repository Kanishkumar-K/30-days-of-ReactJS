import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page31 from './components/Page31';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import Page7 from './components/Page7';
import UseState from './components/UseState';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element ={<Login />} />
            <Route path="/intro" element ={<Introduction />} />
            <Route path="/page2" element ={<Page2 />} />
            <Route path="/page3" element ={<Page3 />} />
            <Route path="/page31" element ={<Page31 />} />
            <Route path="/page4" element ={<Page4 />} />
            <Route path="/page5" element ={<Page5 />} />
            <Route path="/page6" element ={<Page6 />} />
            <Route path="/page7" element ={<Page7 />} />
            <Route path="/usestate" element ={<UseState />} />
            <Route path="/products" element ={<Products />} />
            <Route path="/contacts" element = {<Contacts />} >
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;