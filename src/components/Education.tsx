import EducationCard from "./EducationCard";
import educationList from "../assets/education.json";
import SectionHeader from "./SectionHeader";

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
    <section id="education">
      <SectionHeader title="Education & Credentials" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {educationData.map((education, index) => (
          <EducationCard key={education.title || index} education={education} />
        ))}
      </div>
    </section>
  );
}
