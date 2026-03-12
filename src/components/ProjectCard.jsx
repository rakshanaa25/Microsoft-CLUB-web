import React from 'react';

const ProjectCard = ({ title, description }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <div className="project-icon">🚀</div>
      </div>
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
      <button
        className="project-btn"
        onClick={() => alert(`Opening ${title} project...`)}
      >
        View Project
      </button>
    </div>
  );
};

export default ProjectCard;


