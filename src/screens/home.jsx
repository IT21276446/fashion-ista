import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import Join from "../components/Join";
import ContactUs from "../components/Contact";
import Collage from "../components/collage";
import Values from "../components/values";
import Blog from "../components/blog";
import '../styles/home.css';

const Home = () => {
  return (
    <>
    <div className="bck">
    <Header/>
    </div>
    <ImageCarousel />
    <Values/>
    <div className="grd">
    <Collage/>
    </div>
    <div className="bck">
    <Join />
    </div>
    
    <ContactUs />
    <div className="grd" >
    <Blog/>
    </div>
    <Footer/>
    </>
    
  );
};

export default Home;