import React from "react";
import NumberLine from "../Components/NumberLine";
import Cards from "../assets/Cards.png";

function HowItWorks() {
  return (
    <div className="howitworks-container">
      <div className="howitworks-texts">
        <h3>HOW IT WORKS</h3>
        <h1>
          How it works in
          <br /> three simple steps
        </h1>
        <p>
          From setting goals to tracking your progress-here's how we help
          <br /> you take control of your money in just a few easy steps.
        </p>
      </div>
      <div className="howitworks">
        <div className="number-line-container">
          <NumberLine />
          <div className="howitworks-images">
            <img src={Cards} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
