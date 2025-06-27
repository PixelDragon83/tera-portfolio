import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2210%22 cy=%2210%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Game <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Developer</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
            Creating Immersive Gaming Experiences
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Crafting Worlds, Shaping Legends, and where Imagination Becomes Playable.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <button
            onClick={() => scrollToSection('portfolio')}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-6 mb-12">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-gray-400 hover:text-white transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;