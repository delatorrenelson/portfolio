import React from "react";
import { Link } from "react-router-dom";

export interface ProgrammingJournalItem {
  id?: string;
  title: string;
  date: string;
  description?: string;
  url?: string;
  readTime?: string;
  tags?: string[];
  content?: string[];
}

interface JournalCardProps {
  journal: ProgrammingJournalItem;
}

export default function JournalCard({ journal }: JournalCardProps) {
  const { id, title, date, url, description } = journal;

  const targetPath = id ? `/journals/${id}` : "/journals";

  if (url && url !== "#") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={description || title}
        className="group flex items-center justify-between py-3.5 sm:py-4 border-b border-base-content/10 transition-colors duration-200 cursor-pointer"
      >
        <span className="font-medium text-sm sm:text-[15px] text-base-content group-hover:text-primary transition-colors pr-4 truncate sm:whitespace-normal">
          {title}
        </span>
        <span className="text-xs sm:text-sm text-base-content/45 group-hover:text-base-content/80 font-normal transition-colors flex-none text-right whitespace-nowrap">
          {date}
        </span>
      </a>
    );
  }

  return (
    <Link
      to={targetPath}
      title={description || title}
      className="group flex items-center justify-between py-3.5 sm:py-4 border-b border-base-content/10 transition-colors duration-200 cursor-pointer"
    >
      <span className="font-medium text-sm sm:text-[15px] text-base-content/80 group-hover:text-primary transition-colors pr-4 truncate sm:whitespace-normal">
        {title}
      </span>
      <span className="text-xs sm:text-sm text-base-content/45 group-hover:text-base-content/80 font-normal transition-colors flex-none text-right whitespace-nowrap">
        {date}
      </span>
    </Link>
  );
}
