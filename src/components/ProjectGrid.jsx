import projects from "../data/projectsData";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {

  return (
    <div className="project-grid">

      {projects.map(p => (
        <ProjectCard key={p.id} project={p} />
      ))}

    </div>
  );
}