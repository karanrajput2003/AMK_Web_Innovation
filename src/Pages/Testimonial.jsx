import React from "react";
import TestimonialImg from "../assets/testimonial.png"; // use same image for now
import "../CSS/Testimonial.css";

const testimonials = [
  {
  quote: "Great service and very supportive team. They understood my requirements clearly and guided me throughout the project.",
  name: "Ravi Kumar",
  role: "Startup Founder",
  img: TestimonialImg,
},
{
  quote: "They delivered exactly what I needed on time. The quality of work and communication made the whole process stress-free.",
  name: "Sneha Patel",
  role: "Marketing Manager",
  img: TestimonialImg,
},
{
  quote: "Professional work and smooth process throughout. The team was quick to respond and made valuable suggestions for improvements.",
  name: "Amit Singh",
  role: "Freelancer",
  img: TestimonialImg,
},
{
  quote: "Highly recommend them for reliable solutions. Their dedication and timely support made a big difference for my business.",
  name: "Neha Gupta",
  role: "Business Owner",
  img: TestimonialImg,
}
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

