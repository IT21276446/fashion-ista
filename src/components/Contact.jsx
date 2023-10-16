import React, {useState,useMemo } from 'react';
import Select from 'react-select'
import '../styles/contact.css';
import {Email, LocationOn, Phone} from '@mui/icons-material';
import countryList from 'react-select-country-list';


const ContactUs = () => {

  const [value, setValue] = useState('')

  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    country: '',
    gender: '',
    message: '',
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = `${formData.firstName} ${formData.lastName}`;
    alert(`Thank you, ${fullName}`);
    console.log(formData);

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      country: '',
      gender: '',
      message: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <div className="contact-us-container">
      <div className="contact-info">
        <div className="info-item">
          <Phone className="icon" />
          <span>Phone Number: </span>
          <p>+1 123 456 789</p>
        </div>
        <div className="info-item">
          <Email className="icon"  />
          <span>Email Address: </span>
          <p>example@example.com</p>
        </div>
        <div className="info-item">
          <LocationOn className="icon"  />
          <span>Address: </span>
          <p>123 Street Name, City, Country</p>
        </div>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
            <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
            <label>Last Name</label>
              <input 
              type="text" 
              name="lastName"
              placeholder="Enter your Last Name" 
              value={formData.lastName}
              onChange={handleInputChange}
              required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
            <label>Email Address</label>
              <input 
              type="email" 
              name="email"
              placeholder="Enter your Email Address" 
              value={formData.email}
              onChange={handleInputChange}
              required
              />
            </div>
            <div className="form-group">
            <label>Address</label>
              <input 
              type="text" 
              name="address"
              placeholder="Enter your Address"
              value={formData.address}
              onChange={handleInputChange}
               />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
            <label>Country</label>
            <Select options={options} value={value} onChange={changeHandler} required/>
            </div>
            <div className="form-group">
              <label>
                Gender
                <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleInputChange}
              required
            />
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleInputChange}
              required
            />
            Female
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Message</label>
              <textarea rows="6" placeholder='Tell us about your specific requirements' required></textarea>
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
