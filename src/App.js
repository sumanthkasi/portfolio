import React from "react";
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <img src="/sumanth.png" alt="Profile" className="profile-img" />
        <h1>Kaluvai Sumanth Kasi Reddy</h1>
        <p className="tagline">
          Python Full Stack | Software Developer | Frontend Developer
        </p>
        <div className="links">
          <a
            href="https://github.com/sumanthkasi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sumanth-kasi-reddy-kaluvai-543792304"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="/Resume.pdf" download className="resume-btn">
            Download Resume
          </a>
        </div>
      </header>

      <main className="content">
        <section className="section about animate">
          <h2>About Me</h2>
          <p>
            I'm a passionate Full Stack Developer currently pursuing B.Tech in
            Computer Science and Engineering (AI & Data Science) at Audisankara
            Institute of Technology, Gudur. I love building intelligent
            applications and exploring new technologies.
          </p>
        </section>

        <section className="section skills animate">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div>
              <h4>Languages</h4>
              <ul>
                <li>Python</li>
                <li>Java</li>
                <li>C</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div>
              <h4>Frameworks</h4>
              <ul>
                <li>Angular</li>
                <li>Django</li>
              </ul>
            </div>
            <div>
              <h4>Technologies</h4>
              <ul>
                <li>HTML, CSS</li>
                <li>SQL, MongoDB</li>
              </ul>
            </div>
            <div>
              <h4>Tools</h4>
              <ul>
                <li>Git</li>
                <li>Linux</li>
                <li>Windows</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section experience animate">
          <h2>Experience</h2>
          <div className="exp-item">
            <h3>Artificial Intelligence Intern – Teckybot</h3>
            <p className="date">Dec 2024 – Present | Gudur, India</p>
            <ul>
              <li>
                Applied ML algorithms for classification and improved model
                performance through fine-tuning.
              </li>
              <li>
                Worked with large datasets: cleaning, preprocessing, and
                feature engineering.
              </li>
              <li>
                Gained hands-on experience with TensorFlow, PyTorch, and
                Scikit-learn.
              </li>
              <li>
                Collaborated with teams to deploy and test models in real
                scenarios.
              </li>
            </ul>
          </div>
        </section>

        <section className="section projects animate">
          <h2>Projects</h2>
          <div className="project-item">
            <h3>Image Caption Generator using Deep Learning</h3>
            <ul>
              <li>Dataset: Flickr8k (8,000+ images with captions)</li>
              <li>
                Used pre-trained CNN models (VGG16/ResNet) with LSTM for
                caption generation
              </li>
              <li>
                Technologies: Python, TensorFlow/Keras, NLP, Tokenization
              </li>
            </ul>
          </div>
        </section>

        <section className="section education animate">
          <h2>Education</h2>
          <ul>
            <li>
              <strong>B.Tech – CSE (AI & DS)</strong><br />
              Audisankara Institute of Technology (2021-25) | CGPA: 8.0
            </li>
            <li>
              <strong>Intermediate – MPC</strong><br />
              Goutham Junior College, Badvel | Percentage: 78.1%
            </li>
            <li>
              <strong>SSC</strong><br />
              Sri Chaitanya EM School, Badvel | CGPA: 10.00
            </li>
          </ul>
        </section>

        <section className="section certifications animate">
          <h2>Certifications</h2>
          <ul>
            <li>Google Analytics for Beginners</li>
            <li>Introduction to Python Programming (Udemy)</li>
            <li>Data Science with Python and SQL (DataCamp)</li>
            <li>Python for Everybody (Coursera)</li>
          </ul>
        </section>
        <div className="contact-info">
  <p><strong>Phone:</strong> +91 9391568075</p>
  <p><strong>Email:</strong> <a href="mailto:sumanthkasi262@gmail.com">sumanthkasi262@gmail.com</a></p>
</div>

      </main>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Kaluvai Sumanth Kasi Reddy. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
