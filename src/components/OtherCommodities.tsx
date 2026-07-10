import React from 'react';
import { motion } from 'motion/react';
import { otherCommodities } from '../data';

export default function OtherCommodities() {
  return (
    <section className="py-24 bg-ivory text-forest-green border-y border-gold/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gold">Looking for Other Indonesian Commodities?</h2>
          <p className="text-lg md:text-xl font-sans font-light leading-relaxed">
            While coffee and tea are our core expertise, our sourcing network extends across Indonesia.
          </p>
          <p className="text-lg font-sans font-light leading-relaxed text-forest-green/80">
            Upon request, we assist international buyers in sourcing selected agricultural commodities through trusted partners.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="font-medium font-sans text-forest-green/60 uppercase tracking-widest text-sm">Examples Include</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {otherCommodities.map((item, index) => (
              <span 
                key={index}
                className="px-6 py-2 bg-white border border-gold/30 rounded-full font-sans text-sm md:text-base text-forest-green hover:border-gold hover:shadow-sm transition-all"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#quotation" className="inline-block bg-forest-green text-ivory px-8 py-4 text-lg font-medium hover:bg-gold hover:text-forest-green transition-colors duration-300 rounded-sm mt-8">
            Tell Us What You Need
          </a>
        </motion.div>
      </div>
    </section>
  );
}
