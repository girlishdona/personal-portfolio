import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          Dona<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">

        <div className="hero-text">
          <p className="small-title">HELLO, I'M</p>

          <h1>
            Dona <span>Ganguly</span>
          </h1>

          <h2>BCA Student & Aspiring Software Developer</h2>

          <p className="description">
            I love creating modern websites, learning new technologies
            and developing creative solutions using code.
          </p>

          <div className="buttons">
            <a href="#projects" className="primary-btn">
              View My Work →
            </a>

            <a href="#contact" className="outline-btn">
              Contact Me
            </a>
          </div>

          <div className="socials">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-circle">
            <div className="photo-placeholder">
              DG
            </div>
          </div>
        </div>

      </section>


      {/* About */}
      <section id="about" className="section">

        <p className="section-small">GET TO KNOW ME</p>

        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-card">

          <div className="about-icon">
            👩‍💻
          </div>

          <div>
            <h3>I'm Dona Ganguly</h3>

            <p>
              I am a BCA student passionate about software development,
              web technologies, databases and data visualization.
            </p>

            <p>
              I enjoy learning new technologies and turning ideas
              into useful and interactive applications.
            </p>
          </div>

        </div>

      </section>


      {/* Skills */}
      <section id="skills" className="section skills-section">

        <p className="section-small">WHAT I KNOW</p>

        <h2 className="section-title">
          My <span>Skills</span>
        </h2>

        <div className="skills">

          <div className="skill">
            <div className="skill-icon">HTML</div>
            <h3>HTML</h3>
            <p>Web Structure</p>
          </div>

          <div className="skill">
            <div className="skill-icon">CSS</div>
            <h3>CSS</h3>
            <p>Web Design</p>
          </div>

          <div className="skill">
            <div className="skill-icon">JS</div>
            <h3>JavaScript</h3>
            <p>Web Development</p>
          </div>

          <div className="skill">
            <div className="skill-icon">⚛</div>
            <h3>React</h3>
            <p>Frontend Development</p>
          </div>

          <div className="skill">
            <div className="skill-icon">PY</div>
            <h3>Python</h3>
            <p>Programming</p>
          </div>

          <div className="skill">
            <div className="skill-icon">C</div>
            <h3>C</h3>
            <p>Programming</p>
          </div>

          <div className="skill">
            <div className="skill-icon">SQL</div>
            <h3>SQL</h3>
            <p>Database</p>
          </div>

          <div className="skill">
            <div className="skill-icon">R</div>
            <h3>R</h3>
            <p>Data Analysis</p>
          </div>

        </div>

      </section>


      {/* Projects */}
      <section id="projects" className="section">

        <p className="section-small">MY RECENT WORK</p>

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <div className="projects">

          <div className="project-card">
            <div className="project-number">01</div>

            <h3>Hospital Management System</h3>

            <p>
              A database management system designed to manage
              patients, doctors, appointments, treatments and billing.
            </p>

            <div className="tags">
              <span>SQL</span>
              <span>DBMS</span>
            </div>
          </div>


          <div className="project-card">
            <div className="project-number">02</div>

            <h3>AI & Decent Work</h3>

            <p>
              An SDG 8 project exploring how Artificial Intelligence
              can support employment and skill development.
            </p>

            <div className="tags">
              <span>AI</span>
              <span>SDG 8</span>
            </div>
          </div>


          <div className="project-card">
            <div className="project-number">03</div>

            <h3>Data Visualization</h3>

            <p>
              Data analysis and visualization projects using Python
              and R to present meaningful insights.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>R</span>
            </div>
          </div>

        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="contact">

        <p className="section-small">LET'S CONNECT</p>

        <h2>
          Have a project in <span>mind?</span>
        </h2>

        <p>
          I'd love to hear from you and discuss new opportunities.
        </p>

        <a href="mailto:your-email@example.com" className="primary-btn">
          Say Hello →
        </a>

      </section>


      {/* Footer */}
      <footer>
        <p>© 2026 Dona Ganguly. Made with ❤️ and code.</p>
      </footer>

    </div>
  );
}

export default App;