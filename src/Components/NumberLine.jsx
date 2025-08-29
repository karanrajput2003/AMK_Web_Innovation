import React from "react";
import "../CSS/Services.css";

const NumberLine = () => {
  const services = [
    "Website Design & Development",
    "Mobile App Development",
    "E-commerce & Retail",
    "Enterprise Software Development",
    "Digital Services",
    "IT Infrastructure Services",
    "Cyber Security",
    "Custom Software Development",
  ];

  return (
    <div className="number-container">
      {/* First column with 5 */}
      <div className="column">
        {services.slice(0, 4).map((service, index) => (
          <div key={index} className="steps">
            <div className="number">
              <div className="number-background">{index + 1}</div>
            </div>
            <div>
              <div className="step-name">{service}</div>
              <div className="step-description">
                Professional solutions tailored to meet your business needs with
                innovation and reliability.
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second column with 4 */}
      <div className="column2">
        {services.slice(4).map((service, index) => (
          <div key={index + 4} className="steps">
            <div className="number">
              <div className="number-background">{index + 5}</div>
            </div>
            <div>
              <div className="step-name">{service}</div>
              <div className="step-description">
                Professional solutions tailored to meet your business needs with
                innovation and reliability.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberLine;
