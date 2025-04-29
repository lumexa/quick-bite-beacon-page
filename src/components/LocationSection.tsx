
import React from 'react';
import { MapPin } from "lucide-react";

const locations = [
  {
    id: 1,
    name: 'Downtown',
    address: '123 Main Street',
    hours: 'Mon-Sun: 10:00 AM - 10:00 PM',
    phone: '(555) 123-4567'
  },
  {
    id: 2,
    name: 'East Side',
    address: '456 Park Avenue',
    hours: 'Mon-Sun: 10:00 AM - 11:00 PM',
    phone: '(555) 987-6543'
  },
  {
    id: 3,
    name: 'West End',
    address: '789 Oak Boulevard',
    hours: 'Mon-Sun: 10:00 AM - 10:00 PM',
    phone: '(555) 246-8101'
  }
];

const LocationSection = () => {
  return (
    <section id="locations" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find a QuickBite location near you. Dine in or order for pickup.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="bg-white p-8 rounded-lg shadow-lg hover-scale">
              <div className="flex items-center mb-4">
                <MapPin size={24} className="text-brand-red mr-2" />
                <h3 className="text-xl font-bold">{location.name}</h3>
              </div>
              <div className="space-y-3 mb-6">
                <p className="text-gray-600">{location.address}</p>
                <p className="text-gray-600">{location.hours}</p>
                <p className="text-gray-600">{location.phone}</p>
              </div>
              <button className="w-full py-2 mt-4 bg-brand-yellow text-brand-darkGray font-bold rounded-md hover:bg-brand-yellow/90 transition-colors">
                Get Directions
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Coming to Your Area Soon</h3>
          <p className="text-lg text-gray-600 mb-6">
            We're expanding! Sign up to be notified when we open new locations.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red"
            />
            <button className="px-6 py-2 bg-brand-red text-white font-bold rounded-md hover:bg-brand-red/90 transition-colors">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
