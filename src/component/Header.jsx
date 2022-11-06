import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="bgImage">
      <div className="head">
        <div className="head-first">Modular Grandeur</div>
        <div className="head-second">Top-Notch Kitchen and Wardrobe Furniture</div>
        <div className="head-three">A dash of elegance, a touch of beauty</div>
      </div>
      </div>
      <div className="container-header">
        <div>
          <div className="logo">Dona</div>
        </div>
        <div className="navbar">
          <div>Collection</div>
          <div>Our Partner</div>
          <div>Blog</div>
          <div>About Us</div>
          <div>Contact Us</div>
          <button>Download</button>

        </div>
      </div>
    </>
  );
};
export default Header;
