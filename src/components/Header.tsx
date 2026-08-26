import React from "react";
import profile from "../assets/img/profile.png";
import { FaGithub, FaLinkedin, FaBehance, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <section className="hero min-h-[70vh] bg-base-100 py-12 lg:py-20" id="home_section">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-16">
        <div className="flex-1 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <img
              id="profile"
              src={profile}
              alt="Nelson Profile"
              className="relative max-w-xs lg:max-w-md rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300 object-cover border border-base-200/50"
            />
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 font-mono text-xs font-semibold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Available for Opportunities
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-base-content mb-3" id="name">
            Hi, I'm <span className="text-gradient">Nelson</span>
          </h1>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-secondary tracking-tight mb-6">
            Frontend Developer
          </h2>

          <div className="flex flex-col gap-3 mb-8 font-sans text-sm sm:text-base text-base-content/80 font-medium">
            <a href="mailto:delatorrenelson127@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors justify-center lg:justify-start group">
              <span className="p-2 rounded-lg bg-base-200 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <FaEnvelope className="text-secondary group-hover:text-primary transition-colors" />
              </span>
              <span>delatorrenelson127@gmail.com</span>
            </a>
            <a href="tel:0915-7047-251" className="flex items-center gap-3 hover:text-primary transition-colors justify-center lg:justify-start group">
              <span className="p-2 rounded-lg bg-base-200 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <FaPhoneAlt className="text-secondary group-hover:text-primary transition-colors" />
              </span>
              <span>0915-7047-251</span>
            </a>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="p-2 rounded-lg bg-base-200">
                <FaMapMarkerAlt className="text-secondary" />
              </span>
              <span>Caloocan City, Manila, Philippines</span>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-primary btn-outline hover:scale-110 transition-transform shadow-xs"
              href="https://github.com/delatorrenelson"
              aria-label="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-primary btn-outline hover:scale-110 transition-transform shadow-xs"
              href="https://www.linkedin.com/in/nelson-delatorre-4a04b2192/"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-primary btn-outline hover:scale-110 transition-transform shadow-xs"
              href="https://www.behance.net/gallery/163222613/Web-Designs"
              aria-label="Behance Portfolio"
            >
              <FaBehance size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
