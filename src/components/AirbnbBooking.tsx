
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Luxury Downtown Apartment',
    location: 'City Center',
    price: 250,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
    features: ['2 Bedrooms', 'Fully Equipped Kitchen', 'City View', 'High-Speed WiFi']
  },
  {
    id: 2,
    title: 'Beachfront Villa',
    location: 'Coastal Area',
    price: 450,
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2070',
    features: ['4 Bedrooms', 'Private Pool', 'Ocean View', 'Gourmet Kitchen']
  },
  {
    id: 3,
    title: 'Mountain Retreat',
    location: 'Mountain Range',
    price: 320,
    image: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?q=80&w=2070',
    features: ['3 Bedrooms', 'Fireplace', 'Mountain View', 'Hot Tub']
  }
];

const AirbnbBooking = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProperty = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  const prevProperty = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Featured Properties</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Explore our collection of premium Airbnb properties, each offering unique
          experiences and exceptional comfort.
        </p>

        <div className="max-w-6xl mx-auto relative">
          <div className="relative overflow-hidden rounded-xl">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={false}
                animate={{
                  x: `${(index - currentIndex) * 100}%`,
                  opacity: index === currentIndex ? 1 : 0.5
                }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full"
                style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[400px] rounded-xl overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold">{property.title}</h2>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">📍</span>
                      {property.location}
                    </div>
                    <div className="text-3xl font-bold text-[#D4AF37]">
                      ${property.price}
                      <span className="text-lg text-gray-600 font-normal"> / night</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Features:</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {property.features.map((feature, i) => (
                          <div key={i} className="flex items-center">
                            <span className="mr-2">✓</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" className="flex-1 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white">
                        View Details
                      </Button>
                      <Button className="flex-1 bg-[#D4AF37] hover:bg-[#B4941F] text-white">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={prevProperty}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Previous property"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextProperty}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Next property"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {properties.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#D4AF37] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to property ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AirbnbBooking;
