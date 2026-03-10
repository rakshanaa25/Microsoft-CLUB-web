import React from "react";
import ProjectGrid from "../components/ProjectGrid";
import "../styles/projects.css";
import "../index.css";

const Projects = () => {
  return (
    <main className="projects-page">

      {/* Header Section with Lighthouse Effect */}
      <div className="projects-header lighthouse">
        <h1 className="page-title">Our Flagship Projects</h1>
        <p className="projects-subtitle">
          Real-world solutions built by students for students
        </p>
      </div>

      {/* Projects Grid with Lighthouse Effect */}
      <div className="lighthouse">
        <ProjectGrid />
      </div>

    </main>
  );
};

export default Projects;
