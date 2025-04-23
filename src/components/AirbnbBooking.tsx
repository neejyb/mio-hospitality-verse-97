
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, MapPin, ArrowRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

interface PropertyFeature {
  id: string;
  name: string;
}

interface Property {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
  features: PropertyFeature[];
}

const properties: Property[] = [
  {
    id: 1,
    name: 'Luxury Downtown Apartment',
    location: 'City Center',
    price: 250,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070',
    features: [
      { id: 'f1-1', name: '2 Bedrooms' },
      { id: 'f1-2', name: 'Fully Equipped Kitchen' },
      { id: 'f1-3', name: 'City View' },
      { id: 'f1-4', name: 'High-Speed WiFi' }
    ]
  },
  {
    id: 2,
    name: 'Modern Beachfront Villa',
    location: 'Coastal Paradise',
    price: 350,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
    features: [
      { id: 'f2-1', name: 'Private Pool' },
      { id: 'f2-2', name: 'Ocean View' },
      { id: 'f2-3', name: '3 Bedrooms' },
      { id: 'f2-4', name: 'Beach Access' }
    ]
  },
  {
    id: 3,
    name: 'Mountain Retreat Cabin',
    location: 'Mountain Range',
    price: 195,
    image: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?q=80&w=2070',
    features: [
      { id: 'f3-1', name: 'Fireplace' },
      { id: 'f3-2', name: 'Mountain Views' },
      { id: 'f3-3', name: 'Hiking Trails' },
      { id: 'f3-4', name: 'Hot Tub' }
    ]
  }
];

const AirbnbBooking = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties, 
            offering exceptional comfort and style for your stay.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onSelect={(api) => {
              if (api?.selectedScrollSnap) {
                setActiveIndex(api.selectedScrollSnap());
              }
            }}
          >
            <CarouselContent>
              {properties.map((property, index) => (
                <CarouselItem key={property.id} className="basis-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="p-1"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg overflow-hidden">
                      {/* Property Image */}
                      <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
                        <img 
                          src={property.image} 
                          alt={property.name} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      
                      {/* Property Details */}
                      <div className="p-6 md:p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">{property.name}</h3>
                          <div className="flex items-center mb-4 text-gray-600">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{property.location}</span>
                          </div>
                          
                          <div className="text-[#ea384c] font-bold text-xl mb-6">
                            ${property.price} <span className="text-gray-600 text-base font-normal">/ night</span>
                          </div>
                          
                          <div className="mb-8">
                            <h4 className="text-lg font-semibold mb-3">Property Features</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {property.features.map((feature) => (
                                <li key={feature.id} className="flex items-center">
                                  <Check className="w-4 h-4 text-green-500 mr-2" />
                                  <span className="text-gray-700">{feature.name}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row gap-4">
                          <Button variant="outline" className="border-mio-orange text-mio-orange hover:bg-mio-orange hover:text-white">
                            View Details
                          </Button>
                          <Button className="bg-[#F97316] hover:bg-orange-700 text-white">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="mt-8 flex justify-center gap-2">
              {properties.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-[#F97316] w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white text-[#F97316] hover:bg-[#F97316] hover:text-white border border-[#F97316]" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white text-[#F97316] hover:bg-[#F97316] hover:text-white border border-[#F97316]" />
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white">
            View All Properties <ArrowRight size={16} className="ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AirbnbBooking;
