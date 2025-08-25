import React from "react";
import NumberLine from "../Components/NumberLine";
import "../CSS/Services.css";

function Services() {
  return (
    <div className="services-container">
      <div className="services-texts">
        <h3>OUR SERVICES</h3>
        <h1>
          Comprehensive IT Solutions
          <br /> for Your Business
        </h1>
        <p>
          From web development to enterprise solutions, we provide innovative
          and reliable services to help your business thrive in the digital
          era.
        </p>
      </div>

      <div className="services-line-container">
        <NumberLine />
      </div>
    </div>
  );
}

export default Services;
