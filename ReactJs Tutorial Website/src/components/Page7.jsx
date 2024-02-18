import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import UseEffect from './UseEffect';
import img3 from './img/img3.png';
import { useEffect } from 'react';

function Page7() {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);


  return (
    <div style={{ 
      backgroundImage: "linear-gradient(to right, #ffefba, #ffffff)",
      width:"1378px" ,
      marginTop:"13px"
    }}> 

      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}><br /><br />UseEffect Hook </h1><br />
      <p style={{ color: '#010', fontSize: '16px', textAlign:'left' ,lineHeight: '1.6' , marginLeft:'200px'}}>The UseEffect Hook allows you to perform side effects in your components.<br />Some examples of side effects are: fetching data, directly updating the DOM, and timers.
      </p><br />
      <p style={{marginLeft:"00px"}}><img src="https://qph.cf2.quoracdn.net/main-qimg-043d835feb9d9333f81e97f858f37600-pjlq" width="500px" height="570px" /></p><br /><br />
      <h1 style={{ color: '#000', fontSize: '24px', textAlign:'left' , marginBottom: '10px', marginLeft:'200px', marginTop:"00px" }}>Example </h1><br />

   
      <div style={{marginLeft:"-380px"}}>
        <img src={img3} height="450px" width="430px"/>
      </div>
      <div style={{paddingLeft:"800px", marginTop:"-400px" , width:"90%"}}>
      <h3>Output</h3><br />
        <UseEffect />
        </div>
      <div>
    </div>
    <br />
    <Link to="/"><br /><br />
    <button style={{textAlign:"right", backgroundColor:"#0dd943", color:"black", marginTop:"570px", float:"right", marginRight:"120px"}}>Next Section</button>
      </Link>
      <br />
      <br />

      <Sidebar /> <br /><br />
      <div>
      <p style={{ textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; `useEffect` is a hook in React that allows you to perform side effects in function components. Side effects may include data fetching, subscriptions, or manually changing the DOM.</p>
      <p style={{ textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; In this component, `useEffect` is used to set up a timer that increments the counter every second.</p>
      <p style={{ textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; When the component mounts (`[]` as the second argument to `useEffect`), it creates an interval that increases the counter's value by 1 every second using `setCounter`.</p>
      <p style={{ textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; The return function inside `useEffect` acts as cleanup. It clears the interval when the component unmounts to avoid memory leaks or unnecessary computations.</p>
      <p style={{ textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; The counter state is initialized using `useState`, and it starts at 0.</p>
      <p style={{ textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; There's also a button labeled "Increment Counter" that calls the `handleIncrement` function when clicked, which manually increments the counter by 1.</p>
      <p style={{ textAlign: 'justify', paddingLeft: '300px', paddingRight: '300px' }}>&#8226; The background color of the container alternates between 'lightblue' and 'lightgreen' based on whether the counter is even or odd (`counter % 2 === 0`). This is done by dynamically setting the `backgroundColor` variable inside the component based on the counter value.</p>
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

export default Page7;
