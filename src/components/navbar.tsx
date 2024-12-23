import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-black flex fixed">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#hero">Cavin AM</a>
            </li>
            <li>
              <a href="#aboutme">About</a>
            </li>
            <li>
              <a href="#skill">Skills</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#testimony">Testimony</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <a
          className="btn btn-ghost text-xl navbar-center text-white"
          href="#hero"
        >
          Cavin AM
        </a>
      </div>
      <div className="navbar-center hidden lg:flex mx-6">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#aboutme" className="font-bold text-xl text-white">
              About
            </a>
          </li>
          <li>
            <a href="#skill" className="font-bold text-xl text-white">
              My Skills
            </a>
          </li>
          <li>
            <a href="#project" className="font-bold text-xl text-white">
              Project
            </a>
          </li>
          <li>
            <a href="#experience" className="font-bold text-xl text-white">
              Experience
            </a>
          </li>
          <li>
            <a href="#testimony" className="font-bold text-xl text-white">
              Testimony
            </a>
          </li>
          <li>
            <a href="#contact" className="font-bold text-xl text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
    </div>
  );
}
