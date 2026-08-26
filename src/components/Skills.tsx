import React from "react";
import SkillCard from "./SkillCard";
import skillsList from "../assets/skills.json";

export interface Skill {
  title: string;
  description: string;
  icon: string;
  measure: number;
}

export default function Skills() {
  const skills = skillsList as Skill[];

  return (
    <section id="skills" className="py-20">
      <div className="text-center mb-14">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-primary mb-2">Technical Proficiency</p>
        <h2 className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-base-content">Skills</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={skill.title || index} skill={skill} />
        ))}
      </div>
    </section>
  );
}
