import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/team', label: 'Team' },
    { path: '/projects', label: 'Projects' },
    { path: '/join', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <span className="logo-text">MICROSOFT</span>
          <span className="logo-club">STUDENT CLUB</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className="theme-toggle" onClick={toggleTheme}>
          <div className={`toggle-slider ${isDarkMode ? 'dark' : ''}`}>
            <span className="toggle-icon sun">☀️</span>
            <span className="toggle-icon moon">🌙</span>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
