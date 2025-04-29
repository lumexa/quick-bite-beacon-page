
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')" 
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-shadow">
            Delicious Food,<br /> 
            <span className="text-brand-yellow">Delivered Fast</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-shadow max-w-lg">
            Experience the perfect blend of flavor and convenience with our chef-crafted meals delivered right to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-lg">
              Order Now
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
