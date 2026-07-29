import React from 'react';
import { motion } from 'motion/react';

const reasons = [
  {
    title: "Carefully Selected Producers",
    desc: "We work with trusted producers and processing partners across Indonesia to ensure product consistency."
  },
  {
    title: "Transparent Communication",
    desc: "Fast response.\nClear documentation.\nNo hidden surprises."
  },
  {
    title: "Export Expertise",
    desc: "From product sourcing to export documentation, we streamline every step of the international shipping process."
  },
  {
    title: "Flexible Solutions",
    desc: "Whether you need one container or recurring shipments, we adapt to your sourcing requirements."
  },
  {
    title: "Quality Comes First",
    desc: "Every shipment is inspected before export to ensure it meets agreed specifications."
  },
  {
    title: "Long-Term Partnership",
    desc: "Our goal isn't just to complete a transaction—it's to become your trusted sourcing partner in Indonesia."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-ivory text-forest-green border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 sticky top-32 space-y-6"
          >
            <span className="uppercase tracking-wider font-semibold text-sm text-gold">Why Bhumi Archipelago</span>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Why Buyers Choose Bhumi Archipelago
            </h2>
            <div className="w-16 h-1 bg-gold"></div>
            
            <div className="hidden lg:block pt-8">
              <div className="w-full h-80 rounded-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&q=80&w=600" 
                  alt="Quality check" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="w-12 h-12 bg-gold/10 text-gold flex items-center justify-center rounded-sm font-semibold text-xl mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-medium">{reason.title}</h3>
                <p className="font-sans font-light text-forest-green/80 leading-relaxed whitespace-pre-line">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
