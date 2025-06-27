import React from 'react';
import { Monitor, Gamepad2, Brush, Zap, Database, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Game Engines",
      skills: [
        { name: "Unity" },
        { name: "Unreal Engine"},
        { name: "Godot" },
        { name: "Love 2D"},
        { name: "SDL"}
      ]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Programming",
      skills: [
        { name: "C#"},
        { name: "C++"},
        { name: "GDscript"},
        { name: "Blueprints"},
        { name: "Lua"}
      ]
    },
    {
      icon: <Brush className="w-8 h-8" />,
      title: "3D Modeling",
      skills: [
        { name: "Blender"},
        { name: "Maya" }        
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Graphics",
      skills: [
        { name: "Photoshop"},        
        { name: "GIMP"},
        { name: "Aseprite"},
        { name: "Tiled"}
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Game Design",
      skills: [
        { name: "Level Design"},
        { name: "UI/UX Design"},
        { name: "Game Mechanics"},
        { name: "Storytelling"}
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Tools & Platforms",
      skills: [
        { name: "Git/Version Control", level: 90 },
        { name: "Steam SDK", level: 85 },
        { name: "Mobile Platforms", level: 80 },
        { name: "VR Development", level: 72 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Skills</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical skills and expertise in game development, 
              covering everything from programming to 3D modeling and game design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-purple-500 mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;