
import { motion } from "framer-motion";
import ProjectGrid from "../components/ProjectGrid";
import "../styles/projects.css";

export default function Projects() {

  return (
    <motion.div
      className="projects-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >

      <h1>Our Projects</h1>

      <ProjectGrid />

    </motion.div>
  );
}