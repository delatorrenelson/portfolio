import React from "react";
import { Project } from "../assets/projects";
import { LuMoveUpRight } from "react-icons/lu";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { imgSrc, description, title, href } = project;

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  const projectId = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <div
      id={`project-card-${projectId}`}
      className="card-portfolio p-5 sm:p-6 rounded-2xl cursor-pointer group flex flex-col justify-between hover:border-base-content/25 transition-all duration-300 shadow-sm hover:shadow-md"
      onClick={() => openLink(href)}
    >
      <div>
        <div className="flex items-center justify-between gap-3 text-base-content/80">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-6 h-6 rounded-md overflow-hidden flex-none border border-base-content/10 bg-base-100 shadow-xs">
              <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-semibold text-base sm:text-[17px] group-hover:text-primary transition-colors truncate">
              {title}
            </h3>
          </div>
          <span className="text-sm font-semibold text-base-content/40 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 flex-none">
            <LuMoveUpRight />
          </span>
        </div>
        <p className="text-sm text-base-content/80 mt-3 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}
