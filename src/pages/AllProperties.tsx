
import { Button } from '@/components/ui/button';
import { MapPin, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AllProperties = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Available Properties</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{property.name}</h3>
                    <div className="flex items-center mb-4 text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{property.location}</span>
                    </div>
                    
                    <div className="text-[#ea384c] font-bold text-lg mb-4">
                      ${property.price} <span className="text-gray-600 text-sm font-normal">/ night</span>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {property.features.map(feature => (
                          <li key={feature.id} className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-1" />
                            <span className="text-sm">{feature.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="custom"
                        className="flex-1 border-[#D4AF37] text-[#D4AF37] bg-white"
                        onClick={() => navigate(`/property/${property.id}`)}
                      >
                        View Details
                      </Button>
                      <Button
                        variant="default"
                        size="custom"
                        className="flex-1"
                        onClick={() => navigate('/book', { state: { service: 'airbnb', property: property.id }})}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
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

export default AllProperties;
