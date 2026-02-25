import React from "react";
import profile from "../assets/img/profile.png";
import { FaGithub, FaLinkedin, FaBehance, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <section className="hero min-h-[60vh] bg-base-100 py-12" id="home_section">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-16">
        <div className="flex-1 flex justify-center">
          <img
            id="profile"
            src={profile}
            alt="Nelson Profile"
            className="max-w-xs lg:max-w-md rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex-1 text-center lg:text-left">
          <h4 className="text-xl font-bold opacity-80 mb-2">Hi</h4>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-primary mb-4" id="name">
            I'm, Nelson
          </h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-secondary mb-6">
            Frontend Developer
          </h2>

          <div className="flex flex-col gap-3 mb-8">
            <a href="mailto:delatorrenelson127@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors justify-center lg:justify-start">
              <FaEnvelope className="text-secondary" />
              <span>delatorrenelson127@gmail.com</span>
            </a>
            <a href="tel:0915-7047-251" className="flex items-center gap-3 hover:text-primary transition-colors justify-center lg:justify-start">
              <FaPhoneAlt className="text-secondary" />
              <span>0915-7047-251</span>
            </a>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <FaMapMarkerAlt className="text-secondary" />
              <span>Caloocan City, Manila, Philippines</span>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline btn-primary hover:scale-110"
              href="https://github.com/delatorrenelson"
            >
              <FaGithub size={24} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline btn-primary hover:scale-110"
              href="https://www.linkedin.com/in/nelson-delatorre-4a04b2192/"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline btn-primary hover:scale-110"
              href="https://www.behance.net/gallery/163222613/Web-Designs"
            >
              <FaBehance size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
