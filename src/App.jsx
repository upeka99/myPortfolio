import React from "react";
import "./App.css";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import profilePhoto from "./images/my.png";
import coverphoto from "./images/cover.png";


const App = () => {

  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_2ncx1mn',   // replace with your actual service ID
    'template_j4veq77',  // replace with your actual template ID
    form.current,
    'KRHhjoFXksZ_ulLHU'    // replace with your public key
  ).then(
    (result) => {
      alert("Message sent successfully!");
      form.current.reset();
    },
    (error) => {
      alert("Something went wrong. Please try again.");
      console.log(error.text);
    }
  );
};

  return (
    <div className="App">
    <nav className="navbar">
      <div className="navbar-container">
        
        <ul className="nav-links">
          <li className="active"><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>



      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="fade-in">Upeka<span className="highlight-logo"> Sandaruwan</span></h1>
          <h2>
            I’m{' '}
            <span style={{ color: '#00bcd4', fontWeight: 'bold' }}>
              <Typewriter
                words={['Software Developer', 'Web Developer', 'FullStack Developer', 'Mobile Application Developer']}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="about-text fade-in" style={{ fontStyle: 'italic', fontSize: '1.1rem', color: '#eeeeee', marginTop: '10px', maxWidth: '600px' }}>
  Passionate about crafting modern, responsive web and mobile applications. With a strong foundation in software engineering and a vision for smart city solutions, I specialize in mobile development, intelligent traffic management systems, and IoT-driven innovations. I aim to build technology that not only works but improves everyday life.
</p>

          <a href="/CV/T.A.Upeka Sandaruwan.pdf" className="cta-button" download>Download CV</a>
          <div className="sci">
            <a href="https://www.linkedin.com/in/upeka-sandaruwan-97841b225/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="icon-linkedin" />
            </a>
            <a href="https://github.com/upeka99" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} className="icon-github" />
            </a>
            <a href="https://web.facebook.com/upeka.sandaruwan.1/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} className="icon-facebook" />
            </a>
          </div>
        </div>
        <div className="Home-image">
          <div className="img-box">
            <div className="img-item">
              <img src={profilePhoto} alt="Upeka Sandaruwan" className="profile-photo" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-wrapper">
          <div className="about-image">
            <img src={coverphoto} alt="Upeka Sandaruwan" className="about-photo" />
          </div>
          <div className="about-section">
            <div className="about-content">
              <p className="">
                Hi, I’m <span className="highlight">Upeka Sandaruwan</span> — a passionate <strong>Software Developer</strong> with a deep love for <strong>mobile development</strong>, <strong>smart traffic management</strong>, and cutting-edge <strong>IoT solutions</strong>. With a strong foundation in <em>Networking and Mobile Computing</em>, I bring ideas to life by building smart, user-focused applications that solve real-world problems. I thrive on <span className="highlight">continuous learning</span>, collaborating with creative minds, and contributing to projects that create a real impact on society and technology.
              </p>
              <div className="about-buttons fade-in delay-3">
                <a href="/CV/T.A.Upeka Sandaruwan.pdf" download className="cta-button">Download CV</a>
                <a href="#contact" className="cta-button alt">Let’s Connect</a>
              </div>
            </div>
          </div>


        </div>
      </section>

      <section id="skills" className="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill">Android Development (Java, Android Studio)</div>
          <div className="skill">Web Development (React, HTML, CSS, JS)</div>
          <div className="skill">Firebase (Realtime Database, Authentication)</div>
          <div className="skill">Python (Simulations, ML Models)</div>
          <div className="skill">Machine Learning (Vehicle & Ambulance Detection)</div>
          <div className="skill">Image Processing (OpenCV, TensorFlow/Keras)</div>
          <div className="skill">IoT & Embedded Systems (ESP32, Arduino)</div>
          <div className="skill">Smart Traffic Light Management</div>
          <div className="skill">UI/UX Prototyping & Responsive Design</div>
          <div className="skill">Cloud Computing</div>
          <div className="skill">Networking & Mobile Computing</div>
          <div className="skill">Git & GitHub (Version Control)</div>
          <div className="skill">Google Maps API Integration</div>
          <div className="skill">7-Segment Display & LED System Control</div>
        </div>
      </section>



      <section id="projects" className="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          
          {/* SL Police App */}
          <div className="project-card">
            <h3>SL Police App</h3>
            <p>Mobile app for traffic fine management.</p>
            <p><strong>Technologies:</strong> Android Studio, Java, Firebase</p>
            <a href="https://github.com/upeka99/Police_Fine_Report_App" target="_blank" rel="noopener noreferrer" className="view-project-button">
              <FaGithub size={20} className="icon-github" />
              View Project
            </a>
          </div>

          {/* Smart Traffic System */}
          <div className="project-card">
            <h3>Smart Traffic System</h3>
            <p>AI-based real-time traffic light control system using live detection.</p>
            <p><strong>Technologies:</strong> Python, OpenCV, TensorFlow, Arduino</p>
            <a href="https://github.com/upeka99/Smart-Traffic-Management-System-for-Sri-Lanka" target="_blank" rel="noopener noreferrer" className="view-project-button">
              <FaGithub size={20} className="icon-github" />
              View Project
            </a>
          </div>

          {/* Vehicle Identification */}
          <div className="project-card">
            <h3>Vehicle Identification</h3>
            <p>Image processing-based vehicle type classification.</p>
            <p><strong>Technologies:</strong> Python, Keras, CNN, OpenCV</p>
            <a href="https://github.com/upeka99" target="_blank" rel="noopener noreferrer" className="view-project-button">
              <FaGithub size={20} className="icon-github" />
              View Project
            </a>
          </div>

          {/* Mother Care System */}
          <div className="project-card">
            <h3>Mother Care System</h3>
            <p>A mobile application to replace the traditional card system for mothers.</p>
            <p><strong>Technologies:</strong> Android Studio, Firebase, Java</p>
            <a href="https://github.com/upeka99" target="_blank" rel="noopener noreferrer" className="view-project-button">
              <FaGithub size={20} className="icon-github" />
              View Project
            </a>
          </div>

          {/* Online Quiz System */}
          <div className="project-card">
            <h3>Online Quiz System</h3>
            <p>An online platform for creating and taking quizzes with real-time results.</p>
            <p><strong>Technologies:</strong> Java, Networking, MySQL, End Point</p>
            <a href="https://github.com/upeka99/OnlineQuizSystem" target="_blank" rel="noopener noreferrer" className="view-project-button">
              <FaGithub size={20} className="icon-github" />
              View Project
            </a>
          </div>

          {/* Supermarket Management System */}
          <div className="project-card">
            <h3>Supermarket Management System</h3>
            <p>System for managing supermarket inventory and sales.</p>
            <p><strong>Technologies:</strong> Java, MySQL, Swing</p>
            <a href="https://github.com/upeka99/SuperMarketSystem" target="_blank" rel="noopener noreferrer" className="view-project-button">
              <FaGithub size={20} className="icon-github" />
              View Project
            </a>
          </div>

        </div>
      </section>

      <section id="contact" className="contact">
        <h2 className="section-title">Contact Me</h2>
        

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="cta-button">Send</button>
        </form>

        
      </section>


      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h3 className="footer-logo">Upeka<span className="highlight-logo"> Sandaruwan</span></h3>
            <p>Passionate Software Engineer specialized in Smart Systems, IoT, and Web/Mobile Development.</p>
          </div>

          <div className="footer-center">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-right">
            <h4>Follow Me</h4>
            <div className="footer-socials">
              <a href="https://github.com/upeka99" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/upeka-sandaruwan-97841b225/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://web.facebook.com/upeka.sandaruwan.1/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Upeka Sandaruwan. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default App;
