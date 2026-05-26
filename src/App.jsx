import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";

const Home = () => (
  <>
    <Hero />
    <Projects />
    <Experience />
    <Skills />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-space-dark text-gray-200 font-sans selection:bg-saffron-neon selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

