import React from "react";
import AarogyaImg from "../assets/Aarogya_Bharat.png";
import VikasImg from "../assets/image.png";
import erpImg from "../assets/payonline.png";
import "../CSS/Features.css";

const Features = () => {
  const projects = [
    {
      id: 1,
      title: "Aarogya Bharat",
      description:
        "A telehealth platform enabling seamless virtual consultations with role-based logins, secure patient record access via QR codes, and an AI-powered audio-to-audio chatbot for instant medical recommendations.",
      image: AarogyaImg,
      link: "https://aarogya-bharat.vercel.app/",
    },
    {
      id: 2,
      title: "Vikas Setu",
      description:
        "A collaborative platform acting as a mediator between Departments, Admins, Field Officers, Project Managers, and Contractors, ensuring seamless communication, efficient coordination, and transparent project management.",
      image: VikasImg,
      link: "https://vikas-setu.vercel.app/",
    },
    {
      id: 3,
      title: "Enterprise ERP System",
      description:
        "A powerful ERP solution designed to streamline operations, optimize workflows, and improve decision-making for enterprises.",
      image: erpImg,
      link: "#erp",
    },
  ];

  return (
    <section className="features" id="features">
      <div className="features__container">
        <header className="features__header">
          <span className="features__subtitle">Our Projects</span>
          <h2 className="features__title">
            Powerful solutions for
            <br />
            smarter businesses
          </h2>
          <p className="features__description">
            We deliver custom software projects tailored to help businesses
            grow, stay secure, and make smarter decisions.
          </p>
        </header>

        <div className="projects">
          <div className="projects__grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-card__image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card__image"
                    loading="lazy"
                  />
                </div>
                <div className="project-card__content">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className="project-card__link"
                    aria-label={`View ${project.title} project`}
                  >
                    View Project →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

