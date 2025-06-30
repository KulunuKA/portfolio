import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import "./style.css";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background elements */}
      <div className="background-container">
        <div className="background-circle bg-circle-1"></div>
        <div className="background-circle bg-circle-2"></div>
        <div className="background-circle bg-circle-3"></div>
      </div>

      <div className="section-container">
        <div className="hero-content">
          <p className={`intro-text ${isVisible ? "visible" : "hidden"}`}>
            Hi, my name is
          </p>
          <h1 className={`name-heading ${isVisible ? "visible" : "hidden"}`}>
            Kulunu Kasthuri.
          </h1>
          <h2 className={`tagline-heading ${isVisible ? "visible" : "hidden"}`}>
            I build amazing digital experiences.
          </h2>
          <p className={`description-text ${isVisible ? "visible" : "hidden"}`}>
            I’m a passionate full stack developer focused on creating
            responsive, modern web applications that tackle real-world
            challenges and deliver exceptional digital experiences.
          </p>

          <div className={`cta-container ${isVisible ? "visible" : "hidden"}`}>
            <a href="#projects" className="primary-button">
              View My Work
              <ArrowRight className="arrow-icon" size={18} />
            </a>
          </div>
        </div>
      </div>

      <div
        className={`scroll-indicator ${isVisible ? "visible" : "hidden"}`}
        onClick={scrollToNextSection}
      >
        <ChevronDown className="chevron-icon" size={32} />
      </div>
    </section>
  );
};

export default Hero;
