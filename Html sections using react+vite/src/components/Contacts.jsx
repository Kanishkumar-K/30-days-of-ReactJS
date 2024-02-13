import React from 'react';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contacts.css'

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h2>Contact Information</h2> <br /><br />
      <div className="contact-details">
        <div className="contact-item">
          <FontAwesomeIcon icon={faFacebook} />
          <a href="https://www.facebook.com/example">Facebook</a>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faTwitter} />
          <a href="https://twitter.com/example">Twitter</a>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faInstagram} />
          <a href="https://www.instagram.com/example">Instagram</a>
        </div><br /><br /><br />
        <div className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} /><br /><br /><br />
          <span className="co">Official Address (Location)</span><br /><br />
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} /><br />
          <span>Contact Number: +1234567890</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} /><br />
          <span>Email: example@example.com</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
