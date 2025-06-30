import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Check,
  ArrowDown,
  ArrowUp,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import melo from "../../assets/melo.png";
import chat_app from "../../assets/chat_app.png";
import walkingSalon from "../../assets/walkingsalonau.com.png";
import "./style.css";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [viewMore, setViewMore] = useState(false);
  const [initialSlice, setInitialSlice] = useState(3);

  const projects = [
    {
      title: "Melo",
      description:
        "Contributed as a front-end developer on Melo, a cutting-edge Sri Lankan platform that transforms the way users interact with restaurants. The application features 3D model visualization to showcase dishes, offering a dynamic and immersive browsing experience. Designed with a responsive, modern UI, Melo enables users to explore restaurants, view menus,offer, packages and engage more meaningfully with businesses.",
      technologies: ["React", "Three JS", "Redux", "JIRA"],
      keyFeatures: [
        "3D Product Visualization",
        "E-commerce Functionality",
        "Responsive Design",
        "Payment Integration",
      ],
      image: melo,
      githubLink: "#",
      demoLink: "https://www.melo.lk",
    },
    {
      title: "Walking Salon",
      description:
        "A modern salon booking system where customers can browse services, schedule appointments within available hours, and salon admins can manage services, bookings, and operating times—all integrated with Firebase for real-time updates and scalable hosting.",
      technologies: [
        "React.js",
        "Firebase (Firestore, Functions, Auth, Storage)",
        "Node.js",
        "Tailwind CSS",
        "Ant Design",
      ],
      keyFeatures: [
        "Service Browsing with Images and Details",
        "Dynamic Booking Form with Time Slot Validation",
        "Admin Dashboard for Services and Bookings",
        "Opening Time Management",
        "Email Notifications for Bookings",
        "Responsive Mobile-First Design",
        "Firebase Hosting and Cloud Functions",
      ],
      image: walkingSalon,
      githubLink: "#",
      demoLink: "https://walkingsalonau.com/",
    },
    {
      title: "Chat Application",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Node Js"],
      keyFeatures: [
        "Real-time Updates",
        "Drag-and-Drop Functionality",
        "Team Collaboration",
        "Task Assignment",
        "Progress Tracking",
        "Notification System",
      ],
      image: chat_app,
      githubLink: "#",
      demoLink: "#",
    },
  ];

  return (
    <section id="projects" ref={ref} className="projects-section">
      <div className="pj-section-container">
        <h2 className={`section-heading ${inView ? "visible" : "hidden"}`}>
          My Projects
        </h2>

        <div className="projects-container">
          {projects.slice(0, initialSlice).map((project, index) => (
            <div
              key={project.title}
              className={`project-item ${inView ? "visible" : "hidden"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image (switches side every other project) */}
              <div
                className={`project-image ${
                  index % 2 === 1 ? "image-right" : "image-left"
                }`}
              >
                <div className="project-card">
                  <div className="image-container">
                    <div className="image-overlay">
                      <div className="project-links">
                        <a
                          href={project.githubLink}
                          className="project-link-icon"
                          aria-label="GitHub repository"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.demoLink}
                          className="project-link-icon"
                          aria-label="Live demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image-element"
                    />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`project-info ${
                  index % 2 === 1 ? "info-left" : "info-right"
                }`}
              >
                <p className="featured-text">Featured Project</p>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-description-card">
                  <p className="project-description">{project.description}</p>
                </div>

                {/* Redesigned Key Features Section */}
                <div className="key-features-container">
                  <h4 className="features-heading">Key Features</h4>
                  <div className="features-grid">
                    {project.keyFeatures.map((feature) => (
                      <div key={feature} className="feature-item">
                        <Check size={16} className="feature-icon" />
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <ul
                  className={`technology-list ${
                    index % 2 === 1 ? "list-left" : "list-right"
                  }`}
                >
                  {project.technologies.map((tech) => (
                    <li key={tech} className="technology-item">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="project-links-small">
                  <a
                    href={project.githubLink}
                    className="project-icon-link"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demoLink}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="project-icon-link"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`more-projects-container ${inView ? "visible" : "hidden"}`}
          style={{ animationDelay: "600ms" }}
        >
          <p
            onClick={() => {
              viewMore ? setInitialSlice(2) : setInitialSlice(projects.length);
              setViewMore(!viewMore);
            }}
            className="primary-button"
          >
            {viewMore ? "View Less Projects" : "View More Projects"}
            {!viewMore ? (
              <ArrowDown className="arrow-icon" size={18} />
            ) : (
              <ArrowUp className="arrow-icon" size={18} />
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
