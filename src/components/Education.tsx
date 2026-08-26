import React from "react";
import EducationCard from "./EducationCard";
import educationList from "../assets/education.json";

export interface EducationItem {
  title: string;
  description: string;
  year: string;
  icon: string;
  link: string;
}

export default function Education() {
  const educationData = educationList as EducationItem[];

  return (
    <section id="education" className="py-20">
      <div className="text-center mb-14">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-primary mb-2">Background & Credentials</p>
        <h2 className="font-heading text-4xl sm:text-5xl font-black tracking-tight text-base-content">Education</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((education, index) => (
          <EducationCard key={education.title || index} education={education} />
        ))}
      </div>
    </section>
  );
}
