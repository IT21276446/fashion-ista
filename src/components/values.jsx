import React from "react";
import '../styles/values.css';
import image1 from '../images/5.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';

const Values = () => {
  return (
    <div className="container-v">
        <div className="centered-text">
        <h1>Top values for you</h1>
      <p>The fashion service offers innovative and unique styles
that go beyond<br/> conventional fashion trends</p>

        </div>
      
      
      <div className="card-container-v">
        <div className="card-v">
          <img src={image1} alt="Card 1" />
          <div className="card-content-v">
            <h2>Fashion event management</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
            <a href="#">Learn More</a>
          </div>
        </div>
        
        <div className="card-v">
          <img src={image2} alt="Card 2" />
          <div className="card-content-v">
            <h2>Personal styling</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
            <a href="#">Learn More</a>
          </div>
        </div>
        
        <div className="card-v">
          <img src={image3} alt="Card 3" />
          <div className="card-content-v">
            <h2>Fashion subscription boxes</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
