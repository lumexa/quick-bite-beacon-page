
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedItems from '../components/FeaturedItems';
import WhyChooseUs from '../components/WhyChooseUs';
import LocationSection from '../components/LocationSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedItems />
      <WhyChooseUs />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
