import React from "react";
import ecommerceImg from "../assets/calculator.png";
import financeAppImg from "../assets/Cards.png";
import erpImg from "../assets/payonline.png";
import "../CSS/Features.css";

const Features = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A scalable e-commerce platform with intuitive UI, secure payments, and seamless shopping experiences for customers worldwide.",
      image: ecommerceImg,
      link: "#ecommerce",
    },
    {
      id: 2,
      title: "Finance Tracking App",
      description:
        "A smart mobile application to manage personal finances, track expenses, set budgets, and get AI-driven financial insights.",
      image: financeAppImg,
      link: "#financeapp",
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
