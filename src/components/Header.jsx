import React from "react";
import '../styles/header.css';

const Header = () => {
  return (
    <div class="container">
  <div class="header">
    <h1 style={{ textAlign: "left" }}>Fashionista</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">Men</a>
    <a href="#">Women</a>
      <a href="#">Kids</a>
      <a href="#">Login</a>
    </nav>
  </div>

  <hr />

  <div class="content">
    <p>Fashion is a form of self expression. It's a<br/> way to show the world who you are <br/>and what you stand for.</p>
    <h3>Choose your fashion style</h3>
    <div class="social-media">
      <a href="#">Instagram</a>
      <a href="#">Facebook</a>
      <a href="#">Twitter</a>
    </div>
  </div>
</div>
  );
};

export default Header;