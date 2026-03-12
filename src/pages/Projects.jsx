import React from 'react';
import ProjectGrid from '../components/ProjectGrid';
import '../styles/projects.css';

const Projects = () => {
  return (
    <main className="projects-page">
      <div className="projects-header">
        <h1 className="page-title">Our Flagship Projects</h1>
        <p className="projects-subtitle">
          Real-world solutions built by students for students
        </p>
      </div>
      <ProjectGrid />
    </main>
  );
};

export default Projects;
