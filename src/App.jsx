
import "./App.css";

const skills = [
  "Angular", "React.js", "TypeScript", "JavaScript",
  "HTML5", "CSS3", "Tailwind CSS", "Bootstrap",
  "Node.js", "WordPress", "Bubble.io", "REST APIs",
  "Git", "GitHub", "Figma"
];

const projects = [
  {
    number: "01",
    title: "Umrah Companions",
    category: "Travel & Booking Platform",
    description:
      "A travel platform focused on Umrah packages, inquiries, hotel services and a smooth booking experience.",
    tech: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    image: "/images/umrah-homepage.png",
    link: "#"
  },
  {
    number: "02",
    title: "Partners Dashboard",
    category: "Dashboard Application",
    description:
      "A dashboard experience for managing partners, onboarding, business information, leads and operations.",
    tech: ["Angular", "TypeScript", "REST APIs"],
    image: "/images/partners-dashboard.png",
    link: "#"
  },
  {
    number: "03",
    title: "Package Builder",
    category: "Booking & Checkout",
    description:
      "An interactive package-building experience with travel options, hotels, transportation and checkout flow.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "/images/package-builder.png",
    link: "#"
  }
];

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          Laraib<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="nav-contact">Contact ↗</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">HELLO, I'M LARAIB MUSHTAQ</p>

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
              <span className="status-dot"></span>
              Open to exciting opportunities
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <div className="code-header">
                <span></span><span></span><span></span>
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
            <div className="floating-tag tag-one">✦ Creative UI</div>
            <div className="floating-tag tag-two">{"</>"} Clean Code</div>
          </div>
        </section>

        <section className="about section" id="about">
          <p className="eyebrow">01 / ABOUT ME</p>
          <h2>Turning ideas into <span>digital experiences.</span></h2>

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

        <section className="skills section" id="skills">
          <p className="eyebrow">02 / MY TOOLKIT</p>
          <h2>Technologies I <span>work with.</span></h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-item" key={skill}>
                <span>✳</span> {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="projects section" id="projects">
          <p className="eyebrow">03 / SELECTED WORK</p>
          <h2>Projects I'm <span>proud of.</span></h2>
          <p className="section-description">
            A selection of projects and interfaces I've contributed to.
          </p>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <span className="project-number">{project.number}</span>
                </div>

                <div className="project-info">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <a href={project.link} className="project-link">
                    View project ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section" id="experience">
          <p className="eyebrow">04 / EXPERIENCE</p>
          <h2>My professional <span>journey.</span></h2>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div>
                <p className="timeline-date">2025 — Present</p>
                <h3>Frontend Developer</h3>
                <h4>Umrah Companions / Funadiq</h4>
                <p>
                  Working on web platforms, booking experiences,
                  dashboards, responsive interfaces and frontend
                  functionality.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div>
                <p className="timeline-date">2022 — 2025</p>
                <h3>JavaScript Developer</h3>
                <h4>Softosol</h4>
                <p>
                  Worked on web development projects using JavaScript,
                  Angular, Node.js, WordPress and Bubble.io.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div>
                <p className="timeline-date">2021 — 2022</p>
                <h3>Intern Web Developer</h3>
                <h4>Atlantis BPO Solution</h4>
                <p>
                  Developed responsive websites and custom web
                  applications using Laravel and frontend technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <p className="eyebrow">05 / GET IN TOUCH</p>
          <h2>Have a project in mind?</h2>
          <h2><span>Let's build something great.</span></h2>
          <p>
            I'm always interested in connecting with people,
            exploring opportunities and collaborating on meaningful projects.
          </p>

          <a href="mailto:YOUR_EMAIL@example.com" className="btn-primary">
            Send me an email ↗
          </a>

          <div className="social-links">
            <a href="YOUR_GITHUB_URL" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </section>
      </main>

      <footer>
        <a href="#home" className="logo">Laraib<span>.</span></a>
        <p>Designed & developed with ♥ by Laraib Mushtaq</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
