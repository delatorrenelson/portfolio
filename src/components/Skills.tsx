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
    <section id="skills" className="py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={skill.title || index} skill={skill} />
        ))}
      </div>
    </section>
  );
}
