import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-24 bg-ivory text-forest-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-8">About Bhumi Archipelago</h2>
            <h3 className="text-2xl md:text-3xl text-gold font-medium">Rooted in Indonesia.<br/>Trusted by Global Buyers.</h3>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg font-sans font-light leading-relaxed text-forest-green/90"
          >
            <p>
              Bhumi Archipelago is an Indonesian export company specializing in premium coffee and tea sourced directly from Indonesia's most renowned producing regions.
            </p>
            <p>
              We believe exceptional products begin with trusted relationships. By working closely with producers and carefully selected partners, we deliver consistency, transparency, and export-ready quality to buyers worldwide.
            </p>
            <p>
              As our network grows, we also assist clients in sourcing other Indonesian agricultural commodities based on their specific requirements.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
