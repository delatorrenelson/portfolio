import React from "react";
import profile from "../assets/img/profile.png";
import { FaGithub, FaLinkedin, FaBehance, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import SectionHeader from "./SectionHeader";

export default function Header() {
  return (
    <header className="space-y-8 pt-4 sm:pt-6 pb-4" id="home_section">
      {/* Avatar & Title Row */}
      <div className="flex items-center gap-5">
        <div className="avatar">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-avatar-radial border-1 border-base-content/1 shadow-md">
            <img alt="Nelson Dela Torre" src={profile} className="w-full h-full object-scale-down translate-y-1" />
          </div>
        </div>
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-base-content tracking-tight" id="name">
            Nelson Dela Torre
          </h1>
          <p className="text-base sm:text-lg text-base-content/65 font-medium mt-0.5">
            Tech Enthusiast & <span className="font-serif-italic font-normal text-base-content">Creative Developer</span>
          </p>
        </div>
      </div>

      {/* Intro Bio Prose */}
      <div className="space-y-4 text-base sm:text-[17px] text-base-content/90 leading-relaxed sm:leading-8">
        <p>
          I'm strongest at building <span className="font-serif-italic font-normal text-base-content">frontend web applications</span> end to end: designing intuitive interfaces, engineering clean React & TypeScript code, and delivering responsive user experiences.
        </p>
        <p>
          Passionate about modern UI design systems, performance optimization, and scalable web architectures.
        </p>
      </div>

      {/* Status Badge & Social Links */}
      <div className="pt-2 space-y-4">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-base-content/15 bg-base-200/60 text-xs sm:text-sm font-semibold text-base-content/85">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Available for Opportunities
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-base-content/80">
          <a
            href="https://github.com/delatorrenelson"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-base-content underline decoration-base-content/30 underline-offset-4 transition-colors"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href="https://www.linkedin.com/in/nelson-delatorre-4a04b2192/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-base-content underline decoration-base-content/30 underline-offset-4 transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="https://www.behance.net/gallery/163222613/Web-Designs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-base-content underline decoration-base-content/30 underline-offset-4 transition-colors"
          >
            Behance
          </a>
          <span>·</span>
          <a
            href="mailto:delatorrenelson127@gmail.com"
            className="hover:text-base-content underline decoration-base-content/30 underline-offset-4 transition-colors"
          >
            Email
          </a>
        </div>
      </div>

      {/* Present Work Section */}
      <div className="pt-4">
        <SectionHeader title="Present" />
        <div className="p-5 sm:p-6 rounded-2xl border border-base-content/10 bg-base-200/40 text-base sm:text-[17px] text-base-content/90 leading-relaxed sm:leading-8">
          <p>
            I currently work as a <span className="font-serif-italic font-normal text-base-content">freelance developer</span> for an Australian tech company, where I am responsible for the management and maintenance of clients admin-facing <span className="font-serif-italic font-normal text-base-content">web application</span> and customer-facing <span className="font-serif-italic font-normal text-base-content">mobile application</span>.
          </p>
        </div>
      </div>
    </header>
  );
}
