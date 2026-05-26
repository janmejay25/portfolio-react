import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center px-6 py-12 md:py-20 overflow-hidden">
      {/* Background Celestial Effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-saffron-neon/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-deep-orange/20 rounded-full blur-3xl animate-pulse" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Section: Profile Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="glass p-8 md:p-12 rounded-3xl text-center w-full max-w-md shadow-2xl border-saffron-neon/30 flex flex-col items-center gap-8">
            
            {/* Profile Image inside the Glass Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-saffron-neon to-deep-orange rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-tilt"></div>
              <img 
                src="https://github.com/janmejay25.png" 
                alt="Janmejay Pandya" 
                className="relative w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full border-4 border-saffron-neon shadow-neon-orange object-cover"
              />
            </div>
            
            <div className="flex flex-col items-center gap-6">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-3xl md:text-4xl font-extrabold tracking-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-neon to-deep-orange">
                  Janmejay Pandya
                </span>
              </motion.h2>
              
              <div className="flex gap-5 justify-center">
                {[
                  { 
                    href: "https://github.com/janmejay25", 
                    icon: <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="grey"
    className="text-saffron-neon"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.5.12-3.13 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.64 1.63.24 2.83.12 3.13.75.8 1.2 1.82 1.2 3.08 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.04.78 2.1v3.12c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
  </svg>
                  },
                  { 
                    href: "https://linkedin.com/in/janmejaypandya", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> 
                  },
                  { 
                    href: "mailto:connect.janmejay@gmail.com", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></svg> 
                  }
                ].map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                    className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-saffron-neon transition-all hover:scale-125 hover:border-saffron-neon border border-transparent group"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Section: About Me content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-saffron-neon font-bold uppercase tracking-widest text-sm mb-2">About Me</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-neon to-deep-orange">Future</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl text-gray-400 mb-8 leading-relaxed">
            I am a detail-oriented Computer Engineering student at Silver Oak College of Technology with a 9.17 CGPA. 
            Specializing in <span className="text-white">Data Science and AI</span>, I strive for continuous innovation. 
            Outside of coding, I find balance through <span className="text-saffron-neon">Astrology</span>, journaling, and drawing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#projects" className="px-8 py-3 bg-saffron-neon text-black font-bold rounded-full hover:bg-deep-orange hover:text-white transition-all shadow-neon-orange">
              View My Work
            </a>
            <a href="/resume.pdf" download="Janmejay_Pandya_Resume.pdf" className="px-8 py-3 glass rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;

