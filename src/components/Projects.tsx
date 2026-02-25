import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../assets/projects";

export default function Projects() {
  return (
    <section className="py-16" id="projects">
      <h2 className="text-4xl font-extrabold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title || index} project={project} />
        ))}
      </div>
    </section>
  );
}
