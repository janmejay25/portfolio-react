import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0 z-50 px-3 py-2 md:px-6 md:py-3 glass rounded-full flex justify-center items-center backdrop-blur-md border border-white/10 w-max max-w-[95vw]">
      <div className="flex items-center space-x-3 md:space-x-8 text-[10px] md:text-xs font-semibold uppercase tracking-widest text-gray-300">
        <HashLink 
          smooth 
          to="/#top" 
          className="hover:text-saffron-neon transition-colors relative group flex items-center gap-1"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 12 12 12 22"/></svg>
          <span></span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron-neon transition-all group-hover:w-full" />
        </HashLink>
        <Link to="/projects" className="hover:text-saffron-neon transition-colors relative group">
          Projects
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron-neon transition-all group-hover:w-full" />
        </Link>
        <HashLink smooth to="/#experience" className="hover:text-saffron-neon transition-colors relative group">
          Experience
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron-neon transition-all group-hover:w-full" />
        </HashLink>
        <HashLink smooth to="/#skills" className="hover:text-saffron-neon transition-colors relative group">
          Skills
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron-neon transition-all group-hover:w-full" />
        </HashLink>
        <HashLink smooth to="/#contact" className="hover:text-saffron-neon transition-colors relative group">
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron-neon transition-all group-hover:w-full" />
        </HashLink>
         
        <a 
          href="/resume.pdf" 
          download="Janmejay_Pandya_Resume.pdf"
          className="px-3 py-2 md:px-5 md:py-2 bg-saffron-neon text-black font-bold rounded-full hover:bg-deep-orange hover:text-white transition-all shadow-neon-orange text-[10px] flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="hidden md:inline">Resume</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

