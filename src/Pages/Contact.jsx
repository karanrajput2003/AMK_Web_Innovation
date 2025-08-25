import React from "react";
import ContactUs from "../assets/contactus.svg"; 
import "../CSS/Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-left">
            <h3 className="contact-upperetitle">Contact US</h3>
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-subtitle">
              Have questions or need help? Fill out the form and we'll be in touch.
            </p>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-field">
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="message" className="form-label">Message:</label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  className="form-textarea"
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="form-submit">Submit</button>
            </form>
          </div>

          {/* Right: Image */}
          <div className="contact-right">
            <img
              src={ContactUs}
              alt="Contact us"
              width="600"
              height="400"
              className="contact-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
