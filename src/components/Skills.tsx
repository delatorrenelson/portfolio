import React from "react";
import SkillCard from "./SkillCard";
import skillsList from "../assets/skills.json";
import SectionHeader from "./SectionHeader";

export interface Skill {
  title: string;
  description: string;
  icon: string;
  measure: number;
}

export default function Skills() {
  const skills = skillsList as Skill[];

  return (
    <section id="skills">
      <SectionHeader title="Technical Proficiency" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <SkillCard key={skill.title || index} skill={skill} />
        ))}
      </div>
    </section>
  );
}
