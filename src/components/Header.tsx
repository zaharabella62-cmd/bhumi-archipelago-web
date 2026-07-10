import React from 'react';
import { motion } from 'motion/react';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/95 backdrop-blur-sm border-b border-forest-green/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            {/* 
              Logo Wrapper
              Using CSS mix-blend-mode to make the white background of the uploaded logo transparent.
              Make sure to upload your logo as 'logo.png' in the public folder.
            */}
            <div className="mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity">
              <img 
                src="/logo.png" 
                alt="Bhumi Archipelago Logo" 
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden text-2xl font-serif font-bold text-forest-green">Bhumi Archipelago</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-forest-green hover:text-gold transition-colors font-medium text-sm uppercase tracking-wider">Home</a>
            <a href="#" className="text-forest-green hover:text-gold transition-colors font-medium text-sm uppercase tracking-wider">About Us</a>
            <a href="#" className="text-forest-green hover:text-gold transition-colors font-medium text-sm uppercase tracking-wider">Coffee</a>
            <a href="#" className="text-forest-green hover:text-gold transition-colors font-medium text-sm uppercase tracking-wider">Tea</a>
            <a href="#" className="text-forest-green hover:text-gold transition-colors font-medium text-sm uppercase tracking-wider">Commodities</a>
          </nav>
          
          <div className="hidden md:flex">
            <a href="#quotation" className="bg-forest-green text-ivory px-6 py-2.5 text-sm font-medium hover:bg-gold hover:text-forest-green transition-colors duration-300 rounded-sm inline-block">
              Contact Us
            </a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button className="text-forest-green hover:text-gold transition-colors">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
