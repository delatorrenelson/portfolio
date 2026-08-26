import React from "react";
import { FaGithub, FaLinkedin, FaBehance } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-12 bg-base-200/50 border-t border-base-200 text-base-content rounded-t-3xl mt-16 font-sans">
      <nav className="flex items-center justify-center gap-6">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost btn-circle text-2xl hover:text-primary hover:bg-base-200 transition-colors"
          href="https://github.com/delatorrenelson"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost btn-circle text-2xl hover:text-primary hover:bg-base-200 transition-colors"
          href="https://www.linkedin.com/in/nelson-delatorre-4a04b2192/"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost btn-circle text-2xl hover:text-primary hover:bg-base-200 transition-colors"
          href="https://www.behance.net/gallery/163222613/Web-Designs"
          aria-label="Behance"
        >
          <FaBehance />
        </a>
      </nav>
      <aside>
        <p className="font-mono text-xs text-base-content/70 tracking-wide">
          © {currentYear} Mr. Nelson Portfolio. All rights reserved.
        </p>
      </aside>
    </footer>
  );
}
