
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
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
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the form to a backend
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-mountain-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-mountain-black text-mountain-white relative">
        <div 
          className="absolute inset-0 z-0 opacity-20" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=1000')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl mb-6 animate-rotate-in">
            CONTACTEZ-<span className="text-outline text-transparent">NOUS</span>
          </h1>
          <p className="text-mountain-lightGray text-xl max-w-2xl mx-auto animate-fade-in">
            Une question, une suggestion ou simplement envie de discuter avec nous ? Nous sommes à votre écoute.
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-20 bg-mountain-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="reveal">
              <h2 className="font-display text-4xl mb-8 text-mountain-black">
                ENVOYEZ-NOUS UN MESSAGE
              </h2>
              
              {formSubmitted ? (
                <div className="bg-mountain-lightGray p-8 shadow-brutal">
                  <div className="w-16 h-16 bg-mountain-black text-mountain-white flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl mb-4 text-mountain-black text-center">MESSAGE ENVOYÉ !</h3>
                  <p className="text-mountain-gray text-center">
                    Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    <Label htmlFor="subject" className="text-mountain-black font-medium">Sujet</Label>
                    <Input 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-1 shadow-brutal-sm"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-mountain-black font-medium">Message</Label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm shadow-brutal-sm"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="btn-brutal animate-pulse-soft"
                  >
                    ENVOYER <ArrowRight size={18} className="ml-2" />
                  </Button>
                </form>
              )}
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8 reveal">
              <h2 className="font-display text-4xl mb-8 text-mountain-black">
                NOS COORDONNÉES
              </h2>
              
              {/* Contact Cards */}
              <div className="bg-mountain-lightGray p-6 shadow-brutal flex items-start">
                <div className="w-12 h-12 bg-mountain-black text-mountain-white flex items-center justify-center mr-4">
                  <MapPin />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2 text-mountain-black">ADRESSE</h3>
                  <p className="text-mountain-gray">
                    42 rue de la Montagne<br />
                    75001 Paris<br />
                    France
                  </p>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button className="mt-4 bg-mountain-black text-mountain-white hover:bg-mountain-darkGray">
                        VOIR LA CARTE
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 p-0">
                      <div className="aspect-video relative">
                        {/* Placeholder for map */}
                        <div className="w-full h-full bg-mountain-darkGray flex items-center justify-center">
                          <p className="text-mountain-white text-center">Carte interactive</p>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              
              <div className="bg-mountain-lightGray p-6 shadow-brutal flex items-start">
                <div className="w-12 h-12 bg-mountain-black text-mountain-white flex items-center justify-center mr-4">
                  <Phone />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2 text-mountain-black">TÉLÉPHONE</h3>
                  <p className="text-mountain-gray mb-2">
                    Service client : 01 23 45 67 89
                  </p>
                  <p className="text-mountain-gray">
                    Commandes : 01 23 45 67 90
                  </p>
                </div>
              </div>
              
              <div className="bg-mountain-lightGray p-6 shadow-brutal flex items-start">
                <div className="w-12 h-12 bg-mountain-black text-mountain-white flex items-center justify-center mr-4">
                  <Mail />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2 text-mountain-black">EMAIL</h3>
                  <p className="text-mountain-gray mb-2">
                    Contact général : <a href="mailto:contact@mountainkebab.fr" className="underline">contact@mountainkebab.fr</a>
                  </p>
                  <p className="text-mountain-gray">
                    Recrutement : <a href="mailto:recrutement@mountainkebab.fr" className="underline">recrutement@mountainkebab.fr</a>
                  </p>
                </div>
              </div>
              
              <div className="bg-mountain-lightGray p-6 shadow-brutal flex items-start">
                <div className="w-12 h-12 bg-mountain-black text-mountain-white flex items-center justify-center mr-4">
                  <Clock />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2 text-mountain-black">HORAIRES</h3>
                  <ul className="text-mountain-gray">
                    <li className="flex justify-between mb-2">
                      <span>Lundi - Jeudi:</span>
                      <span>11h - 22h</span>
                    </li>
                    <li className="flex justify-between mb-2">
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
              
              {/* Social Media */}
              <div>
                <h3 className="font-display text-2xl mb-4 text-mountain-black">SUIVEZ-NOUS</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-mountain-black text-mountain-white flex items-center justify-center hover:bg-mountain-darkGray transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-mountain-black text-mountain-white flex items-center justify-center hover:bg-mountain-darkGray transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-mountain-black text-mountain-white flex items-center justify-center hover:bg-mountain-darkGray transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-mountain-lightGray texture-overlay">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="font-display text-4xl md:text-5xl mb-4 text-mountain-black">
              QUESTIONS FRÉQUENTES
            </h2>
            <div className="w-20 h-1 bg-mountain-black mx-auto mb-6"></div>
            <p className="text-mountain-gray text-lg max-w-2xl mx-auto">
              Vous avez des questions ? Consultez notre FAQ ci-dessous.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-mountain-white p-6 shadow-brutal reveal">
              <h3 className="font-display text-xl mb-3 text-mountain-black">PROPOSEZ-VOUS DES OPTIONS VÉGÉTARIENNES ?</h3>
              <p className="text-mountain-gray">
                Oui, nous proposons plusieurs options végétariennes, notamment notre "Urbain Végé" avec falafels maison et légumes grillés. N'hésitez pas à demander à notre équipe pour plus d'informations.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-mountain-white p-6 shadow-brutal reveal">
              <h3 className="font-display text-xl mb-3 text-mountain-black">COMMENT FONCTIONNE LE CLICK & COLLECT ?</h3>
              <p className="text-mountain-gray">
                Commandez en ligne via notre site, sélectionnez votre heure de retrait et payez en ligne. Présentez-vous à l'heure indiquée et récupérez votre commande sans faire la queue.
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-mountain-white p-6 shadow-brutal reveal">
              <h3 className="font-display text-xl mb-3 text-mountain-black">PROPOSEZ-VOUS LA LIVRAISON ?</h3>
              <p className="text-mountain-gray">
                Oui, nous proposons la livraison via des partenaires comme Uber Eats et Deliveroo. Les commandes peuvent être passées directement sur leurs applications.
              </p>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-mountain-white p-6 shadow-brutal reveal">
              <h3 className="font-display text-xl mb-3 text-mountain-black">QUELS MODES DE PAIEMENT ACCEPTEZ-VOUS ?</h3>
              <p className="text-mountain-gray">
                Nous acceptons les paiements par carte bancaire, espèces et paiements mobiles (Apple Pay, Google Pay). Pour les commandes en ligne, seuls les paiements électroniques sont acceptés.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
