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
    <section id="education" className="py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((education, index) => (
          <EducationCard key={education.title || index} education={education} />
        ))}
      </div>
    </section>
  );
}
