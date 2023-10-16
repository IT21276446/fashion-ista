import React from 'react';
import '../styles/join.css';
import ae from '../images/ae.jpg'
import sc from '../images/sc.jpeg'
import sr from '../images/sr.jpg'

const Join = () => {
  return (
    <div className="join-us-container">
      <div className="header">
      <h1>Join Us</h1>
      </div>
      <div className="card">
        <img src={ae} alt="Card 1" />
        <div className="card-content">
          <h2>Account Executive</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
          <button href="#">Read more</button>
        </div>
      </div>
      <div className="card">
        <img src={sc} alt="Card 2" />
        <div className="card-content">
          <h2>Sales Consultant</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
          <button href="#">Read more</button>
        </div>
      </div>
      <div className="card">
        <img src={sr} alt="Card 3" />
        <div className="card-content">
          <h2>Sales Representatives</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
          <button href="#">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Join;
