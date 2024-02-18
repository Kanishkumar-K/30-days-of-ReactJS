import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import img10 from './img/img10.jpg';
import { useEffect } from 'react';


function Page2() {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div style={{ 
      backgroundImage: "linear-gradient(to right, #ffefba, #ffffff)",
      width:"1378px" ,
      marginTop:"13px",
    }}> 
      <br />      
      <br />      
      <br />
      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}>Introduction to JSX</h1><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px'}}>JSX is an extension to the JavaScript language that adds a new kind of expression, the JSX expression, used to create React elements.</p><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' , lineHeight: '1.6',  marginLeft:'200px'}}>JSX expressions are a concise syntax for calling the React.createElement API.</p><br />
     
      <div style={{backgroundColor: '#fff', marginLeft:'200px', padding: '10px'}}>
        <p style={{ color: '#010', fontSize: '16px', textAlign:'left' , lineHeight: '1.6' }}>React.createElement(type, props, ...children)</p>
      </div><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' , lineHeight: '1.6',  marginLeft:'200px'}}>We can use JSX expressions anywhere we could use any other expression, e.g. in a return statement or variable assignment.</p><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' , lineHeight: '1.6',  marginLeft:'200px'}}><b>Why JSX?</b><br />The XML-like syntax is typically more concise, easier to read, and visually looks a little like the generated UI (both are tree-like).<br/>We don't have to use JSX, but there are few disadvantages, so we probably should use it.</p><br />
      <div style={{marginLeft:"-10px"}}><br />
        <img src={img10} height="300px" width="650px"/>
      </div>
      <Link to="/page3">
        <button style={{textAlign:"right", backgroundColor:"#56f222", color:"black", marginTop:"30px", float:"right", marginRight:"80px"}}>React Component</button>
      </Link>
      <br />
      <br />

      <Sidebar /> <br /><br />
      <section style={{ backgroundColor:"#101010", color:"white", width:"1300px", marginLeft:"80px", marginTop:"30px", marginBottom:"-50px" }} >
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

export default Page2;
