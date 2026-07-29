import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const packagingServices = [
  "Private Label",
  "Retail Packaging",
  "Bulk Packaging",
  "OEM",
  "Custom Design Assistance",
  "Export Packaging"
];

const commodities = [
  "Vanilla Beans",
  "Cinnamon",
  "Cloves",
  "Nutmeg",
  "Palm Sugar",
  "Coconut Sugar",
  "Desiccated Coconut",
  "Cocoa Beans",
  "Cashew Nuts",
  "Candlenut",
  "Natural Honey",
  "Herbs & Spices",
  "Button"
];

export default function OtherCommodities() {
  return (
    <>
      {/* Other Agricultural Commodities */}
      <section id="other" className="py-24 bg-ivory text-forest-green border-b border-gold/20 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-forest-green">Looking Beyond Coffee & Tea?</h2>
            <p className="text-lg md:text-xl font-sans font-light leading-relaxed">
              Indonesia offers far more than exceptional coffee.
            </p>
            <p className="text-lg font-sans font-light leading-relaxed text-forest-green/80">
              Through our trusted sourcing network, we also assist buyers in sourcing selected agricultural commodities based on specific requirements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="font-medium font-sans text-forest-green/60 uppercase tracking-widest text-sm">Available upon request</p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {commodities.map((item, index) => (
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
              Request Custom Sourcing
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
