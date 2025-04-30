import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import './style.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home" className="logo-link">
              Portfolio<span className="logo-dot">.</span>
            </a>
          </div>
          
          <p className="footer-credit">
            Designed & Built with <Heart className="heart-icon" size={14} /> by  Kulunu Kasthuri
          </p>
          
          <div className="back-top">
            <button 
              onClick={scrollToTop}
              className="back-top-button"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
        
        <div className="footer-copyright">
          <p>
            © {new Date().getFullYear()}  Kulunu Kasthuri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;