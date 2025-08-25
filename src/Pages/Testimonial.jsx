import React from "react";
import TestimonialImg from "../assets/testimonial.png"; // use same image for now
import "../CSS/Testimonial.css";

const testimonials = [
  {
    quote:
      "AMK Web Innovation helped us launch a modern and dynamic website. The process was smooth, and their support is unmatched.",
    name: "Arjun Mehta",
    role: "Entrepreneur",
    img: TestimonialImg,
  },
  {
    quote:
      "Their cloud and automation solutions transformed the way we handle projects. Reliable, efficient, and always available.",
    name: "Priya Sharma",
    role: "Project Manager",
    img: TestimonialImg,
  },
  {
    quote:
      "We got a professional website with timely delivery. The team truly understands business needs and delivers with precision.",
    name: "Rahul Verma",
    role: "Business Owner",
    img: TestimonialImg,
  },
];

function Testimonial() {
  return (
    <div className="testimonial-container">
      <div className="testimonial-texts">
        <h3>TESTIMONIALS</h3>
        <h1>
          What Our Clients <br /> Say About Us
        </h1>
        <p>
          From everyday wins to big milestones — here’s how
          <br /> we’ve helped businesses achieve their digital goals.
        </p>
      </div>

      <div className="testimonial-scroll">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="quote">“{t.quote}”</div>
            <div className="author">
              <img src={t.img} alt={t.name} />
              <div>
                <h3>{t.name}</h3>
                <h6>{t.role}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
