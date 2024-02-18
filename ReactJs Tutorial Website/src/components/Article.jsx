import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Article = () => {
  return (
    <div style={{ padding: '50px' }}>
    <div style={{ textAlign: 'center', marginBottom: '50px' }}><br /><br /><br />
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>REACT JS</h1><br />
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>Welcome to ReactJS Tutorial! Learn ReactJS to build dynamic and interactive web applications.</p>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>Discover the power of ReactJS! Elevate your web development skills and create stunning user interfaces with ease.</p>
      <button style={{ backgroundColor: '#0dd943', color: 'white', padding: '20px 30px', fontSize: '1.2rem', borderRadius: '50px', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>
        <Link to="/intro" style={{ color: 'white', textDecoration: 'none' }}>Get Started</Link>
      </button>
    </div>

    <div style={{ padding: '0 40px', textAlign: 'center' }}>
      <div style={{ backgroundColor: 'white', border: '1px solid black', borderRadius: '10px', padding: '20px', marginBottom: '50px' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Why React?</h3>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          React is a powerful JavaScript library for building user interfaces.
          It offers a component-based architecture, allowing for easy management of UI elements and state.
          With React, developers can create dynamic and interactive web applications efficiently.
        </p>
      </div>

      <div style={{ backgroundColor: 'white', border: '1px solid black', borderRadius: '10px', padding: '20px', marginBottom: '50px' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Is React suitable for large-scale applications?</h3>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          Yes, React is suitable for large-scale applications. Its component-based architecture and virtual DOM make it scalable and efficient.
          React also provides tools and libraries, such as Redux and React Router, which help manage state and routing in complex applications.
        </p>
      </div>

      <div style={{ backgroundColor: 'white', border: '1px solid black', borderRadius: '10px', padding: '20px', marginBottom: '50px' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>How does React differ from other JavaScript frameworks?</h3>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          Unlike traditional JavaScript frameworks like Angular, React is a library rather than a full-fledged framework.
          It focuses solely on the view layer of the application, allowing developers to integrate it seamlessly with other libraries and frameworks.
          React's virtual DOM and one-way data flow make it highly performant and suitable for building modern web applications.
        </p>
      </div>
    </div>


      <section style={{ backgroundColor:"#101010", color:"white", width:"1700px", marginLeft:"-210px", marginTop:"0px", marginBottom:"-90px" }} >
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', textAlign: 'center', fontFamily: 'serif' }}><br />
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', leftContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ flex: '1', textAlign: 'left', marginRight: '50px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Useful Links</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</a></li>
                <li style={{ marginBottom: '10px' }}><a href="#services" style={{ color: '#fff', textDecoration: 'none' }}>Our Services</a></li>
                <li style={{ marginBottom: '10px' }}><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</a></li>
              </ul>
            </div>
            <div style={{ flex: '1', textAlign: 'left', marginRight: '50px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Connect with Us</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Facebook</a></li>
                <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Twitter</a></li>
                <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Instagram</a></li>
                <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>LinkedIn</a></li>
              </ul>
            </div>
            <div style={{ flex: '1', textAlign: 'left' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '20px',  }}>Subscribe to Our Newsletter</h3>
              <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input type="email" placeholder="Enter your email" style={{ border:"2px solid white", padding: '10px', width: '300px', marginBottom: '10px' }} /><br />
                <button type="submit" style={{ backgroundColor: '#fff', color: '#333', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Subscribe</button>
              </form>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '14px', marginTop: '40px', textAlign:'center', paddingRight:'80px'}}>© 2024 ReactJS Tutorial. All rights reserved.</p>
          </div>
        </footer>
      </section>  
    </div>
  );
};

export default Article;
