import React from "react";
import "./style.css";
import my_pic from "../../assets/my_pic.png";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="ab-section-container">
        <div className="about-content">
          <h2 className="section-heading hidden-element">About Me</h2>

          <div className="about-grid">
            <div className="text-content hidden-element">
              <p className="about-paragraph">
                Hi, I’m Kulunu — a full stack developer who loves creating
                interactive and engaging web experiences. My journey started in
                college with HTML and CSS, sparking a passion that has grown
                ever since.
              </p>
              <p className="about-paragraph">
                Today, I’m focused on building accessible, inclusive products,
                and I’ve enjoyed working with startups to bring digital ideas to
                life.
              </p>

              <p className="about-paragraph-last">
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="tech-list hidden-element">
                {[
                  "JavaScript (ES6+)",
                  "React",
                  "Next.js",
                  "Spring Boot",
                  "Node.js",
                ].map((tech, index) => (
                  <li key={tech} className="tech-item">
                    <span className="tech-arrow">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="primary-button">
                Get In Touch
              </a>
            </div>

            <div className="image-container hidden-element">
              <div className="profile-image-wrapper">
                {/* <div className="image-overlay"></div> */}
                {/* <div className="image-border"></div> */}
                <div className="image-content">
                  {/* <div className="image-placeholder">
                    <span className="image-text">Your Photo Here</span>
                  </div> */}
                  <img src={my_pic} alt="" />
                </div>
              </div>
              <div className="image-backdrop"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
