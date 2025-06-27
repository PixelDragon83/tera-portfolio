import React from 'react';
import { Code, Palette, Zap, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Learning",
      description: "Currently studying Video Game Development at Eastern College"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Foundation",
      description: "Strong foundation in Graphic Design to understand visual principles"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Passionate Drive",
      description: "Committed to creating the next wave of innovative video games"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Educational Achievement",
      description: "Recent graduate from Center for Distance Education in 2024"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I'm an aspiring game developer currently pursuing my passion for creating immersive gaming experiences. 
              My journey combines educational achievement with a deep commitment to mastering both the artistic 
              and technical aspects of game development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Graduated from the Center for Distance Education in 2024 and I am now taking the Video Game Development program at Eastern College. In 2023 I finally decided to bite the bullet and follow my dreams of wanting to create the next wave of Video Games. So I started with Graphic Design so that I can better understand the how and why behind designing, and now it is time to learn the coding for video games.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I believe that great games combine technical excellence with creative storytelling. 
                Every project I work on aims to create memorable experiences that players will enjoy 
                and remember long after they've finished playing. My foundation in graphic design gives me 
                a unique perspective on visual aesthetics and user experience.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">Current Focus</h4>
                <ul className="space-y-3 text-gray-300">
                  <li> Video Game Development</li>
                  <li> Video Game Environment Artist</li>
                  <li> 3D Modeling - Blender </li>
                  <li> Asset animation - Aesprite</li>                  
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-purple-500 mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;