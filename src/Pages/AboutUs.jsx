import React from "react";
//import AboutImg from "../assets/security.png"; // replace with your own image
import "../CSS/AboutUs.css";

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-texts">
        <h3>ABOUT US</h3>
        <h1>
          AMK Web Innovation <br /> Crafting Digital Experiences
        </h1>
        <p>
          At <span className="highlight">AMK Web Innovation</span>, we don’t just build websites — 
          we craft digital experiences that inspire trust, engage audiences, and 
          drive growth. From enterprise solutions to cloud-powered innovations, 
          our team combines creativity with cutting-edge technology to transform 
          your vision into a powerful online presence.
        </p>
        <button>Learn More</button>
      </div>
      <div className="about-images">
{/*         <img src={AboutImg} alt="About AMK Web Innovation" /> */}
      </div>
    </div>
  );
}

export default AboutUs;

