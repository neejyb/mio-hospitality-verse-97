
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  images: string[];
  features: string[];
}

const properties: Property[] = [
  {
    id: 'luxury-apartment',
    name: 'Luxury Downtown Apartment',
    location: 'City Center',
    price: 250,
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070',
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=2070'
    ],
    features: ['2 Bedrooms', 'City View', 'Fully Equipped Kitchen', 'High-Speed WiFi']
  },
  {
    id: 'beachfront-villa',
    name: 'Beachfront Villa',
    location: 'Seaside Boulevard',
    price: 450,
    images: [
      'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=2070',
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2070'
    ],
    features: ['3 Bedrooms', 'Ocean View', 'Private Pool', 'Direct Beach Access']
  },
  {
    id: 'modern-loft',
    name: 'Modern Urban Loft',
    location: 'Arts District',
    price: 180,
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000',
      'https://images.unsplash.com/photo-1617104678098-de229db51175?q=80&w=2070'
    ],
    features: ['1 Bedroom', 'Industrial Design', 'Rooftop Access', 'Smart Home Features']
  }
];

const AirbnbBooking = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Properties</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore our collection of premium Airbnb properties, each offering unique 
          experiences and exceptional comfort.
        </p>
        
        <Carousel 
          opts={{
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
          onSelect={(api) => {
            if (api) {
              setActiveIndex(api.selectedScrollSnap());
            }
          }}
        >
          <CarouselContent>
            {properties.map((property, index) => (
              <CarouselItem key={property.id}>
                <Card className="overflow-hidden border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      {/* Property image */}
                      <div className="relative h-64 md:h-96 bg-gray-200">
                        <img 
                          src={property.images[0]} 
                          alt={property.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Property details */}
                      <div className="p-6 flex flex-col">
                        <h3 className="text-2xl font-bold mb-2">{property.name}</h3>
                        <p className="text-gray-600 mb-4">
                          <span className="inline-block mr-2">📍</span>
                          {property.location}
                        </p>
                        
                        <div className="mb-6">
                          <p className="text-2xl font-bold text-mio-darkred">
                            ${property.price} <span className="text-sm font-normal text-gray-500">/ night</span>
                          </p>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold mb-2">Features:</h4>
                          <ul className="grid grid-cols-2 gap-2">
                            {property.features.map((feature, i) => (
                              <li key={i} className="flex items-center text-gray-600">
                                <span className="mr-2">✓</span> {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-auto flex gap-3">
                          <Link to={`/services/airbnb/${property.id}`} className="w-full">
                            <Button variant="outline" className="w-full">View Details</Button>
                          </Link>
                          <Link to={`/book?service=airbnb&property=${property.id}`} className="w-full">
                            <Button className="w-full bg-mio-orange hover:bg-mio-red">Book Now</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-2">
            {properties.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-mio-orange w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <CarouselPrevious className="left-2 bg-white/80" />
          <CarouselNext className="right-2 bg-white/80" />
        </Carousel>
        
        <div className="text-center mt-10">
          <Link to="/services/airbnb">
            <Button variant="outline" className="border-mio-orange text-mio-orange hover:bg-mio-orange hover:text-white">
              View All Properties
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AirbnbBooking;
