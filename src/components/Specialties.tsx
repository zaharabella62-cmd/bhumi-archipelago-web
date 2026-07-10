import React from 'react';
import { motion } from 'motion/react';
import { specialtiesData } from '../data';

export default function Specialties() {
  return (
    <section className="py-24 bg-forest-green text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold">Our Specialties</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        {/* Coffee Section */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <h3 className="text-3xl md:text-4xl font-medium text-gold">{specialtiesData.coffee.title}</h3>
              
              <div className="space-y-6 font-sans font-light">
                <div>
                  <h4 className="text-xl font-medium mb-3 text-ivory">Types</h4>
                  <ul className="space-y-2 opacity-90">
                    {specialtiesData.coffee.categories.map((cat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                        {cat}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium mb-3 text-ivory">Origin</h4>
                  <p className="opacity-90 leading-relaxed">
                    {specialtiesData.coffee.origins.join(' • ')}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-medium mb-3 text-ivory">Available Processing</h4>
                  <p className="opacity-90 leading-relaxed">
                    {specialtiesData.coffee.processing.join(' • ')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
                {specialtiesData.coffee.images.map((img, i) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    key={i} 
                    className={`rounded-sm overflow-hidden ${
                      i === 0 ? 'col-span-2 row-span-2' : 
                      'col-span-1 md:col-span-2 row-span-1'
                    }`}
                  >
                    <img src={img} alt="Coffee specialty" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tea Section */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
                {specialtiesData.tea.images.map((img, i) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    key={i} 
                    className={`rounded-sm overflow-hidden ${
                      i === 0 ? 'col-span-2 row-span-2' : 
                      (i >= 5 ? 'col-span-2 row-span-1' : 'col-span-1 row-span-1')
                    }`}
                  >
                    <img src={img} alt="Tea specialty" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1 space-y-8 order-1 lg:order-2">
              <h3 className="text-3xl md:text-4xl font-medium text-gold">{specialtiesData.tea.title}</h3>
              
              <div className="space-y-6 font-sans font-light">
                <div>
                  <h4 className="text-xl font-medium mb-3 text-ivory">Types</h4>
                  <ul className="space-y-2 opacity-90">
                    {specialtiesData.tea.categories.map((cat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                        {cat}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium mb-3 text-ivory">Available Packaging</h4>
                  <ul className="space-y-2 opacity-90">
                    {specialtiesData.tea.packaging.map((pkg, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                        {pkg}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
