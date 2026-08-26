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

  return (
    <div className="card bg-base-100 shadow-md border border-base-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover-glow">
      <div className="card-body items-center text-center p-8">
        <div
          className="radial-progress text-primary mb-5"
          style={{ "--value": measure, "--size": "8rem", "--thickness": "0.5rem" } as React.CSSProperties}
          role="progressbar"
        >
          <div className="flex flex-col items-center">
            <IconComponent className="text-3xl mb-1 text-primary" />
            <span className="font-mono text-sm font-bold tracking-tight">{measure}%</span>
          </div>
        </div>

        <h3 className="font-heading card-title text-xl font-bold tracking-tight mb-2 text-base-content">{title}</h3>
        <p className="font-sans text-sm text-base-content/75 leading-relaxed font-normal">{description}</p>
      </div>
    </div>
  );
}
