import React from 'react';

function Footer() {
  return (
    <footer style={{marginBottom:"-40px",backgroundColor: '#333', color: '#fff', padding: '40px 0', textAlign: 'center', fontFamily: 'serif', width:"1300px", marginLeft:"90px", paddingLeft:"10px"}}><br />
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
    <div><br />
      <p style={{ fontSize: '14px', marginTop: '40px' }}>© 2024 ReactJS Tutorial. All rights reserved.</p>
    </div>
  </footer>
  );
}

export default Footer;
