import React from 'react';
import { motion } from 'motion/react';
import { Sprout, PackageCheck, Star, Handshake, Globe2 } from 'lucide-react';

const reasons = [
  {
    icon: Sprout,
    title: "Direct Sourcing",
    desc: "We work closely with producers and farming communities across Indonesia."
  },
  {
    icon: PackageCheck,
    title: "Export Ready",
    desc: "International documentation and logistics support."
  },
  {
    icon: Star,
    title: "Premium Quality",
    desc: "Strict quality selection before shipment."
  },
  {
    icon: Handshake,
    title: "Long-term Partnership",
    desc: "We value sustainable relationships over one-time transactions."
  },
  {
    icon: Globe2,
    title: "Worldwide Shipping",
    desc: "Serving buyers across Asia, Europe, the Middle East, Oceania, and the Americas."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-forest-green text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-gold">Why Choose Bhumi Archipelago</h2>
          <div className="w-24 h-1 bg-ivory/20 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-gold/20 hover:border-gold/60 transition-colors duration-300 rounded-sm bg-white/5 space-y-4"
            >
              <div className="text-gold">
                <reason.icon size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-medium">{reason.title}</h3>
              <p className="font-sans font-light text-ivory/80 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
