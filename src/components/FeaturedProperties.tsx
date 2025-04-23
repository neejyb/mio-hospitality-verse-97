
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, MapPin } from 'lucide-react';

const properties = [
  {
    id: 1,
    name: 'Luxury Downtown Apartment',
    location: 'City Center',
    price: 250,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070',
    features: [
      '2 Bedrooms', 'Fully Equipped Kitchen', 'City View', 'High-Speed WiFi'
    ]
  },
  {
    id: 2,
    name: 'Modern Beachfront Villa',
    location: 'Coastal Paradise',
    price: 350,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
    features: [
      'Private Pool', 'Ocean View', '3 Bedrooms', 'Beach Access'
    ]
  },
  {
    id: 3,
    name: 'Mountain Retreat Cabin',
    location: 'Mountain Range',
    price: 195,
    image: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?q=80&w=2070',
    features: [
      'Fireplace', 'Mountain Views', 'Hiking Trails', 'Hot Tub'
    ]
  }
];

const FeaturedProperties = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const property = properties[activeIndex];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover our handpicked selection of premium properties, offering exceptional comfort and style for your stay.</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Property Image */}
            <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
              <img 
                src={property.image} 
                alt={property.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            {/* Property Details */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{property.name}</h3>
                <div className="flex items-center mb-4 text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{property.location}</span>
                </div>
                <div className="text-red-600 font-bold text-xl mb-6">
                  ${property.price} <span className="text-gray-600 text-base font-normal">/ night</span>
                </div>
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3">Property Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {property.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <Button variant="outline" className="border-mio-deepred text-mio-deepred hover:bg-mio-deepred hover:text-mio-gold font-bold">
                  View Details
                </Button>
                <Button className="bg-mio-deepred text-mio-gold hover:bg-[#300202] font-bold">
                  Book Now
                </Button>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-8 flex justify-center gap-2">
            {properties.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'bg-mio-deepred w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-mio-deepred text-mio-deepred hover:bg-mio-deepred hover:text-mio-gold font-bold"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
