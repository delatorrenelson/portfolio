import React from "react";
import { FaGithub, FaLinkedin, FaBehance } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-12">
      <nav className="grid grid-flow-col gap-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost hover:text-primary transition-colors text-2xl"
          href="https://github.com/delatorrenelson"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost hover:text-primary transition-colors text-2xl"
          href="https://www.linkedin.com/in/nelson-delatorre-4a04b2192/"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost hover:text-primary transition-colors text-2xl"
          href="https://www.behance.net/gallery/163222613/Web-Designs"
        >
          <FaBehance />
        </a>
      </nav>
      <aside>
        <p className="font-semibold">
          © {currentYear} Mr. Nelson Portfolio. All rights reserved.
        </p>
      </aside>
    </footer>
  );
}
