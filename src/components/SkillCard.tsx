import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaImage, FaLightbulb } from 'react-icons/fa';
import { Skill } from "./Skills";

const iconMap: { [key: string]: any } = {
  "fab fa-brands fa-html5": FaHtml5,
  "fab fa-brands fa-css3-alt": FaCss3Alt,
  "fab fa-brands fa-js": FaJs,
  "fab fa-react": FaReact,
  "fas fa-images": FaImage,
  "far fa-lightbulb": FaLightbulb
};

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const { title, description, icon, measure } = skill;
  const IconComponent = iconMap[icon] || FaLightbulb;
  const skillId = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <div id={`skill-card-${skillId}`} className="card-portfolio p-5 sm:p-6 rounded-2xl flex flex-col justify-between shadow-sm">
      <div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-base-content/80">
            <IconComponent className="text-lg sm:text-xl" />
            <h3 className="font-semibold text-base sm:text-[17px]">{title}</h3>
          </div>
          <span className="hidden font-mono text-xs sm:text-sm text-base-content/60 font-medium px-2.5 py-0.5">
            {measure}%
          </span>
        </div>
        <p className="text-sm text-base-content/80 mt-3 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
