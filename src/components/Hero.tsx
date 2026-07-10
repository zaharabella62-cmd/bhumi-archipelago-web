import React from 'react';
import { heroImages } from '../data';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative bg-forest-green text-ivory overflow-hidden pt-24 pb-32">
      <div className="absolute inset-0 opacity-20 bg-[url('/tea1.jpg')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
              From Indonesia's Archipelago to Global Markets
            </h1>
            
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-medium text-gold">
                Premium Indonesian Coffee & Tea Exporter
              </h2>
              <p className="text-lg md:text-xl max-w-xl text-ivory/90 leading-relaxed font-sans font-light">
                Connecting international buyers with carefully sourced coffee and tea from Indonesia's finest growing regions while offering customized sourcing for selected Indonesian commodities.
              </p>
            </div>

            <a href="#quotation" className="inline-block bg-gold text-forest-green px-8 py-4 text-lg font-medium hover:bg-ivory hover:text-forest-green transition-colors duration-300 rounded-sm">
              Request a Quotation
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {heroImages.map((src, index) => (
              <div 
                key={index} 
                className={`overflow-hidden rounded-sm ${index % 2 === 0 ? 'translate-y-8' : ''}`}
              >
                <img 
                  src={src} 
                  alt="Indonesian coffee and tea" 
                  className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
