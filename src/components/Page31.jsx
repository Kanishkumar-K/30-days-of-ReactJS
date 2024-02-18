import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Props from './Props';
import img11 from './img/img11.png';
import { useEffect } from 'react';

function Page31() {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div style={{ 
      backgroundImage: "linear-gradient(to right, #ffefba, #ffffff)",
      width:"1378px" ,
      marginTop:"-153px"
    }}> 

      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"170px" }}><br /><br /><br />Props</h1><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px', backgroundColor:"snow", padding:"5px", border:"1px solid black", marginRight:"170px", paddingLeft:"30px"}}><br />Props (short for properties) are a way of passing data from parent to child components in React.<br /><br />They are read-only, meaning that the child component receiving props cannot modify the props directly.<br />Props allow components to be reusable, customizable, and flexible.</p><br />
      <div style={{marginLeft:"80px"}}>
        <img src="https://i.stack.imgur.com/wqvF2.png" height="350px" width="790px"/><br /><br /><br />
      </div>
      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}>Example </h1><br />

      <div style={{marginLeft:"-380px"}}>
        <img src={img11} height="650px" width="590px"/>
      </div>
      <div style={{paddingLeft:"900px", marginTop:"-550px", marginRight:"200px"}}>
        <Props />
        </div>
      <div>
    </div>
    <div style={{ textAlign: 'left', paddingLeft:"50px", paddingRight: '50px', marginTop:"160px" }}> 
      <p>- In React, props are passed from parent components to child components.<br />- They are passed as attributes in JSX and accessed inside the child component using `props`. <br />- Props are immutable, meaning they cannot be changed by the child component.<br /></p>
    </div>
  
    <Link to="/page4"><br /><br />
    <button style={{textAlign:"right", backgroundColor:"#0dd943", color:"black", marginTop:"30px", float:"right", marginRight:"80px"}}>Lifecycle Methods</button>
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

export default Page31;
