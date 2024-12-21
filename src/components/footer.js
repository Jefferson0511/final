import React, { useState, useEffect } from 'react';
import './footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show footer when user has scrolled 70% of the page
      if (scrolled > (documentHeight - windowHeight) * 0.7) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <div className="footer-content">
        <div className="footer-info">
          <span>CSI St. Matthew's Church</span>
          <span>•</span>
          <span>East Tambaram, Chennai</span>
          <span>•</span>
          <span>English Service: 7:00 AM</span>
          <span>•</span>
          <span>Tamil Service: 9:00 AM</span>
          <span>•</span>
          <span>+91 44 2647 3585</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
