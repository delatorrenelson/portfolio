import React from "react";
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { EducationItem } from "./Education";

const iconMap: { [key: string]: any } = {
  "fa fa-solid fa-certificate": FaCertificate,
  "fa fa-solid fa-graduation-cap": FaGraduationCap
};

interface EducationCardProps {
  education: EducationItem;
}

function EducationCard({ education }: EducationCardProps) {
  const { title, description, icon, year } = education;
  const IconComponent = iconMap[icon] || FaCertificate;

  return (
    <div className="card bg-base-100 shadow-md border border-base-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover-glow">
      <div className="card-body flex-row items-center gap-6 p-6 sm:p-8">
        <div className="flex-none">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-3xl">
            <IconComponent />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-heading card-title text-xl font-bold tracking-tight text-base-content mb-1">{title}</h3>
          <p className="font-sans text-sm text-base-content/75 leading-relaxed font-normal mb-3">{description}</p>
          <div className="badge badge-secondary badge-outline font-mono text-xs font-semibold tracking-wider px-3 py-2">
            {year}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;