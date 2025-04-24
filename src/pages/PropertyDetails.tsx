
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // For now using static data - in a real app this would fetch from an API
  const property = properties.find(p => p.id === Number(id));

  if (!property) {
    return <div className="container mx-auto px-4 py-16">Property not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-16 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden relative"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 z-10"
              onClick={() => navigate('/')}
            >
              <X className="h-6 w-6" />
            </Button>
            
            <div className="h-[400px] relative">
              <img 
                src={property.image} 
                alt={property.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{property.name}</h1>
              
              <div className="flex items-center mb-6 text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{property.location}</span>
              </div>
              
              <div className="text-[#ea384c] font-bold text-2xl mb-8">
                ${property.price} <span className="text-gray-600 text-base font-normal">/ night</span>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Property Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.features.map(feature => (
                    <div key={feature.id} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  variant="default"
                  size="custom"
                  onClick={() => navigate('/book', { state: { service: 'airbnb', property: property.id }})}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Using the same property data structure from AirbnbBooking
const properties = [{
  id: 1,
  name: 'Luxury Downtown Apartment',
  location: 'City Center',
  price: 250,
  image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070',
  features: [{
    id: 'f1-1',
    name: '2 Bedrooms'
  }, {
    id: 'f1-2',
    name: 'Fully Equipped Kitchen'
  }, {
    id: 'f1-3',
    name: 'City View'
  }, {
    id: 'f1-4',
    name: 'High-Speed WiFi'
  }]
}, {
  id: 2,
  name: 'Modern Beachfront Villa',
  location: 'Coastal Paradise',
  price: 350,
  image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
  features: [{
    id: 'f2-1',
    name: 'Private Pool'
  }, {
    id: 'f2-2',
    name: 'Ocean View'
  }, {
    id: 'f2-3',
    name: '3 Bedrooms'
  }, {
    id: 'f2-4',
    name: 'Beach Access'
  }]
}, {
  id: 3,
  name: 'Mountain Retreat Cabin',
  location: 'Mountain Range',
  price: 195,
  image: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?q=80&w=2070',
  features: [{
    id: 'f3-1',
    name: 'Fireplace'
  }, {
    id: 'f3-2',
    name: 'Mountain Views'
  }, {
    id: 'f3-3',
    name: 'Hiking Trails'
  }, {
    id: 'f3-4',
    name: 'Hot Tub'
  }]
}];

export default PropertyDetails;
