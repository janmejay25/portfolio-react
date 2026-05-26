import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-saffron-neon">Experience</h2>
      <div className="glass p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 text-saffron-neon/20 font-bold text-6xl">01</div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-2">Cyber Security Intern</h3>
          <p className="text-saffron-neon font-medium mb-4">BISAG-N, Gandhinagar | July 2025 - Aug 2025</p>
          <ul className="text-gray-400 space-y-3 list-disc list-inside">
            <li>Developed dual-function payload disguised as a Tic-Tac-Toe game.</li>
            <li>Conducted dynamic analysis using Wireshark for network traffic monitoring.</li>
            <li>Implemented code obfuscation to evade antivirus detection.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
