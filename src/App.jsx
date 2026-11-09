
import { useEffect, useState } from "react";
import "./App.css";

// ==========================================
// ASSETS
// ==========================================

import uc from "./assets/images/uc.png";
import ucHotel from "./assets/images/uc_hotel.png";
import ucHotelGrid from "./assets/images/uc_hotel_grid.png";

import ucPb1 from "./assets/images/uc_pb1.png";
import ucPb2 from "./assets/images/uc_pb2.png";
import ucPb3 from "./assets/images/uc_pb3.png";

import ucConsultant1 from "./assets/images/uc_consultant.png";
import ucConsultant2 from "./assets/images/uc_consultant2.png";
import ucConsultant3 from "./assets/images/uc_consultant3.png";
import ucConsultant4 from "./assets/images/uc_consultant4.png";
import ucConsultant5 from "./assets/images/uc_consultant5.png";
import ucConsultant6 from "./assets/images/uc_consultant6.png";

import ucZindagi1 from "./assets/images/uc_zindagi.png";
import ucZindagi2 from "./assets/images/uc_zindagi2.png";
import ucZindagi3 from "./assets/images/uc_zindagi3.png";
import ucZindagi4 from "./assets/images/uc_zindagi4.png";
import ucZindagi5 from "./assets/images/uc_zindagi5.png";

// ==========================================
// PORTFOLIO DATA
// ==========================================

const skills = [
  "Angular",
  "React.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "WordPress",
  "Bubble.io",
  "REST APIs",
  "Git",
  "GitHub",
  "Figma",
];

const projects = [
  {
    number: "01",
    title: "Umrah Companions",
    category: "Travel & Booking Platform",
    description:
      "A comprehensive travel platform focused on Umrah packages, inquiries, hotel services and a seamless booking experience.",
    tech: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    image: [uc, ucHotel, ucHotelGrid],
    link: "#",
  },
  {
    number: "02",
    title: "Partners Dashboard",
    category: "Dashboard Application",
    description:
      "A dashboard application for managing partners, onboarding, business information, leads and operational activities.",
    tech: ["Angular", "TypeScript", "REST APIs"],
    image: [
      ucConsultant1,
      ucConsultant2,
      ucConsultant3,
      ucConsultant4,
      ucConsultant5,
      ucConsultant6,
    ],
    link: "#",
  },
  {
    number: "03",
    title: "Package Builder",
    category: "Booking & Checkout",
    description:
      "An interactive package-building experience with travel options, hotels, transportation and an integrated checkout flow.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: [ucPb1, ucPb2, ucPb3],
    link: "#",
  },
  {
    number: "04",
    title: "Umrah with Zindagi",
    category: "Fintech Integration | Mobile Application",
    description:
      "An integrated Umrah service within a banking application, providing users with convenient access to pilgrimage-related services through a seamless mobile experience.",
    tech: ["JavaScript", "HTML", "CSS", "Banking Integration"],
    image: [
      ucZindagi1,
      ucZindagi2,
      ucZindagi3,
      ucZindagi4,
      ucZindagi5,
    ],
    link: "#",
  },
];

const experience = [
  {
    date: "2025 — Present",
    role: "Frontend Developer",
    company: "Umrah Companions / Funadiq",
    description:
      "Working on web platforms, booking experiences, dashboards, responsive interfaces and frontend functionality.",
  },
  {
    date: "2022 — 2025",
    role: "JavaScript Developer",
    company: "Softosol",
    description:
      "Worked on web development projects using JavaScript, Angular, Node.js, WordPress and Bubble.io.",
  },
  {
    date: "2021 — 2022",
    role: "Intern Web Developer",
    company: "Atlantis BPO Solution",
    description:
      "Developed responsive websites and custom web applications using Laravel and frontend technologies.",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/laraib610",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/laraib-khan-9b3a551a4",
  },
];

// ==========================================
// REUSABLE PROJECT SLIDESHOW
// ==========================================

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

  const images = project.image;

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  // Automatically change images every 3.5 seconds
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(nextSlide, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <article className="project-card">
      <div className="project-image">
        <img
          src={images[currentImage]}
          alt={`${project.title} screenshot ${currentImage + 1}`}
          loading="lazy"
        />

        <span className="project-number">
          {project.number}
        </span>

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="slider-arrow prev"
              onClick={prevSlide}
              aria-label="Previous screenshot"
            >
              &#10094;
            </button>

            <button
              type="button"
              className="slider-arrow next"
              onClick={nextSlide}
              aria-label="Next screenshot"
            >
              &#10095;
            </button>

            <div className="slider-dots">
              {images.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  className={`slider-dot ${
                    currentImage === index ? "active" : ""
                  }`}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Show screenshot ${index + 1}`}
                  aria-current={
                    currentImage === index ? "true" : undefined
                  }
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="project-info">
        <p className="project-category">
          {project.category}
        </p>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech">
          {project.tech.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        {project.link !== "#" && (
          <a
            href={project.link}
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            View project ↗
          </a>
        )}
      </div>
    </article>
  );
}

// ==========================================
// SECTION COMPONENTS
// ==========================================

function SectionHeading({ number, eyebrow, title, highlight, description }) {
  return (
    <>
      <p className="eyebrow">
        {number} / {eyebrow}
      </p>

      <h2>
        {title} <span>{highlight}</span>
      </h2>

      {description && (
        <p className="section-description">{description}</p>
      )}
    </>
  );
}

function ProjectSection() {
  return (
    <section className="projects section" id="projects">
      <SectionHeading
        number="03"
        eyebrow="SELECTED WORK"
        title="Projects I'm"
        highlight="proud of."
        description="A selection of projects and interfaces I've contributed to."
      />

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.number}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="experience section" id="experience">
      <SectionHeading
        number="04"
        eyebrow="EXPERIENCE"
        title="My professional"
        highlight="journey."
      />

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.company}>
              <span className="timeline-dot" />

              <div>
                <p className="timeline-date">{item.date}</p>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
    </section>
  );
}

// ==========================================
// MAIN APP
// ==========================================

function App() {
  return (
    <div className="portfolio">
      <div className="bubble-background">
    {Array.from({ length: 12 }).map((_, index) => (
      <span
        key={index}
        className={`bubble bubble-${index + 1}`}
      />
    ))}
  </div>

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Laraib<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="nav-contact">
            Contact ↗
          </a>
        </div>
      </nav>

      <main>

        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              HELLO, I'M LARAIB MUSHTAQ
            </p>

            <h1>
              Building digital
              <br />
              experiences with
              <br />
              <span>creativity & code.</span>
            </h1>

            <p className="hero-description">
              I'm a Frontend Developer passionate about creating
              responsive, intuitive and visually engaging web
              applications that make a difference.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                Explore my work ↗
              </a>

              <a href="#contact" className="btn-secondary">
                Let's talk
              </a>
            </div>

            <div className="hero-status">
              <span className="status-dot" />
              Open to exciting opportunities
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <div className="code-header">
                <span />
                <span />
                <span />
                <small>developer.js</small>
              </div>

              <pre>
                <code>
                  <span className="code-purple">const</span> developer = {"{"}
                  {"\n"}  name: <span className="code-green">"Laraib"</span>,
                  {"\n"}  role: <span className="code-green">"Frontend Developer"</span>,
                  {"\n"}  passion: <span className="code-green">"Building UI"</span>,
                  {"\n"}  skills: [
                  {"\n"}    <span className="code-green">"Angular"</span>,
                  {"\n"}    <span className="code-green">"React"</span>,
                  {"\n"}    <span className="code-green">"TypeScript"</span>
                  {"\n"}  ]
                  {"\n"}{"}"};
                  {"\n\n"}
                  <span className="code-purple">console</span>.log(
                  <span className="code-green">"Let's build!"</span>);
                </code>
              </pre>

              <div className="code-footer">
                <span>● Available for opportunities</span>
                <span>JavaScript</span>
              </div>
            </div>

            <div className="floating-tag tag-one">
              ✦ Creative UI
            </div>

            <div className="floating-tag tag-two">
              {"</>"} Clean Code
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about section" id="about">
          <SectionHeading
            number="01"
            eyebrow="ABOUT ME"
            title="Turning ideas into"
            highlight="digital experiences."
          />

          <div className="about-content">
            <p>
              I'm a Frontend Developer with experience building
              responsive websites, interactive dashboards and
              user-focused web applications. I enjoy transforming
              designs into clean, accessible and functional interfaces.
            </p>

            <p>
              My experience includes working with Angular, React,
              JavaScript and TypeScript, along with modern styling
              frameworks and API integrations. I also enjoy exploring
              WordPress and no-code development tools.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills section" id="skills">
          <SectionHeading
            number="02"
            eyebrow="MY TOOLKIT"
            title="Technologies I"
            highlight="work with."
          />

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-item" key={skill}>
                <span>✳</span> {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <ProjectSection />

        {/* EXPERIENCE */}
        <ExperienceSection />

        {/* CONTACT */}
        <section className="contact section" id="contact">
          <p className="eyebrow">05 / GET IN TOUCH</p>

          <h2>Have a project in mind?</h2>
          <h2>
            <span>Let's build something great.</span>
          </h2>

          <p>
            I'm always interested in connecting with people,
            exploring opportunities and collaborating on meaningful projects.
          </p>

          <a
            href="mailto:laraibkhan8242@gmail.com"
            className="btn-primary"
          >
            Send me an email ↗
          </a>

          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
              >
                {social.name} ↗
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <a href="#home" className="logo">
          Laraib<span>.</span>
        </a>

        <p>Designed & developed by Laraib Mushtaq</p>

        <p>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
