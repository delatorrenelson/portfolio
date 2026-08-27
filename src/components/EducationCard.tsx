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
    <div className="card-portfolio p-5 sm:p-6 rounded-2xl flex flex-col justify-between shadow-sm">
      <div>
        <div className="flex items-center gap-3 text-base-content/80">
          <IconComponent className="text-lg sm:text-xl" />
          <h3 className="font-semibold text-base sm:text-[17px]">{title}</h3>
        </div>
        <p className="text-sm text-base-content/80 mt-3 leading-relaxed">
          {description}
        </p>
      </div>
      {year && (
        <div className="flex justify-end mt-3">
          <span className="font-mono text-xs sm:text-sm text-base-content/50 font-medium">
            {year}
          </span>
        </div>
      )}
    </div>
  );
}

export default EducationCard;