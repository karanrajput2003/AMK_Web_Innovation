import React from "react";
import Calculator from "../assets/calculator.png";
import payonline from "../assets/payonline.png";
import personalfinance from "../assets/personalfinance.png";
import predictive from "../assets/predictive.png";
import "../CSS/Features.css";

function Features() {
  return (
    <div className="feature-container">
      <div className="feature-texts">
        <h3>FEATURES</h3>
        <h1>
          Powerful features for
          <br /> smarter financial decisions
        </h1>
        <p>
          Everything you need to take control of your finances — built to be
          simple, secure and smart.
        </p>
      </div>

      <div className="feature-images">
        <div>
          <img src={Calculator} alt="Calculator" />
          <img src={payonline} alt="Pay Online" />
        </div>
        <div>
          <img src={personalfinance} alt="Personal Finance" />
          <img src={predictive} alt="Predictive Insights" />
        </div>
      </div>
    </div>
  );
}

export default Features;
