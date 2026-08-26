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
      className="card bg-base-100 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden border border-base-200 hover:border-primary/50 hover-glow flex flex-col justify-between"
      onClick={() => openLink(href)}
    >
      <figure className="aspect-video overflow-hidden relative">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="font-mono text-xs font-semibold text-white uppercase tracking-wider bg-primary/90 px-3 py-1 rounded-full backdrop-blur-xs">
            Explore Project →
          </span>
        </div>
      </figure>
      <div className="card-body p-6 flex flex-col justify-between">
        <div>
          <h3 className="font-heading card-title text-xl font-bold group-hover:text-primary transition-colors tracking-tight mb-2">
            {title}
          </h3>
          <p className="font-sans text-base-content/75 text-sm leading-relaxed line-clamp-3 font-normal">
            {description}
          </p>
        </div>
        <div className="card-actions justify-end mt-6">
          <button className="btn btn-primary btn-sm btn-outline font-mono text-xs font-semibold tracking-wide uppercase">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}
