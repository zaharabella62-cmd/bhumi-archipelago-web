import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import Specialties from '../components/Specialties';
import WhyIndonesia from '../components/WhyIndonesia';
import WhyChooseUs from '../components/WhyChooseUs';
import OtherCommodities from '../components/OtherCommodities';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <div className="pt-24">
      <Helmet>
        <title>Bhumi Archipelago | Indonesian Coffee & Tea Exporter</title>
        <meta name="description" content="Connecting international coffee roasters, importers, distributors, and tea brands with carefully selected Indonesian producers. Premium Specialty Coffee, Arabica, and Robusta." />
        <meta name="keywords" content="Indonesian Specialty Coffee Exporter, Indonesian Arabica Coffee Supplier, Indonesian Robusta Coffee Exporter, Private Label Coffee Manufacturer Indonesia, Indonesian Black Tea Exporter, Indonesian Oolong Tea Supplier, Indonesian Jasmine Green Tea Exporter, Premium Loose Leaf Tea from Indonesia" />
      </Helmet>
      <Hero />
      <About />
      <WhyIndonesia />
      <WhyChooseUs />
      <Specialties />
      <OtherCommodities />
      <Testimonial />
      <CTA />
    </div>
  );
}
