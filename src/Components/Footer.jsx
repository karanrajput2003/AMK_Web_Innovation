import React from "react";
import "../CSS/Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer-container">
        {/* Left Text Section */}
        <div className="footer-texts">
          <h1>AMK Web Innovation</h1>
          <p>
            Digital Dreams Engineered to Reality. We deliver enterprise
            applications, cloud solutions, automation, IT infrastructure,
            cybersecurity, and professional services to empower businesses for
            the future.
          </p>
        </div>

        {/* Right Links Section */}
        <div className="footer-links">
          <div className="links">
            <h3>Company</h3>
            <p>About Us</p>
            <p>Projects</p>
            <p>Careers</p>
          </div>
          <div className="links">
            <h3>Services</h3>
            <p>Enterprise Applications</p>
            <p>Cloud Services</p>
            <p>Cybersecurity</p>
          </div>
          <div className="links">
            <h3>Support</h3>
            <p>Contact Us</p>
            <p>Resources</p>
            <p>Help Desk</p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-copyright">
        &#169; {new Date().getFullYear()} AMK Web Innovation. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
