import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const countries = [
  "United States", "Canada", "United Kingdom", "Germany", "France", 
  "Netherlands", "Italy", "Spain", "Australia", "Japan", "South Korea", 
  "China", "United Arab Emirates", "Saudi Arabia", "India", "Singapore", 
  "Malaysia", "Other"
];

export default function CTA() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    jobTitle: '',
    email: '',
    phone: '',
    country: '',
    message: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email subject and body
    const subject = encodeURIComponent(`Quotation Request from ${formData.companyName}`);
    const body = encodeURIComponent(`Full Name: ${formData.fullName}\nCompany Name: ${formData.companyName}\nJob Title: ${formData.jobTitle || '-'}\nEmail: ${formData.email}\nPhone: ${formData.phone || '-'}\nCountry: ${formData.country}\n\nMessage:\n${formData.message}`);
    
    // Open email client
    window.location.href = `mailto:hello@bhumiarchipelago.com?subject=${subject}&body=${body}`;
    
    // Show success state
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section id="quotation" className="py-32 bg-forest-green text-ivory relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/coffee1.jpg')] bg-cover bg-center"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {!isSubmitted ? (
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-semibold text-gold">
                Looking for Premium Indonesian Coffee or Tea?
              </h2>
              <p className="text-xl font-sans font-light text-ivory/90">
                Tell us your sourcing requirements, and our team will get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-8 md:p-12 border border-gold/20 rounded-sm"
            >
              <h3 className="text-2xl font-medium mb-8 text-gold">Contact Information</h3>
              <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm text-ivory/90">Full Name *</label>
                    <input required type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full bg-transparent border border-ivory/30 focus:border-gold rounded-sm px-4 py-3 outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="companyName" className="block text-sm text-ivory/90">Company Name *</label>
                    <input required type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full bg-transparent border border-ivory/30 focus:border-gold rounded-sm px-4 py-3 outline-none transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="jobTitle" className="block text-sm text-ivory/90">Job Title</label>
                    <input type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="w-full bg-transparent border border-ivory/30 focus:border-gold rounded-sm px-4 py-3 outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm text-ivory/90">Business Email *</label>
                    <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-transparent border border-ivory/30 focus:border-gold rounded-sm px-4 py-3 outline-none transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm text-ivory/90">Phone / WhatsApp</label>
                    <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-transparent border border-ivory/30 focus:border-gold rounded-sm px-4 py-3 outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="country" className="block text-sm text-ivory/90">Country *</label>
                    <select required id="country" name="country" value={formData.country} onChange={handleChange} className="w-full bg-transparent border border-ivory/30 focus:border-gold rounded-sm px-4 py-3 outline-none transition-colors appearance-none [&>option]:bg-forest-green [&>option]:text-ivory">
                      <option value="" disabled>Select a country</option>
                      {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm text-ivory/90">Message *</label>
                  <textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full bg-transparent border border-ivory/30 focus:border-gold rounded-sm px-4 py-3 outline-none transition-colors resize-none"></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input required type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={handleChange} className="mt-1 w-4 h-4 accent-gold bg-transparent border-ivory/30" />
                  <label htmlFor="consent" className="text-sm font-light text-ivory/70 leading-relaxed">
                    I agree to be contacted by Bhumi Archipelago regarding my inquiry.
                  </label>
                </div>

                <button type="submit" className="w-full bg-gold text-forest-green px-10 py-5 text-lg font-medium hover:bg-ivory transition-colors duration-300 rounded-sm">
                  Request Quotation
                </button>

              </form>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-white/5 backdrop-blur-sm p-12 border border-gold/50 rounded-sm space-y-6"
          >
            <div className="flex justify-center text-gold mb-6">
              <CheckCircle2 size={64} strokeWidth={1.5} />
            </div>
            <h3 className="text-4xl font-semibold text-gold">Thank You!</h3>
            <div className="space-y-2 text-xl font-sans font-light text-ivory/90">
              <p>Your quotation request has been received.</p>
              <p>Our export team will review your inquiry and contact you within one business day.</p>
            </div>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-8 text-gold hover:text-ivory font-sans underline transition-colors"
            >
              Submit another request
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
