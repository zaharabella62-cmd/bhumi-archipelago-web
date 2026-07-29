import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-ivory text-forest-green scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-gold uppercase tracking-wider font-semibold text-sm">About Us</span>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">More Than an Exporter. Your Trusted Sourcing Partner.</h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg font-sans font-light leading-relaxed text-forest-green/90"
          >
            <p>
              Forget the complexity of sourcing from multiple suppliers.
            </p>
            <p>
              Bhumi Archipelago connects international coffee roasters, importers, distributors, and tea brands with carefully selected Indonesian producers.
            </p>
            <p>
              We simplify sourcing through transparent communication, strict quality control, and reliable export solutions—allowing you to focus on growing your business while we take care of the supply chain.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
        >
          <div className="h-64 md:h-80 w-full overflow-hidden rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800" 
              alt="Coffee beans sorting" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
          <div className="h-64 md:h-80 w-full overflow-hidden rounded-sm md:col-span-2">
            <img 
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1200" 
              alt="Coffee plantation" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
