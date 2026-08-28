import React from "react";
import other_projects from "../assets/other_projects.json";
import {
  LuMoveRight,
  LuMoveUpRight,
  LuWallet,
  LuClock,
  LuGitPullRequest,
  LuTerminal,
  LuCode,
  LuBuilding,
  LuAppWindow,
  LuPalette,
  LuUtensils,
  LuActivity,
  LuDatabase,
} from "react-icons/lu";

export interface OtherProjectItem {
  title: string;
  description: string;
  url: string;
  icon?: string;
}

const iconMap: { [key: string]: any } = {
  wallet: LuWallet,
  clock: LuClock,
  "git-pull-request": LuGitPullRequest,
  terminal: LuTerminal,
  building: LuBuilding,
  layout: LuAppWindow,
  palette: LuPalette,
  utensils: LuUtensils,
  activity: LuActivity,
  database: LuDatabase,
};

function getIconComponent(project: OtherProjectItem) {
  if (project.icon) {
    for (const key of Object.keys(iconMap)) {
      if (project.icon.includes(key)) {
        return iconMap[key];
      }
    }
  }
  return iconMap[project.title.toLowerCase()] || LuCode;
}

export default function OtherProjects() {
  const otherProjectsData = other_projects as OtherProjectItem[];

  return (
    <div className="mt-6 flex flex-col">
      <div className="divide-y divide-base-content/10 border-t border-b border-base-content/10">
        {otherProjectsData.map((project, index) => {
          const IconComp = getIconComponent(project);
          return (
            <a
              key={project.title || index}
              href={project.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-3.5 sm:py-4 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 overflow-hidden pr-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md flex-none bg-base-content/5 flex items-center justify-center border border-base-content/10">
                  <IconComp className="text-xs sm:text-sm text-base-content/80 group-hover:text-primary transition-colors" />
                </div>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 overflow-hidden">
                  <span className="font-bold text-sm sm:text-[15px] text-base-content/80 group-hover:text-primary transition-colors flex-none">
                    {project.title}
                  </span>
                  <span className="text-xs sm:text-sm text-base-content/60 font-normal truncate">
                    {project.description}
                  </span>
                </div>
              </div>
              <span className="text-xs sm:text-sm text-base-content/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-none">
                <LuMoveUpRight />
              </span>
            </a>
          );
        })}
      </div>
      <div className="mt-4">
        <a
          href="https://github.com/delatorrenelson"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-base-content/60 hover:text-base-content underline decoration-base-content/30 underline-offset-4 transition-colors"
        >
          More on GitHub <LuMoveRight className="inline-block ml-1" />
        </a>
      </div>
    </div>
  );
}
