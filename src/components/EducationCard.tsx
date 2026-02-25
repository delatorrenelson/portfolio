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
    <div className="card bg-base-100 shadow-xl border border-base-200 hover:border-primary transition-all duration-300">
      <div className="card-body flex-row items-center gap-6">
        <div className="flex-none">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl">
            <IconComponent />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="card-title text-xl font-bold">{title}</h3>
          <p className="text-base-content/70">{description}</p>
          <div className="badge badge-secondary badge-outline mt-2">{year}</div>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;