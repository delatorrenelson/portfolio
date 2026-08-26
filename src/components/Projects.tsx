import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../assets/projects";

export default function Projects() {
  return (
    <section className="py-20" id="projects">
      <div className="text-center mb-14">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-primary mb-2">Featured Work</p>
        <h2 className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-base-content">Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title || index} project={project} />
        ))}
      </div>
    </section>
  );
}
