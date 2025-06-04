
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
}, {
  id: 7,
  name: 'Countryside Manor',
  location: 'English Countryside',
  price: 380,
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070',
  features: [{
    id: 'f7-1',
    name: '4 Bedrooms'
  }, {
    id: 'f7-2',
    name: 'Historic Property'
  }, {
    id: 'f7-3',
    name: 'Large Gardens'
  }, {
    id: 'f7-4',
    name: 'Tennis Court'
  }],
  images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070'],
  description: 'Step into history with this magnificent countryside manor featuring four spacious bedrooms, expansive gardens, and a private tennis court.'
}, {
  id: 8,
  name: 'Desert Oasis Resort',
  location: 'Palm Springs',
  price: 290,
  image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080',
  features: [{
    id: 'f8-1',
    name: 'Infinity Pool'
  }, {
    id: 'f8-2',
    name: 'Desert Views'
  }, {
    id: 'f8-3',
    name: 'Spa Services'
  }, {
    id: 'f8-4',
    name: 'Golf Course'
  }],
  images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080'],
  description: 'Luxurious desert retreat with infinity pool, stunning desert views, spa services, and access to championship golf course.'
}, {
  id: 9,
  name: 'Lake House Retreat',
  location: 'Lake Tahoe',
  price: 240,
  image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070',
  features: [{
    id: 'f9-1',
    name: 'Lakefront'
  }, {
    id: 'f9-2',
    name: 'Private Dock'
  }, {
    id: 'f9-3',
    name: 'Mountain Views'
  }, {
    id: 'f9-4',
    name: 'Kayak Rental'
  }],
  images: ['https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070'],
  description: 'Peaceful lakefront retreat with private dock, mountain views, and complimentary kayak rental for the ultimate lake experience.'
}, {
  id: 10,
  name: 'Ski Chalet',
  location: 'Alpine Resort',
  price: 420,
  image: 'https://images.unsplash.com/photo-1551524164-6cf4ac833fb6?q=80&w=2069',
  features: [{
    id: 'f10-1',
    name: 'Ski-in/Ski-out'
  }, {
    id: 'f10-2',
    name: 'Alpine Views'
  }, {
    id: 'f10-3',
    name: 'Heated Floors'
  }, {
    id: 'f10-4',
    name: 'Equipment Storage'
  }],
  images: ['https://images.unsplash.com/photo-1551524164-6cf4ac833fb6?q=80&w=2069'],
  description: 'Premium ski chalet with direct slope access, breathtaking alpine views, heated floors, and dedicated equipment storage.'
}, {
  id: 11,
  name: 'Tropical Paradise Villa',
  location: 'Maui',
  price: 520,
  image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070',
  features: [{
    id: 'f11-1',
    name: 'Ocean Views'
  }, {
    id: 'f11-2',
    name: 'Private Beach'
  }, {
    id: 'f11-3',
    name: 'Infinity Pool'
  }, {
    id: 'f11-4',
    name: 'Tropical Gardens'
  }],
  images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070'],
  description: 'Ultimate tropical paradise with stunning ocean views, private beach access, infinity pool, and lush tropical gardens.'
}, {
  id: 12,
  name: 'City Skyline Condo',
  location: 'Manhattan',
  price: 360,
  image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070',
  features: [{
    id: 'f12-1',
    name: 'Skyline Views'
  }, {
    id: 'f12-2',
    name: 'Modern Design'
  }, {
    id: 'f12-3',
    name: 'Concierge Service'
  }, {
    id: 'f12-4',
    name: 'Fitness Center'
  }],
  images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070'],
  description: 'Sophisticated Manhattan condo with breathtaking skyline views, modern design, concierge service, and fitness center access.'
}, {
  id: 13,
  name: 'Wine Country Estate',
  location: 'Napa Valley',
  price: 480,
  image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
  features: [{
    id: 'f13-1',
    name: 'Vineyard Views'
  }, {
    id: 'f13-2',
    name: 'Wine Cellar'
  }, {
    id: 'f13-3',
    name: 'Gourmet Kitchen'
  }, {
    id: 'f13-4',
    name: 'Tasting Room'
  }],
  images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070'],
  description: 'Elegant wine country estate with vineyard views, private wine cellar, gourmet kitchen, and exclusive tasting room.'
}, {
  id: 14,
  name: 'Boutique Hotel Suite',
  location: 'Paris',
  price: 320,
  image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070',
  features: [{
    id: 'f14-1',
    name: 'Historic Building'
  }, {
    id: 'f14-2',
    name: 'Luxury Amenities'
  }, {
    id: 'f14-3',
    name: 'City Center'
  }, {
    id: 'f14-4',
    name: 'Room Service'
  }],
  images: ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070'],
  description: 'Charming boutique hotel suite in historic Parisian building with luxury amenities, central location, and 24-hour room service.'
}, {
  id: 15,
  name: 'Riverfront Lodge',
  location: 'Colorado River',
  price: 200,
  image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070',
  features: [{
    id: 'f15-1',
    name: 'River Access'
  }, {
    id: 'f15-2',
    name: 'Fishing Spot'
  }, {
    id: 'f15-3',
    name: 'Rustic Charm'
  }, {
    id: 'f15-4',
    name: 'Outdoor Fire Pit'
  }],
  images: ['https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070'],
  description: 'Rustic riverfront lodge with direct river access, prime fishing spots, charming rustic design, and cozy outdoor fire pit.'
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
        <div className="relative h-96 bg-gradient-to-r from-black/60 to-black/40">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
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

        {/* Properties Grid */}
        <div className="container mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
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
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={property.image} 
                      alt={property.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                  </div>
                  
                  <CardHeader className="pb-2 p-3">
                    <h3 className="text-sm font-bold text-gray-800 line-clamp-2">{property.name}</h3>
                    <div className="flex items-center text-gray-600 text-xs">
                      <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                      <span className="truncate">{property.location}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pb-0 flex-grow p-3 pt-0">
                    <div className="text-[#ea384c] font-bold text-sm mb-2">
                      ${property.price} <span className="text-gray-600 text-xs font-normal">/ night</span>
                    </div>
                    
                    <ul className="space-y-1 mb-3">
                      {property.features.slice(0, 3).map(feature => (
                        <li key={feature.id} className="flex items-center text-xs">
                          <Check className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                          <span className="text-gray-700 truncate">{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter className="pt-2 p-3">
                    <div className="flex gap-2 w-full">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 text-xs border-[#D4AF37] text-[#D4AF37] bg-white hover:bg-[#D4AF37]/10" 
                        onClick={() => setSelectedProperty(property)}
                      >
                        View
                      </Button>
                      <Button 
                        variant="default" 
                        size="sm" 
                        onClick={() => handleBookNow(property.id)} 
                        className="flex-1 text-xs bg-[#4f1002]"
                      >
                        Book
                      </Button>
                    </div>
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
