import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo + Description */}
        <div className="footer-col">
          <div className="footer-logo">
            MICROSOFT STUDENT CLUB
          </div>
          <p className="footer-desc">
            Building the next generation of tech leaders through Microsoft technologies, 
            innovation, and collaboration.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/join">Join Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Activities */}
        <div className="footer-col">
          <h4 className="footer-heading">Activities</h4>
          <ul className="footer-links">
            <li>Hackathons</li>
            <li>Workshops</li>
            <li>Microsoft Learn</li>
            <li>Guest Lectures</li>
            <li>Internship Drives</li>
          </ul>
        </div>

        {/* Column 4: Contact + Social */}
        <div className="footer-col">
          <h4 className="footer-heading">Get In Touch</h4>
          <div className="footer-contact">
            <p>hello@msclub.edu</p>
            <p>Campus Hall, Tech University</p>
          </div>

          <div className="social-icons">
            <a href="#" aria-label="LinkedIn" className="social-icon">in</a>
            <a href="#" aria-label="Instagram" className="social-icon">📷</a>
            <a href="#" aria-label="X" className="social-icon">𝕏</a>
            <a href="#" aria-label="GitHub" className="social-icon">GitHub</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Microsoft Student Club. All rights reserved.</p>
        <p>Built using React • Vite • Microsoft Azure</p>
      </div>
    </footer>
  );
};

export default Footer;
