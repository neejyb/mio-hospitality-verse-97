import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const properties = [
  {
    id: 1,
    title: 'Luxury Beachfront Villa',
    location: 'Miami Beach, FL',
    price: 350,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
    amenities: ['Pool', 'Ocean View', 'Hot Tub', 'Gym']
  },
  {
    id: 2,
    title: 'Modern Downtown Loft',
    location: 'New York, NY',
    price: 275,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070',
    amenities: ['City View', 'Rooftop', 'Gym', 'Doorman']
  },
  {
    id: 3,
    title: 'Mountain Retreat Cabin',
    location: 'Aspen, CO',
    price: 320,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?q=80&w=2070',
    amenities: ['Fireplace', 'Mountain View', 'Hot Tub', 'Hiking Trails']
  },
  {
    id: 4,
    title: 'Seaside Cottage',
    location: 'Malibu, CA',
    price: 290,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070',
    amenities: ['Beach Access', 'Patio', 'BBQ', 'Kayaks']
  }
];

const AirbnbBooking = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Airbnb Properties</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium Airbnb properties, 
            offering exceptional comfort and style for your stay.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "center",
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
                <CarouselItem key={property.id} className="md:basis-1/2 lg:basis-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-1"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={property.image} 
                          alt={property.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-md text-sm font-semibold">
                          ${property.price}/night
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-gray-800">{property.title}</h3>
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="ml-1 text-gray-800 font-medium">{property.rating}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{property.location}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {property.amenities.map((amenity, i) => (
                            <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {amenity}
                            </span>
                          ))}
                        </div>
                        <Button className="w-full bg-mio-orange hover:bg-mio-red text-white">
                          Book Now
                        </Button>
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
                    index === activeIndex ? 'bg-mio-orange w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-mio-orange text-white hover:bg-mio-red border-none" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-mio-orange text-white hover:bg-mio-red border-none" />
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-mio-orange text-mio-orange hover:bg-mio-orange hover:text-white">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AirbnbBooking;
