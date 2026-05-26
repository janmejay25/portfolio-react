import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Trojan Horse Simulation & Analysis",
      description: "Advanced malware analysis using Python, Flask, and Wireshark in sandboxed environments.",
      tags: ["Python", "Flask", "Wireshark"],
      link: "#"
    },
    {
      title: "FACE TRACK — AI Attendance System",
      description: "Real-time facial recognition engine using DeepFace and VGG-Face for automated tracking.",
      tags: ["Python", "OpenCV", "Streamlit"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12 text-saffron-neon">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {featuredProjects.map((project, index) => (
          <div key={index} className="glass p-6 rounded-2xl text-left hover:border-saffron-neon transition-colors group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-saffron-neon">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-deep-orange/20 text-deep-orange rounded">{tag}</span>
              ))}
            </div>
            <a href={project.link} className="text-saffron-neon text-sm font-bold hover:underline">View Details </a>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-end">
        <Link 
          to="/projects" 
          className="px-8 py-3 bg-saffron-neon text-black font-bold rounded-full hover:bg-deep-orange transition-all shadow-neon-orange"
        >
          view more..
        </Link>
      </div>
    </section>
  );
};

export default Projects;

