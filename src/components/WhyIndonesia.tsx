import React from 'react';
import { motion } from 'motion/react';

export default function WhyIndonesia() {
  return (
    <section className="relative py-32 bg-forest-green text-ivory overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('/images/origin-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="uppercase tracking-wider font-semibold text-sm text-gold block mb-4">Indonesia Origin</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              From Indonesia's Volcanic Highlands
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg md:text-xl font-light font-sans text-ivory/90 leading-relaxed"
          >
            <p>
              Indonesia is home to one of the world's richest coffee-growing environments.
            </p>
            <p>
              Volcanic soil, tropical climate, and generations of farming expertise produce coffees celebrated for their complexity and character.
            </p>
            <p>
              From the misty mountains of Aceh to the fertile highlands of Java, Flores, and Sulawesi, every origin tells a unique story.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
