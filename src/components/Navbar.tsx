import React from "react";
import avatar from "../assets/img/myAvatar_glass.png";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../hooks/useTheme";

const navLinks = [
  { text: "Projects", href: "#projects" },
  { text: "Skills", href: "#skills" },
  { text: "Education", href: "#education" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md shadow-xs sticky top-0 z-50 border-b border-base-200/60 px-4 sm:px-8">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl hover:bg-base-200/50 gap-3" href="/">
          <img src={avatar} alt="Logo" className="h-9 w-9 rounded-full ring-2 ring-primary/30" />
          <span className="font-heading font-extrabold tracking-tight text-base-content">
            Nelson<span className="text-primary">.dev</span>
          </span>
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="flex-none hidden sm:flex items-center gap-4">
        <ul className="menu menu-horizontal px-1 font-medium font-sans text-sm gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-base-content/80 hover:text-primary transition-colors font-semibold tracking-wide"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>

      {/* Mobile Menu */}
      <div className="flex-none sm:hidden flex items-center gap-2">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-base-100 rounded-2xl w-52 border border-base-200 font-sans">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-medium text-base-content/90">{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
