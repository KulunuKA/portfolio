import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react';
import './style.css'; 

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className="contact-section">
      <div className="contact-container">
        <h2 className={`contact-heading ${inView ? 'fade-in' : 'hidden'}`}>
          Get In Touch
        </h2>

        <div className="contact-grid">
          <div className={`contact-info ${inView ? 'fade-in-delay' : 'hidden'}`}>
            <div className="contact-block">
              <h3 className="contact-title">
                <Mail className="icon" size={24} />
                Say Hello!
              </h3>
              <p className="contact-text">
                Have a question or want to work together? Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="contact-block">
              <h4 className="contact-subtitle">Contact Information</h4>
              <p className="contact-text">🇱🇰 Colombo , Sri Lanka</p>
              <p className="contact-text">📧 kulunukasthuri38@gmail.com</p>
            </div>

            <div className="contact-block">
              <h4 className="contact-subtitle">Social Links</h4>
              <div className="social-links">
                <a href="https://github.com/KulunuKA" className="social-link"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/kulunu-kasthuri-a8b47021a/" className="social-link"><Linkedin size={24} /></a>
                <a href="#" className="social-link"><Twitter size={24} /></a>
              </div>
            </div>
          </div>

          <div className={`contact-form-wrapper ${inView ? 'fade-in-delay2' : 'hidden'}`}>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="form-textarea"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="form-button">
                Send Message
                <Send className="form-button-icon" size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
