import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      id="about" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      <div className="glass p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-12">
        <div className="w-48 h-48 rounded-full border-4 border-saffron-neon p-1 shadow-neon-orange">
          <img src="https://github.com/janmejay25.png" alt="Janmejay Pandya" className="w-full h-full rounded-full object-cover" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-saffron-neon">About Me</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I am a detail-oriented Computer Engineering student at Silver Oak College of Technology with a 9.17 CGPA. 
            My passion lies at the intersection of cutting-edge technology and ancient wisdom. 
            Whether it is simulating Trojan horses to understand malware or building AI attendance systems, 
            I strive for continuous innovation. Outside of coding, I find balance through 
            <span className="text-saffron-neon"> Astrology</span>, journaling, and drawing.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
