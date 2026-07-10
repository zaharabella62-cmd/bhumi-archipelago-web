import React from 'react';
import { motion } from 'motion/react';
import { buyerJourney } from '../data';
import { ArrowDown } from 'lucide-react';

export default function BuyerJourney() {
  return (
    <section className="py-24 bg-forest-green text-ivory">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-gold">Buyer Journey</h2>
          <div className="w-24 h-1 bg-ivory/20 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {buyerJourney.map((item, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-6 p-6 border border-gold/20 bg-white/5 rounded-sm hover:border-gold/50 transition-colors"
              >
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gold text-forest-green text-xl font-bold rounded-sm">
                  {item.step}
                </div>
                <h3 className="text-xl md:text-2xl font-medium">{item.title}</h3>
              </motion.div>
              {index < buyerJourney.length - 1 && (
                <div className="flex justify-center text-gold/50 py-2">
                  <ArrowDown size={24} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
