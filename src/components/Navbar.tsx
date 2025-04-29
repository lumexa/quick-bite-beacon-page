
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-mountain-black text-mountain-white py-3' : 'bg-transparent text-mountain-white py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-display text-3xl tracking-wider">MOUNTAIN<span className="text-mountain-lightGray">KEBAB</span></span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-mountain-lightGray transition-colors">Accueil</Link>
          <Link to="/menu" className="font-medium hover:text-mountain-lightGray transition-colors">Menu</Link>
          <Link to="/commander" className="font-medium hover:text-mountain-lightGray transition-colors">Commander</Link>
          <Link to="/a-propos" className="font-medium hover:text-mountain-lightGray transition-colors">À propos</Link>
          <Link to="/contact" className="font-medium hover:text-mountain-lightGray transition-colors">Contact</Link>
          <Button asChild className="btn-brutal ml-4 shadow-brutal-sm">
            <Link to="/commander">Commander</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu} 
            className="text-2xl focus:outline-none"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:hidden bg-mountain-black text-mountain-white transform transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <button 
            onClick={toggleMobileMenu} 
            className="text-2xl focus:outline-none"
            aria-label="Fermer le menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl -mt-16">
          <Link to="/" onClick={toggleMobileMenu} className="hover:text-mountain-lightGray transition-colors font-display">ACCUEIL</Link>
          <Link to="/menu" onClick={toggleMobileMenu} className="hover:text-mountain-lightGray transition-colors font-display">MENU</Link>
          <Link to="/commander" onClick={toggleMobileMenu} className="hover:text-mountain-lightGray transition-colors font-display">COMMANDER</Link>
          <Link to="/a-propos" onClick={toggleMobileMenu} className="hover:text-mountain-lightGray transition-colors font-display">À PROPOS</Link>
          <Link to="/contact" onClick={toggleMobileMenu} className="hover:text-mountain-lightGray transition-colors font-display">CONTACT</Link>
          <Button asChild className="btn-brutal mt-4">
            <Link to="/commander" onClick={toggleMobileMenu}>COMMANDER</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
