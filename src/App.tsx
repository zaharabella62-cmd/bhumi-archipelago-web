/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import WhyIndonesia from './components/WhyIndonesia';
import WhyChooseUs from './components/WhyChooseUs';
import OtherCommodities from './components/OtherCommodities';
import BuyerJourney from './components/BuyerJourney';
import Testimonial from './components/Testimonial';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-ivory selection:bg-gold/30">
      <Header />
      <main className="pt-24">
        <Hero />
        <About />
        <Specialties />
        <WhyIndonesia />
        <WhyChooseUs />
        <OtherCommodities />
        <BuyerJourney />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
