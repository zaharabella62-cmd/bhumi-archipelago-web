import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const specialtyCoffees = [
  {
    name: "Gayo Specialty Coffee",
    subtitle: "A Legendary Coffee from the Highlands of Aceh",
    description: "Nestled in the lush mountains of Aceh, Gayo coffee has earned worldwide recognition for its clean cup, remarkable balance, and refined sweetness. Grown at elevations above 1,200 meters, each bean reflects generations of farming heritage and the unique terroir of Indonesia's northern highlands.\n\nWith notes of dark chocolate, brown sugar, gentle citrus, and subtle herbal complexity, Gayo is a versatile origin appreciated by specialty roasters seeking consistency, elegance, and exceptional cup quality.\n\nWhether crafted for espresso or filter brewing, Gayo delivers a memorable experience that continues to define Indonesian specialty coffee.",
    notes: "Dark Chocolate • Brown Sugar • Citrus • Herbal • Sweet Finish",
    images: ["/images/gayo1.jpg", "/images/gayo2.jpg", "/images/gayo3.jpg", "/images/gayo4.jpg", "/images/gayo5.jpg"]
  },
  {
    name: "Ijen Specialty Coffee",
    subtitle: "Elegance Born from Volcanic Soil",
    description: "Cultivated on the fertile slopes surrounding Mount Ijen in East Java, this remarkable Arabica showcases the influence of rich volcanic soil and cool mountain air. Its refined acidity, floral fragrance, and silky mouthfeel make it a favorite among specialty coffee professionals looking for complexity and clarity in every cup.\n\nExpect vibrant citrus notes balanced with caramel sweetness and delicate floral aromas that create a sophisticated drinking experience from the first sip to the last.",
    notes: "Floral • Citrus • Caramel • Honey • Clean Finish",
    images: ["/images/ijen1.jpg", "/images/ijen2.jpg", "/images/ijen3.jpg", "/images/ijen4.jpg", "/images/ijen5.jpg"]
  },
  {
    name: "Kintamani Specialty Coffee",
    subtitle: "Bright, Vibrant, and Distinctly Balinese",
    description: "Grown in Bali's renowned Kintamani Highlands, this specialty coffee is cultivated using the traditional Subak Abian farming system, where harmony between nature and community shapes every harvest.\n\nIts refreshing citrus acidity, tropical fruit character, and delicate sweetness have made Kintamani one of Indonesia's most recognizable specialty origins among international coffee buyers.\n\nBright, elegant, and exceptionally clean, Kintamani is ideal for both filter coffee and light espresso roasting.",
    notes: "Orange • Lemon • Honey • Tropical Fruit • Floral",
    images: ["/images/kintamani1.jpg", "/images/kintamani2.jpg", "/images/kintamani3.jpg", "/images/kintamani4.jpg", "/images/kintamani5.jpg"]
  },
  {
    name: "Java Preanger Specialty Coffee",
    subtitle: "The Heritage of Indonesian Coffee",
    description: "Java Preanger is where Indonesia's coffee story first captivated the world. Cultivated in the cool volcanic highlands of West Java, this historic origin offers remarkable balance between sweetness, body, and gentle acidity.\n\nRich chocolate notes, caramel sweetness, warm spices, and soft floral aromas create a timeless profile that appeals to both traditional and modern specialty coffee roasters.\n\nIts consistency and elegant character continue to make Java Preanger one of Indonesia's most respected coffee origins.",
    notes: "Chocolate • Caramel • Spice • Floral • Nutty",
    images: ["/images/java1.jpg", "/images/java2.jpg", "/images/java3.jpg", "/images/java4.jpg"]
  },
  {
    name: "Flores Bajawa Specialty Coffee",
    subtitle: "A Hidden Gem from Eastern Indonesia",
    description: "Produced in the volcanic highlands of Flores Island, Bajawa coffee is celebrated for its velvety body, sweet chocolate profile, and subtle spice complexity.\n\nThe region's fertile volcanic landscape and traditional cultivation methods produce coffees with remarkable depth and exceptional sweetness, making Flores Bajawa an increasingly sought-after origin among specialty buyers worldwide.",
    notes: "Dark Chocolate • Brown Sugar • Spice • Cedar • Sweet Tobacco",
    images: ["/images/flores1.jpg", "/images/flores2.jpg", "/images/flores3.jpg", "/images/flores4.jpg", "/images/flores5.jpg"]
  }
];

const teas = [
  {
    name: "Black Tea",
    description: "Rich, full-bodied, and aromatic, our Indonesian Black Tea offers a smooth finish with balanced maltiness, making it ideal for traditional tea blends, tea bags, and premium loose-leaf collections.",
    bestFor: ["Tea Brands", "Supermarkets", "Hotels", "Restaurants", "Wholesale Importers"]
  },
  {
    name: "Oolong Tea",
    description: "Carefully semi-oxidized to achieve a delicate balance between green and black tea, Indonesian Oolong Tea delivers floral aromas, natural sweetness, and a silky mouthfeel for discerning tea enthusiasts.",
    bestFor: ["Premium Tea Shops", "Specialty Retail", "Wellness Brands"]
  },
  {
    name: "Jasmine Green Tea",
    description: "Naturally scented with fragrant jasmine blossoms, this refreshing tea combines the delicate freshness of green tea with elegant floral notes, creating a timeless favorite across international markets.",
    bestFor: ["Asian Markets", "Middle Eastern Markets", "Premium Retail", "Café & Restaurant Chains"]
  },
  {
    name: "Green Tea",
    description: "Harvested from selected tea gardens and minimally processed to preserve its natural antioxidants, our Green Tea offers a clean, refreshing taste with vibrant color and subtle vegetal notes.",
    bestFor: ["Health & Wellness Brands", "Private Label", "Food & Beverage Manufacturers"]
  }
];

export default function Specialties() {
  const [activeCoffeeIndex, setActiveCoffeeIndex] = useState(0);

  return (
    <section id="products" className="py-24 bg-ivory text-forest-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* Coffee Section */}
        <div className="space-y-20">
          <div className="text-center space-y-6">
            <span className="text-gold uppercase tracking-wider font-semibold text-sm">Our Products</span>
            <h2 className="text-4xl md:text-5xl font-semibold">Premium Indonesian Coffee</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          {/* Coffee Hero Banner */}
          <div className="w-full h-[50vh] rounded-sm overflow-hidden relative">
            <img 
              src="/images/java2.jpg" 
              alt="Indonesian Coffee Production" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-forest-green/30"></div>
          </div>

          {/* Specialty Coffee */}
          <div id="coffee" className="space-y-16 scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h3 className="text-3xl md:text-4xl font-medium text-gold">Indonesia Specialty Coffee Collection</h3>
              <p className="text-lg font-light leading-relaxed text-forest-green/90">
                Discover Indonesia's most celebrated coffee origins, each shaped by unique terroir, volcanic soil, altitude, and generations of farming tradition.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Sidebar Tabs */}
              <div className="lg:col-span-4 space-y-2">
                {specialtyCoffees.map((coffee, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCoffeeIndex(idx)}
                    className={`w-full text-left px-6 py-4 rounded-sm transition-all duration-300 flex items-center justify-between group ${
                      activeCoffeeIndex === idx 
                        ? 'bg-gold text-forest-green font-semibold' 
                        : 'bg-forest-green/5 border border-forest-green/10 hover:border-gold/50 text-forest-green/90'
                    }`}
                  >
                    <span>{coffee.name}</span>
                    <ChevronRight size={18} className={`transition-transform ${activeCoffeeIndex === idx ? 'opacity-100 translate-x-1' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                  </button>
                ))}
              </div>

              {/* Active Tab Content */}
              <div className="lg:col-span-8 bg-forest-green/5 border border-forest-green/10 p-8 md:p-10 rounded-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCoffeeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full"
                  >
                    <h4 className="text-3xl font-semibold text-gold mb-2">{specialtyCoffees[activeCoffeeIndex].name}</h4>
                    <h5 className="text-sm font-medium uppercase tracking-wide text-forest-green/80 mb-8 pb-4 border-b border-forest-green/10">
                      {specialtyCoffees[activeCoffeeIndex].subtitle}
                    </h5>
                    
                    <div className="text-forest-green/90 font-light text-base leading-relaxed space-y-4 mb-8 whitespace-pre-line flex-grow">
                      {specialtyCoffees[activeCoffeeIndex].description}
                    </div>

                    {specialtyCoffees[activeCoffeeIndex].images && (
                      <div className="mb-8 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 custom-scrollbar">
                        {specialtyCoffees[activeCoffeeIndex].images.map((img, i) => (
                          <div key={i} className="flex-none w-64 h-64 snap-center rounded-sm overflow-hidden bg-forest-green/50">
                            <img src={img} alt={`${specialtyCoffees[activeCoffeeIndex].name} - Image ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-6 bg-forest-green text-ivory border border-forest-green/10 p-6 rounded-sm mt-auto">
                      <span className="block text-xs uppercase tracking-wider text-gold mb-2">Typical Flavor Notes</span>
                      <span className="text-base font-medium">{specialtyCoffees[activeCoffeeIndex].notes}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Green Coffee Beans (Arabica & Robusta) */}
          <div id="green-beans" className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-16 border-t border-forest-green/10 scroll-mt-24">
            <div className="bg-forest-green text-ivory p-8 rounded-sm border border-forest-green/10 flex flex-col h-full space-y-6">
              <h3 className="text-3xl font-medium text-gold">Arabica Green Coffee Beans</h3>
              <blockquote className="text-lg italic font-light text-ivory/90 border-l-4 border-gold pl-4 py-2">
                Premium Arabica coffee cultivated in Indonesia's volcanic highlands, offering distinctive flavor profiles ranging from bright citrus and floral notes to chocolate and caramel sweetness.
              </blockquote>
              <p className="text-ivory/80 font-light flex-grow">Perfect for importers seeking consistent quality and long-term supply.</p>
              <div className="pt-6 mt-auto border-t border-ivory/10 space-y-2">
                <span className="block text-sm font-semibold uppercase tracking-wider text-gold">Available Grades</span>
                <ul className="text-ivory/90 font-light space-y-1">
                  <li>• Grade 1</li>
                  <li>• Grade 2</li>
                </ul>
              </div>
            </div>

            <div className="bg-forest-green text-ivory p-8 rounded-sm border border-forest-green/10 flex flex-col h-full space-y-6">
              <h3 className="text-3xl font-medium text-gold">Robusta Green Coffee Beans</h3>
              <blockquote className="text-lg italic font-light text-ivory/90 border-l-4 border-gold pl-4 py-2">
                Indonesian Robusta is renowned for its bold body, earthy character, and excellent crema—making it an ideal choice for espresso blends, instant coffee, and commercial roasting.
              </blockquote>
              <div className="pt-6 mt-auto border-t border-ivory/10 space-y-2 flex-grow flex flex-col justify-end">
                <div>
                  <span className="block text-sm font-semibold uppercase tracking-wider text-gold mb-2">Origins</span>
                  <ul className="text-ivory/90 font-light grid grid-cols-2 gap-2">
                    <li>• Lampung</li>
                    <li>• Temanggung</li>
                    <li>• Java</li>
                    <li>• Bengkulu</li>
                    <li>• Flores</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-12 text-center">
            <a href="#quotation" className="inline-block px-8 py-4 bg-gold text-forest-green font-semibold rounded-sm hover:bg-ivory transition-colors">
              Request a Coffee Quotation
            </a>
          </div>
        </div>

        {/* Tea Section */}
        <div id="tea" className="space-y-16 pt-24 border-t border-forest-green/10 scroll-mt-24">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold">Premium Indonesian Tea Collection</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="text-xl font-medium text-gold uppercase tracking-wider">Crafted by Nature. Refined Through Tradition.</p>
          </div>

          {/* Tea Hero Banner */}
          <div className="w-full h-[50vh] rounded-sm overflow-hidden relative">
            <img 
              src="/images/tea-1.jpg" 
              alt="Indonesian Tea Plantation" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-forest-green/30"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-lg font-light leading-relaxed text-forest-green/90">
              Indonesia's fertile volcanic highlands provide the perfect environment for cultivating exceptional tea. From the mist-covered plantations of West Java to carefully processed loose-leaf selections, our tea collection is crafted to deliver consistency, freshness, and distinctive character for international buyers.
            </p>
            <p className="text-lg font-light leading-relaxed text-forest-green/90">
              Whether you're sourcing for retail brands, tea houses, hotels, or food service businesses, Bhumi Archipelago offers premium Indonesian teas tailored to your market.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-medium text-gold text-center">Our Tea Selection</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teas.map((tea, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-forest-green text-ivory border border-forest-green/10 p-8 rounded-sm flex flex-col h-full"
                >
                  <h4 className="text-2xl font-semibold text-gold mb-4">{tea.name}</h4>
                  <p className="text-ivory/90 font-light leading-relaxed mb-6 flex-grow">
                    {tea.description}
                  </p>
                  <div className="pt-6 border-t border-ivory/10 mt-auto">
                    <span className="block text-xs uppercase tracking-wider text-gold mb-3">Best For</span>
                    <ul className="text-sm font-medium grid grid-cols-2 gap-2 text-ivory/80">
                      {tea.bestFor?.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tea Image Slider */}
          <div className="pt-8">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 custom-scrollbar">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="flex-none w-72 md:w-96 h-64 md:h-80 snap-center rounded-sm overflow-hidden bg-forest-green/50">
                  <img src={`/images/tea-${num}.jpg`} alt={`Tea Production ${num}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-forest-green/5 border border-forest-green/10 p-8 md:p-12 rounded-sm">
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-gold">Why Choose Indonesian Tea?</h3>
              <ul className="space-y-3 font-light text-forest-green/90">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                  <span>Grown in fertile volcanic highlands</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                  <span>Freshly harvested and carefully processed</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                  <span>Available in bulk or retail-ready packaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                  <span>Private Label & OEM solutions available</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                  <span>Reliable export supply for international buyers</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6 text-center md:text-left bg-forest-green text-ivory p-8 rounded-sm border border-forest-green/10">
              <h4 className="text-xl font-semibold text-gold">Looking for Premium Indonesian Tea?</h4>
              <p className="font-light text-ivory/90">
                Partner with Bhumi Archipelago to source high-quality Indonesian tea with flexible packaging options and dependable export support.
              </p>
              <a href="#quotation" className="mt-4 inline-block px-8 py-4 bg-gold text-forest-green font-semibold rounded-sm hover:bg-ivory transition-colors w-full sm:w-auto">
                Request a Tea Quotation
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
