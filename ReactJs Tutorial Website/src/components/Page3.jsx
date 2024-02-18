import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ClassComponentImg from './img/img5.png';
import FunctionalComponentImg from './img/img6.png';
import { useEffect } from 'react';

function Page3() {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div style={{ 
      backgroundImage: "linear-gradient(to right, #ffefba, #ffffff)",
      width:"1378px" ,
      marginTop:"-153px"
    }}> 

      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"170px" }}><br /><br /><br />React Components</h1><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px', backgroundColor:"snow", padding:"5px", border:"1px solid black", marginRight:"170px", paddingLeft:"30px"}}><br />React components are the building blocks of a React application. They are reusable, independent, and encapsulated pieces of code that represent a part of the UI. There are two main types of React components: Class Components and Functional Components.<br /><br /></p><br /><br />
      
      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}>Class Components</h1><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px' , paddingLeft:"30px"}}>Class components are ES6 classes that extend from React.Component. They have a render() method where the UI is defined. Class components can manage state and have access to lifecycle methods such as componentDidMount, componentDidUpdate, componentWillUnmount, etc.</p><br />
      <div style={{marginLeft:"60px"}}>
        <img src={ClassComponentImg} height="450px" width="930px"/>
      </div>
      
      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"50px" }}>Functional Components</h1><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px' , paddingLeft:"30px"}}>Functional components are simple JavaScript functions that accept props and return React elements. They are also known as stateless components. Functional components are easier to read, test, and maintain. With the introduction of React Hooks, functional components <br />can also manage state and have lifecycle features.</p><br />
      <div style={{marginLeft:"60px"}}>
        <img src={FunctionalComponentImg} height="450px" width="830px"/>
      </div>

      <Link to="/page31"><br /><br />
        <button style={{textAlign:"right", backgroundColor:"#0dd943", color:"black", marginTop:"30px", float:"right", marginRight:"80px"}}>Props</button>
      </Link>

      <Sidebar /> <br />
      <section style={{ backgroundColor:"#101010", color:"white", width:"1300px", marginLeft:"80px", marginTop:"100px", marginBottom:"-50px" }} >
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '40px 0', textAlign: 'center', fontFamily: 'serif' }}><br />
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
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

export default Page3;
