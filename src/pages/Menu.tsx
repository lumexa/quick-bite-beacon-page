
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

// Types
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

// Menu data
const menuItems: MenuItem[] = [
  {
    id: "classic-alpin",
    name: "LE CLASSIQUE ALPIN",
    description: "Notre kebab signature avec viande marinée, légumes frais de montagne et sauce maison.",
    price: 12.50,
    imageUrl: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=1000",
    category: "Kebabs"
  },
  {
    id: "urbain-vege",
    name: "L'URBAIN VÉGÉ",
    description: "Version végétarienne avec falafels maison, légumes grillés et sauce tahini au charbon.",
    price: 11.50,
    imageUrl: "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?q=80&w=1000",
    category: "Kebabs"
  },
  {
    id: "summit",
    name: "LE SUMMIT",
    description: "Notre kebab premium avec double viande, fromage raclette et truffe noire.",
    price: 16.90,
    imageUrl: "https://images.unsplash.com/photo-1536510344784-b43e97721c3f?q=80&w=1000",
    category: "Kebabs"
  },
  {
    id: "nordic",
    name: "LE NORDIC",
    description: "Saumon fumé, cream cheese aux herbes, concombre et aneth.",
    price: 14.90,
    imageUrl: "https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?q=80&w=1000",
    category: "Kebabs"
  },
  {
    id: "streetfood",
    name: "LE STREET FOOD",
    description: "Poulet croustillant, sauce BBQ fumée, oignons frits et salade croquante.",
    price: 13.50,
    imageUrl: "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?q=80&w=1000",
    category: "Kebabs"
  },
  {
    id: "frites-maison",
    name: "FRITES MAISON",
    description: "Pommes de terre fraîches, coupées et frites sur place avec assaisonnement spécial.",
    price: 4.90,
    imageUrl: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1000",
    category: "Accompagnements"
  },
  {
    id: "salade-fraicheur",
    name: "SALADE FRAÎCHEUR",
    description: "Mélange de légumes frais, vinaigrette légère et herbes aromatiques.",
    price: 5.50,
    imageUrl: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?q=80&w=1000",
    category: "Accompagnements"
  },
  {
    id: "coca-cola",
    name: "COCA-COLA",
    description: "33cl, servi frais",
    price: 3.00,
    imageUrl: "https://images.unsplash.com/photo-1581098365948-6a5a912b7a49?q=80&w=1000",
    category: "Boissons"
  },
  {
    id: "biere-artisanale",
    name: "BIÈRE ARTISANALE",
    description: "33cl, brasserie locale",
    price: 5.50,
    imageUrl: "https://images.unsplash.com/photo-1555658636-6e4a36218be7?q=80&w=1000",
    category: "Boissons"
  }
];

// Group menu items by category
const groupedMenu = menuItems.reduce((acc, item) => {
  (acc[item.category] = acc[item.category] || []).push(item);
  return acc;
}, {} as Record<string, MenuItem[]>);

const Menu = () => {
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
            backgroundImage: "url('https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?q=80&w=1000')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl mb-6 animate-rotate-in">
            NOTRE <span className="text-outline text-transparent">CARTE</span>
          </h1>
          <p className="text-mountain-lightGray text-xl max-w-2xl mx-auto animate-fade-in">
            Des saveurs authentiques qui fusionnent tradition et innovation
          </p>
        </div>
      </section>
      
      {/* Menu Content */}
      <section className="py-16 container mx-auto px-4">
        {/* Categories Menu */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-3 reveal">
          <div className="flex space-x-2 md:space-x-8">
            {Object.keys(groupedMenu).map((category) => (
              <a 
                key={category} 
                href={`#${category}`} 
                className="px-5 py-3 bg-mountain-lightGray text-mountain-black font-display whitespace-nowrap shadow-brutal-sm hover:shadow-none transition-all duration-200 hover:translate-x-1 hover:translate-y-1"
              >
                {category.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
        
        {/* Menu Items by Category */}
        {Object.entries(groupedMenu).map(([category, items]) => (
          <div key={category} id={category} className="mb-16">
            <h2 className="font-display text-4xl mb-6 text-mountain-black border-b-2 border-mountain-black pb-2 reveal">
              {category.toUpperCase()}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {items.map((item) => (
                <div key={item.id} className="flex bg-mountain-white shadow-brutal hover-scale reveal">
                  <div className="w-1/3">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div className="w-2/3 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-display text-xl text-mountain-black">{item.name}</h3>
                      <span className="font-display text-lg text-mountain-black">{item.price.toFixed(2)} €</span>
                    </div>
                    <p className="text-mountain-gray mb-4 text-sm">{item.description}</p>
                    <Button asChild className="btn-brutal shadow-brutal-sm">
                      <Link to={`/commander?item=${item.id}`}>COMMANDER</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-mountain-black text-mountain-white">
        <div className="container mx-auto px-4 text-center reveal">
          <h2 className="font-display text-4xl mb-6">
            PRÊT À COMMANDER ?
          </h2>
          <p className="text-mountain-lightGray text-lg max-w-2xl mx-auto mb-8">
            Passez votre commande en ligne et venez la récupérer sans attendre
          </p>
          <Button asChild className="bg-mountain-white text-mountain-black font-display text-lg px-8 py-6 animate-pulse-soft">
            <Link to="/commander">COMMANDER MAINTENANT</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Menu;
