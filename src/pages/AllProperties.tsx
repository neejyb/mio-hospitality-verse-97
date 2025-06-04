
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyModal from '@/components/PropertyModal';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

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
  }],
  images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070', 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070', 'https://images.unsplash.com/photo-1630699144867-37acec97df5a?q=80&w=2070'],
  description: 'Experience luxury living in the heart of the city with our stylish downtown apartment. Featuring two comfortable bedrooms, a fully equipped kitchen, breathtaking city views, and high-speed WiFi for all your needs. The perfect base for exploring the vibrant city center.'
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
  }],
  images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070', 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070', 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070'],
  description: 'Wake up to stunning ocean views in our modern beachfront villa. This luxurious property features three spacious bedrooms, a private pool for exclusive use, and direct beach access just steps away. Perfect for a memorable beach vacation with family or friends.'
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
  }],
  images: ['https://images.unsplash.com/photo-1518732714860-b62714ce0c59?q=80&w=2070', 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070', 'https://images.unsplash.com/photo-1520984032042-162d526883e0?q=80&w=2070'],
  description: 'Escape to the tranquility of nature in our cozy mountain retreat. Enjoy breathtaking mountain views, warm up by the fireplace after a day on the hiking trails, and relax in your private hot tub under the stars. The perfect getaway for nature lovers seeking peace and serenity.'
}, {
  id: 4,
  name: 'Urban Loft Apartment',
  location: 'Arts District',
  price: 220,
  image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=2070',
  features: [{
    id: 'f4-1',
    name: 'Open Floor Plan'
  }, {
    id: 'f4-2',
    name: 'Industrial Design'
  }, {
    id: 'f4-3',
    name: 'Smart Home System'
  }, {
    id: 'f4-4',
    name: 'Rooftop Access'
  }],
  images: ['https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=2070', 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070', 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2070'],
  description: 'Experience urban living at its finest in this stylish loft apartment located in the heart of the Arts District. This space features an open floor plan with industrial design elements, a cutting-edge smart home system, and exclusive access to the building\'s rooftop area with panoramic city views.'
}, {
  id: 5,
  name: 'Seaside Cottage',
  location: 'Coastal Village',
  price: 175,
  image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070',
  features: [{
    id: 'f5-1',
    name: 'Waterfront'
  }, {
    id: 'f5-2',
    name: 'Private Garden'
  }, {
    id: 'f5-3',
    name: '2 Bedrooms'
  }, {
    id: 'f5-4',
    name: 'Outdoor BBQ'
  }],
  images: ['https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070', 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070', 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2065'],
  description: 'Relax in this charming seaside cottage with direct access to the waterfront. Featuring two cozy bedrooms, a beautiful private garden, and an outdoor BBQ area perfect for entertaining. Enjoy peaceful evenings listening to the waves and watching stunning sunsets over the horizon.'
}, {
  id: 6,
  name: 'Luxury Penthouse',
  location: 'Financial District',
  price: 450,
  image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080',
  features: [{
    id: 'f6-1',
    name: 'Panoramic Views'
  }, {
    id: 'f6-2',
    name: 'Private Elevator'
  }, {
    id: 'f6-3',
    name: '3 Bedrooms'
  }, {
    id: 'f6-4',
    name: 'Home Theater'
  }],
  images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080', 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070', 'https://images.unsplash.com/photo-1560448075-32cc8b68e9c4?q=80&w=2070'],
  description: 'Indulge in the height of luxury in this stunning penthouse with breathtaking panoramic city views. Accessible via private elevator, this exclusive property features three elegant bedrooms, a state-of-the-art home theater, and premium finishes throughout. The epitome of sophisticated urban living.'
}];

const AllProperties = () => {
  const navigate = useNavigate();
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleBookNow = propertyId => {
    navigate(`/book?propertyId=${propertyId}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-96 bg-cover bg-center" style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070")'
        }}>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-4 text-white"
            >
              Available Listings
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl text-white/90"
            >
              Discover your perfect stay from our selection of premium properties
            </motion.p>
          </div>
        </div>

        {/* Property Grid */}
        <div className="container mx-auto px-4 py-12">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {properties.map(property => (
              <motion.div 
                key={property.id}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.3 }} 
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={property.image} 
                      alt={property.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                  </div>
                  
                  <CardHeader className="pb-2 p-4">
                    <h3 className="text-lg font-bold text-gray-800 line-clamp-2">{property.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                      <span className="truncate">{property.location}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pb-0 flex-grow p-4 pt-0">
                    <div className="text-[#ea384c] font-bold text-lg mb-3">
                      ${property.price} <span className="text-gray-600 text-sm font-normal">/ night</span>
                    </div>
                    
                    <div>
                      <ul className="grid grid-cols-1 gap-1 mb-4">
                        {property.features.slice(0, 3).map(feature => (
                          <li key={feature.id} className="flex items-center text-xs">
                            <Check className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                            <span className="text-gray-700 truncate">{feature.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-2 p-4 flex flex-col gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-[#D4AF37] text-[#D4AF37] bg-white hover:bg-[#D4AF37]/10 text-xs" 
                      onClick={() => setSelectedProperty(property)}
                    >
                      View Details
                    </Button>
                    <Button 
                      variant="default" 
                      size="sm" 
                      onClick={() => handleBookNow(property.id)} 
                      className="w-full bg-[#4f1002] text-xs"
                    >
                      Book Now
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />

      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty} 
          isOpen={!!selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
          onBookNow={handleBookNow} 
        />
      )}
    </div>
  );
};

export default AllProperties;
