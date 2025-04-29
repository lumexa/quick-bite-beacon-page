
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-mountain-black text-mountain-white pt-16 pb-8 texture-overlay">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="space-y-4">
            <h3 className="font-display text-3xl mb-4">MOUNTAIN<span className="text-mountain-lightGray">KEBAB</span></h3>
            <p className="text-mountain-lightGray max-w-xs">
              Une expérience culinaire urbaine et authentique, inspirée des montagnes et du street-food moderne.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-6 border-b border-mountain-gray pb-2">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="inline-flex items-center hover:text-mountain-lightGray transition-all duration-300 hover:pl-1">
                <ArrowRight size={16} className="mr-2" /> Accueil
              </Link></li>
              <li><Link to="/menu" className="inline-flex items-center hover:text-mountain-lightGray transition-all duration-300 hover:pl-1">
                <ArrowRight size={16} className="mr-2" /> Menu
              </Link></li>
              <li><Link to="/commander" className="inline-flex items-center hover:text-mountain-lightGray transition-all duration-300 hover:pl-1">
                <ArrowRight size={16} className="mr-2" /> Commander
              </Link></li>
              <li><Link to="/a-propos" className="inline-flex items-center hover:text-mountain-lightGray transition-all duration-300 hover:pl-1">
                <ArrowRight size={16} className="mr-2" /> À propos
              </Link></li>
              <li><Link to="/contact" className="inline-flex items-center hover:text-mountain-lightGray transition-all duration-300 hover:pl-1">
                <ArrowRight size={16} className="mr-2" /> Contact
              </Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-display text-xl mb-6 border-b border-mountain-gray pb-2">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="font-bold mr-2">Adresse:</span>
                <span className="text-mountain-lightGray">42 rue de la Montagne<br />75001 Paris</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">Téléphone:</span>
                <span className="text-mountain-lightGray">01 23 45 67 89</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">Email:</span>
                <span className="text-mountain-lightGray">contact@mountainkebab.fr</span>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h4 className="font-display text-xl mb-6 border-b border-mountain-gray pb-2">Horaires</h4>
            <ul className="space-y-3 text-mountain-lightGray">
              <li className="flex justify-between">
                <span>Lundi - Jeudi:</span>
                <span>11h - 22h</span>
              </li>
              <li className="flex justify-between">
                <span>Vendredi - Samedi:</span>
                <span>11h - 00h</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche:</span>
                <span>11h - 22h</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-mountain-gray mt-12 pt-8 text-center text-mountain-lightGray">
          <p>&copy; {currentYear} Mountain Kebab. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
