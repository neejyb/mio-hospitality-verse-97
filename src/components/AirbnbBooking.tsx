
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Check, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useNavigate } from 'react-router-dom';
import PropertyModal from './PropertyModal';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

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
  images?: string[];
  description?: string;
}

const properties: Property[] = [{
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
}];

const AirbnbBooking = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    skipSnaps: false
  }, [autoplay.current]);

  const handleMouseEnter = useCallback(() => {
    autoplay.current.stop();
  }, []);

  const handleMouseLeave = useCallback(() => {
    autoplay.current.play();
  }, []);

  // Sync the carousel index with the UI
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Navigate to a specific slide when a dot is clicked
  const scrollTo = useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    // Set up the initial state
    onSelect();
    
    // Subscribe to the select event
    emblaApi.on('select', onSelect);
    
    // Clean up when component unmounts
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const handleBookNow = (propertyId: number) => {
    navigate('/book', {
      state: {
        service: 'airbnb',
        property: propertyId
      }
    });
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties, 
            offering exceptional comfort and style for your stay.
          </p>
        </div>

        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {properties.map((property, index) => (
                <div key={property.id} className="flex-[0_0_100%] min-w-0 pl-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="p-1"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg overflow-hidden">
                      <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
                        <img 
                          src={property.image} 
                          alt={property.name} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                        />
                      </div>
                      
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
                              {property.features.map(feature => (
                                <li key={feature.id} className="flex items-center">
                                  <Check className="w-4 h-4 text-green-500 mr-2" />
                                  <span className="text-gray-700">{feature.name}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row gap-4">
                          <Button 
                            variant="outline-gold" 
                            onClick={() => setSelectedProperty(property)}
                          >
                            View Details
                          </Button>
                          <Button 
                            onClick={() => handleBookNow(property.id)} 
                            className="text-white bg-[#4a1403]"
                          >
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="mt-8 flex justify-center gap-2">
            {properties.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-[#F97316] w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to property ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Properly wrap carousel navigation buttons in Carousel context */}
          <Carousel>
            <CarouselContent>
              <CarouselItem className="p-0 basis-auto">
                <div className="relative w-full">
                  <CarouselPrevious 
                    onClick={() => emblaApi?.scrollPrev()} 
                    className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white text-[#F97316] hover:bg-[#F97316] hover:text-white border border-[#F97316]" 
                  />
                  <CarouselNext 
                    onClick={() => emblaApi?.scrollNext()} 
                    className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white text-[#F97316] hover:bg-[#F97316] hover:text-white border border-[#F97316]" 
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-[#D4AF37] text-[#D4AF37] bg-white" 
            onClick={() => navigate('/properties')}
          >
            View All Properties <ArrowRight size={16} className="ml-1" />
          </Button>
        </div>
      </div>

      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty} 
          isOpen={!!selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
          onBookNow={handleBookNow} 
        />
      )}
    </section>
  );
};

export default AirbnbBooking;
