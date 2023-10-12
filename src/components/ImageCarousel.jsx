import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/carousel.css';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-text">
        <h1>FASHIONISTA</h1>
        <p>Your fashion brand</p>
      </div>
      <Carousel showStatus={false} showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img src={image1} alt="Image 1" />
        </div>
        <div>
          <img src={image2} alt="Image 2" />
        </div>
        <div>
          <img src={image3} alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
