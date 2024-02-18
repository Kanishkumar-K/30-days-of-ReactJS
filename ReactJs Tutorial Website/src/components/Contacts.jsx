import React from 'react';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contacts = () => {
  return (
    <div style={{ padding: '50px'}}><br/><br/>
      <h2>Contact Information</h2><br/>
      <p style={{ fontSize: '18px', marginBottom: '30px' }}>Welcome to ReactJS Tutorial! Learn ReactJS to build dynamic and interactive web applications.</p>
      <p style={{ fontSize: '18px', marginBottom: '30px' }}>Discover the power of ReactJS! Elevate your web development skills and create stunning user interfaces with ease.</p>

      <br />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '30px' }}>
        <div style={{ flexBasis: 'calc(33.33% - 20px)', textAlign: 'center', marginBottom: '30px' }}>
          <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '24px', marginBottom: '10px' }} /><br />
          <span>Official Address (Location)</span>
        </div>

        <div style={{ flexBasis: 'calc(33.33% - 20px)', textAlign: 'center', marginBottom: '30px' }}>
          <FontAwesomeIcon icon={faPhone} style={{ fontSize: '24px', marginBottom: '10px' }} /><br />
          <span>Contact Number: +1234567890</span>
        </div>

        <div style={{ flexBasis: 'calc(33.33% - 20px)', textAlign: 'center', marginBottom: '30px' }}>
          <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '24px', marginBottom: '10px' }} /><br />
          <span>Email: example@example.com</span>
        </div>
      </div><br/><br/>

      <div style={{ flexBasis: '100%', marginTop: '50px', textAlign: 'center' }}>
        <h3>Follow Us</h3>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <a href="https://www.facebook.com/example" style={{ margin: '0 10px', color:"grey" }}>
            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '24px' }} />
          </a>
          <a href="https://twitter.com/example" style={{ margin: '0 10px',color:"grey" }}>
            <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '24px' }} />
          </a>
          <a href="https://www.instagram.com/example" style={{ margin: '0 10px',color:"grey" }}>
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '24px' }} />
          </a>
        </div><br/><br/>
      </div>
      <section style={{ backgroundColor:"#101010", color:"white", width:"1700px", marginLeft:"-210px", marginTop:"30px", marginBottom:"-90px" }} >
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

export default Contacts;
