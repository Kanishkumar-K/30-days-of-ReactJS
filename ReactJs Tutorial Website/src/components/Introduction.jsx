import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import imgIntro from './img/intro.png';
import { useEffect } from 'react';

function Introduction() {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div style={{ 
      backgroundImage: "linear-gradient(to right, #ffefba, #ffffff)",
      width:"1378px" ,
      marginTop:"13px"
    }}> 
      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}><br /><br />Welcome to React</h1><br />
      <p style={{ color: '#010',  textAlign:"justify", fontSize: '16px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px', marginRight:"200px"}}>React is a JavaScript library for building user interfaces, developed and maintained by Facebook. It is widely used for building single-page applications and user interfaces for web and mobile applications.<br /> Create React App (CRA) is the officially recommended way to create single-page React applications. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.
      </p><br />        <img src="https://www.tutorialandexample.com/wp-content/uploads/2019/11/Getting-started-with-Reactjs.png" /><br /><br /><br />
      
      <div>
          <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}>Installing Node.js and npm</h1><br />
          <p style={{ textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>Before you can start using Create React App or any other JavaScript tooling, you need to have Node.js and npm installed on your machine. Follow these steps to install Node.js and npm:</p>
          <ol style={{ textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>
            <li>Visit the <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js website</a>.</li>
            <li>Download the appropriate installer for your operating system.</li>
            <li>Run the installer and follow the installation instructions.</li>
            <li>Once Node.js is installed, npm will also be installed automatically.</li>
            <li>To verify that Node.js and npm are installed correctly, open a terminal or command prompt and type the following commands:</li>
            <ul>
              <li><code>node -v</code> (This should print the installed version of Node.js.)</li>
              <li><code>npm -v</code> (This should print the installed version of npm.)</li>
            </ul>
          </ol>
        </div><br /><br />
      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}>Getting Started with CRA</h1>
 
      <div style={{paddingLeft:"800px", marginTop:"-400px" , width:"90%"}}>
        <div style={{marginLeft:"-620px"}}>
        <p style={{marginLeft:"00px", marginTop:"420px"}}><img src={imgIntro} width="800px" height="200px" /></p>

      </div>
      </div>
      <div>
        <br />
        <Link to="/page2">
          <button style={{textAlign:"right", backgroundColor:"#0dd943", color:"black", marginTop:"470px", float:"right", marginRight:"120px"}}>Introduction to JSX</button>
        </Link>
        <br />
        <br />
        <Sidebar />
       
        
        <div>
          <p style={{ textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application.</p>
          <p style={{ textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; Create React App is a tool built by developers at Facebook to help you build React applications. It saves you from time-consuming setup and configuration, so you can focus on writing code rather than configuring build tools.</p>
          <p style={{ textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; To create a new app, you can run `npx create-react-app my-app` and then `cd my-app`. This will create a new directory called `my-app` and set up a new React project inside it.</p>
          <p style={{ textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; After creating a new app, you can start it by running `npm start` or `yarn start` inside the `my-app` directory. This will start the development server and open your new React application in your default web browser.</p>
        </div>
        <br />

      </div>
      <section style={{ backgroundColor:"#101010", color:"white", width:"1300px", marginLeft:"80px", marginTop:"230px", marginBottom:"-50px" }}>
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '40px 0', textAlign: 'center', fontFamily: 'serif' }}><br />
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
            <p style={{ fontSize: '14px', marginTop: '40px' }}>© 2024 ReactJS Tutorial. All rights reserved.</p>
          </div>
        </footer>
      </section>  
    </div>
  );
}

export default Introduction;
