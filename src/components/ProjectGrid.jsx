import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';

const ProjectGrid = () => {
  return (
    <div className="project-grid">
      {projectsData.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
