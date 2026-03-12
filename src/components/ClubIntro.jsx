import React from 'react';
const ClubIntro = () => {
  return (
    <section className="club-intro">
      <div className="intro-container">
        <div className="intro-text">
          <h2 className="section-title">Who We Are</h2>
          <p className="intro-paragraph">
            The Microsoft Student Club is a vibrant community of passionate students dedicated to 
            mastering Microsoft technologies, building real-world projects, and fostering innovation. 
            From hackathons to workshops with Microsoft engineers, we create opportunities that 
            transform ambitious minds into industry-ready professionals.
          </p>
          <p className="intro-paragraph">
            Whether you're a beginner or an experienced developer, our inclusive environment welcomes 
            everyone who wants to learn, collaborate, and make an impact.
          </p>
        </div>
        <div className="intro-stats">
          <div className="stat">
            <span className="stat-number">100+</span>
            <span className="stat-label">Members</span>
          </div>
          <div className="stat">
            <span className="stat-number">25+</span>
            <span className="stat-label">Events</span>
          </div>
          <div className="stat">
            <span className="stat-number">15</span>
            <span className="stat-label">Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubIntro;
