import React from "react";
import { motion } from "framer-motion";

const skillData = [
  { name: "Python", category: "Languages", icon: "" },
  { name: "Java", category: "Languages", icon: "" },
  { name: "C++", category: "Languages", icon: "" },
  { name: "C", category: "Languages", icon: "" },
  { name: "React", category: "Web", icon: "" },
  { name: "JavaScript", category: "Web", icon: "" },
  { name: "HTML5", category: "Web", icon: "" },
  { name: "CSS3", category: "Web", icon: "" },
  { name: "PHP", category: "Web", icon: "" },
  { name: "MySQL", category: "Database", icon: "" },
  { name: "AWS", category: "Cloud", icon: "" },
  { name: "Google Cloud", category: "Cloud", icon: "" },
  { name: "Git", category: "Tools", icon: "" },
  { name: "GitHub", category: "Tools", icon: "" },
  { name: "Figma", category: "Tools", icon: "" },
  { name: "XAMPP", category: "Tools", icon: "" },
];

const Skills = () => {
  const categories = ["Languages", "Web", "Database", "Cloud", "Tools"];

  return (
    <section id="skills" className="py-16 md:py-24 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12 text-saffron-neon text-center">Technical Arsenal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, catIdx) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: catIdx * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border-white/10 hover:border-saffron-neon/30 transition-all duration-500 group shadow-xl"
          >
            <h3 className="text-xl font-bold mb-6 text-saffron-neon uppercase tracking-widest border-b border-white/10 pb-4 inline-block w-full text-left">
              {category}
            </h3>
            <div className="flex flex-wrap gap-4 justify-start">
              {skillData
                .filter(skill => skill.category === category || (category === "Database" && skill.category === "Cloud") || (category === "Cloud" && skill.category === "Database"))
                .map((skill, skillIdx) => (
                  <motion.div 
                    key={skill.name}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-saffron-neon/50 hover:bg-saffron-neon/10 transition-all cursor-default group/skill"
                  >
                    <span className="text-lg group-hover/skill:scale-125 transition-transform">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

