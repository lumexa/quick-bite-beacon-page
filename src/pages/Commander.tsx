
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

// Types
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

// Menu data (same as in Menu.tsx - would be better to extract to a common data file in a real app)
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

const Commander = () => {
  const [searchParams] = useSearchParams();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupTime: ''
  });
  
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
  
  // Check if we have an item ID in URL params and add it to cart
  useEffect(() => {
    const itemId = searchParams.get('item');
    if (itemId) {
      const foundItem = menuItems.find(item => item.id === itemId);
      if (foundItem && !cart.some(item => item.id === itemId)) {
        addToCart(foundItem);
      }
    }
  }, [searchParams]);
  
  const addToCart = (item: MenuItem) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    
    if (existingItemIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  
  const updateQuantity = (itemId: string, change: number) => {
    const updatedCart = cart.map(item => {
      if (item.id === itemId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(Boolean) as CartItem[];
    
    setCart(updatedCart);
  };
  
  const removeFromCart = (itemId: string) => {
    setCart(cart.filter(item => item.id !== itemId));
  };
  
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleNextStep = () => {
    setStep(prevStep => prevStep + 1);
    window.scrollTo(0, 0);
  };
  
  const handlePreviousStep = () => {
    setStep(prevStep => prevStep - 1);
  };
  
  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the order to a backend
    handleNextStep();
  };
  
  return (
    <div className="min-h-screen bg-mountain-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-mountain-black text-mountain-white relative">
        <div 
          className="absolute inset-0 z-0 opacity-20" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1000')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl mb-6 animate-rotate-in">
            COMMANDER
          </h1>
          
          {/* Progress Steps */}
          <div className="flex justify-center items-center space-x-4 text-sm mt-8">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-mountain-white text-mountain-black' : 'bg-mountain-darkGray text-mountain-lightGray'}`}>
              1
            </div>
            <div className={`w-10 h-1 ${step >= 2 ? 'bg-mountain-white' : 'bg-mountain-darkGray'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-mountain-white text-mountain-black' : 'bg-mountain-darkGray text-mountain-lightGray'}`}>
              2
            </div>
            <div className={`w-10 h-1 ${step >= 3 ? 'bg-mountain-white' : 'bg-mountain-darkGray'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 3 ? 'bg-mountain-white text-mountain-black' : 'bg-mountain-darkGray text-mountain-lightGray'}`}>
              3
            </div>
          </div>
        </div>
      </section>
      
      {/* Order Content */}
      <section className="py-16 container mx-auto px-4">
        {/* Step 1: Select Items */}
        {step === 1 && (
          <div className="reveal">
            <h2 className="font-display text-3xl mb-8 text-center text-mountain-black">SÉLECTIONNEZ VOS ARTICLES</h2>
            
            {/* Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Kebabs */}
              <div>
                <h3 className="font-display text-2xl mb-4 border-b-2 border-mountain-black pb-2">KEBABS</h3>
                {menuItems
                  .filter(item => item.category === "Kebabs")
                  .map(item => (
                    <Card key={item.id} className="mb-4 overflow-hidden border-0 shadow-brutal-sm">
                      <div className="flex">
                        <div className="w-1/3">
                          <img 
                            src={item.imageUrl} 
                            alt={item.name} 
                            className="w-full h-full object-cover grayscale"
                          />
                        </div>
                        <CardContent className="w-2/3 p-3">
                          <div className="flex justify-between items-start">
                            <h4 className="font-display text-base text-mountain-black">{item.name}</h4>
                            <span className="font-display text-sm text-mountain-black">{item.price.toFixed(2)} €</span>
                          </div>
                          <p className="text-mountain-gray text-xs mb-3 line-clamp-2">{item.description}</p>
                          <Button 
                            onClick={() => addToCart(item)}
                            className="btn-brutal shadow-brutal-sm text-sm py-1 px-4 h-auto"
                          >
                            AJOUTER
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
              </div>
              
              {/* Accompagnements */}
              <div>
                <h3 className="font-display text-2xl mb-4 border-b-2 border-mountain-black pb-2">ACCOMPAGNEMENTS</h3>
                {menuItems
                  .filter(item => item.category === "Accompagnements")
                  .map(item => (
                    <Card key={item.id} className="mb-4 overflow-hidden border-0 shadow-brutal-sm">
                      <div className="flex">
                        <div className="w-1/3">
                          <img 
                            src={item.imageUrl} 
                            alt={item.name} 
                            className="w-full h-full object-cover grayscale"
                          />
                        </div>
                        <CardContent className="w-2/3 p-3">
                          <div className="flex justify-between items-start">
                            <h4 className="font-display text-base text-mountain-black">{item.name}</h4>
                            <span className="font-display text-sm text-mountain-black">{item.price.toFixed(2)} €</span>
                          </div>
                          <p className="text-mountain-gray text-xs mb-3 line-clamp-2">{item.description}</p>
                          <Button 
                            onClick={() => addToCart(item)}
                            className="btn-brutal shadow-brutal-sm text-sm py-1 px-4 h-auto"
                          >
                            AJOUTER
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
              </div>
              
              {/* Boissons */}
              <div>
                <h3 className="font-display text-2xl mb-4 border-b-2 border-mountain-black pb-2">BOISSONS</h3>
                {menuItems
                  .filter(item => item.category === "Boissons")
                  .map(item => (
                    <Card key={item.id} className="mb-4 overflow-hidden border-0 shadow-brutal-sm">
                      <div className="flex">
                        <div className="w-1/3">
                          <img 
                            src={item.imageUrl} 
                            alt={item.name} 
                            className="w-full h-full object-cover grayscale"
                          />
                        </div>
                        <CardContent className="w-2/3 p-3">
                          <div className="flex justify-between items-start">
                            <h4 className="font-display text-base text-mountain-black">{item.name}</h4>
                            <span className="font-display text-sm text-mountain-black">{item.price.toFixed(2)} €</span>
                          </div>
                          <p className="text-mountain-gray text-xs mb-3 line-clamp-2">{item.description}</p>
                          <Button 
                            onClick={() => addToCart(item)}
                            className="btn-brutal shadow-brutal-sm text-sm py-1 px-4 h-auto"
                          >
                            AJOUTER
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
            
            {/* Cart Summary */}
            <div className="mt-12 bg-mountain-lightGray p-6 shadow-brutal">
              <h3 className="font-display text-2xl mb-4 text-mountain-black flex items-center">
                <ShoppingBag className="mr-2" size={24} /> VOTRE COMMANDE
              </h3>
              
              {cart.length === 0 ? (
                <p className="text-mountain-gray text-center py-8">Votre panier est vide</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between items-center py-2 border-b border-mountain-gray">
                        <div className="flex items-center">
                          <div className="mr-4">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="bg-mountain-white w-6 h-6 flex items-center justify-center text-mountain-black rounded-full"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="block text-center my-1">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="bg-mountain-white w-6 h-6 flex items-center justify-center text-mountain-black rounded-full"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <div>
                            <h4 className="font-display text-mountain-black">{item.name}</h4>
                            <p className="text-mountain-gray text-sm">{item.price.toFixed(2)} € / unité</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-display text-mountain-black">{(item.price * item.quantity).toFixed(2)} €</p>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-xs text-mountain-gray underline"
                          >
                            Retirer
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t-2 border-mountain-black pt-4 flex justify-between items-center">
                    <div>
                      <p className="text-mountain-gray">Total</p>
                      <p className="font-display text-2xl text-mountain-black">{calculateTotal().toFixed(2)} €</p>
                    </div>
                    <Button 
                      onClick={handleNextStep}
                      disabled={cart.length === 0}
                      className="btn-brutal animate-pulse-soft"
                    >
                      CONTINUER <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        
        {/* Step 2: Customer Information */}
        {step === 2 && (
          <div className="max-w-xl mx-auto reveal">
            <h2 className="font-display text-3xl mb-8 text-center text-mountain-black">VOS INFORMATIONS</h2>
            
            <form onSubmit={handleSubmitOrder} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-mountain-black font-medium">Nom et prénom</Label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 shadow-brutal-sm"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-mountain-black font-medium">Téléphone</Label>
                <Input 
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="mt-1 shadow-brutal-sm"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-mountain-black font-medium">Email</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 shadow-brutal-sm"
                />
              </div>
              
              <div>
                <Label htmlFor="pickupTime" className="text-mountain-black font-medium">Heure de retrait souhaitée</Label>
                <Input 
                  id="pickupTime"
                  name="pickupTime"
                  type="time"
                  value={formData.pickupTime}
                  onChange={handleInputChange}
                  required
                  className="mt-1 shadow-brutal-sm"
                />
                <p className="text-xs text-mountain-gray mt-1">Nos horaires: 11h00 - 22h00</p>
              </div>
              
              {/* Order Summary */}
              <div className="bg-mountain-lightGray p-6 shadow-brutal mt-8">
                <h3 className="font-display text-xl mb-4 text-mountain-black border-b border-mountain-gray pb-2">
                  RÉCAPITULATIF DE VOTRE COMMANDE
                </h3>
                
                <div className="space-y-2 mb-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between">
                      <span>
                        {item.quantity} x {item.name}
                      </span>
                      <span className="font-medium">
                        {(item.price * item.quantity).toFixed(2)} €
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-mountain-gray pt-4 flex justify-between font-display text-mountain-black text-xl">
                  <span>TOTAL</span>
                  <span>{calculateTotal().toFixed(2)} €</span>
                </div>
              </div>
              
              <div className="flex justify-between pt-4">
                <Button 
                  type="button"
                  onClick={handlePreviousStep}
                  className="bg-transparent border-2 border-mountain-black text-mountain-black hover:bg-mountain-black hover:text-mountain-white transition-colors"
                >
                  RETOUR
                </Button>
                
                <Button 
                  type="submit"
                  className="btn-brutal animate-pulse-soft"
                >
                  VALIDER MA COMMANDE <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </form>
          </div>
        )}
        
        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="max-w-xl mx-auto text-center reveal">
            <div className="bg-mountain-white p-8 shadow-brutal">
              <div className="w-20 h-20 bg-mountain-black text-mountain-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h2 className="font-display text-3xl mb-4 text-mountain-black">COMMANDE CONFIRMÉE !</h2>
              <p className="text-mountain-gray mb-6">
                Merci pour votre commande. Votre commande est en cours de préparation et sera prête à l'heure que vous avez choisie.
              </p>
              
              <div className="bg-mountain-lightGray p-6 mb-8">
                <h3 className="font-display text-xl mb-2 text-mountain-black">DÉTAILS DE LA COMMANDE</h3>
                <p className="text-mountain-gray">Heure de retrait : {formData.pickupTime}</p>
                <p className="text-mountain-gray">Adresse : 42 rue de la Montagne, 75001 Paris</p>
                <p className="text-mountain-gray mt-4">En cas de problème, veuillez nous contacter au 01 23 45 67 89</p>
              </div>
              
              <Button asChild className="btn-brutal">
                <a href="/">RETOUR À L'ACCUEIL</a>
              </Button>
            </div>
          </div>
        )}
      </section>
      
      <Footer />
    </div>
  );
};

export default Commander;
