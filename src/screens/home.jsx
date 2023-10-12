import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import Join from "../components/Join";
import ContactUs from "../components/Contact";
import '../styles/home.css';

const Home = () => {
  return (
    <>
    <div className="hdr">
    <Header/>
    </div>
    <ImageCarousel />
    <Join />
    <ContactUs />
    <Footer/>
    </>
    
  );
};

export default Home;