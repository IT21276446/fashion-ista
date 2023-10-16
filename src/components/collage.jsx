import React from 'react';
import '../styles/collage.css';
import image8 from '../images/8.jpg';
import image9 from '../images/9.jpg';
import image10 from '../images/10.jpg';

const Collage = () => {
  return (
    <div className='collage'>
    <h1>Fashion collection that you will love</h1>
    <h3>The fashion service offers innovative and unique styles<br/> that go beyond conventional fashion trends</h3>
    <div class="container-c">
      <div class="row">
        <div class="img img-1"></div>
        <div class="img img-2"></div>
        <div class="img img-3"></div>
        <div class="img img-4"></div>
  </div>
    </div>
    </div>
    
  );
};

export default Collage;
