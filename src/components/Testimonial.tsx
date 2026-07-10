import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="py-24 bg-ivory text-forest-green">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold">Why Buyers Work With Us</h2>
          <div className="w-16 h-1 bg-gold mx-auto"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative px-8 py-12 md:px-16"
        >
          <div className="absolute top-0 left-0 text-gold/20">
            <Quote size={80} className="rotate-180" />
          </div>
          <p className="text-xl md:text-3xl font-serif italic leading-relaxed text-forest-green relative z-10">
            "We believe trust is earned through consistent communication, transparent sourcing, and reliable execution. Every partnership starts with understanding your requirements and delivering solutions tailored to your business."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
