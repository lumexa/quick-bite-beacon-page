
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const APropos = () => {
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
    <div className="min-h-screen bg-mountain-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-mountain-black text-mountain-white relative">
        <div 
          className="absolute inset-0 z-0 opacity-20" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1463569517019-4513e2c6d8df?q=80&w=1000')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl mb-6 animate-rotate-in">
            À <span className="text-outline text-transparent">PROPOS</span> DE NOUS
          </h1>
          <p className="text-mountain-lightGray text-xl max-w-2xl mx-auto animate-fade-in">
            Découvrez l'histoire et les valeurs de Mountain Kebab
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <img 
                src="https://images.unsplash.com/photo-1532706291233-726291975392?q=80&w=1000" 
                alt="Notre histoire" 
                className="w-full h-auto grayscale shadow-brutal"
              />
            </div>
            <div className="reveal">
              <h2 className="font-display text-4xl md:text-5xl mb-6 text-mountain-black">
                NOTRE HISTOIRE
              </h2>
              <div className="w-20 h-1 bg-mountain-black mb-6"></div>
              <p className="text-mountain-gray mb-4">
                Mountain Kebab est né en 2018 de la rencontre entre deux amis passionnés, Alex et Sofian. Après des années d'expérience dans la restauration haut de gamme et le street food, ils ont décidé de fusionner leurs univers pour créer un concept unique.
              </p>
              <p className="text-mountain-gray mb-4">
                Inspirés par leurs origines montagnardes et leur amour pour la culture urbaine, ils ont imaginé un lieu où la qualité culinaire rencontrerait l'authenticité du street food, dans une ambiance à la fois brute et accueillante.
              </p>
              <p className="text-mountain-gray">
                Depuis son ouverture, Mountain Kebab s'est imposé comme une référence incontournable à Paris, reconnu pour la qualité de ses produits, son esthétique unique et son approche novatrice du kebab.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-20 bg-mountain-lightGray texture-overlay">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="font-display text-4xl md:text-5xl mb-4 text-mountain-black">
              NOS VALEURS
            </h2>
            <div className="w-20 h-1 bg-mountain-black mx-auto mb-6"></div>
            <p className="text-mountain-gray text-lg max-w-2xl mx-auto">
              Chaque jour, nous nous efforçons d'incarner ces valeurs qui définissent notre identité
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-mountain-white p-8 shadow-brutal hover-scale reveal">
              <div className="w-16 h-16 bg-mountain-black text-mountain-white flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-display text-2xl mb-3 text-mountain-black">AUTHENTICITÉ</h3>
              <p className="text-mountain-gray">
                Nous restons fidèles à nos racines et à notre vision, en préservant l'essence des saveurs traditionnelles tout en les réinventant avec une touche contemporaine.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-mountain-white p-8 shadow-brutal hover-scale reveal">
              <div className="w-16 h-16 bg-mountain-black text-mountain-white flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl mb-3 text-mountain-black">QUALITÉ</h3>
              <p className="text-mountain-gray">
                Nous sélectionnons rigoureusement nos ingrédients auprès de producteurs locaux et éthiques, garantissant fraîcheur et saveurs exceptionnelles dans chaque plat.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-mountain-white p-8 shadow-brutal hover-scale reveal">
              <div className="w-16 h-16 bg-mountain-black text-mountain-white flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-display text-2xl mb-3 text-mountain-black">INNOVATION</h3>
              <p className="text-mountain-gray">
                Nous repoussons constamment les limites du street food en expérimentant de nouvelles recettes, techniques et présentations pour surprendre et ravir nos clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="font-display text-4xl md:text-5xl mb-4 text-mountain-black">
              NOTRE ÉQUIPE
            </h2>
            <div className="w-20 h-1 bg-mountain-black mx-auto mb-6"></div>
            <p className="text-mountain-gray text-lg max-w-2xl mx-auto">
              Rencontrez les passionnés qui donnent vie à Mountain Kebab chaque jour
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="reveal">
              <div className="relative mb-6 shadow-brutal">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000" 
                  alt="Alex - Fondateur" 
                  className="w-full h-auto grayscale"
                />
                <div className="absolute bottom-0 left-0 w-full bg-mountain-black bg-opacity-70 p-3">
                  <h3 className="font-display text-mountain-white">ALEX</h3>
                  <p className="text-mountain-lightGray text-sm">Fondateur & Chef</p>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="reveal">
              <div className="relative mb-6 shadow-brutal">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000" 
                  alt="Sofian - Co-fondateur" 
                  className="w-full h-auto grayscale"
                />
                <div className="absolute bottom-0 left-0 w-full bg-mountain-black bg-opacity-70 p-3">
                  <h3 className="font-display text-mountain-white">SOFIAN</h3>
                  <p className="text-mountain-lightGray text-sm">Co-fondateur & Directeur</p>
                </div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="reveal">
              <div className="relative mb-6 shadow-brutal">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000" 
                  alt="Léa - Chef de cuisine" 
                  className="w-full h-auto grayscale"
                />
                <div className="absolute bottom-0 left-0 w-full bg-mountain-black bg-opacity-70 p-3">
                  <h3 className="font-display text-mountain-white">LÉA</h3>
                  <p className="text-mountain-lightGray text-sm">Chef de cuisine</p>
                </div>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="reveal">
              <div className="relative mb-6 shadow-brutal">
                <img 
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1000" 
                  alt="Thomas - Manager" 
                  className="w-full h-auto grayscale"
                />
                <div className="absolute bottom-0 left-0 w-full bg-mountain-black bg-opacity-70 p-3">
                  <h3 className="font-display text-mountain-white">THOMAS</h3>
                  <p className="text-mountain-lightGray text-sm">Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-mountain-black text-mountain-white relative">
        <div 
          className="absolute inset-0 z-0 opacity-20" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1445293493143-1744138328a6?q=80&w=1000')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center reveal">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            REJOIGNEZ L'AVENTURE
          </h2>
          <p className="text-mountain-lightGray text-xl mb-8 max-w-2xl mx-auto">
            Vous êtes passionné par la cuisine et l'univers de Mountain Kebab ? Nous sommes toujours à la recherche de nouveaux talents pour rejoindre notre équipe.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="btn-brutal">
              <Link to="/contact">NOUS CONTACTER</Link>
            </Button>
            <Button asChild className="bg-transparent border-2 border-mountain-white text-mountain-white hover:bg-mountain-white hover:text-mountain-black transition-colors">
              <a href="mailto:recrutement@mountainkebab.fr">ENVOYER UNE CANDIDATURE</a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default APropos;
