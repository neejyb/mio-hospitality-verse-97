
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Check, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useNavigate } from 'react-router-dom';
import PropertyModal from './PropertyModal';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useFeaturedProperties, type Property } from '@/hooks/useProperties';

const AirbnbBooking = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const { data: properties = [], isLoading } = useFeaturedProperties();
  
  const autoplay = useRef(Autoplay({
    delay: 5000,
    stopOnInteraction: false
  }));
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

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  }, [emblaApi]);
  
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);
  
  const handleBookNow = (propertyId: string) => {
    navigate('/book', {
      state: {
        service: 'airbnb',
        property: propertyId
      }
    });
  };

  // Convert Property to match the legacy PropertyModal interface
  const convertPropertyForModal = (property: Property) => ({
    id: parseInt(property.id.slice(-8), 16), // Convert UUID to number for legacy compatibility
    name: property.name,
    location: property.location,
    price: Number(property.price_per_night),
    image: property.main_image,
    features: property.features?.map((feature, index) => ({
      id: `f${property.id}-${index}`,
      name: feature
    })) || [],
    images: property.images?.length ? property.images : [property.main_image],
    description: property.description || ''
  });

  if (isLoading) {
    return (
      <section className="mobile-featured-property-section bg-red-950">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-white">
            <div className="animate-pulse">Loading featured properties...</div>
          </div>
        </div>
      </section>
    );
  }

  if (!properties.length) {
    return (
      <section className="mobile-featured-property-section bg-red-950">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
            <p className="text-sm sm:text-base md:text-lg">No featured properties available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mobile-featured-property-section bg-red-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-50">Featured Properties</h2>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-slate-50">
            Discover our handpicked selection of premium properties, 
            offering exceptional comfort and style for your stay.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 bg-white rounded-xl shadow-lg overflow-hidden mobile-featured-property-card">
                      <div className="relative mobile-featured-property-image overflow-hidden">
                        <img 
                          src={property.main_image} 
                          alt={property.name} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                        />
                      </div>
                      
                      <div className="mobile-featured-property-content flex flex-col justify-between">
                        <div>
                          <h3 className="mobile-featured-property-title font-bold text-gray-800 mb-2">{property.name}</h3>
                          <div className="flex items-center mb-3 sm:mb-4 text-gray-600">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            <span className="text-xs sm:text-sm md:text-base">{property.location}</span>
                          </div>
                          
                          <div className="text-[#ea384c] font-bold mobile-featured-property-price mb-4 sm:mb-5 md:mb-6">
                            ${property.price_per_night} <span className="text-gray-600 text-xs sm:text-sm md:text-base font-normal">/ night</span>
                          </div>
                          
                          <div className="mobile-featured-property-features">
                            <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3">Property Features</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-2">
                              {property.features?.slice(0, 4).map((feature, idx) => (
                                <li key={idx} className="flex items-center">
                                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2" />
                                  <span className="text-gray-700 text-xs sm:text-sm md:text-base">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mobile-featured-property-buttons">
                          <Button 
                            variant="outline-gold" 
                            onClick={() => setSelectedProperty(property)} 
                            className="mobile-featured-property-button"
                          >
                            View Details
                          </Button>
                          <Button 
                            onClick={() => handleBookNow(property.id)} 
                            className="text-white bg-[#4a1403] mobile-featured-property-button"
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
          <div className="mt-6 sm:mt-8 flex justify-center gap-2">
            {properties.map((_, index) => (
              <button 
                key={index} 
                onClick={() => scrollTo(index)} 
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-[#F97316] w-4 sm:w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`} 
                aria-label={`Go to property ${index + 1}`} 
              />
            ))}
          </div>
          
          {/* Carousel navigation buttons */}
          <Carousel>
            <CarouselContent>
              <CarouselItem className="p-0 basis-auto">
                <div className="relative w-full">
                  <CarouselPrevious 
                    onClick={() => emblaApi?.scrollPrev()} 
                    className="absolute -left-8 sm:-left-12 top-1/2 -translate-y-1/2 bg-white text-[#F97316] hover:bg-[#F97316] hover:text-white border border-[#F97316]" 
                  />
                  <CarouselNext 
                    onClick={() => emblaApi?.scrollNext()} 
                    className="absolute -right-8 sm:-right-12 top-1/2 -translate-y-1/2 bg-white text-[#F97316] hover:bg-[#F97316] hover:text-white border border-[#F97316]" 
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <Button 
            variant="outline" 
            onClick={() => navigate('/properties')} 
            className="border-[#D4AF37] bg-white text-zinc-950 mobile-featured-property-button"
          >
            View All Properties <ArrowRight size={14} className="sm:w-4 sm:h-4 ml-1" />
          </Button>
        </div>
      </div>

      {selectedProperty && (
        <PropertyModal 
          property={convertPropertyForModal(selectedProperty)} 
          isOpen={!!selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
          onBookNow={(id) => handleBookNow(selectedProperty.id)} 
        />
      )}
    </section>
  );
};

export default AirbnbBooking;
