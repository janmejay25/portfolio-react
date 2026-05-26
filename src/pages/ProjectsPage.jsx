import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const allProjects = [
  {
    title: "Trojan Horse Simulation & Analysis",
    description: "A comprehensive security research project focused on understanding malware behavior and evasion techniques.",
    fullDetails: [
      "Developed a functional Trojan Horse simulation in Python to analyze keylogging and data exfiltration behavior.",
      "Built a robust Command and Control (C2) server with a web-based UI using Flask for remote monitoring and payload management.",
      "Utilized Wireshark for dynamic analysis to monitor system activity and local network traffic in a controlled sandboxed virtual environment.",
      "Implemented advanced code obfuscation techniques to successfully evade detection by multiple antivirus software products."
    ],
    tags: ["Python", "Flask", "Wireshark", "Cybersecurity", "Malware Analysis"],
    repo: "https://github.com/janmejay25", 
    color: "from-saffron-neon to-deep-orange"
  },
  {
    title: "FACE TRACK — AI Attendance System",
    description: "An automated attendance tracking solution using deep learning and computer vision for real-time student recognition.",
    fullDetails: [
      "Engineered a real-time facial recognition engine utilizing VGG-Face deep learning models for highly accurate student tracking.",
      "Developed an interactive Streamlit dashboard for seamless video processing, roster management, and attendance visualization.",
      "Implemented structured student data management with Excel-based roster integration for automated reporting.",
      "Optimized face detection and recognition workflows to ensure high performance and accuracy in crowded classroom environments."
    ],
    tags: ["Python", "OpenCV", "DeepFace", "Streamlit", "AI/ML"],
    repo: "https://github.com/janmejay25",
    color: "from-deep-orange to-saffron-neon"
  }
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen text-white pt-32 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-neon to-deep-orange">Archives</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A deep dive into the technical implementations and architectural decisions of my most impactful work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {allProjects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl text-left hover:border-saffron-neon transition-all duration-500 group shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-2 group-hover:text-saffron-neon transition-colors">
                {project.title}
              </h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-deep-orange/20 text-deep-orange rounded font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.repo} 
                target="_blank" 
                rel="noreferrer" 
                className="text-saffron-neon text-sm font-bold hover:underline inline-flex items-center gap-2"
              >
                View Source Code 
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 12 6 9 3"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            to="/" 
            className="px-10 py-4 glass rounded-full text-white font-bold hover:bg-white/10 transition-all border border-white/20"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
