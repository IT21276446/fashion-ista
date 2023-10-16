import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h2>Have something to talk about with our professionals?</h2>
        <div className="email-input">
          <input type="email" placeholder="Enter your email address" />
          <button className="send-button">&#10148;</button>
        </div>
        <div className="social-media-buttons">
          <button>Facebook</button>
          <button>Twitter</button>
          <button>Instagram</button>
          <button>LinkedIn</button>
        </div>
      </div>
      <div className="footer-columns">
        <div className="footer-column">
          <p>Menu</p>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Partnerships</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <p>Get Help</p>
          <ul>
            <li><a href="#">Support Career</a></li>
            <li><a href="#">24h Service</a></li>
            <li><a href="#">Quick Chat</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <p>Support</p>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Policy</a></li>
            <li><a href="#">Business</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
