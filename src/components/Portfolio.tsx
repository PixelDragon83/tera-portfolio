import React, { useState } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Punch Gun Guy",
      category: "Game",
      description: "Class Game Jam Winner - Team Project.",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Love", "2D, Lua, Aesprite"],
      links: {
        demo: "#",
        github: "#",
        external: "#"
      }
    },
    {
      id: 2,
      title: "Land Lubbers",
      category: "Side scrolling Platformer",
      description: "Side scrolling Pixel Platformer game.",
      image: "https://images.pexels.com/photos/2693212/pexels-photo-2693212.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Love", "2D", "Lua", "Aesprite"],
      links: {
        demo: "#",
        external: "#"
      }
    },
    {
      id: 3,
      title: "Zombie Run",
      category: "game",
      description: "Top down Pixel Shooter.",
      image: "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["SDL", "C++", "Photoshop"],
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'game', label: 'Games' },
    { id: 'environment', label: 'Environments' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A showcase of my game development projects and environment creation work. 
              Each project represents a unique challenge and creative journey.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 mb-4 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-900/50 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          className="p-2 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors"
                        >
                          <Play size={20} />
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          className="p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.links.external && (
                        <a
                          href={project.links.external}
                          className="p-2 bg-cyan-600 rounded-full text-white hover:bg-cyan-700 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;