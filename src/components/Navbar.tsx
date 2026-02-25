import React, { useState } from "react";
import avatar from "../assets/img/myAvatar_glass.png";

const navLinks = [
  {
    text: "Projects",
    href: "#projects",
  },
  {
    text: "Skills",
    href: "#skills",
  },
  {
    text: "Education",
    href: "#education",
  },
];

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          <img src={avatar} alt="Logo" className="h-10 w-10" />
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="flex-none hidden sm:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-secondary hover:text-primary transition-colors">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu (DaisyUI Dropdown) */}
      <div className="flex-none sm:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
