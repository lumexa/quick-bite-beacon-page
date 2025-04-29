
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Pizza } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <Pizza size={32} className="text-brand-red" />
          <span className="text-xl font-bold text-brand-darkGray">QuickBite</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#menu" className="font-semibold text-brand-darkGray hover:text-brand-red transition-colors">Menu</a>
          <a href="#about" className="font-semibold text-brand-darkGray hover:text-brand-red transition-colors">About</a>
          <a href="#locations" className="font-semibold text-brand-darkGray hover:text-brand-red transition-colors">Locations</a>
          <Button className="bg-brand-red hover:bg-brand-red/90 text-white">Order Online</Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-4">
            <a href="#menu" className="font-semibold text-brand-darkGray hover:text-brand-red transition-colors py-2 border-b">Menu</a>
            <a href="#about" className="font-semibold text-brand-darkGray hover:text-brand-red transition-colors py-2 border-b">About</a>
            <a href="#locations" className="font-semibold text-brand-darkGray hover:text-brand-red transition-colors py-2 border-b">Locations</a>
            <Button className="bg-brand-red hover:bg-brand-red/90 text-white w-full">Order Online</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
