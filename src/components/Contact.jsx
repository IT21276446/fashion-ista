import React from 'react';
import '../styles/contact.css';
import {Email, LocationOn, Phone} from '@mui/icons-material';


const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-info">
        <div className="info-item">
          <Phone />
          <span>Phone Number</span>
          <p>+1 123 456 789</p>
        </div>
        <div className="info-item">
          <Email />
          <span>Email Address</span>
          <p>example@example.com</p>
        </div>
        <div className="info-item">
          <LocationOn />
          <span>Address</span>
          <p>123 Street Name, City, Country</p>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-row">
            <div className="form-group">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Address" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="text" placeholder="Country" />
            </div>
            <div className="form-group">
              <label>
                Gender:
                <input type="radio" name="gender" value="male" /> Male
                <input type="radio" name="gender" value="female" /> Female
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Message:</label>
              <textarea rows="6"></textarea>
            </div>
          </div>
          <div className="form-row">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
