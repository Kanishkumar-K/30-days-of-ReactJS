import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import img7 from './img/img7.png';
import img8 from './img/img8.png';
import { useEffect } from 'react';


function Page5() {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div style={{ 
      backgroundImage: "linear-gradient(to right, #ffefba, #ffffff)",
      width:"1378px" ,
      marginTop:"13px"
    }}> 

      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}><br /><br />Webpack</h1><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px'}}>Webpack is a tool used to combine multiple files into a single bundle (bundle.js).</p>
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' , lineHeight: '1.6',  marginLeft:'200px'}}>The main purpose of Webpack is to manage dependencies and optimize the build process for web applications.</p><br /><br />
      <div style={{marginLeft:"20px"}}>
        <img src={img7} height="250px" width="530px"/>
      </div>
      <br />

      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}>Babel</h1><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px'}}>Babel is a highly configurable compiler that lets us use newer JavaScript syntax, transforming it into older syntax that's supported <br/>on a wider range of platforms.</p><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' , lineHeight: '1.6',  marginLeft:'200px'}}>Babel comes in two parts: the core, and plugins. Each individual language feature that Babel can transform, such as ES2015 classes, <br />has a separate plugin. Collections of plugins are grouped into presets.</p><br />
      <div style={{marginLeft:"20px"}}>
        <img src={img8} height="300px" width="530px"/>
      </div>
      <br />

      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}>npm</h1><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px'}}>npm (Node Package Manager) is a package manager for JavaScript and the world's largest software registry. It consists of a<br />command-line client and an online database of public and private packages.</p><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' , lineHeight: '1.6',  marginLeft:'200px'}}>npm is used to install, share, and distribute code, as well as manage dependencies in projects. It is commonly used for managing  <br />packages and scripts in Node.js projects.</p><br />
     
      <Link to="/page6"><br /><br />
        <button style={{textAlign:"right", backgroundColor:"#0dd943", color:"black", marginTop:"300px", float:"right", marginRight:"120px"}}>Hooks</button>
      </Link>
      <br />

      <Sidebar /> 
      <div>
        <p style={{ fontSize:"20px",textAlign: 'left', paddingLeft: '200px', paddingRight: '200px' }}><b>Summary</b></p><br />
      <p style={{ textAlign: 'justify', paddingLeft: '200px', paddingRight: '200px' }}>&#8226; Webpack is a tool used to bundle JavaScript files and other assets for web applications.</p>
          <p style={{ textAlign: 'justify', paddingLeft: '200px', paddingRight: '0px' }}>&#8226; Babel is a compiler that allows you to use modern JavaScript syntax while ensuring compatibility with older browsers.</p>
        <p style={{ textAlign: 'justify', paddingLeft: '200px', paddingRight: '200px' }}>&#8226; npm is the package manager for Node.js, used for installing and managing dependencies in projects.</p>
      </div>

      <section style={{ backgroundColor:"#101010", color:"white", width:"1300px", marginLeft:"80px", marginTop:"230px", marginBottom:"-50px" }} >
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

export default Page5;
