import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/About";
import Projects from "../components/Projects/Projects";
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
        
      <Footer />
    </div>
  );
};

export default Index;
