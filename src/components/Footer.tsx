import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const whatsappTemplate = "Hello Bhumi Archipelago,\n\nWe are looking for Indonesian agricultural commodities.\n\nProduct: \nEstimated Quantity: \nDestination: \nPreferred Shipping Term: \n\nLooking forward to your quotation.";
  const whatsappUrl = `https://wa.me/6281384735005?text=${encodeURIComponent(whatsappTemplate)}`;

  return (
    <footer className="bg-forest-green border-t border-ivory/10 text-ivory pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col items-start space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-gold mb-1">PT Bhumi Archipelago Global</h3>
                <p className="font-sans font-light text-ivory/70 text-base">
                  From Indonesia's Archipelago to Global Markets
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-lg font-medium text-gold">Contact Us</h4>
            <div className="space-y-4 font-sans font-light">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-ivory/90 hover:text-gold transition-colors group"
              >
                <Phone size={20} className="mt-1 flex-shrink-0 group-hover:text-gold" />
                <span className="text-base leading-relaxed">
                  +6281384735005
                </span>
              </a>

              <a 
                href="mailto:hello@bhumiarchipelago.com" 
                className="flex items-start gap-3 text-ivory/90 hover:text-gold transition-colors group"
              >
                <Mail size={20} className="mt-1 flex-shrink-0 group-hover:text-gold" />
                <span className="text-base leading-relaxed">
                  hello@bhumiarchipelago.com
                </span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-lg font-medium text-gold">Headquarters</h4>
            <div className="flex items-start gap-3 text-ivory/90 font-sans font-light">
              <MapPin size={20} className="mt-1 flex-shrink-0 text-gold" />
              <p className="text-base leading-relaxed">
                Ds. Krajan 01, Telukambulu, Batujaya, Karawang,<br />
                West Java, Indonesia 41354
              </p>
            </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-ivory/10 text-center font-sans font-light text-sm text-ivory/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} PT Bhumi Archipelago Global. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
