import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">Microsoft Student Club</div>
        <h1 className="hero-title">
          Empowering Tomorrow's<br />Tech Leaders
        </h1>
        <p className="hero-subtitle">
          Join the official Microsoft community on campus. Learn. Build. Innovate.
        </p>
        <Link to="/join" className="hero-btn">
          Join the Club
        </Link>
      </div>
      <div className="hero-visual">
        <div className="hero-orb" />
      </div>
    </section>
  );
};

export default Hero;
