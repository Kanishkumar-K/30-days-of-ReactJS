import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div style={{marginTop:'726px'}}>
      <nav style={{ 
        backgroundColor: 'black',
        padding: '10px',
        marginLeft:'30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <ul style={{ 
          listStyleType: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          alignItems: 'center',
        }}>
          <li style={{ 
            marginRight: '10px',
            paddingLeft: '20px',
          }}>
            <a href="/" style={{ 
              color: '#fff',
              textDecoration: 'none',
              padding: '10px',
              borderRadius: '5px',
            }}>Home</a>
          </li>
          <li style={{ marginRight: '10px' }}>
            <a href="/about" style={{ 
              color: '#fff',
              textDecoration: 'none',
              padding: '10px',
              borderRadius: '5px',
            }}>About</a>
          </li>
          <li style={{ marginRight: '10px' }}>
            <a href="/products" style={{ 
              color: '#fff',
              textDecoration: 'none',
              padding: '10px',
              borderRadius: '5px',
            }}>Courses</a>
          </li>
          <li style={{ marginRight: '10px' }}>
            <a href="/contacts" style={{ 
              color: '#fff',
              textDecoration: 'none',
              padding: '10px',
              borderRadius: '5px',
            }}>Contacts</a>
          </li>
        </ul>
        
        <ul style={{ 
          listStyleType: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          alignItems: 'center',
        }}>
          <li style={{ 
            position: 'relative', 
            marginRight: '100px',
            cursor: 'pointer',
            color: '#fff',
            fontSize:'14px',
          }} onClick={() => setDropdownOpen(!dropdownOpen)}>
            {user && user.email}
            {dropdownOpen && (
              <ul style={{ 
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: '#333',
                listStyleType: 'none',
                padding: '5px',
                borderRadius: '5px',
                zIndex: 1,
              }}>
                <li style={{ 
                  cursor: 'pointer',
                  color: '#fff',
                  padding: '5px 10px',
                }}>Profile</li>
                <li style={{ 
                  cursor: 'pointer',
                  color: '#fff',
                  padding: '5px 10px',
                }} onClick={handleLogout}>Logout</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      <div style={{
  padding: '50px',
  background: 'linear-gradient(to bottom, #FFC0CB, #FFFAFA)',
}}>
    <div style={{ textAlign: 'center', marginBottom: '50px' }}><br /><br /><br />
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>REACT JS</h1><br />
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>Welcome to ReactJS Tutorial! Learn ReactJS to build dynamic and interactive web applications.</p>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>Discover the power of ReactJS! Elevate your web development skills and create stunning user interfaces with ease.</p>
      <button style={{ backgroundColor: '#0dd943', color: 'white', padding: '20px 30px', fontSize: '1.2rem', borderRadius: '50px', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>
      GET STARTED
      </button>
    </div>

    <div style={{ padding: '0 40px', textAlign: 'center' , marginLeft:'150px', marginRight:'150px'}}>
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


      <section style={{ backgroundColor:"#101010", color:"white", width:"1670px", marginLeft:"-140px", marginTop:"0px", marginBottom:"-90px" }} >
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
            <p style={{ fontSize: '14px', marginTop: '40px', textAlign:'center', paddingLeft:'170px',paddingRight:'80px'}}>© 2024 ReactJS Tutorial. All rights reserved.</p>
          </div>
        </footer>
      </section>  
    </div>

    </div>
  )
}

export default Home