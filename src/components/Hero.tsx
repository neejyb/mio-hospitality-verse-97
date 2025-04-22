
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const carouselItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070',
    title: 'Luxury Interior Design',
    subtitle: 'Transform your space with our expert design services',
    showLogo: true
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=2070',
    title: 'Premium Airbnb Properties',
    subtitle: 'Experience comfort and style in our curated accommodations',
    showLogo: false
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070',
    title: 'Exclusive Car & Jet Hire',
    subtitle: 'Travel in luxury with our premium transportation options',
    showLogo: false
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel items */}
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`carousel-item absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            {item.showLogo && (
              <div className="mb-6 animate-fade-in">
                <img 
                  src="/lovable-uploads/b4196b07-03dc-40ee-a6b4-34e891c1b9bd.png"
                  alt="Mio's Hospitality & Co" 
                  className="h-32 w-auto object-contain filter brightness-125"
                />
              </div>
            )}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center max-w-4xl animate-fade-in">
              {item.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl animate-fade-in">
              {item.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Link to="/contact">
                <Button className="bg-[#D4AF37] hover:bg-[#B4941F] text-white">Contact Us</Button>
              </Link>
              <Link to="/book">
                <Button className="bg-[#FFD700] hover:bg-[#D4AF37] text-gray-800">Book a Service</Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
