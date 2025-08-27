import React, { useState } from "react";
import ContactUs from "../assets/contactus.svg";
import "../CSS/Contact.css";

function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xyzdyrnj", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left: Form */}
          <div className="contact-left">
            <h3 className="contact-upperetitle">Contact Us</h3>
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-subtitle">
              Have questions or need help? Fill out the form and we'll be in
              touch.
            </p>

            {/* Formspree Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="mobile" className="form-label">
                  Mobile No:
                </label>
                <input
                  id="mobile"
                  type="tel"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  className="form-input"
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit mobile number"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="message" className="form-label">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  className="form-textarea"
                  rows="5"
                  required
                />
              </div>

              <button
                type="submit"
                className="form-submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Submit"}
              </button>

              {/* ✅ Status Messages */}
              {status === "success" && (
                <p className="form-success">
                  Thank you! Your message has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="form-error">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
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
