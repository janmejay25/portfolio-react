import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="py-20 px-6 text-center border-t border-white/10">
      
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Janmejay Pandya. Built with React & Tailwind.
      </p>
    </footer>
  );
};

export default Footer;


