import React from 'react';
import Footer from './Footer';

const Courses = () => {
  return (
    <div style={{ padding: '50px' }}><br /><br />
      <h2>Available Course Tutorials</h2><br /><br />
      <p style={{ fontSize: '18px', marginBottom: '30px' }}>Welcome to the ReactJS Tutorial courses page! Explore our range of courses to master ReactJS and enhance your web development skills.</p>
      <br /><br />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '30px' }}>
        {/* Course 1 */}
        <div style={{ flexBasis: 'calc(33.33% - 20px)', textAlign: 'center', marginBottom: '30px' }}>
          {/* Course image */}
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*WfhViON2evomOK2tw09AuQ.jpeg" alt="Course 1" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
          <br />
          <br />
          {/* Course title */}
          <h3>ReactJS Fundamentals</h3>
          {/* Course description */}
          <p>Master the fundamentals of ReactJS and learn how to build dynamic user interfaces.</p>
        </div>

        {/* Course 2 */}
        <div style={{ flexBasis: 'calc(33.33% - 20px)', textAlign: 'center', marginBottom: '30px' }}>
          {/* Course image */}
          <img src="https://i.ytimg.com/vi/MfIoAG3e7p4/maxresdefault.jpg" alt="Course 1" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
          <br />
          <br />
          {/* Course title */}
          <h3>Advanced ReactJS Techniques</h3>
          {/* Course description */}
          <p>Dive deep into advanced ReactJS concepts and techniques to build complex applications with ease.</p>
        </div>

        {/* Course 3 */}
        <div style={{ flexBasis: 'calc(33.33% - 20px)', textAlign: 'center', marginBottom: '30px' }}>
          {/* Course image */}
          <img src="https://i.ytimg.com/vi/DiLVAXlVYR0/maxresdefault.jpg" alt="Course 1" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
          <br />
          <br />
          {/* Course title */}
          <h3>ReactJS and Redux</h3>
          {/* Course description */}
          <p>Learn how to integrate Redux with ReactJS to manage application state effectively.</p>
        </div>
      </div><br /><br />
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

export default Courses;
