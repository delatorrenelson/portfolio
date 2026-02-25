import React from "react";
import { Project } from "../assets/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { imgSrc, description, title, href } = project;

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden border border-base-200"
      onClick={() => openLink(href)}
    >
      <figure className="aspect-video overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </figure>
      <div className="card-body p-6">
        <h3 className="card-title text-xl font-bold group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-base-content/70 text-sm line-clamp-2">
          {description}
        </p>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary btn-sm btn-outline">View Project</button>
        </div>
      </div>
    </div>
  );
}
