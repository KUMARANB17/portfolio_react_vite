import React from 'react';

function Header() {
  return (
    <header className="bg-black p-3 flex flex-col md:flex-row justify-center md:justify-between items-center border-b-2 border-gray-700 fixed top-0 left-0 w-full shadow z-50 lg:h-16">
      <span className="text-white p-2 text-lg font-semibold">KUMARAN B</span>
      <nav className="flex flex-row mt-2 md:mt-0">
        <a
          href="#Home"
          aria-label="Home"
          className="text-gray-400 p-2 ml-3 hover:text-white transition-colors duration-200 lg:hover:underline lg:hover:underline-offset-25"
        >
          Home
        </a>
        <a
          href="#Education"
          aria-label="Education"
          className="text-gray-400 p-2 ml-3 hover:text-white transition-colors duration-200 lg:hover:underline lg:hover:underline-offset-25"
        >
          Education
        </a>
        <a
          href="#Projects"
          aria-label="Projects"
          className="text-gray-400 p-2 ml-3 hover:text-white transition-colors duration-200 lg:hover:underline lg:hover:underline-offset-25"
        >
          Projects
        </a>
        <a
          href="#Skills"
          aria-label="Skills"
          className="text-gray-400 p-2 ml-3 hover:text-white transition-colors duration-200 lg:hover:underline lg:hover:underline-offset-25"
        >
          Skills
        </a>
        <a
          href="#Add-ons"
          aria-label="Addons"
          className="text-gray-400 p-2 ml-3 hover:text-white transition-colors duration-200 lg:hover:underline lg:hover:underline-offset-25"
        >
          Add-ons
        </a>
      </nav>
    </header>
  );
}

export default Header;
