import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Code, Database, Globe, Layout, Smartphone, GitBranch
} from 'lucide-react';
import './style.css';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="skill-icon" size={40} />,
      skills: ['HTML5/CSS3', 'JavaScript (ES6+)', 'React.js', 'Ant Design']
    },
    {
      title: 'Backend Development',
      icon: <Database className="skill-icon" size={40} />,
      skills: ['Node.js', 'Express', 'RESTful APIs', 'MongoDB', 'Firebase', 'SQL']
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="skill-icon" size={40} />,
      skills: ['React Native', 'Responsive Design', 'Progressive Web Apps', 'Flutter Basics']
    },
    {
      title: 'Code Quality',
      icon: <Code className="skill-icon" size={40} />,
      skills: ['Clean Code', 'Testing (Jest)', 'Performance Optimization', 'Accessibility (a11y)']
    },
    {
      title: 'Version Control',
      icon: <GitBranch className="skill-icon" size={40} />,
      skills: ['Git', 'GitHub', 'CI/CD Pipelines', 'Agile Workflow']
    },
    {
      title: 'Other Skills',
      icon: <Globe className="skill-icon" size={40} />,
      skills: ['SEO Basics', 'Web Performance', 'Problem Solving', 'Team Collaboration']
    }
  ];

  return (
    <section id="skills" ref={ref} className="skills-section">
      <div className="sk-section-container">
        <h2 className={`section-heading ${inView ? 'visible' : 'hidden'}`}>
          My Skills
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`skill-card ${inView ? 'visible' : 'hidden'}`}
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              {category.icon}
              <h3 className="skill-category-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skill}
                    className="skill-item"
                    style={{ animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms` }}
                  >
                    <span className="skill-arrow">▹</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Background elements */}
      <div className="background-blob blob-top-right"></div>
      <div className="background-blob blob-bottom-left"></div>
    </section>
  );
};

export default Skills;