import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../assets/projects";
import SectionHeader from "./SectionHeader";
import OtherProjects from "./OtherProjects";

export default function Projects() {
  return (
    <section id="projects">
      <SectionHeader title="Recent Projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title || index} project={project} />
        ))}
      </div>
      <OtherProjects />
    </section>
  );
}
