
import React from 'react';
import { Check } from 'lucide-react';

const CarHire = () => {
  // Services data for Section 2
  const services = [
    {
      id: "service-1",
      title: "Luxury Fleet",
      description: "Premium brands like Mercedes-Benz, BMW, Porsche"
    },
    {
      id: "service-2", 
      title: "Chauffeur Services",
      description: "Discreet drivers for transfers and full-day hire"
    },
    {
      id: "service-3",
      title: "Self-Drive Options", 
      description: "Fully insured vehicles for self-drive"
    },
    {
      id: "service-4",
      title: "Concierge Delivery",
      description: "Delivery to hotel, villa, airport, or home"
    },
    {
      id: "service-5",
      title: "Special Occasions",
      description: "Packages for weddings, photoshoots, events"
    },
    {
      id: "service-6",
      title: "Corporate Solutions", 
      description: "Business & executive travel with account management"
    }
  ];

  // Fleet images for Section 3
  const fleetImages = [
    {
      id: "fleet-1",
      src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070",
      alt: "Mercedes-AMG Sports Car",
      caption: "Sports car convoy"
    },
    {
      id: "fleet-2", 
      src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070",
      alt: "Porsche Interior",
      caption: "Professional chauffeur service available"
    },
    {
      id: "fleet-3",
      src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=2070",
      alt: "BMW Luxury",
      caption: "Car keys handover"
    },
    {
      id: "fleet-4",
      src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070", 
      alt: "Lamborghini",
      caption: "Exotic vehicle collection"
    },
    {
      id: "fleet-5",
      src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070",
      alt: "Mercedes S-Class",
      caption: "Executive sedan fleet"
    },
    {
      id: "fleet-6",
      src: "https://images.unsplash.com/photo-1560177112-fbfd5fde9566?q=80&w=2070",
      alt: "BMW SUV",
      caption: "Premium SUV options"
    },
    {
      id: "fleet-7",
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070",
      alt: "Porsche 911",
      caption: "Performance sports cars"
    },
    {
      id: "fleet-8",
      src: "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?q=80&w=2070",
      alt: "Mercedes Convertible", 
      caption: "Convertible luxury vehicles"
    },
    {
      id: "fleet-9",
      src: "https://images.unsplash.com/photo-1544829099-b9a0c5303bff?q=80&w=2070",
      alt: "BMW Coupe",
      caption: "High-performance coupes"
    },
    {
      id: "fleet-10",
      src: "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=2070",
      alt: "Audi RS",
      caption: "German engineering excellence"
    },
    {
      id: "fleet-11",
      src: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=2070",
      alt: "Ferrari",
      caption: "Italian supercar experience"
    },
    {
      id: "fleet-12",
      src: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=2070",
      alt: "McLaren",
      caption: "Track-ready supercars"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1: Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: `url(https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070)`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Luxury Car Hire
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Experience exceptional driving with our premium and exotic car rental services
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Exceptional Car Hire Services */}
      <section className="py-20" style={{ backgroundColor: '#330000' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Exceptional Car Hire Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the range of premium services offered with our luxury vehicle rentals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-700"
              >
                <div className="flex items-start mb-4">
                  <Check className="h-6 w-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Our Exclusive Fleet */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Exclusive Fleet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of luxury, sports, and exotic vehicles available for your next journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fleetImages.map((image) => (
              <div 
                key={image.id}
                className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-medium">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarHire;
