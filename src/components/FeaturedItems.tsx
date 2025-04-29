
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const menuItems = [
  {
    id: 1,
    name: 'Classic Burger',
    price: '$8.99',
    description: 'Juicy beef patty with fresh lettuce, tomato, and our special sauce.',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Crispy Chicken',
    price: '$7.99',
    description: 'Tender chicken fillet with crispy coating, served with our signature dip.',
    imageUrl: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Loaded Fries',
    price: '$4.99',
    description: 'Crispy fries topped with cheese sauce, bacon bits, and green onions.',
    imageUrl: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Chocolate Shake',
    price: '$3.99',
    description: 'Rich and creamy chocolate shake topped with whipped cream.',
    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const FeaturedItems = () => {
  return (
    <section id="menu" className="py-16 bg-brand-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Menu Items</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our most popular dishes, made with the freshest ingredients and delivered hot to your door.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover-scale">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <span className="font-bold text-brand-red">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <button className="mt-4 w-full py-2 bg-brand-red text-white font-bold rounded-md hover:bg-brand-red/90 transition-colors">
                  Add to Order
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-brand-yellow text-brand-darkGray font-bold rounded-md hover:bg-brand-yellow/90 transition-colors">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
