
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // Function to handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal');
      
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-mountain-black z-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1531317107888-5a7f81fba0c6?q=80&w=2070&auto=format&fit=crop')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) contrast(1.2) brightness(0.7)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-mountain-black/70 to-mountain-black/90"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl text-mountain-white mb-6 animate-rotate-in">
            ALTITUDE <span className="text-outline text-transparent">STREET</span> FOOD
          </h1>
          <p className="text-mountain-lightGray text-xl md:text-2xl max-w-2xl mx-auto mb-10 animate-fade-in">
            Une expérience culinaire à l'état brut, où la montagne rencontre l'asphalte
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-reveal">
            <Button asChild className="btn-brutal">
              <Link to="/menu">DÉCOUVRIR LE MENU</Link>
            </Button>
            <Button asChild className="bg-transparent border-2 border-mountain-white text-mountain-white hover:bg-mountain-white hover:text-mountain-black transition-all duration-300">
              <Link to="/commander" className="flex items-center">
                COMMANDER MAINTENANT <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#concept" aria-label="Découvrir plus" className="text-mountain-white border border-mountain-white rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </a>
        </div>
      </section>
      
      {/* Concept Section */}
      <section id="concept" className="py-20 bg-mountain-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="font-display text-4xl md:text-5xl mb-6 text-mountain-black">
                L'ESPRIT<br />MOUNTAIN KEBAB
              </h2>
              <div className="w-20 h-1 bg-mountain-black mb-6"></div>
              <p className="text-mountain-darkGray text-lg mb-6">
                Né de la fusion entre la tradition culinaire des montagnes et l'énergie vibrante des rues urbaines, Mountain Kebab réinvente le kebab avec une approche contemporaine et authentique.
              </p>
              <p className="text-mountain-darkGray text-lg mb-8">
                Chaque bouchée est une ascension vers des saveurs intenses, des ingrédients soigneusement sélectionnés et une expérience qui dépasse le simple repas.
              </p>
              <Button asChild className="btn-brutal">
                <Link to="/a-propos">NOTRE HISTOIRE</Link>
              </Button>
            </div>
            <div className="relative reveal">
              <img 
                src="https://images.unsplash.com/photo-1525164286253-04e68b9d94c6?q=80&w=1000" 
                alt="Mountain Kebab concept" 
                className="w-full h-auto object-cover grayscale"
                style={{ filter: 'grayscale(100%) contrast(1.2)' }}
              />
              <div className="absolute -bottom-6 -right-6 bg-mountain-black text-mountain-white p-6 shadow-brutal">
                <p className="font-display text-2xl">BRUT</p>
                <p className="text-mountain-lightGray">& AUTHENTIQUE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Menu Items */}
      <section className="py-20 bg-mountain-lightGray texture-overlay">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="font-display text-4xl md:text-5xl mb-4 text-mountain-black">
              NOS SPÉCIALITÉS
            </h2>
            <div className="w-20 h-1 bg-mountain-black mx-auto mb-6"></div>
            <p className="text-mountain-darkGray text-lg max-w-2xl mx-auto">
              Découvrez nos créations signatures, où chaque recette est élaborée pour offrir une expérience gustative unique.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <div className="bg-mountain-white p-6 shadow-brutal hover-scale reveal">
              <div className="relative h-60 mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=1000" 
                  alt="Le Classique Alpin" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <h3 className="font-display text-2xl mb-3 text-mountain-black">LE CLASSIQUE ALPIN</h3>
              <p className="text-mountain-gray mb-4">
                Notre kebab signature avec viande marinée, légumes frais de montagne et sauce maison.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-display text-xl text-mountain-black">12,50 €</span>
                <Button asChild className="btn-brutal shadow-brutal-sm">
                  <Link to="/commander">COMMANDER</Link>
                </Button>
              </div>
            </div>
            
            {/* Menu Item 2 */}
            <div className="bg-mountain-white p-6 shadow-brutal hover-scale reveal">
              <div className="relative h-60 mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1530469912745-a215c6b256ea?q=80&w=1000" 
                  alt="L'Urbain Végé" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <h3 className="font-display text-2xl mb-3 text-mountain-black">L'URBAIN VÉGÉ</h3>
              <p className="text-mountain-gray mb-4">
                Version végétarienne avec falafels maison, légumes grillés et sauce tahini au charbon.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-display text-xl text-mountain-black">11,50 €</span>
                <Button asChild className="btn-brutal shadow-brutal-sm">
                  <Link to="/commander">COMMANDER</Link>
                </Button>
              </div>
            </div>
            
            {/* Menu Item 3 */}
            <div className="bg-mountain-white p-6 shadow-brutal hover-scale reveal">
              <div className="relative h-60 mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1536510344784-b43e97721c3f?q=80&w=1000" 
                  alt="Le Summit" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <h3 className="font-display text-2xl mb-3 text-mountain-black">LE SUMMIT</h3>
              <p className="text-mountain-gray mb-4">
                Notre kebab premium avec double viande, fromage raclette et truffe noire.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-display text-xl text-mountain-black">16,90 €</span>
                <Button asChild className="btn-brutal shadow-brutal-sm">
                  <Link to="/commander">COMMANDER</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 reveal">
            <Button asChild className="btn-brutal">
              <Link to="/menu" className="flex items-center">
                VOIR TOUT LE MENU <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-mountain-black text-mountain-white relative">
        <div 
          className="absolute inset-0 z-0 opacity-20" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto reveal">
            <h2 className="font-display text-5xl md:text-7xl mb-6 leading-tight">
              ÉLEVEZ VOTRE <span className="text-outline text-transparent">EXPÉRIENCE</span> CULINAIRE
            </h2>
            <p className="text-mountain-lightGray text-xl mb-8">
              Commandez en ligne et savourez l'authentique goût Mountain Kebab en quelques clics.
            </p>
            <Button asChild className="bg-mountain-white text-mountain-black text-lg px-10 py-6 font-display animate-pulse-soft">
              <Link to="/commander">COMMANDER MAINTENANT</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Instagram Feed Section */}
      <section className="py-20 bg-mountain-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="font-display text-4xl text-mountain-black mb-4">
              #MOUNTAINKEBAB
            </h2>
            <p className="text-mountain-gray max-w-2xl mx-auto">
              Suivez-nous sur Instagram et partagez votre expérience
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 reveal">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <a 
                key={item} 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="aspect-square overflow-hidden group"
              >
                <img 
                  src={`https://source.unsplash.com/random/300x300?kebab,food,urban&sig=${item}`}
                  alt="Instagram post" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="py-20 bg-mountain-lightGray texture-overlay">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="font-display text-4xl md:text-5xl mb-6 text-mountain-black">
                NOUS TROUVER
              </h2>
              <div className="w-20 h-1 bg-mountain-black mb-6"></div>
              <address className="not-italic mb-8 text-lg">
                <p className="mb-2"><strong>Mountain Kebab</strong></p>
                <p className="text-mountain-gray">42 rue de la Montagne</p>
                <p className="text-mountain-gray mb-4">75001 Paris</p>
                <p className="text-mountain-gray">Téléphone: 01 23 45 67 89</p>
                <p className="text-mountain-gray">Email: contact@mountainkebab.fr</p>
              </address>
              
              <div className="mb-8">
                <h3 className="font-display text-xl mb-3 text-mountain-black">HORAIRES D'OUVERTURE</h3>
                <ul className="space-y-2 text-mountain-gray">
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
              
              <Button asChild className="btn-brutal">
                <Link to="/contact">NOUS CONTACTER</Link>
              </Button>
            </div>
            
            <div className="reveal">
              {/* Placeholder for a map - in a real implementation, this would be replaced with an actual map */}
              <div className="aspect-square relative shadow-brutal bg-mountain-white">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=1000" 
                  alt="Location map" 
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-mountain-black bg-opacity-50">
                  <p className="text-mountain-white text-lg font-medium">Carte interactive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
