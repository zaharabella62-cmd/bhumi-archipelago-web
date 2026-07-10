import React from 'react';
import { motion } from 'motion/react';
import { Droplet, Sun, Mountain, Leaf } from 'lucide-react';

export default function WhyIndonesia() {
  return (
    <section className="py-24 bg-ivory text-forest-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold">Why Indonesia?</h2>
          <p className="text-lg md:text-xl font-sans font-light leading-relaxed">
            Indonesia is one of the world's leading producers of premium coffee and tea.
          </p>
          <p className="text-lg font-sans font-light leading-relaxed">
            Volcanic soil, tropical climate, and generations of farming expertise create products with unique flavor profiles appreciated by buyers around the globe.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Mountain, text: "Volcanic Soil", delay: 0 },
            { icon: Sun, text: "Tropical Climate", delay: 0.1 },
            { icon: Leaf, text: "Generations of Expertise", delay: 0.2 },
            { icon: Droplet, text: "Unique Flavor Profiles", delay: 0.3 }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="flex flex-col items-center text-center space-y-4 p-6 bg-white/50 rounded-sm border border-gold/20 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium font-sans">{item.text}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
