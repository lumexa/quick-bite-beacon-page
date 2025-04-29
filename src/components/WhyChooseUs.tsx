
import React from 'react';
import { Cookie, Utensils, Store, Coffee } from "lucide-react";

const features = [
  {
    icon: <Utensils size={48} className="text-brand-red mb-4" />,
    title: 'Fresh Ingredients',
    description: 'We use only the freshest, highest-quality ingredients in all our menu items.'
  },
  {
    icon: <Cookie size={48} className="text-brand-red mb-4" />,
    title: 'Made to Order',
    description: 'Each order is prepared fresh when you order, not sitting under heat lamps.'
  },
  {
    icon: <Store size={48} className="text-brand-red mb-4" />,
    title: 'Convenient Locations',
    description: 'With multiple locations, we\'re never far from where you are.'
  },
  {
    icon: <Coffee size={48} className="text-brand-red mb-4" />,
    title: 'Fast Service',
    description: 'We pride ourselves on quick service without sacrificing quality.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not just another fast food joint. Here's what makes us special.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg text-center hover-scale"
            >
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-brand-red text-white p-8 md:p-12 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Download Our App</h3>
              <p className="text-white/90 max-w-md">
                Get exclusive deals, easy ordering, and loyalty rewards when you download our app.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-md flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"></path>
                  <path d="M16 3v4"></path>
                  <path d="M8 3v4"></path>
                  <path d="M3 11h18"></path>
                  <path d="M19 16v6"></path>
                  <path d="M16 16v3"></path>
                </svg>
                App Store
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-md flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Play Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
