import React from 'react';
import { motion } from 'motion/react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <Link to="/" className="mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity">
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
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-forest-green hover:text-gold transition-colors font-medium text-sm uppercase tracking-wider">Home</Link>
            <Link to="/#about" className="text-forest-green hover:text-gold transition-colors font-medium text-sm uppercase tracking-wider">About Us</Link>
            
            <div className="relative group">
              <Link to="/products" className="text-forest-green hover:text-gold transition-colors font-medium text-sm uppercase tracking-wider flex items-center gap-1 py-4">
                Product <span className="text-xs transition-transform group-hover:rotate-180">▼</span>
              </Link>
              <div className="absolute top-[80%] left-0 w-48 bg-ivory shadow-lg border border-forest-green/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="/products#coffee" className="block px-4 py-3 text-sm hover:bg-gold/10 text-forest-green transition-colors border-b border-forest-green/5">Specialty Coffee</Link>
                <Link to="/products#green-beans" className="block px-4 py-3 text-sm hover:bg-gold/10 text-forest-green transition-colors border-b border-forest-green/5">Green Beans</Link>
                <Link to="/products#tea" className="block px-4 py-3 text-sm hover:bg-gold/10 text-forest-green transition-colors border-b border-forest-green/5">Premium Tea</Link>
                <Link to="/products#other" className="block px-4 py-3 text-sm hover:bg-gold/10 text-forest-green transition-colors">Other Commodities</Link>
              </div>
            </div>

            <Link to="/#quotation" className="text-forest-green hover:text-gold transition-colors font-medium text-sm uppercase tracking-wider">Contact Us</Link>
          </nav>
          
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
