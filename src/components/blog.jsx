import React from 'react';
import '../styles/blog.css';
import image8 from '../images/8.jpg';
import image9 from '../images/9.jpg';
import image10 from '../images/10.jpg';

const Blog = () => {
  return (
    <div className='collage'>
      <h1>Explore our blog</h1>
      <h3>The fashion service offers innovative and unique styles<br/> that go beyond conventional fashion trends</h3>
      <div className="container-c">
        <div className="row">
          <div className="img img-1">
            <p>Clothing</p>
            <button>Learn More</button>
          </div>
          <div className="img img-2">
            <p>Accessories</p>
            <button>Learn More</button>
          </div>
          <div className="img img-3">
            <p>Fashion Designing</p>
            <button>Learn More</button>
          </div>
          <div className="img img-4">
            <p>Modeling</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
