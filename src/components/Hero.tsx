import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    type: 'image',
    src: '/images/hero-1.jpg',
    alt: 'Indonesian Coffee'
  },
  {
    type: 'image',
    src: '/images/hero-2.jpg',
    alt: 'Coffee Processing'
  },
  {
    type: 'image',
    src: '/images/hero-3.jpg',
    alt: 'Coffee Beans'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative bg-forest-green text-ivory overflow-hidden min-h-[90vh] flex items-center pt-24 pb-32">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {slides[currentSlide].type === 'video' ? (
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute min-w-full min-h-full w-auto h-auto object-cover opacity-40 mix-blend-overlay"
              >
                <source src={slides[currentSlide].src} type="video/mp4" />
              </video>
            ) : (
              <img 
                src={slides[currentSlide].src}
                alt={slides[currentSlide].alt}
                className="absolute min-w-full min-h-full w-auto h-auto object-cover opacity-40 mix-blend-overlay"
              />
            )}
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-forest-green/70"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
              Source Indonesia's Finest Coffee with Confidence
            </h1>
            
            <p className="text-lg md:text-xl max-w-xl text-ivory/90 leading-relaxed font-sans font-light">
              Premium Indonesian green coffee, specialty coffee, and selected teas—carefully sourced from trusted producing regions and delivered with consistency, transparency, and export-ready quality.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#quotation" className="inline-block bg-gold text-forest-green px-8 py-4 text-lg font-medium hover:bg-ivory hover:text-forest-green transition-colors duration-300 rounded-sm">
                Get a Quotation
              </a>
              <Link to="/products" className="inline-block border border-ivory text-ivory px-8 py-4 text-lg font-medium hover:bg-ivory hover:text-forest-green transition-colors duration-300 rounded-sm">
                Browse Products
              </Link>
            </div>

            <div className="pt-8 border-t border-ivory/20 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Direct Sourcing",
                "Export Documentation",
                "Worldwide Shipping",
                "Responsive within 24 Hours",
                "Flexible MOQ"
              ].map((indicator, index) => (
                <div key={index} className="flex items-center text-sm md:text-base text-ivory/80 font-medium">
                  <Check className="w-5 h-5 text-gold mr-2" />
                  {indicator}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-4">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-ivory/30 flex items-center justify-center text-ivory hover:bg-ivory hover:text-forest-green transition-colors backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-ivory/30 flex items-center justify-center text-ivory hover:bg-ivory hover:text-forest-green transition-colors backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
