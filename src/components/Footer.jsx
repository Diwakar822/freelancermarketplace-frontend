import React from 'react';
import "../styles/styles.css";

const Footer = () => {
    return (
        <div>
              <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Freelance Marketplace. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/about" className="footer-link">About Us</a>
          <a href="/contact" className="footer-link">Contact</a>
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;