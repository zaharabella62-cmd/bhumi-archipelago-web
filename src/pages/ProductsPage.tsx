import React from 'react';
import { Helmet } from 'react-helmet-async';
import Specialties from '../components/Specialties';
import OtherCommodities from '../components/OtherCommodities';
import CTA from '../components/CTA';

export default function ProductsPage() {
  return (
    <div className="pt-24">
      <Helmet>
        <title>Premium Indonesian Coffee & Tea | Bhumi Archipelago</title>
        <meta name="description" content="Discover our premium Indonesian Specialty Coffee, Arabica, Robusta, Black Tea, Oolong, Jasmine, and customized packaging solutions for global buyers." />
        <meta name="keywords" content="Indonesian Specialty Coffee Exporter, Indonesian Arabica Coffee Supplier, Indonesian Robusta Coffee Exporter, Private Label Coffee Manufacturer Indonesia, Indonesian Black Tea Exporter, Indonesian Oolong Tea Supplier, Indonesian Jasmine Green Tea Exporter, Premium Loose Leaf Tea from Indonesia, Indonesian Vanilla Bean Supplier, Indonesian Cinnamon Exporter, Indonesian Coconut Sugar Exporter, Indonesian Cocoa Bean Supplier" />
      </Helmet>
      
      <div className="bg-forest-green pt-16 pb-8 border-b border-ivory/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory">Our Products</h1>
          <p className="text-lg md:text-xl text-ivory/80 font-light max-w-3xl mx-auto">
            Explore our curated selection of Indonesia's finest agricultural commodities, prepared to meet the highest export standards.
          </p>
        </div>
      </div>

      <Specialties />
      <OtherCommodities />
      <CTA />
    </div>
  );
}
