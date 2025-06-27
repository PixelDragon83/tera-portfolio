import React from 'react';
import { Gamepad2, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Gamepad2 className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold text-white">GameDev Portfolio</span>
            </div>

            <div className="flex items-center text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" />
              <span>for the gaming community</span>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {currentYear} GameDev Portfolio. All rights reserved. 
              <span className="block md:inline md:ml-2 mt-2 md:mt-0">
                Creating immersive gaming experiences since 2019.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;